import { SideBots } from "@/components/margin-bots";
import { NotifyForm } from "@/components/notify-form";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-1 flex-col justify-center pb-8 sm:pb-14">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-8 sm:px-8">
        <h1 className="max-w-[16ch] text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.15] tracking-tight sm:max-w-none">
          Folks with goals are different.
        </h1>
        <p className="mt-6 max-w-[36rem] text-[1.375rem] font-normal leading-[1.5]">
          They have an unwavering drive to Get Shit Done (GSD).
        </p>
        <p className="mt-[1.5em] max-w-[36rem] text-[1.375rem] font-normal leading-[1.5]">
          We build bots that help you do exactly that, and that are fun to
          work with. They&apos;re yours, and they&apos;re shaped around how
          you work.
        </p>
        <NotifyForm />
        <p className="mt-4 text-[0.9375rem] font-normal leading-normal text-muted sm:whitespace-nowrap">
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
