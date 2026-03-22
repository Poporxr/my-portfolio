import PageSection from "@/components/PageSection";
import Link from "next/link";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Git & GitHub",
  "Figma",
  "Vercel",
];

const projects = [
  {
    title: "Schola Hub ERP",
    type: "Full-Stack School Management System",
    points: [
      "Built a school ERP for managing students, teachers, results, attendance, and academic workflows.",
      "Designed admin dashboards and structured modules for grading, notices, and class operations.",
      "Focused on clear UI for dense, data-heavy workflows.",
    ],
  },
  {
    title: "Prext E-commerce",
    type: "Frontend Commerce Application",
    points: [
      "Developed a modern storefront with reusable product components and responsive layout systems.",
      "Improved product browsing through better visual hierarchy and structured navigation.",
    ],
  },
  {
    title: "Dev Events Platform",
    type: "Frontend Event Listing Application",
    points: [
      "Built a platform for browsing and viewing developer events.",
      "Created reusable event listing and detail components with clean content structure.",
    ],
  },
];

export default function ResumePage() {
  return (
    <div className="space-y-6 lg:space-y-8">
      <PageSection
        eyebrow="Resume"
        title="A clear summary of my skills and project experience."
        description="Frontend developer focused on building modern web applications, dashboards, and structured product interfaces."
      >
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[26px] border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-zinc-800/60">
            <h3 className="text-base font-semibold text-slate-900 dark:text-zinc-50">
              Profile
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-400">
              I build clean, scalable, and responsive web applications with a
              strong focus on modern UI, reusable components, and structured
              frontend systems. My work is strongest in admin dashboards,
              product interfaces, and frontend-heavy applications connected to
              real workflows.
            </p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[22px] border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-900/70">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">
                Location
              </p>
              <p className="mt-2 text-sm text-slate-800 dark:text-zinc-200">
                Benue, Nigeria
              </p>
            </div>

            <div className="rounded-[22px] border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-900/70">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">
                Focus
              </p>
              <p className="mt-2 text-sm text-slate-800 dark:text-zinc-200">
                Frontend Engineering
              </p>
            </div>

            <div className="rounded-[22px] border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-900/70">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">
                Education
              </p>
              <p className="mt-2 text-sm text-slate-800 dark:text-zinc-200">
                B.Sc. Computer Science
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                Moses Orshio Adasu University, Makurdi
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Skills"
        title="Core technologies."
        description="A concise view of the tools I use most often."
      >
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-zinc-800/65 dark:text-zinc-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Selected Experience"
        title="Projects that reflect my strongest work."
        description="A few selected builds showing the kind of systems and interfaces I work best on."
      >
        <div className="space-y-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[26px] border border-slate-200 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-zinc-800/55 sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                    {project.type}
                  </p>
                </div>

                <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-300">
                  2025/2026
                </span>
              </div>

              <ul className="mt-4 space-y-2.5">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm leading-7 text-slate-600 dark:text-zinc-400"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Resume File"
        title="Download the full resume."
        description="For a complete version with contact details and links, use the downloadable resume."
      >
<div className="flex flex-wrap gap-3">
  <a
    href="/Emmanuel_Aondohemba_Resume.pdf"
    download
    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-900 px-4 py-3 text-sm font-semibold !text-white no-underline hover:bg-slate-800 dark:border-white/10 dark:bg-zinc-100 dark:!text-zinc-950 dark:hover:bg-white"
  >
    Download Resume
  </a>

  <a
    href="https://github.com/Poporxr"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold !text-slate-700 no-underline hover:bg-slate-50 dark:border-white/10 dark:bg-zinc-900 dark:!text-zinc-200 dark:hover:bg-zinc-800"
  >
    View GitHub
  </a>
</div>
      </PageSection>
    </div>
  );
}
