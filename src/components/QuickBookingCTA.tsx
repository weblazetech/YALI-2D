"use client";

import React from "react";
import { Sparkles, ArrowRight, Calendar } from "lucide-react";

interface QuickBookingCTAProps {
  onOpenBooking: () => void;
}

export default function QuickBookingCTA({ onOpenBooking }: QuickBookingCTAProps) {
  return (
    <section id="book-now" className="py-16 sm:py-20 bg-yali-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Container: Background #49674a, text #fffbf6 */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-yali-primary text-yali-bg p-8 sm:p-14 lg:p-16 overflow-hidden shadow-elevated">
          {/* Subtle Decorative Background Rings */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-yali-primary-light/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-yali-accent/15 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yali-accent text-yali-text text-xs sm:text-sm font-bold tracking-wide shadow-sm mx-auto">
              <Sparkles className="w-4 h-4 text-yali-primary" />
              <span>Direct Priority Scheduling</span>
            </div>

            {/* Large Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yali-bg tracking-tight leading-tight">
              Ready for a Healthier, Confident Smile?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-yali-bg/90 max-w-2xl mx-auto font-normal leading-relaxed">
              Book your comprehensive oral assessment today. Our dedicated concierge confirms your appointment, checks dental benefits, and ensures a peaceful, painless visit.
            </p>

            {/* Contact Us CTA Button that opens the appointment form */}
            <div className="pt-2 flex items-center justify-center">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-9 py-4 rounded-full bg-yali-accent hover:bg-yali-accent-hover text-yali-text font-bold text-base tracking-wide transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-yali-primary" />
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-yali-primary transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
