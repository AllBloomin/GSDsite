"use server";

import { headers } from "next/headers";
import { domainCanReceiveMail } from "@/lib/email-domain";
import { INVALID_EMAIL_MESSAGE, normalizeEmail } from "@/lib/email";
import { clipCountry, clipUserAgent, insertSignup } from "@/lib/signups";

export type SignupState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const SAVE_FAILED = "Something went wrong. Please try again.";

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

  try {
    const headerList = await headers();
    await insertSignup({
      email,
      source: "homepage",
      userAgent: clipUserAgent(headerList.get("user-agent")),
      ipCountry: clipCountry(headerList.get("x-vercel-ip-country")),
    });
  } catch {
    return { status: "error", message: SAVE_FAILED };
  }

  return { status: "success" };
}
