"use client";

import { useActionState, useState, type FormEvent } from "react";
import { joinSignup, type SignupState } from "@/app/actions";
import { INVALID_EMAIL_MESSAGE, isSyntacticallyValidEmail } from "@/lib/email";

const initialState: SignupState = { status: "idle" };

export function NotifyForm() {
  const [state, formAction, pending] = useActionState(joinSignup, initialState);
  const [clientMessage, setClientMessage] = useState<string | null>(null);
  const message =
    clientMessage ?? (state.status === "error" ? state.message : null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const email = String(new FormData(event.currentTarget).get("email") ?? "");
    if (!isSyntacticallyValidEmail(email.trim().toLowerCase())) {
      event.preventDefault();
      setClientMessage(INVALID_EMAIL_MESSAGE);
      return;
    }
    setClientMessage(null);
  }

  if (state.status === "success") {
    return (
      <p className="mt-6 text-lg font-medium sm:mt-8" role="status">
        Thanks! We&apos;ll send you a confirmation email soon.
      </p>
    );
  }

  return (
    <form
      className="relative mt-6 flex w-full max-w-xl flex-col gap-2 sm:mt-8"
      action={formAction}
      noValidate
      onSubmit={onSubmit}
    >
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="flex w-full flex-col gap-1.5 rounded-full border border-line p-1.5 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-link sm:flex-row sm:items-center sm:gap-1">
        <label className="sr-only" htmlFor="notify-email">
          Email address
        </label>
        <input
          id="notify-email"
          className="h-12 min-h-12 w-full rounded-full bg-transparent px-5 text-base text-foreground outline-none placeholder:text-[var(--placeholder)] sm:h-12 sm:min-w-0 sm:flex-1 sm:px-5"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="yourworkemail@example.com"
          spellCheck={false}
          aria-invalid={message !== null}
          required
        />
        <button
          className="h-11 shrink-0 rounded-full bg-button px-6 text-base font-bold text-button-fg transition-colors hover:bg-button-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link disabled:opacity-60 sm:h-12 sm:px-7"
          type="submit"
          disabled={pending}
        >
          Be the First to Know
        </button>
      </div>
      {message ? (
        <p className="text-sm font-medium" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
