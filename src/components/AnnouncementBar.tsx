import React from "react";
import { Phone, Clock } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <aside 
      aria-label="Clinic announcement and emergency contacts"
      className="bg-yali-accent text-yali-text text-xs border-b border-yali-border-mint/60 relative z-30 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-x-3 overflow-hidden">
        {/* Left: Emergency Status */}
        <div className="flex items-center gap-1.5 sm:gap-2 font-medium text-[11px] sm:text-xs truncate">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-yali-primary animate-pulse shrink-0" />
          <span className="font-semibold text-yali-primary shrink-0">Emergency:</span>
          <span className="truncate">Same-day relief slots available</span>
        </div>

        {/* Right: Phone & Working Hours */}
        <div className="flex items-center gap-2 sm:gap-4 text-yali-text text-[11px] sm:text-xs font-normal shrink-0">
          <div className="hidden md:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-yali-primary shrink-0" />
            <span>Mon – Sat: 8:00 AM – 7:30 PM</span>
          </div>

          <div className="hidden md:block h-3 w-px bg-yali-text/20" />

          <a
            href="tel:+18009254764"
            className="flex items-center gap-1 sm:gap-1.5 font-bold text-yali-primary hover:text-yali-primary-hover hover:underline transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden xs:inline sm:inline">(800) YALI-SMILE</span>
            <span className="xs:hidden sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
