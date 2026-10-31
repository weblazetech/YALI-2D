"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is dental treatment at Yali really painless?",
      a: "Yes! We specialize in anxiety-free, gentle dentistry. We use the computerized Wand® STA local anesthesia system, which delivers micro-dosages of numbing agent at a pressure below your pain threshold—eliminating the uncomfortable pinch of standard needles. For patients with high dental fear, we also offer soothing nitrous oxide (laughing gas) and conscious oral sedation.",
    },
    {
      q: "Do you accept dental insurance and offer payment plans?",
      a: "We work directly with major dental insurance providers (PPO and comprehensive plans). Our insurance coordinators verify and pre-calculate your exact benefits before your appointment so there are zero surprises. For non-insured patients or cosmetic procedures, we offer 0% interest flexible EMI financing.",
    },
    {
      q: "What should I do if I have a sudden dental emergency?",
      a: "Call our emergency helpline immediately at (800) 925-4764. We keep dedicated reserve slots every day for acute dental emergencies (severe throbbing toothache, knocked-out teeth, broken crowns, or dental trauma) and provide immediate pain relief on the same day.",
    },
    {
      q: "How do Clear Aligners compare to traditional braces?",
      a: "Clear Aligners (like Invisalign®) are virtually invisible, custom-molded clear plastic trays that gently guide your teeth into ideal alignment. They are removable for eating and brushing, cause far fewer mouth sores than traditional metal brackets, and allow you to view a 3D digital simulation of your completed smile before starting.",
    },
    {
      q: "How often should my family and children visit the clinic?",
      a: "The American Dental Association and our specialists recommend a routine preventative checkup and professional ultrasonic cleaning every six months. Regular visits prevent minor plaque accumulation from evolving into cavities or gum disease, saving both your teeth and your wallet.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-yali-bg scroll-mt-20 border-t border-yali-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yali-accent text-yali-primary text-xs font-semibold tracking-wide border border-yali-border-mint/80">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yali-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-yali-text-muted leading-relaxed">
            Everything you need to know about our treatments, gentle anesthesia, insurance policies, and clinic experience.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-yali-accent bg-white transition-all overflow-hidden shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-yali-primary"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base text-yali-primary sm:text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-yali-accent text-yali-primary rotate-180"
                        : "bg-yali-bg text-yali-text-muted hover:text-yali-primary"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-yali-text-muted leading-relaxed border-t border-yali-border/40 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

