import React from "react";
import Image from "next/image";

interface ToothLogoProps {
  className?: string;
  size?: number;
  height?: number;
}

export default function ToothLogo({ className = "", size, height }: ToothLogoProps) {
  const h = height || size;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      aria-label="Yali Dental Clinic Official Logo"
    >
      <Image
        src="/yali-transparent.png"
        alt="Yali Dental Clinic - Guardians of Your Smile"
        width={140}
        height={193}
        style={h ? { height: `${h}px`, width: "auto" } : undefined}
        className={`${
          h ? "" : "h-11 sm:h-12 w-auto"
        } object-contain drop-shadow-xs`}
        priority
      />
    </div>
  );
}
