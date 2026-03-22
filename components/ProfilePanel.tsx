"use client";

import Image from "next/image";
import { Download, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import DownloadResume from "./DownloadResume";

const socialLinks = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/emmanuel-aondohemba-579a5a311", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/emmanuel1115031?s=21", label: "Twitter" },
  { icon: FaGithub, href: "https://github.com/Poporxr/", label: "GitHub" },
];

const contactItems = [
  { icon: Phone, label: "Phone", value: "+234 9164 228 242" },
  { icon: Mail, label: "Email", value: "poporxr@gmail.com" },
  { icon: MapPin, label: "Location", value: "Benue, Nigeria" },
];

const ProfilePanel = () => {
  return (
    <aside className="flex min-h-full min-w-0 flex-col rounded-[30px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:shadow-[0_22px_60px_rgba(0,0,0,0.38)] dark:ring-white/5 lg:p-7">
      <div className="flex flex-col gap-6 lg:gap-7">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-700 ring-1 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20">
            <Sparkles className="h-3.5 w-3.5" />
            Portfolio
          </span>
        </div>

        <div className="relative mx-auto">
          <div className="relative h-36 w-36 overflow-hidden rounded-[28px] bg-slate-100 shadow-[0_14px_30px_rgba(15,23,42,0.10)] ring-4 ring-slate-50 dark:bg-zinc-800 dark:shadow-[0_18px_40px_rgba(0,0,0,0.35)] dark:ring-zinc-900">
            <Image
              src="/profile-placeholder.svg"
              alt="Beatrice Wambui"
              width={144}
              height={144}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-emerald-400 shadow-md dark:border-zinc-900">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-zinc-500">
            Frontend Developer
          </p>
          <h1 className="mt-2 text-xl font-bold tracking-tight text-slate-950 dark:text-zinc-50 lg:text-[1.75rem]">
            Emmanuel Aondohemba
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-zinc-400">
            Building clean, scalable interfaces and premium modern web
            experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-white/8 dark:bg-white/[0.04] dark:text-zinc-400 dark:hover:border-white/14 dark:hover:bg-white/[0.08] dark:hover:text-zinc-100"
            >
              <link.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>

        <div className="h-px w-full bg-slate-200 dark:bg-white/8" />

        <div className="space-y-3 rounded-[26px] border border-slate-200 bg-slate-50 p-4 dark:border-white/8 dark:bg-zinc-800/60">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="flex min-w-0 items-center gap-3 rounded-2xl px-2 py-2 transition-colors hover:bg-white dark:hover:bg-white/[0.04]"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200/80 dark:bg-zinc-900 dark:text-amber-300 dark:ring-white/8">
                <item.icon className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">
                  {item.label}
                </p>
                <p className="truncate text-sm font-medium text-slate-900 dark:text-zinc-100">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

          <DownloadResume />
      </div>
    </aside>
  );
};

export default ProfilePanel;
