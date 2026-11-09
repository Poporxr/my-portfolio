"use client";

import { useToast } from "@/components/toast/ToastProvider";
import { useState, type FormEvent } from "react";

const inputClass =
  "rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400 focus:bg-white dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-amber-300";
const labelClass =
  "text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500";

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
      projectType: formData.get("projectType")?.toString().trim() ?? "",
      message: formData.get("message")?.toString().trim() ?? "",
    };

    if (!payload.fullName || !payload.emailAddress || !payload.message) {
      toast({
        title: "A few details are missing",
        description:
          "Full name, email address, and message are required before sending.",
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
          result.fieldErrors?.projectType?.[0] ??
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
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className={labelClass}>Full Name</span>
          <input
            type="text"
            name="fullName"
            placeholder="Your full name"
            required
            className={inputClass}
          />
        </label>

        <label className="grid gap-2">
          <span className={labelClass}>Email</span>
          <input
            type="email"
            name="emailAddress"
            placeholder="you@example.com"
            required
            className={inputClass}
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className={labelClass}>Project Type (optional)</span>
        <input
          type="text"
          name="projectType"
          placeholder="Portfolio, dashboard, landing page..."
          className={inputClass}
        />
      </label>

      <label className="grid gap-2">
        <span className={labelClass}>Message</span>
        <textarea
          name="message"
          rows={6}
          placeholder="Tell me about the role or project."
          required
          className={`${inputClass} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500 dark:text-zinc-400">
          I reply within a day or two.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
