"use client";

import { Download } from "lucide-react";
import { useToast } from "@/components/toast/ToastProvider";

const RESUME_URL =
  "https://res.cloudinary.com/doc3mb9if/raw/upload/v1794230162/portfolio/docm10juolcf5uuqz3kb.pdf";

export const DownloadResume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "Emmanuel_Aondohemba_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Resume download started",
      description:
        "A PDF copy is being downloaded to your device.",
      variant: "success",
    });
  };

  return (
    <button
      className="inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 dark:border-white/15 dark:text-zinc-100 dark:hover:bg-white/[0.06]"
      onClick={handleDownload}
    >
      <Download className="h-4 w-4" />
      Download Resume
    </button>
  );
};

export default DownloadResume;
