"use server";

import { domainCanReceiveMail } from "@/lib/email-domain";
import { INVALID_EMAIL_MESSAGE, normalizeEmail } from "@/lib/email";
import { notifyOwnerOfSignup } from "@/lib/signup-webhook";

export type SignupState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const SAVE_FAILED = "Something went wrong. Please try again.";
const RATE_LIMITED = "Please wait a moment and try again.";
const BEWING_SIGNUPS_URL = "https://gsdbots.bewing.us/api/v1/signups";

export async function joinSignup(
  _previous: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success" };
  }

  const email = normalizeEmail(formData.get("email"));
  if (!email) {
    return { status: "error", message: INVALID_EMAIL_MESSAGE };
  }

  const domain = email.slice(email.lastIndexOf("@") + 1);
  try {
    const deliverable = await domainCanReceiveMail(domain);
    if (!deliverable) {
      return { status: "error", message: INVALID_EMAIL_MESSAGE };
    }
  } catch {
    // A failed lookup is inconclusive, so the address is still accepted.
  }

  const apiKey = process.env.BEWING_SIGNUP_KEY;
  if (!apiKey) {
    return { status: "error", message: SAVE_FAILED };
  }

  try {
    const response = await fetch(BEWING_SIGNUPS_URL, {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        consent_copy_version: "V1",
        source: "gsdbots.com",
      }),
    });
    if (response.status === 429) {
      return { status: "error", message: RATE_LIMITED };
    }
    if (!response.ok) {
      return { status: "error", message: SAVE_FAILED };
    }
  } catch {
    return { status: "error", message: SAVE_FAILED };
  }

  notifyOwnerOfSignup(email);
  return { status: "success" };
}
