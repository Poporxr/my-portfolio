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
            "fixed inset-y-0 left-0 z-50 w-[340px] transform border-r border-slate-200/80 bg-slate-100/85 backdrop-blur-md transition-transform duration-300 ease-out dark:border-white/8 dark:bg-zinc-950/88 lg:sticky lg:top-0 lg:z-20 lg:h-screen lg:translate-x-0",
            sidebarOpen
              ? "translate-x-0 shadow-2xl shadow-slate-900/10 dark:shadow-black/40"
              : "-translate-x-full lg:translate-x-0",
          ].join(" ")}
        >
          <div className="h-full overflow-y-auto sm:px-3 sm:py-3 lg:px-2 lg:py-2">
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

          <div className="flex-1 px-2 py-2 sm:px-7 sm:py-3">
            <div className="mx-auto w-full max-w-6xl">
              <div className="min-h-[calc(100vh-8rem)] rounded-[30px] border border-slate-200/80 bg-white/86 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/70 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] dark:ring-white/5 sm:p-7 lg:p-2">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortfolioShell;
