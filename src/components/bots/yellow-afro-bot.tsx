import type { SVGProps } from "react";

type BotProps = SVGProps<SVGSVGElement>;

/** Yellow head, brown afro. Teaser r0c2. */
export function YellowAfroBot(props: BotProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-80 -90 960 1050"
      aria-hidden="true"
      {...props}
    >
      <g transform="rotate(0 394 550)">
        <g transform="translate(394 0) scale(1.00000 1) translate(-394 0)">
          <path d="M 420.50 857.71 C 381.72 860.81 343.05 860.01 306.81 848.78 C 272.03 837.99 239.50 817.59 215.87 789.73 C 192.27 761.92 177.55 726.68 170.17 690.48 C 162.58 653.21 162.77 614.93 166.11 577.39 C 172.62 504.27 191.08 433.97 219.82 366.13 C 234.21 332.17 251.18 298.82 275.63 270.67 C 300.11 242.48 332.10 219.49 367.28 212.72 C 402.87 205.88 441.73 215.62 472.62 236.57 C 503.82 257.72 526.88 290.31 545.55 323.68 C 581.66 388.22 601.34 455.72 614.15 527.95 C 627.38 602.53 633.28 682.16 600.32 748.96 C 583.92 782.22 557.88 812.30 525.78 830.52 C 494.50 848.27 457.45 854.76 420.50 857.71 Z" fill="#D8BA77" />
          <ellipse cx="328.7600" cy="587.12" rx="23.3900" ry="56.2900" transform="rotate(-.58 328.7600 587.12)" fill="#24231F" />
          <ellipse cx="462.8100" cy="587.08" rx="23.0100" ry="56.1800" transform="rotate(-.58 462.8100 587.08)" fill="#24231F" />
          <g transform="translate(0.000 0)">
            <g transform="translate(394.4 532.5) scale(3.77)">
              <g transform="translate(0.000 0.000) scale(1.0000 1.0000)" fill="var(--hair-brown)">
                <path d="M -60 -41 C -88 -41 -100 -71 -87 -93 C -78 -108 -63 -114 -44 -108 C -43 -135 -24 -150 0 -150 C 24 -150 43 -135 44 -108 C 63 -114 78 -108 87 -93 C 100 -71 88 -41 60 -41 C 40 -39 25 -50 0 -50 C -25 -50 -40 -39 -60 -41 Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
