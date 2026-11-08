import { SideBots } from "@/components/margin-bots";
import { NotifyForm } from "@/components/notify-form";

export default function Home() {
  return (
    <>
      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pb-16 pt-16 text-center sm:pt-24 md:pt-28 lg:pb-24">
        <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Folks with goals are different.
        </h1>
        <p className="mt-8 max-w-2xl text-balance text-xl font-medium sm:text-2xl">
          They have an unwavering drive to Get Shit Done (GSD).
        </p>
        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          We have bots for you that help you do just that. And that are fun to
          work with.
        </p>
        <p className="mt-6 max-w-xl text-pretty text-xl font-medium">
          Your own, designed to get stuff done.
        </p>
        <p className="mt-12 text-base text-muted sm:text-lg">
          I&apos;m building in public, check{" "}
          <a
            className="font-semibold text-link underline decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
            href="https://x.com/bare_knee"
          >
            @bare_knee
          </a>
        </p>
        <p className="mt-3 text-base font-semibold sm:text-lg">
          There will be early releases very soon.
        </p>
        <NotifyForm />
        <SideBots />
      </main>
    </>
  );
}
