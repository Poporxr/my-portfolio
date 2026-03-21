import PageSection from "@/components/PageSection";

const projects = [
  {
    name: "School Operations Dashboard",
    summary: "A structured admin interface for student, teacher, and fee management with an emphasis on clarity and day-to-day usability.",
  },
  {
    name: "Portfolio Experience System",
    summary: "A reusable personal site shell with persistent navigation, route-based sections, and consistent presentation across every page.",
  },
];

export default function WorkPage() {
  return (
    <div className="space-y-6">
      <PageSection
        eyebrow="Work"
        title="Selected projects built for clarity, speed, and maintainability."
        description="I lean toward interfaces that communicate quickly and code structures that stay workable as requirements grow."
      >
        <div className="grid gap-4">
          {projects.map((project) => (
            <article key={project.name} className="rounded-2xl border border-slate-200 p-5 dark:border-white/8 dark:bg-zinc-800/45">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-zinc-100">{project.name}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-zinc-400">{project.summary}</p>
            </article>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
