"use client";

import { useToast } from "@/components/toast/ToastProvider";

const RESUME_URL =
  "https://res.cloudinary.com/doc3mb9if/raw/upload/v1794230162/portfolio/docm10juolcf5uuqz3kb.pdf";

const ResumeDownloadLink = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Resume download started",
      description: "A PDF copy is being downloaded to your device.",
      variant: "success",
    });
  };

  return (
    <a
      href={RESUME_URL}
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-900 px-4 py-3 text-sm font-semibold !text-white no-underline hover:bg-slate-800 dark:border-white/10 dark:bg-zinc-100 dark:!text-zinc-950 dark:hover:bg-white"
    >
      Download Resume
    </a>
  );
};

export default ResumeDownloadLink;
