import Image from "next/image";
import PageSection from "@/components/PageSection";

const skills = [
  { name: "Next.js", logo: "/skills/nextdotjs.svg", category: "Framework" },
  { name: "React", logo: "/skills/react.svg", category: "Library" },
  { name: "TypeScript", logo: "/skills/typescript.svg", category: "Language" },
  { name: "JavaScript", logo: "/skills/javascript.svg", category: "Language" },
  { name: "Tailwind CSS", logo: "/skills/tailwindcss.svg", category: "Styling" },
  { name: "HTML5", logo: "/skills/html5.svg", category: "Markup" },
  { name: "CSS3", logo: "/skills/css.svg", category: "Styling" },
  { name: "GitHub", logo: "/skills/github.svg", category: "Workflow" },
];

const SkillsSection = () => {
  return (
    <PageSection
      eyebrow="Core Stack"
      title="Tools I use to design and ship modern web interfaces."
      description="A concise view of the technologies I use most often when building scalable frontend products."
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="group rounded-[26px] border border-slate-200 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-zinc-900/75 dark:shadow-[0_10px_28px_rgba(0,0,0,0.22)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-zinc-800">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>

              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:bg-zinc-800 dark:text-zinc-400">
                {skill.category}
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
                {skill.name}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-zinc-400">
                Used in real product builds and interface systems.
              </p>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
};

export default SkillsSection;