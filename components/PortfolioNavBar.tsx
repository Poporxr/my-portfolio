"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import NavigationTabs from "@/components/NavigationTabs";
import ThemeToggle from "@/components/ThemeToggle";

function getTitleFromPath(pathname: string) {
  if (pathname === "/resume") return "Resume";
  if (pathname === "/work") return "Projects & Works";
  if (pathname === "/contact") return "Contact";
  return "Home";
}

type PortfolioNavBarProps = {
  onToggleSidebar: () => void;
};

const PortfolioNavBar = ({ onToggleSidebar }: PortfolioNavBarProps) => {
  const pathname = usePathname();
  const title = getTitleFromPath(pathname);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/72 backdrop-blur-xl dark:border-white/8 dark:bg-zinc-950/62">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <button
            onClick={onToggleSidebar}
            aria-label="Open profile panel"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/90 bg-white/90 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-100 dark:hover:bg-white/[0.08] lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400 dark:text-zinc-500">
              Portfolio
            </p>
            <h1 className="truncate text-sm font-semibold text-slate-950 dark:text-zinc-100 sm:text-base">
              {title}
            </h1>
          </div>
        </div>

        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-center">
          <NavigationTabs />
        </div>

        <ThemeToggle />
      </div>

      <div className="border-t border-slate-100/90 px-4 py-3 dark:border-white/6 sm:px-6 lg:hidden">
        <NavigationTabs />
      </div>
    </header>
  );
};

export default PortfolioNavBar;
