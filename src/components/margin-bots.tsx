import {
  BerryCurlsBot,
  LavenderSproutBot,
  OrangeSpikesBot,
  TealMohawkBot,
  TealSwoopBot,
  YellowAfroBot,
  YellowSpikesBot,
} from "@/components/bots";

export function MarginBots() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      aria-hidden="true"
    >
      <OrangeSpikesBot className="absolute left-[2%] top-[18%] w-28 rotate-[14deg] xl:w-40" />
      <TealSwoopBot className="absolute right-[2%] top-[16%] w-24 rotate-3 xl:w-36" />
      <YellowAfroBot className="absolute left-[3%] top-[44%] w-24 rotate-2 xl:w-36" />
      <BerryCurlsBot className="absolute right-[3%] top-[42%] w-28 -rotate-[7deg] xl:w-40" />
      <LavenderSproutBot className="absolute bottom-[5%] left-[5%] w-20 -rotate-12 xl:w-32" />
      <TealMohawkBot className="absolute right-[4%] bottom-[7%] w-24 rotate-6 xl:w-36" />
      <YellowSpikesBot className="absolute top-[64%] left-[4%] hidden w-20 rotate-[8deg] xl:block xl:w-28" />
    </div>
  );
}

export function CompactBots() {
  return (
    <div
      className="mt-16 flex items-end justify-center gap-3 sm:gap-5 lg:hidden"
      aria-hidden="true"
    >
      <OrangeSpikesBot className="w-14 rotate-[14deg]" />
      <TealSwoopBot className="w-16 rotate-3" />
      <BerryCurlsBot className="w-14 -rotate-3" />
      <YellowAfroBot className="hidden w-16 rotate-6 sm:block" />
      <LavenderSproutBot className="hidden w-14 -rotate-6 min-[420px]:block" />
    </div>
  );
}
