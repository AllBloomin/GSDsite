import { after } from "next/server";

const WEBHOOK_TIMEOUT_MS = 8_000;
const SOURCE = "gsdbots.com";

/**
 * Tell the site owner about a signup that BeWing already accepted.
 * Missing configuration skips the call. Failures are swallowed so the
 * visitor still sees success.
 */
export function notifyOwnerOfSignup(email: string): void {
  try {
    const url = process.env.GSD_SIGNUP_WEBHOOK_URL?.trim() ?? "";
    const key = process.env.GSD_SIGNUP_WEBHOOK_KEY?.trim() ?? "";
    if (!url || !key) {
      return;
    }

    const signedUpAt = new Date().toISOString();
    const send = () => postSignupWebhook(url, key, email, signedUpAt);
    try {
      after(send);
    } catch {
      void send().catch(() => undefined);
    }
  } catch {
    // The signup already succeeded. Never surface an alert failure.
  }
}

async function postSignupWebhook(
  url: string,
  key: string,
  email: string,
  signedUpAt: string,
): Promise<void> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
        "X-Automation-Key": key,
      },
      body: JSON.stringify({
        email,
        source: SOURCE,
        signed_up_at: signedUpAt,
      }),
      cache: "no-store",
      redirect: "manual",
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });
    await response.body?.cancel();
  } catch {
    // One try. Do not log the URL, key, or Authorization header.
  }
}
