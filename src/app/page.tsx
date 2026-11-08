import { SideBots } from "@/components/margin-bots";
import { NotifyForm } from "@/components/notify-form";

export default function Home() {
  return (
    <main className="relative z-10">
      <div className="mx-auto w-full max-w-[1120px] px-6 pb-10 pt-8 sm:px-8 sm:pt-10">
        <h1 className="max-w-[60ch] text-[2.5rem] font-semibold leading-[1.15] tracking-tight">
          Folks with goals are different.
        </h1>
        <p className="mt-6 max-w-[60ch] text-xl font-normal leading-normal">
          They have an unwavering drive to Get Shit Done (GSD). We have bots
          for you that help you do just that. And that are fun to work with.
          Your own, designed to get stuff done.
        </p>
        <NotifyForm />
        <p className="mt-4 max-w-[60ch] text-sm font-normal leading-normal text-muted">
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
