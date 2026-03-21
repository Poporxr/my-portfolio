"use client";

import { Menu, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import NavigationTabs from "@/components/NavigationTabs";

function getTitleFromPath(pathname: string) {
  if (pathname === "/resume") return "Resume";
  if (pathname === "/work") return "Selected Work";
  if (pathname === "/contact") return "Contact";
  return "Home";
}

type PortfolioNavBarProps = {
  onToggleSidebar: () => void;
};

const PortfolioNavBar = ({ onToggleSidebar }: PortfolioNavBarProps) => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <button
            onClick={onToggleSidebar}
            aria-label="Open profile panel"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

        </div>

        <div className="hidden lg:flex lg:items-center">
          <NavigationTabs />
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 py-3 sm:px-6 lg:hidden">
        <NavigationTabs />
      </div>
    </header>
  );
};

export default PortfolioNavBar;