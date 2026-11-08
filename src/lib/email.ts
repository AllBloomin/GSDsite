const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;

export const INVALID_EMAIL_MESSAGE = "That email doesn't look right";

export function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }
  const email = value.trim().toLowerCase();
  if (!isSyntacticallyValidEmail(email)) {
    return null;
  }
  return email;
}

export function isSyntacticallyValidEmail(email: string): boolean {
  return (
    email.length > 0 &&
    email.length <= MAX_EMAIL_LENGTH &&
    !/\s/.test(email) &&
    EMAIL_PATTERN.test(email)
  );
}
