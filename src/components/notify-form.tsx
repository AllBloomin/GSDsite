"use client";

import { track } from "@vercel/analytics";
import { useActionState, useEffect, useRef, useState, type FormEvent } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const message =
    clientMessage ?? (state.status === "error" ? state.message : null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 40rem)").matches;
    if (!desktop) return;
    inputRef.current?.focus({ preventScroll: true });
  }, []);

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
      <label
        className="mb-2 text-[0.9375rem] font-semibold leading-none text-foreground"
        htmlFor="notify-email"
      >
        Your email
      </label>
      <div className="flex w-full flex-col gap-6 rounded-[1.75rem] border-2 border-[#f2762e]/55 bg-white p-1.5 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#f2762e] sm:flex-row sm:items-center sm:gap-1.5 sm:rounded-full">
        <input
          ref={inputRef}
          id="notify-email"
          className="h-12 min-h-12 w-full rounded-full bg-white px-4 text-[1.0625rem] font-normal text-[#1c1917] caret-[#f2762e] outline-none placeholder:font-normal placeholder:text-[#b0a89f] sm:h-14 sm:min-w-0 sm:flex-1 sm:px-5 sm:text-[1.125rem]"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email"
          spellCheck={false}
          aria-invalid={message !== null}
          required
        />
        <button
          className="relative inline-flex h-12 min-h-12 w-full shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-button px-5 text-[1.0625rem] font-semibold leading-none text-button-fg transition-colors hover:bg-button-hover active:bg-button-press focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link disabled:opacity-60 sm:h-14 sm:w-auto sm:pr-7 sm:pl-12 sm:text-[1.125rem]"
          type="submit"
          disabled={pending}
        >
          <SignatureMark className="egg-wobble pointer-events-none absolute -top-5 left-3 h-10 w-auto sm:-top-6 sm:left-3 sm:h-11" />
          Be the First to Know
        </button>
      </div>
      {message ? (
        <p className="mt-3 text-[0.9375rem] font-normal leading-normal" role="alert">
          {message}
        </p>
      ) : null}
      <p className="mt-2 text-[0.8125rem] font-normal leading-snug text-muted">
        No spam. Unsubscribe anytime.
      </p>
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
