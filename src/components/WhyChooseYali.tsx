"use client";

import React, { useState } from "react";
import {
  Zap,
  GraduationCap,
  BadgeDollarSign,
  Coffee,
  Sparkles,
  ShieldCheck,
  Headphones,
  Tv,
  Check
} from "lucide-react";

export default function WhyChooseYali() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: "pain-free",
      icon: Zap,
      title: "Painless Technology",
      subtitle: "Comfort first with computerized anesthesia",
      description:
        "Computer-regulated Wand® anesthesia delivers micro-dosed numbing below pain thresholds, eliminating standard needle discomfort.",
      points: [
        "Needle-free computer-assisted anesthesia",
        "Ultra-quiet sonic vibration instruments",
      ],
    },
    {
      id: "specialists",
      icon: GraduationCap,
      title: "Certified Specialists",
      subtitle: "Multi-disciplinary team of masters & fellows",
      description:
        "Hospital-fellowship trained clinicians with 15+ years average practice across implantology, orthodontics, and gentle pediatric care.",
      points: [
        "Board-certified masters & fellows",
        "Multi-specialist clinical peer review",
      ],
    },
    {
      id: "pricing",
      icon: BadgeDollarSign,
      title: "Transparent Pricing",
      subtitle: "Clear itemized quotes with zero surprises",
      description:
        "100% upfront itemized treatment estimates with direct insurance pre-calculation and flexible 0% interest financing.",
      points: [
        "Zero unexpected billing surprises",
        "Direct insurance pre-authorization",
      ],
    },
    {
      id: "environment",
      icon: Coffee,
      title: "Calming Clinic Environment",
      subtitle: "Designed like a boutique wellness retreat",
      description:
        "A warm, serene sanctuary equipped with ergonomic memory-foam chairs, ceiling Netflix screens, and acoustic headsets.",
      points: [
        "Ceiling cinema with wireless audio",
        "Complimentary herbal tea lounge",
      ],
    },
  ];

  return (
    <section id="why-yali" className="py-20 bg-yali-bg scroll-mt-20 border-t border-yali-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yali-accent text-yali-primary text-xs font-semibold tracking-wide border border-yali-border-mint/80">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Yali Distinction</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-yali-primary tracking-tight leading-tight">
            Why Patients Trust Yali Dental Clinic
          </h2>
          <p className="text-base text-yali-text-muted leading-relaxed">
            We’ve reimagined dental care from the ground up: replacing cold sterile drills with gentle, empathetic technology and boutique comfort.
          </p>
        </div>

        {/* 2-Column Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Interactive Tab Buttons & Details */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = activeTab === index;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                    isActive
                      ? "bg-white border-yali-primary shadow-soft ring-1 ring-yali-primary/20 scale-[1.01]"
                      : "bg-white/60 hover:bg-white border-yali-border/80 hover:border-yali-accent"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-yali-primary text-yali-bg shadow-sm"
                          : "bg-yali-accent text-yali-primary"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-yali-primary">
                          {pillar.title}
                        </h3>
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            isActive
                              ? "bg-yali-accent text-yali-primary"
                              : "text-yali-text-light"
                          }`}
                        >
                          0{index + 1}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-yali-text-muted mt-0.5">
                        {pillar.subtitle}
                      </p>

                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-yali-border/60 animate-fadeIn">
                          <p className="text-sm text-yali-text leading-relaxed mb-3">
                            {pillar.description}
                          </p>
                          <ul className="space-y-2">
                            {pillar.points.map((pt, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-yali-text">
                                <div className="w-4 h-4 rounded-full bg-yali-accent flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 text-yali-primary" strokeWidth={3} />
                                </div>
                                <span className="font-medium">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Interactive Sanctuary Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-white border border-yali-accent p-6 sm:p-8 shadow-card overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-yali-border/80">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-yali-primary">
                    The Comfort Standard
                  </span>
                  <h4 className="text-xl font-extrabold text-yali-primary mt-0.5">
                    Anxiety-Free Patient Journey
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-yali-accent text-yali-primary text-xs font-bold">
                  Zero Stress Protocol
                </div>
              </div>

              {/* Graphic / Feature Pillars Breakdown */}
              <div className="py-5 space-y-4">
                <div className="p-3.5 rounded-2xl bg-yali-bg border border-yali-border flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-yali-accent text-yali-primary flex items-center justify-center shrink-0">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-yali-text">Acoustic Comfort Audio</h5>
                    <p className="text-xs text-yali-text-muted mt-0.5">
                      Noise-canceling headsets to isolate mechanical sounds.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-yali-bg border border-yali-border flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-yali-accent text-yali-primary flex items-center justify-center shrink-0">
                    <Tv className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-yali-text">Ceiling Cinema Displays</h5>
                    <p className="text-xs text-yali-text-muted mt-0.5">
                      Recline comfortably and stream your favorite shows or calm nature scenes.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-yali-bg border border-yali-border flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-yali-accent text-yali-primary flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-yali-text">Organic Aromatherapy</h5>
                    <p className="text-xs text-yali-text-muted mt-0.5">
                      Lavender and citrus diffusers to naturally relax the nervous system.
                    </p>
                  </div>
                </div>
              </div>

              {/* Patient Trust Quote */}
              <div className="pt-5 border-t border-yali-border/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yali-primary text-yali-bg font-bold flex items-center justify-center text-xs shrink-0">
                  99%
                </div>
                <div className="text-xs text-yali-text-muted">
                  <strong className="text-yali-primary">99.2% of our anxious patients</strong> report feeling completely at ease during their procedures.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

