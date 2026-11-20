import { SideBots } from "@/components/margin-bots";
import { NotifyForm } from "@/components/notify-form";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-1 flex-col pb-8 sm:pb-10">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-6 sm:px-8 sm:py-8">
        <h1 className="max-w-[16ch] text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.15] tracking-tight sm:max-w-none">
          Folks with goals are different.
        </h1>
        <p className="mt-5 max-w-[36rem] text-[1.375rem] font-normal leading-[1.45] sm:mt-6">
          GSDbots is a Grok Bot alternative where bots{" "}
          <strong className="font-semibold">collaborate proactively</strong>.
          They share what they learn and hand work to each other, so nothing
          waits on you to connect the dots, all for you to Get Shit Done
          (GSD).
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
          Early releases are coming very soon.
        </p>
        <SideBots />
      </div>
    </main>
  );
}
