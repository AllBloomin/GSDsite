"use client";

export function NotifyForm() {
  return (
    <form
      className="mt-12 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-stretch"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label className="sr-only" htmlFor="notify-email">
        Email address
      </label>
      <input
        id="notify-email"
        className="h-14 min-h-14 w-full rounded-full border border-line bg-transparent px-7 text-base text-foreground outline-none placeholder:text-[var(--placeholder)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link sm:h-16 sm:min-h-16 sm:min-w-0 sm:flex-1 sm:px-5"
        type="email"
        name="email"
        inputMode="email"
        autoComplete="email"
        placeholder="yourworkemail@example.com"
        spellCheck={false}
      />
      <button
        className="h-14 shrink-0 rounded-full bg-button px-7 text-base font-bold text-button-fg transition-colors hover:bg-button-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link sm:h-16 sm:px-8 sm:text-lg"
        type="submit"
      >
        Be the First to Know
      </button>
    </form>
  );
}
