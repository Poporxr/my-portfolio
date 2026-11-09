import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "poporxr@gmail.com",
    href: "mailto:poporxr@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 9164 228 242",
    href: "tel:+2349164228242",
  },
  { icon: MapPin, label: "Location", value: "Benue, Nigeria" },
];

export default function ContactPage() {
  return (
    <div className="w-full max-w-2xl space-y-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-zinc-50 sm:text-4xl">
          Let&apos;s work together
        </h1>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-400 sm:text-base">
          Tell me about the role or project. I reply within a day or two.
        </p>
      </div>

      <ContactForm />

      <div className="border-t border-slate-200 pt-8 dark:border-white/10">
        <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500">
          Or reach me directly
        </h2>
        <ul className="mt-4 space-y-3">
          {contactItems.map((item) => {
            const content = (
              <>
                <item.icon className="h-4 w-4 flex-none text-slate-400 dark:text-zinc-500" />
                <span className="w-20 flex-none text-sm font-medium text-slate-500 dark:text-zinc-400">
                  {item.label}
                </span>
                <span className="min-w-0 truncate text-sm font-medium text-slate-900 dark:text-zinc-100">
                  {item.value}
                </span>
              </>
            );

            return (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex min-h-[44px] items-center gap-3 rounded-lg px-1 transition hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex min-h-[44px] items-center gap-3 px-1">
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
