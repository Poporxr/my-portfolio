import Image from "next/image";
import type { IconType } from "react-icons";
import { SiExpress, SiNodedotjs, SiPostgresql, SiPrisma } from "react-icons/si";

type Skill = {
  name: string;
  logo?: string;
  icon?: IconType;
  iconColor?: string;
  textLabel?: string;
};

type SkillGroup = {
  label: string;
  skills: Skill[];
};

const groups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { name: "Next.js", logo: "/skills/nextdotjs.svg" },
      { name: "React", logo: "/skills/react.svg" },
      { name: "TypeScript", logo: "/skills/typescript.svg" },
      { name: "Tailwind CSS", logo: "/skills/tailwindcss.svg" },
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, iconColor: "#5fa04e" },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql, iconColor: "#4169e1" },
      { name: "Prisma", icon: SiPrisma },
      { name: "Python", logo: "/skills/python.svg" },
      { name: "FastAPI", logo: "/skills/fastapi.svg" },
      { name: "Firebase", logo: "/skills/firebase.svg" },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", logo: "/skills/amazonwebservices.svg" },
      { name: "Google Cloud", logo: "/skills/googlecloud.svg" },
      { name: "Vercel", logo: "/skills/vercel.svg" },
      { name: "Cloudflare", logo: "/skills/cloudflare.svg" },
      { name: "Render", logo: "/skills/render.svg" },
      { name: "Modal", logo: "/skills/modal.svg" },
      { name: "Cloudinary", logo: "/skills/cloudinary.svg" },
    ],
  },
  {
    label: "Mobile & Tools",
    skills: [
      { name: "React Native", logo: "/skills/react.svg" },
      { name: "Paystack", textLabel: "P" },
      { name: "GitHub", logo: "/skills/github.svg" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500">
          Core Stack
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50 sm:text-[1.9rem]">
          The tools I build with
        </h2>
      </div>

      {groups.map((group) => (
        <div key={group.label} className="space-y-3">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-500">
            {group.label}
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {group.skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 py-1">
                <span className="flex h-8 w-8 flex-none items-center justify-center">
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
                      className="h-6 w-6 text-slate-700 dark:text-zinc-200"
                      style={skill.iconColor ? { color: skill.iconColor } : undefined}
                    />
                  ) : skill.textLabel ? (
                    <span className="text-base font-bold text-slate-900 dark:text-zinc-50">
                      {skill.textLabel}
                    </span>
                  ) : null}
                </span>
                <h4 className="min-w-0 text-sm font-semibold text-slate-900 dark:text-zinc-100">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
