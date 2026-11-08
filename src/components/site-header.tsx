import { SignatureMark } from "@/components/bots";
import { ThemeSwitch } from "@/components/theme-switch";
import type { Theme } from "@/lib/theme";

export function SiteHeader({ theme }: { theme: Theme }) {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <SignatureMark className="size-12 shrink-0 sm:size-[7.5rem]" />
          <p className="text-xl font-semibold leading-none tracking-tight sm:text-[2.5rem]">
            GSDbots
          </p>
        </div>
        <ThemeSwitch initialTheme={theme} />
      </div>
    </header>
  );
}
