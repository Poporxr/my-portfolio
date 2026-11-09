"use client";

import { useEffect, useState } from "react";
import ProfilePanel from "@/components/ProfilePanel";
import PortfolioNavBar from "@/components/PortfolioNavBar";

type PortfolioShellProps = {
  children: React.ReactNode;
};

const PortfolioShell = ({ children }: PortfolioShellProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px]">
        <aside
          className={[
            "fixed inset-y-0 left-0 z-50 w-[320px] max-w-[85vw] transform bg-[var(--app-background)] transition-transform duration-300 ease-out dark:bg-zinc-950 lg:sticky lg:top-0 lg:z-20 lg:h-screen lg:translate-x-0",
            sidebarOpen
              ? "translate-x-0 shadow-2xl shadow-slate-900/10 dark:shadow-black/40"
              : "-translate-x-full lg:translate-x-0",
          ].join(" ")}
        >
          <div className="h-full overflow-y-auto px-5 py-6 lg:border-r lg:border-slate-200/70 lg:dark:border-white/8">
            <ProfilePanel />
          </div>
        </aside>

        {sidebarOpen && (
          <button
            aria-label="Close profile panel"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-[2px] lg:hidden"
          />
        )}

        <main className="flex min-w-0 flex-1 flex-col">
          <PortfolioNavBar
            onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          />

          <div className="flex-1 px-4 py-8 sm:px-8 sm:py-10 lg:px-10">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortfolioShell;
