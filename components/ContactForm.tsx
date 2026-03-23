"use client";

import { useToast } from "@/components/toast/ToastProvider";
import { useState, type FormEvent } from "react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: formData.get("fullName")?.toString().trim() ?? "",
      emailAddress: formData.get("emailAddress")?.toString().trim() ?? "",
      phoneNo: formData.get("phoneNo")?.toString().trim() ?? "",
      projectType: formData.get("projectType")?.toString().trim() ?? "",
      budget: formData.get("budget")?.toString().trim() ?? "",
      message: formData.get("message")?.toString().trim() ?? "",
    };

    if (!payload.fullName || !payload.emailAddress || !payload.phoneNo || !payload.message) {
      toast({
        title: "A few details are missing",
        description:
          "Full name, email address, phone number, and message are required before sending.",
        variant: "error",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        error?: string;
        fieldErrors?: Record<string, string[] | undefined>;
      };

      if (!response.ok) {
        const fieldError =
          result.fieldErrors?.fullName?.[0] ??
          result.fieldErrors?.emailAddress?.[0] ??
          result.fieldErrors?.phoneNo?.[0] ??
          result.fieldErrors?.message?.[0];

        toast({
          title: "Inquiry could not be sent",
          description: fieldError ?? result.error ?? "Please try again.",
          variant: "error",
          duration: 5200,
        });
        return;
      }

      form.reset();
      toast({
        title: "Inquiry sent",
        description: "Your message has been delivered successfully.",
        variant: "success",
      });
    } catch {
      toast({
        title: "Network error",
        description:
          "The request did not complete. Check your connection and try again.",
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-500">
            Full Name
          </span>
          <input
            type="text"
            name="fullName"
            placeholder="Your full name"
            required
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/20 dark:border-white/8 dark:bg-zinc-800/65 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-amber-300/70 dark:focus:ring-amber-300/15"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-zinc-500">
            Email Address
          </span>
          <input
            type="email"
            name="emailAddress"
            placeholder="you@example.com"
            required
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
            name="phoneNo"
            placeholder="+234 800 000 0000"
            required
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
          required
          className="resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/20 dark:border-white/8 dark:bg-zinc-800/65 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-amber-300/70 dark:focus:ring-amber-300/15"
        />
      </label>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500 dark:text-zinc-400">
          Share enough context and I can respond with the right next step.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-[22px] bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-slate-900 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300 dark:disabled:hover:bg-amber-400"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
