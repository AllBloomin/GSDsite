"use client";

import { track } from "@vercel/analytics";
import { useActionState, useState, type FormEvent } from "react";
import { joinSignup, type SignupState } from "@/app/actions";
import { SignatureMark } from "@/components/bots";
import { INVALID_EMAIL_MESSAGE, isSyntacticallyValidEmail } from "@/lib/email";

const initialState: SignupState = { status: "idle" };

function submitSignup(previous: SignupState, formData: FormData) {
  return joinSignup(previous, formData).then((next) => {
    if (next.status === "success") {
      track("signup");
    }
    return next;
  });
}

export function NotifyForm() {
  const [state, formAction, pending] = useActionState(submitSignup, initialState);
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
      <p className="mt-6 text-[1.375rem] font-normal leading-normal sm:mt-8" role="status">
        Thanks! We&apos;ll send you a confirmation email soon.
      </p>
    );
  }

  return (
    <form
      className="relative mt-6 flex w-full max-w-2xl flex-col sm:mt-8"
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
      <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:gap-3">
        <label className="sr-only" htmlFor="notify-email">
          Email address
        </label>
        <input
          id="notify-email"
          className="h-14 min-h-14 w-full rounded-full border border-line bg-background px-5 text-[1.25rem] font-normal text-foreground outline-none placeholder:text-[var(--placeholder)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link sm:h-16 sm:min-w-0 sm:flex-1 sm:px-6"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@company.com"
          spellCheck={false}
          aria-invalid={message !== null}
          required
        />
        <button
          className="relative inline-flex h-14 min-h-14 w-full shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-button px-6 text-[1.25rem] font-semibold leading-none text-button-fg transition-colors hover:bg-button-hover active:bg-button-press focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link disabled:opacity-60 sm:h-16 sm:w-auto sm:px-8"
          type="submit"
          disabled={pending}
        >
          <SignatureMark className="egg-wobble pointer-events-none absolute -top-6 left-3 h-11 w-auto sm:-top-7 sm:left-5 sm:h-12" />
          Be the First to Know
        </button>
      </div>
      {message ? (
        <p className="mt-3 text-[0.9375rem] font-normal leading-normal" role="alert">
          {message}
        </p>
      ) : null}
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-pretty text-[0.9375rem] font-normal leading-snug text-foreground sm:text-base">
          The first 100 signups lock in founding-member pricing for life.
        </p>
        <p className="text-pretty text-[0.9375rem] font-normal leading-snug text-muted">
          Built while I run my companies with a team of 29 AI bots.
        </p>
      </div>
    </form>
  );
}
