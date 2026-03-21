"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Briefcase, Mail } from "lucide-react";

const tabs = [
  { href: "/", match: "/", label: "Home", icon: Home },
  { href: "/resume", match: "/resume", label: "Resume", icon: FileText },
  { href: "/work", match: "/work", label: "Work", icon: Briefcase },
  { href: "/contact", match: "/contact", label: "Contact", icon: Mail },
];

const NavigationTabs = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Portfolio sections"
      className="inline-flex w-full items-center gap-2 overflow-x-auto rounded-[22px] border border-slate-200 bg-slate-50 p-1.5 lg:w-auto"
    >
      {tabs.map((tab) => {
        const isActive = pathname === tab.match;
        const Icon = tab.icon;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`inline-flex min-w-max items-center gap-2.5 rounded-[16px] px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
              isActive
                ? "border border-slate-200 bg-white text-slate-950 shadow-sm"
                : "border border-transparent bg-transparent text-slate-600 hover:bg-white/80 hover:text-slate-900"
            }`}
          >
            <span
              className={`inline-flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-slate-100 text-slate-900"
                  : "bg-white text-slate-500"
              }`}
            >
              <Icon className="h-4 w-4" />
            </span>

            <span className="whitespace-nowrap">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationTabs;