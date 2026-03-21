import PageSection from "@/components/PageSection";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <PageSection
        eyebrow="Contact"
        title="Open to product, frontend, and full-stack work."
        description="If you need a portfolio site, dashboard, or product interface implemented with care, reach out through email or phone and I can respond with scope and next steps."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Email</p>
            <p className="mt-2 text-sm text-slate-900">beatrice@gmail.com</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Phone</p>
            <p className="mt-2 text-sm text-slate-900">+254723909353</p>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
