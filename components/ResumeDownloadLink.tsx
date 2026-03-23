"use client";

import { useToast } from "@/components/toast/ToastProvider";

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
      href="/Emmanuel_Aondohemba_Resume.pdf"
      download
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-900 px-4 py-3 text-sm font-semibold !text-white no-underline hover:bg-slate-800 dark:border-white/10 dark:bg-zinc-100 dark:!text-zinc-950 dark:hover:bg-white"
    >
      Download Resume
    </a>
  );
};

export default ResumeDownloadLink;
