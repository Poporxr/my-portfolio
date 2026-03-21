import PageSection from "@/components/PageSection";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <PageSection
        eyebrow="Contact"
        title="Open to product, frontend, and full-stack work."
        description="If you need a portfolio site, dashboard, or product interface implemented with care, reach out through email or phone and I can respond with scope and next steps."
      >
        <form className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-500">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/20 dark:border-white/8 dark:bg-zinc-800/65 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-amber-300/70 dark:focus:ring-amber-300/15"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-500">
                Email Address
              </span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/20 dark:border-white/8 dark:bg-zinc-800/65 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-amber-300/70 dark:focus:ring-amber-300/15"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-500">
                Phone Number
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="+234 800 000 0000"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/20 dark:border-white/8 dark:bg-zinc-800/65 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-amber-300/70 dark:focus:ring-amber-300/15"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-500">
                Project Type
              </span>
              <input
                type="text"
                name="projectType"
                placeholder="Portfolio, dashboard, landing page..."
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/20 dark:border-white/8 dark:bg-zinc-800/65 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-amber-300/70 dark:focus:ring-amber-300/15"
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-500">
              Budget or Timeline
            </span>
            <input
              type="text"
              name="budget"
              placeholder="Optional budget range or preferred timeline"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/20 dark:border-white/8 dark:bg-zinc-800/65 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-amber-300/70 dark:focus:ring-amber-300/15"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-500">
              Message
            </span>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about the project, your goals, and what you need help with."
              className="resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/20 dark:border-white/8 dark:bg-zinc-800/65 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-amber-300/70 dark:focus:ring-amber-300/15"
            />
          </label>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500 dark:text-zinc-400">
              Share enough context and I can respond with the right next step.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-[22px] bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </PageSection>
    </div>
  );
}
