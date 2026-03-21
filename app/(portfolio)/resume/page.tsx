import PageSection from "@/components/PageSection";

const skills = [
  "Next.js and React application architecture",
  "TypeScript component systems",
  "Admin dashboards and internal tooling",
  "Responsive UI implementation",
  "API integration and backend coordination",
];

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <PageSection
        eyebrow="Resume"
        title="Experience, strengths, and delivery focus."
        description="I work across interface design, frontend engineering, and implementation detail. The emphasis is on products that are fast to ship and straightforward to maintain."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-white/8 dark:bg-zinc-800/65 dark:text-zinc-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
