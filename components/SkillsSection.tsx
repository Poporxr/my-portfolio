import Image from "next/image";
import type { IconType } from "react-icons";
import { SiExpress, SiNodedotjs, SiPostgresql, SiPrisma } from "react-icons/si";
import PageSection from "@/components/PageSection";

type Skill = {
  name: string;
  category: string;
  description: string;
  logo?: string;
  icon?: IconType;
  iconColor?: string;
};

const skills: Skill[] = [
  {
    name: "Next.js",
    logo: "/skills/nextdotjs.svg",
    category: "Framework",
    description: "Handles routing, rendering, and production-ready React app structure.",
  },
  {
    name: "React",
    logo: "/skills/react.svg",
    category: "Library",
    description: "Powers reusable components, interactive UI states, and client-side flows.",
  },
  {
    name: "TypeScript",
    logo: "/skills/typescript.svg",
    category: "Language",
    description: "Adds strong typing so components, data, and props stay predictable.",
  },
  {
    name: "JavaScript",
    logo: "/skills/javascript.svg",
    category: "Language",
    description: "Drives browser behavior, dynamic data handling, and application logic.",
  },
  {
    name: "Tailwind CSS",
    logo: "/skills/tailwindcss.svg",
    category: "Styling",
    description: "Builds responsive layouts quickly with consistent utility-based styling.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    iconColor: "#5fa04e",
    category: "Runtime",
    description: "Runs backend services, APIs, scripts, and server-side application logic.",
  },
  {
    name: "Express",
    icon: SiExpress,
    iconColor: "#111827",
    category: "Backend",
    description: "Structures lightweight API routes, middleware, and server endpoints.",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    iconColor: "#4169e1",
    category: "Database",
    description: "Stores relational application data with strong querying and reliability.",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    iconColor: "#2d3748",
    category: "ORM",
    description: "Connects TypeScript apps to databases with typed models and queries.",
  },
  {
    name: "HTML5",
    logo: "/skills/html5.svg",
    category: "Markup",
    description: "Provides accessible page structure and clean semantic foundations.",
  },
  {
    name: "CSS3",
    logo: "/skills/css.svg",
    category: "Styling",
    description: "Controls visual polish, responsive behavior, and detailed interface styling.",
  },
  {
    name: "GitHub",
    logo: "/skills/github.svg",
    category: "Workflow",
    description: "Supports version control, collaboration, and project delivery history.",
  },
];

const SkillsSection = () => {
  return (
    <PageSection
      eyebrow="Core Stack"
      title="Tools I use to design and ship fullstack web products."
      description="A concise view of the technologies I use most often when building scalable interfaces, APIs, and data-backed products."
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="group rounded-[26px] border border-slate-200 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-zinc-900/75 dark:shadow-[0_10px_28px_rgba(0,0,0,0.22)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-zinc-800">
                {skill.logo ? (
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                ) : skill.icon ? (
                  <skill.icon
                    aria-label={skill.name}
                    className="h-6 w-6"
                    style={{ color: skill.iconColor }}
                  />
                ) : null}
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
                {skill.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
};

export default SkillsSection;
