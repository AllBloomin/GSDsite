import { SideBots } from "@/components/margin-bots";
import { NotifyForm } from "@/components/notify-form";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-1 flex-col">
      <div className="mx-auto flex min-h-[calc(100dvh-5rem)] w-full max-w-[1120px] flex-col px-6 pb-16 pt-10 sm:min-h-[calc(100dvh-6rem)] sm:px-8 sm:pb-20 sm:pt-16">
        <div className="w-full max-w-2xl">
          <h1 className="text-[clamp(1.875rem,4.5vw,3.5rem)] font-semibold leading-[1.15] tracking-tight">
            Be the first to know.
          </h1>
          <NotifyForm />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1120px] px-6 pb-16 sm:px-8 sm:pb-20">
        <p className="max-w-[16ch] text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.2] tracking-tight sm:max-w-none">
          Folks with goals are different.
        </p>
        <p className="mt-6 max-w-[36rem] text-[1.375rem] font-normal leading-[1.5]">
          They have an unwavering drive to Get Shit Done (GSD).
        </p>
        <p className="mt-[1.5em] max-w-[36rem] text-[1.375rem] font-normal leading-[1.5]">
          We build bots that help you do exactly that, and that are fun to
          work with. They&apos;re yours, and they&apos;re shaped around how
          you work.
        </p>
        <p className="mt-8 text-[0.9375rem] font-normal leading-normal text-muted sm:whitespace-nowrap">
          I&apos;m building in public, check{" "}
          <a
            className="text-link underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
            href="https://x.com/bare_knee"
            target="_blank"
            rel="noopener noreferrer"
          >
            @bare_knee
          </a>
          {". "}
          There will be early releases very soon.
        </p>
        <SideBots />
      </div>
    </main>
  );
}
