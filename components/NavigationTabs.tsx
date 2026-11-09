"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Briefcase, UserStar } from "lucide-react";

const tabs = [
  { href: "/", match: "/", label: "Home", icon: Home },
  { href: "/resume", match: "/resume", label: "Resume", icon: FileText },
  { href: "/work", match: "/work", label: "Work", icon: Briefcase },
  { href: "/contact", match: "/contact", label: "Contact", icon: UserStar },
];

const NavigationTabs = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Portfolio sections"
      className="flex w-full items-center gap-1.5 overflow-x-auto whitespace-nowrap rounded-[20px] border border-slate-200 bg-slate-50 p-1.5 [-ms-overflow-style:none] [scrollbar-width:none] dark:border-white/10 dark:bg-zinc-900 [&::-webkit-scrollbar]:hidden lg:inline-flex lg:w-auto lg:gap-2"
    >
      {tabs.map((tab) => {
        const isActive = pathname === tab.match;
        const Icon = tab.icon;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`group flex min-h-[44px] flex-none items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "bg-white text-slate-950 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                : "text-slate-500 hover:bg-white hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            }`}
          >
            <span
              className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xl lg:h-8 lg:w-8 ${
                isActive
                  ? "bg-slate-100 text-slate-900 dark:bg-zinc-700 dark:text-amber-300"
                  : "bg-white text-slate-500 dark:bg-zinc-800 dark:text-zinc-400"
              }`}
            >
              <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
            </span>

            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationTabs;
