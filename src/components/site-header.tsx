import { SignatureMark } from "@/components/bots";
import { ThemeSwitch } from "@/components/theme-switch";
import type { Theme } from "@/lib/theme";

export function SiteHeader({ theme }: { theme: Theme }) {
  return (
    <header className="relative z-20 flex flex-wrap items-center justify-between gap-x-3 gap-y-3 px-4 py-4 sm:px-8 sm:py-6">
      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <SignatureMark className="size-12 shrink-0 sm:size-[7.5rem]" />
        <p className="whitespace-nowrap text-[clamp(1.5rem,5vw,3.15rem)] font-extrabold leading-none tracking-tight">
          GSDbots
        </p>
      </div>
      <ThemeSwitch initialTheme={theme} />
    </header>
  );
}
