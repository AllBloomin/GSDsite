import {
  BerryCurlsBot,
  LavenderSproutBot,
  TealSpikesBot,
  TealSwoopBot,
  YellowAfroBot,
} from "@/components/bots";

export function SideBots() {
  return (
    <div
      className="mt-6 flex w-full items-end justify-evenly sm:mt-8"
      aria-hidden="true"
    >
      <TealSpikesBot className="w-[1.85rem] -rotate-[11deg] sm:w-16 lg:w-[4.75rem]" />
      <YellowAfroBot className="w-[1.7rem] rotate-[7deg] sm:w-14 lg:w-16" />
      <LavenderSproutBot className="w-[1.75rem] -rotate-[16deg] sm:w-14 lg:w-[4.25rem]" />
      <TealSwoopBot className="w-[2rem] rotate-[12deg] sm:w-[4.25rem] lg:w-20" />
      <BerryCurlsBot className="w-[2.15rem] -rotate-[5deg] sm:w-[4.5rem] lg:w-[5.25rem]" />
    </div>
  );
}
