"use client";

type WorkFiltersProps = {
  options: string[];
  activeFilter: string;
  onChange: (value: string) => void;
};

const WorkFilters = ({ options, activeFilter, onChange }: WorkFiltersProps) => {
  return (
    <div className="-mx-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-nowrap gap-2 px-1">
        {options.map((option) => {
          const isActive = option === activeFilter;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`inline-flex min-h-[44px] flex-none items-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-slate-900 text-white dark:bg-amber-400 dark:text-zinc-950"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WorkFilters;
