"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import DownloadResume from "./DownloadResume";

const socialLinks = [
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
  const [profileImage, setProfileImage] = useState("/profile-photo.jpeg");

  return (
    <aside className="flex min-h-full min-w-0 flex-col">
      <div className="flex flex-col gap-5">
        <div className="relative mx-auto">
          <div className="relative h-28 w-28 overflow-hidden rounded-[20px] bg-slate-100 dark:bg-zinc-800">
            <Image
              src={profileImage}
              alt="Emmanuel Aondohemba"
              width={112}
              height={112}
              loading="eager"
              onError={() => setProfileImage("/profile-placeholder.svg")}
              className="h-full w-full object-cover object-[50%_24%]"
            />
          </div>

          <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-emerald-400 dark:border-zinc-900">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-zinc-500">
            Software Engineer
          </p>
          <h1 className="mt-2 text-xl font-bold tracking-tight text-slate-950 dark:text-zinc-50 lg:text-2xl">
            Emmanuel Aondohemba
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-zinc-400">
            Software Engineer building complete, production-ready products end
            to end.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="divide-y divide-slate-200 dark:divide-white/10">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="flex min-w-0 items-center gap-3 py-3 first:pt-0 last:pb-0"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-200">
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

        <div className="flex flex-col gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Link>

          <DownloadResume />
        </div>
      </div>
    </aside>
  );
};

export default ProfilePanel;
