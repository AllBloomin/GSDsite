export const THEME_COOKIE = "theme";

export const THEMES = ["light", "dark", "system"] as const;

export type Theme = (typeof THEMES)[number];

export function parseTheme(value: string | undefined): Theme {
  if (value === "light" || value === "dark" || value === "system") {
    return value;
  }
  return "system";
}

export function themeCookie(theme: Theme): string {
  return `${THEME_COOKIE}=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`;
}
