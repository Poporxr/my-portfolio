"use client";
import { Download } from "lucide-react";
import { useRouter } from "next/navigation";

export const DownloadResume = () => {
      const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Emmanuel_Aondohemba_Resume.pdf";
    link.download = "Emmanuel_Aondohemba_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    return (
        <button className="inline-flex w-full items-center justify-center gap-2 rounded-[22px] bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300 cursor-pointer" onClick={handleDownload}>
            <Download className="h-4 w-4" />
            Download Resume
        </button>
    );
};

export default DownloadResume;