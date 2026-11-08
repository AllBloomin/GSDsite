import {
  BerryCurlsBot,
  LavenderSproutBot,
  TealSpikesBot,
  TealSwoopBot,
  YellowAfroBot,
} from "@/components/bots";

export function SideBots() {
  return (
    <div className="mt-8 flex items-end justify-start gap-6" aria-hidden="true">
      <TealSpikesBot className="w-8 sm:w-10" />
      <YellowAfroBot className="w-8 sm:w-10" />
      <LavenderSproutBot className="w-8 sm:w-10" />
      <TealSwoopBot className="w-8 sm:w-10" />
      <BerryCurlsBot className="w-8 sm:w-10" />
    </div>
  );
}
