import type { SVGProps } from "react";

type BotProps = SVGProps<SVGSVGElement>;

/** Teal head, blonde swoop. Teaser r0c1. */
export function TealSwoopBot(props: BotProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-80 -90 960 1050"
      aria-hidden="true"
      {...props}
    >
      <g transform="rotate(-5 394 550)">
        <g transform="translate(394 0) scale(0.96880 1) translate(-394 0)">
          <path d="M 420.50 857.71 C 381.72 860.81 343.05 860.01 306.81 848.78 C 272.03 837.99 239.50 817.59 215.87 789.73 C 192.27 761.92 177.55 726.68 170.17 690.48 C 162.58 653.21 162.77 614.93 166.11 577.39 C 172.62 504.27 191.08 433.97 219.82 366.13 C 234.21 332.17 251.18 298.82 275.63 270.67 C 300.11 242.48 332.10 219.49 367.28 212.72 C 402.87 205.88 441.73 215.62 472.62 236.57 C 503.82 257.72 526.88 290.31 545.55 323.68 C 581.66 388.22 601.34 455.72 614.15 527.95 C 627.38 602.53 633.28 682.16 600.32 748.96 C 583.92 782.22 557.88 812.30 525.78 830.52 C 494.50 848.27 457.45 854.76 420.50 857.71 Z" fill="#306E73" />
          <ellipse cx="310.9384" cy="587.12" rx="24.8495" ry="56.2900" transform="rotate(-.58 310.9384 587.12)" fill="#24231F" />
          <ellipse cx="439.1974" cy="587.08" rx="20.5801" ry="54.6968" transform="rotate(-.58 439.1974 587.08)" fill="#24231F" />
          <g transform="translate(-4.800 0)">
            <g transform="translate(394.4 532.5) scale(3.77)">
              <g transform="translate(0.000 0.000) scale(1.0000 1.0000)" fill="var(--hair-blonde)">
                <path d="M -48 -55 C -58 -80 -44 -106 -16 -109 C 5 -111 18 -113 28 -122 C 33 -126 40 -123 40 -117 C 41 -92 20 -77 -6 -76 C -23 -76 -36 -66 -41 -56 C -43 -52 -46 -52 -48 -55 Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
