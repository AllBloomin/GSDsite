import {
  BerryCurlsBot,
  LavenderSproutBot,
  OrangeSpikesBot,
  TealSwoopBot,
  YellowAfroBot,
} from "@/components/bots";

export function MarginBots() {
  return (
    <div
      className="bot-scatter pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      aria-hidden="true"
    >
      <OrangeSpikesBot className="bot-left-edge -rotate-[11deg]" />
      <YellowAfroBot className="bot-left-in rotate-[7deg]" />
      <LavenderSproutBot className="bot-left-low -rotate-[16deg]" />
      <TealSwoopBot className="bot-right-in rotate-[12deg]" />
      <BerryCurlsBot className="bot-right-edge -rotate-[5deg]" />
    </div>
  );
}

export function CompactBots() {
  return (
    <div
      className="mt-16 flex items-end justify-center gap-3 sm:gap-5 lg:hidden"
      aria-hidden="true"
    >
      <OrangeSpikesBot className="w-[1.85rem] -rotate-[11deg] sm:w-[4.4rem]" />
      <TealSwoopBot className="w-[2.2rem] rotate-[12deg] sm:w-[5.1rem]" />
      <BerryCurlsBot className="w-[2.4rem] -rotate-[5deg] sm:w-[5.6rem]" />
      <YellowAfroBot className="hidden w-[4.8rem] rotate-[7deg] sm:block" />
      <LavenderSproutBot className="hidden w-[1.7rem] -rotate-[16deg] min-[420px]:block sm:w-[4.15rem]" />
    </div>
  );
}
