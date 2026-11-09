"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FALLBACK_SRC = "/projects/portfolio-system.svg";

type ProjectImageProps = {
  src?: string;
  alt: string;
  className?: string;
};

export default function ProjectImage({ src, alt, className }: ProjectImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src ?? FALLBACK_SRC);

  useEffect(() => {
    setCurrentSrc(src ?? FALLBACK_SRC);
  }, [src]);

  const isFallback = currentSrc === FALLBACK_SRC;

  return (
    <div
      className={`relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-zinc-800 ${className ?? ""}`}
    >
      <Image
        src={currentSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        className="object-cover"
        unoptimized={isFallback}
        onError={() => {
          if (currentSrc !== FALLBACK_SRC) {
            setCurrentSrc(FALLBACK_SRC);
          }
        }}
      />
    </div>
  );
}
