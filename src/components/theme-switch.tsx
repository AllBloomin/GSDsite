"use client";

import { type ChangeEvent } from "react";
import { parseTheme, themeCookie, THEMES, type Theme } from "@/lib/theme";

const LABELS: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

export function ThemeSwitch({ initialTheme }: { initialTheme: Theme }) {
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const next = parseTheme(event.target.value);
    document.documentElement.dataset.theme = next;
    document.cookie = themeCookie(next);
  }

  return (
    <fieldset className="m-0 ml-auto shrink-0 border-0 p-0">
      <legend className="sr-only">Color theme</legend>
      <div className="flex rounded-full border border-line bg-segment p-1">
        {THEMES.map((theme) => (
          <label
            key={theme}
            className="cursor-pointer rounded-full px-2 py-1 text-sm font-normal text-foreground has-[:checked]:bg-foreground has-[:checked]:text-background has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-link sm:px-3 sm:py-1.5"
          >
            <input
              className="sr-only"
              type="radio"
              name="theme"
              value={theme}
              defaultChecked={theme === initialTheme}
              onChange={onChange}
            />
            {LABELS[theme]}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
