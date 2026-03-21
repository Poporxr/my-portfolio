type StackTagsProps = {
  techStack: string[];
  limit?: number;
};

const StackTags = ({ techStack, limit = 4 }: StackTagsProps) => {
  const visibleTags = techStack.slice(0, limit);
  const remaining = techStack.length - visibleTags.length;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTags.map((item) => (
        <span
          key={item}
          className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/8 dark:bg-white/[0.04] dark:text-zinc-300"
        >
          {item}
        </span>
      ))}
      {remaining > 0 ? (
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500 dark:border-white/8 dark:bg-white/[0.04] dark:text-zinc-400">
          +{remaining} more
        </span>
      ) : null}
    </div>
  );
};

export default StackTags;
