import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { parseTheme, THEME_COOKIE } from "@/lib/theme";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-exo",
});

const description =
  "Bots for folks with an unwavering drive to get stuff done. Your own, designed to get stuff done, and fun to work with.";

export const metadata: Metadata = {
  title: "GSDbots",
  description,
  openGraph: {
    title: "GSDbots",
    description,
    siteName: "GSDbots",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "GSDbots",
    description,
  },
};

// The theme cookie has to be on the first HTML response. A static shell would
// paint the wrong mode and then swap.
export const instant = false;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const theme = parseTheme(cookieStore.get(THEME_COOKIE)?.value);

  return (
    <html
      lang="en"
      data-theme={theme}
      className={`${exo2.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-dvh flex-col overflow-x-hidden bg-background font-sans text-[1.375rem] font-normal leading-normal text-foreground">
        <div className="site-backdrop" aria-hidden="true">
          <div className="site-glow" />
          <div className="site-grid" />
        </div>
        <SiteHeader theme={theme} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
