"use client";

import React from "react";
import { Award, GraduationCap, Calendar, Quote, CheckCircle2, ArrowRight } from "lucide-react";

interface DoctorsSectionProps {
  onOpenBooking: (consultTitle?: string) => void;
}

export default function DoctorsSection({ onOpenBooking }: DoctorsSectionProps) {
  const doctors = [
    {
      name: "Dr. Arvind Menon",
      degrees: "BDS, MDS (Prosthodontics)",
      role: "Clinical Director & Lead Implantologist",
      experience: "16+ Years Surgery",
      quote: "Dental care should never feel intimidating. With 3D computer navigation and digital anesthesia, our patients often tell us they didn't feel a single thing.",
      focusTags: ["Guided 3D Implants", "Full-Arch Restoration", "Digital Smile Design"],
      badge: "Master Fellow, Int. Congress of Oral Implantologists (ICOI)",
      nextSlot: "Next Opening: Tomorrow, 10:30 AM",
      avatarColor: "from-emerald-800 to-[#314a33]",
      accentLight: "#d7f5d8",
      specialistBadge: "Chief Surgeon",
      initials: "AM",
    },
    {
      name: "Dr. Priya Ramachandran",
      degrees: "BDS, MDS (Orthodontics)",
      role: "Lead Orthodontist & Aligner Specialist",
      experience: "12+ Years Orthodontics",
      quote: "A straight, harmonious smile changes how you carry yourself in every room. We design treatments around your lifestyle, completely wire-free.",
      focusTags: ["Invisalign® Diamond Apex", "Clear Aligner Therapy", "Bite Architecture"],
      badge: "Invisalign® Diamond Apex Provider (Top 1% Global)",
      nextSlot: "Next Opening: Thursday, 2:00 PM",
      avatarColor: "from-[#49674a] to-emerald-950",
      accentLight: "#e2f8e4",
      specialistBadge: "Invisalign Master",
      initials: "PR",
    },
    {
      name: "Dr. Sarah Jenkins",
      degrees: "DDS, Pediatric Dental Fellow",
      role: "Head of Pediatric Dental Wellness",
      experience: "10+ Years Gentle Care",
      quote: "Children aren't small adults—they need patience, imagination, and a fearless environment so they grow up loving their dental visits for life.",
      focusTags: ["Fear-Free Child Dentistry", "Ceiling Cinema Visits", "Non-Invasive Fluoride"],
      badge: "Board Certified, American Academy of Pediatric Dentistry",
      nextSlot: "Next Opening: Friday, 11:15 AM",
      avatarColor: "from-[#3e573f] to-[#253926]",
      accentLight: "#d7f5d8",
      specialistBadge: "Child Specialist",
      initials: "SJ",
    },
  ];

  return (
    <section id="doctors" className="py-20 sm:py-24 bg-yali-bg scroll-mt-20 border-t border-yali-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yali-accent text-yali-primary text-xs font-semibold tracking-wide border border-yali-border-mint/80 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Editorial Clinical Faculty</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-yali-primary tracking-tight leading-tight">
            Meet the Guardians of Your Smile
          </h2>
          <p className="text-base text-yali-text-muted leading-relaxed">
            Every specialist at Yali brings hospital fellowship credentials, academic teaching experience, and an unhurried, empathetic bedside touch.
          </p>
        </div>

        {/* 3-Doctor Editorial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group double-bezel hover:-translate-y-1.5 transition-all duration-300 ease-spring shadow-soft hover:shadow-card flex flex-col justify-between"
            >
              <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full bg-white relative overflow-hidden">
                
                <div>
                  {/* Top Editorial Identity & Portrait Card */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    {/* Portrait Avatar with Editorial Frame */}
                    <div className="relative">
                      <div className={`w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-br ${doctor.avatarColor} text-white flex flex-col items-center justify-center shadow-md relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                        {/* Subtle Medical Geometry */}
                        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />
                        <span className="font-extrabold text-2xl tracking-wider font-mono">
                          {doctor.initials}
                        </span>
                        <span className="text-[9px] uppercase tracking-widest text-emerald-200 font-semibold mt-0.5">
                          FACULTY
                        </span>
                      </div>
                      {/* Active Status Dot */}
                      <span
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-xs"
                        title="Accepting Consultations"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      </span>
                    </div>

                    {/* Next Available Pill & Experience */}
                    <div className="text-right space-y-1.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yali-accent text-yali-primary text-[10px] font-bold tracking-tight">
                        <CheckCircle2 className="w-3 h-3 text-yali-primary shrink-0" />
                        <span>{doctor.specialistBadge}</span>
                      </div>
                      <p className="text-[11px] font-semibold text-yali-text-muted">
                        {doctor.experience}
                      </p>
                      <p className="text-[10px] text-emerald-700 font-medium">
                        {doctor.nextSlot}
                      </p>
                    </div>
                  </div>

                  {/* Name & Formal Credentials */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-yali-primary group-hover:text-yali-primary-hover transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-yali-text-muted mt-0.5">
                      {doctor.degrees}
                    </p>
                    <div className="inline-block text-xs font-bold text-yali-primary mt-1.5 px-2.5 py-0.5 rounded-md bg-yali-accent/60">
                      {doctor.role}
                    </div>
                  </div>

                  {/* Clinical Philosophy Quote */}
                  <div className="relative p-4 rounded-2xl bg-yali-bg/80 border border-yali-border/80 mb-6">
                    <Quote className="w-5 h-5 text-yali-primary/25 absolute top-3 right-3 pointer-events-none" />
                    <p className="text-xs sm:text-[13px] text-yali-text font-normal italic leading-relaxed pr-3">
                      &ldquo;{doctor.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Bottom Fellowship & Direct Consult CTA */}
                <div className="pt-4 border-t border-yali-border/60 space-y-3">
                  <div className="flex items-start gap-2 text-[11px] text-yali-text">
                    <Award className="w-4 h-4 text-yali-primary shrink-0 mt-0.5" />
                    <span className="font-semibold text-yali-primary leading-tight">
                      {doctor.badge}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(`Consultation with ${doctor.name}`)}
                    className="w-full py-3 rounded-full bg-yali-accent hover:bg-yali-accent-hover text-yali-primary text-xs font-bold transition-all shadow-xs hover:shadow-sm flex items-center justify-center gap-2 group/btn active:scale-[0.99]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-yali-primary" />
                    <span>Consult with {doctor.name.split(" ")[1]}</span>
                    <ArrowRight className="w-3 h-3 text-yali-primary transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
