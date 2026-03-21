"use client";

type WorkFiltersProps = {
  options: string[];
  activeFilter: string;
  onChange: (value: string) => void;
};

const WorkFilters = ({ options, activeFilter, onChange }: WorkFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option === activeFilter;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-slate-900 text-white dark:bg-amber-400 dark:text-zinc-950"
                : "border border-slate-200 bg-white/90 text-slate-600 hover:bg-slate-50 dark:border-white/8 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:bg-white/[0.08]"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default WorkFilters;
