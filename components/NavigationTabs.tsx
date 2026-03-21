"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Briefcase, Mail, UserStar } from "lucide-react";

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
      className="flex w-full items-center gap-1.5 rounded-[20px] border border-slate-200/85 bg-slate-50/90 p-1.5 ring-1 ring-white/60 backdrop-blur dark:border-white/8 dark:bg-white/[0.03] dark:ring-white/5 lg:inline-flex lg:w-auto lg:gap-2 lg:rounded-[22px]"
    >
      {tabs.map((tab) => {
        const isActive = pathname === tab.match;
        const Icon = tab.icon;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`group flex min-w-0 flex-1 items-center justify-center gap-2 rounded-2xl px-2.5 py-2 text-[12px] font-medium transition-all duration-200 sm:px-3 lg:min-w-max lg:flex-none lg:px-4 lg:py-2.5 lg:text-sm ${
              isActive
                ? "bg-white text-slate-950 shadow-sm ring-1 ring-slate-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:ring-white/8"
                : "text-slate-500 hover:bg-white/80 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-white/[0.05] dark:hover:text-zinc-100"
            }`}
          >
            <span
              className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xl transition-all duration-200 lg:h-8 lg:w-8 ${
                isActive
                 ? "bg-slate-100 text-slate-900 dark:bg-zinc-700 dark:text-amber-300"
                  : "bg-white text-slate-500 dark:bg-white/[0.05] dark:text-zinc-400"
              }`}
    
            >
              <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
            </span>

            <span className="text-[11px] sm:text-[10px] lg:text-sm">
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationTabs;
