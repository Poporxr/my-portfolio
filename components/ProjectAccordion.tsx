"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

type ProjectAccordionProps = {
  items: AccordionItem[];
  defaultOpenId?: string;
};

const ProjectAccordion = ({ items, defaultOpenId }: ProjectAccordionProps) => {
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(
    () => new Set(defaultOpenId ? [defaultOpenId] : []),
  );

  const toggle = (id: string) => {
    setOpenIds((previous) => {
      const next = new Set(previous);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="divide-y divide-slate-200 dark:divide-white/10">
      {items.map((item) => {
        const open = openIds.has(item.id);
        const buttonId = `accordion-button-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex min-h-[52px] w-full items-center justify-between gap-4 rounded-md py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
              >
                <span className="text-base font-semibold text-slate-900 dark:text-zinc-50">
                  {item.title}
                </span>
                <ChevronDown
                  aria-hidden
                  className={`h-5 w-5 flex-none text-slate-400 transition-transform duration-300 dark:text-zinc-500 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-6">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectAccordion;
