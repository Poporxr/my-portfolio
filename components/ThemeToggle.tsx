"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200/90 bg-white/90 text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)] ring-1 ring-white/70 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 motion-reduce:transition-none dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-100 dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)] dark:ring-white/5 dark:hover:border-white/15 dark:hover:bg-white/[0.08]"
    >
      <span className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-white/[0.10] dark:via-white/[0.06] dark:to-white/[0.02]" />
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_28%,rgba(251,191,36,0.28),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_30%_28%,rgba(251,191,36,0.18),transparent_42%)]" />
      <span className="relative flex items-center justify-center">
        <Moon
          className={`h-[1.05rem] w-[1.05rem] transition-all duration-300 motion-reduce:transition-none ${
            isDark
              ? "scale-100 rotate-0 opacity-100 text-amber-300"
              : "scale-75 rotate-45 opacity-0"
          }`}
        />
        <SunMedium
          className={`absolute h-[1rem] w-[1rem] transition-all duration-300 motion-reduce:transition-none ${
            isDark
              ? "scale-75 -rotate-45 opacity-0"
              : "scale-100 rotate-0 opacity-100 text-amber-500"
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
