import type { SVGProps } from "react";

type BotProps = SVGProps<SVGSVGElement>;

/** Teal head, black mohawk. Teaser r1c4. */
export function TealMohawkBot(props: BotProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-80 -90 960 1050"
      aria-hidden="true"
      {...props}
    >
      <g transform="rotate(-4 394 550)">
        <g transform="translate(394 0) scale(0.97530 1) translate(-394 0)">
          <path d="M 420.50 857.71 C 381.72 860.81 343.05 860.01 306.81 848.78 C 272.03 837.99 239.50 817.59 215.87 789.73 C 192.27 761.92 177.55 726.68 170.17 690.48 C 162.58 653.21 162.77 614.93 166.11 577.39 C 172.62 504.27 191.08 433.97 219.82 366.13 C 234.21 332.17 251.18 298.82 275.63 270.67 C 300.11 242.48 332.10 219.49 367.28 212.72 C 402.87 205.88 441.73 215.62 472.62 236.57 C 503.82 257.72 526.88 290.31 545.55 323.68 C 581.66 388.22 601.34 455.72 614.15 527.95 C 627.38 602.53 633.28 682.16 600.32 748.96 C 583.92 782.22 557.88 812.30 525.78 830.52 C 494.50 848.27 457.45 854.76 420.50 857.71 Z" fill="#306E73" />
          <ellipse cx="314.6512" cy="587.12" rx="24.5455" ry="56.2900" transform="rotate(-.58 314.6512 587.12)" fill="#24231F" />
          <ellipse cx="444.1167" cy="587.08" rx="21.0864" ry="55.0058" transform="rotate(-.58 444.1167 587.08)" fill="#24231F" />
          <g transform="translate(-3.800 0)">
            <g transform="translate(394.4 532.5) scale(3.77)">
              <g transform="translate(0.000 0.000) scale(1.0000 1.0000)" fill="var(--hair-black)">
                <path d="M -13 -65 C -15 -82 -15 -110 -10 -133 C -7 -145 7 -145 10 -133 C 15 -110 15 -82 13 -65 C 5 -69 -5 -69 -13 -65 Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
