import {
  BerryCurlsBot,
  LavenderSproutBot,
  TealSpikesBot,
  TealSwoopBot,
  YellowAfroBot,
} from "@/components/bots";

const avatar = "h-12 w-auto sm:h-16";

export function SideBots() {
  return (
    <div className="mt-8 flex items-end justify-start gap-6 sm:gap-8" aria-hidden="true">
      <TealSpikesBot className={avatar} />
      <YellowAfroBot className={avatar} />
      <LavenderSproutBot className={avatar} />
      <TealSwoopBot className={avatar} />
      <BerryCurlsBot className={avatar} />
    </div>
  );
}
