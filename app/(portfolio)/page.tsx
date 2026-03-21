import PageSection from "@/components/PageSection";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageSection
        eyebrow="Introduction"
        title="Building clean, useful web products with a strong product eye."
        description="I design and ship frontend-heavy experiences with solid backend foundations. My work focuses on usable interfaces, maintainable systems, and fast iteration from idea to production."
      />

      <section className="grid gap-6 md:grid-cols-2">
        <PageSection
          eyebrow="Focus"
          title="What I do"
          description="Modern React and Next.js applications, admin systems, portfolio sites, and product interfaces that need to feel polished without becoming fragile."
        />
        <PageSection
          eyebrow="Approach"
          title="How I work"
          description="I favor clear architecture, predictable components, and pragmatic UI decisions. The result is work that is easier to extend and easier to trust."
        />
      </section>
    </div>
  );
}
