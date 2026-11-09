import Link from "next/link";
import ResumeDownloadLink from "@/components/ResumeDownloadLink";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend & Data",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Python",
      "FastAPI",
      "Convex",
      "Firebase",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Google Cloud",
      "Vercel",
      "Cloudflare",
      "Render",
      "Modal",
      "Cloudinary",
    ],
  },
  {
    label: "Mobile & Tools",
    skills: ["React Native", "Paystack", "Git & GitHub", "Figma"],
  },
];

const experience = [
  {
    role: "Lead Frontend Engineer",
    company: "Edgeworth Capital",
    period: "Jun 2026 to Present",
    bullets: [
      "Own the entire web frontend of a fintech platform, built with Next.js and TypeScript.",
      "Private, pre-launch product; responsible for architecture, UI and delivery of the web experience.",
    ],
  },
  {
    role: "Founder & Software Engineer",
    company: "Studora",
    period: "2025 to Present",
    bullets: [
      "Built and launched a learning platform for Nigerian university students (live at studora.com.ng since November 2026): notes, past questions, realtime feed.",
      "Built Sage, an AI study companion, and a Python PDF processing service (FastAPI on Modal, PyMuPDF, OCR fallback).",
      "Subscriptions via Paystack (Plus ₦2,500/mo, Pro ₦5,000/mo).",
    ],
  },
  {
    role: "Python Programmer Intern",
    company: "Greg & Co ICT Hub",
    period: "May to Oct 2026",
    bullets: [
      "Python development internship: scripting, data handling and small application work.",
    ],
  },
  {
    role: "Full-Stack Developer (Client Work)",
    company: "HDC Wears",
    period: "2025",
    bullets: [
      "Built a live e-commerce store (highdreamchasers.com.ng): Google sign-in, customer accounts and order history, admin operator dashboard.",
      "Paystack checkout with server-side payment confirmation and automated customer emails via Resend.",
    ],
  },
];

const selectedProjects = [
  {
    title: "Studora",
    description: "AI-powered learning platform for Nigerian university students.",
    href: "/work/studora",
  },
  {
    title: "High Dream Chasers",
    description: "Live e-commerce store for HDC Wears with Paystack checkout.",
    href: "/work/high-dream-chasers",
  },
  {
    title: "FirstBookings",
    description: "Road booking platform with departure board and barcode e-tickets.",
    href: "/work/firstbookings",
  },
];

const sectionTitleClass =
  "text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500";

export default function ResumePage() {
  return (
    <div className="space-y-12 sm:space-y-14">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">
          Resume
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-zinc-50 sm:text-4xl">
          Emmanuel Aondohemba
        </h1>
        <p className="mt-1.5 text-lg font-medium text-slate-700 dark:text-zinc-300">
          Software Engineer
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-zinc-400 sm:text-base">
          Software Engineer with three years building web applications, two
          years in mobile development, and one year with Python. Builds
          complete, production-ready products end to end, and has designed,
          built and launched applications people use daily across learning,
          commerce and booking. Works best in remote, self-directed teams;
          values teams that trust engineers with real ownership. Seeking a
          junior to mid-level software engineering role, contract or
          full-time. Available immediately.
        </p>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-600 dark:text-zinc-400">
          <div className="flex gap-2">
            <dt className="font-semibold text-slate-900 dark:text-zinc-100">
              Location:
            </dt>
            <dd>Benue, Nigeria</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold text-slate-900 dark:text-zinc-100">
              Status:
            </dt>
            <dd>Available immediately</dd>
          </div>
        </dl>
      </header>

      <section>
        <h2 className={sectionTitleClass}>Experience</h2>
        <div className="mt-2 divide-y divide-slate-200 dark:divide-white/10">
          {experience.map((entry) => (
            <article key={`${entry.role}-${entry.company}`} className="py-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-slate-900 dark:text-zinc-50">
                  {entry.role},{" "}
                  <span className="font-medium text-slate-600 dark:text-zinc-300">
                    {entry.company}
                  </span>
                </h3>
                <p className="flex-none text-sm text-slate-500 dark:text-zinc-400">
                  {entry.period}
                </p>
              </div>
              <ul className="mt-3 space-y-2">
                {entry.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-7 text-slate-600 dark:text-zinc-400"
                  >
                    <span className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className={sectionTitleClass}>Selected Projects</h2>
        <ul className="mt-2 divide-y divide-slate-200 dark:divide-white/10">
          {selectedProjects.map((project) => (
            <li key={project.title} className="py-4">
              <Link
                href={project.href}
                className="text-sm leading-6 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-50"
              >
                <span className="font-semibold text-slate-900 dark:text-zinc-50">
                  {project.title}
                </span>
                {": "}
                {project.description}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={sectionTitleClass}>Skills</h2>
        <div className="mt-2 divide-y divide-slate-200 dark:divide-white/10">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col gap-3 py-4 sm:flex-row sm:gap-6"
            >
              <h3 className="w-36 flex-none pt-1.5 text-sm font-semibold text-slate-900 dark:text-zinc-100">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={sectionTitleClass}>Education</h2>
        <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-base font-semibold text-slate-900 dark:text-zinc-50">
            B.Sc. Computer Science
          </p>
          <p className="text-sm text-slate-500 dark:text-zinc-400">
            Moses Orshio Adasu University, Makurdi
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 pt-8 dark:border-white/10">
        <h2 className="text-base font-semibold text-slate-950 dark:text-zinc-50">
          Download the full resume
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-zinc-400">
          For a complete version with contact details and links, use the
          downloadable resume.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <ResumeDownloadLink />
          <a
            href="https://github.com/Poporxr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/[0.06]"
          >
            View GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
