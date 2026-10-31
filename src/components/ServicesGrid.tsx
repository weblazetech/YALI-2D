"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Smile,
  Shield,
  Layers,
  Baby,
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Star,
  Zap,
  Check
} from "lucide-react";

interface ServicesGridProps {
  onSelectService: (serviceTitle: string) => void;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
  idealFor: string;
  duration: string;
  bentoBadge?: string;
  isFlagship?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry & Porcelain Veneers",
    tagline: "Signature aesthetic smile architecture with minimal-prep enamel preservation",
    description:
      "Crafted by master prosthodontists using ultra-thin layered porcelain and in-house 3D digital smile simulation. Up to 8 shades lighter in laser whitening, zero-sensitivity guarantee.",
    icon: Sparkles,
    highlights: [
      "In-house 3D Digital Smile Design preview",
      "Hand-layered Japanese biocompatible porcelain",
      "Zero-sensitivity laser whitening option",
      "Minimal-prep conservative enamel preservation"
    ],
    idealFor: "Discolored teeth, minor gaps, chip repairs, and complete smile transformations",
    duration: "2 Gentle Visits",
    bentoBadge: "Signature Procedure",
    isFlagship: true,
  },
  {
    id: "implants",
    title: "Computer-Guided Dental Implants",
    tagline: "Permanent, biological tooth restoration with 3D surgical navigation",
    description:
      "Medical-grade Swiss titanium and zirconia implants placed with sub-millimeter robotic guidance. Eliminates bone loss and restores 100% natural chewing force.",
    icon: Smile,
    highlights: [
      "Sub-millimeter 3D CBCT surgical navigation",
      "Same-day immediate temporary crown options",
      "Lifetime structural manufacturer warranty"
    ],
    idealFor: "Single or multiple missing teeth, failing root canals, or loose dentures",
    duration: "Single-Day Option",
    bentoBadge: "Lifetime Guarantee",
  },
  {
    id: "orthodontics",
    title: "Clear Aligners & Invisalign®",
    tagline: "Discreet alignment without metal brackets or emergency wire visits",
    description:
      "Certified Diamond Apex Invisalign® provider. Custom smart-track aligners engineered for predictable, comfortable tooth movement with remote scan check-ins.",
    icon: Layers,
    highlights: [
      "iTero® 3D digital scanner (no goopy impressions)",
      "Invisible, removable trays for normal eating",
      "Average results in 6 to 12 months"
    ],
    idealFor: "Adult & teen crowding, overbites, spacing, and relapse corrections",
    duration: "6 – 14 Months",
    bentoBadge: "Diamond Apex Provider",
  },
  {
    id: "pediatric",
    title: "Fear-Free Pediatric Dentistry",
    tagline: "Gentle, imaginative dental visits designed for growing smiles",
    description:
      "Specialized pediatric care in a sensory-calming environment. Featuring ceiling Netflix cinema, noise-canceling headphones, and painless Wand® digital anesthesia.",
    icon: Baby,
    highlights: [
      "Wand® computerized zero-needle anesthesia",
      "Ceiling cinema & kid-friendly sensory headsets",
      "BPA-free preventative fissure sealants"
    ],
    idealFor: "Infants, toddlers, children, and teens needing compassionate care",
    duration: "30 – 45 Mins",
    bentoBadge: "Zero-Fear Protocol",
  },
  {
    id: "emergency",
    title: "Same-Day Emergency Relief",
    tagline: "Immediate gentle relief for acute pain, broken teeth, or infections",
    description:
      "Reserved daily emergency slots for urgent dental trauma, severe toothaches, lost crowns, or swollen gums. Compassionate triage with immediate local relief.",
    icon: Activity,
    highlights: [
      "Guaranteed same-day relief appointment",
      "Single-visit rotary microscopic root canal",
      "Digital x-ray diagnosis in under 3 minutes"
    ],
    idealFor: "Severe throbbing pain, chipped front teeth, or dental accidents",
    duration: "Immediate Triage",
    bentoBadge: "Emergency Doctor On Call",
  },
  {
    id: "preventative",
    title: "Preventative Hygiene & 3D Health Scan",
    tagline: "Ultrasonic cavitation cleaning and salivary biomarker diagnostics",
    description:
      "Gentle air-flow polishing without loud scraping sensations, combined with full-arch 3D digital infrared caries scanning to catch issues before symptoms begin.",
    icon: Shield,
    highlights: [
      "Piezo ultrasonic gentle plaque removal",
      "Infrared NIRI early cavity detection without radiation",
      "Complimentary oral cancer & airway assessment"
    ],
    idealFor: "Bi-annual routine wellness maintenance for all family members",
    duration: "45 Mins Routine",
    bentoBadge: "Wellness Foundation",
  },
];

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const flagshipService = servicesData[0]; // Cosmetic & Veneers
  const implantService = servicesData[1]; // Dental Implants
  const alignerService = servicesData[2]; // Clear Aligners
  const pediatricService = servicesData[3]; // Pediatric
  const emergencyService = servicesData[4]; // Emergency
  const preventativeService = servicesData[5]; // Preventative Hygiene

  return (
    <section id="services" className="py-20 sm:py-24 bg-yali-bg scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yali-accent text-yali-primary text-xs font-semibold tracking-wide border border-yali-border-mint/80 shadow-xs">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Curated Clinical Excellence</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-yali-primary tracking-tight leading-tight">
            Specialized Treatments, Zero Compromise
          </h2>
          <p className="text-base text-yali-text-muted leading-relaxed">
            From biological smile restorations to same-day relief, every treatment combines robotic digital accuracy, hospital-grade sterility, and gentle bedside care.
          </p>
        </div>

        {/* Bento Grid Layout (12 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7">
          
          {/* Card 1: HERO FLAGSHIP - Cosmetic & Veneers (Spans 7 Cols) */}
          <div className="lg:col-span-7 group double-bezel hover:-translate-y-1 transition-all duration-300 ease-spring shadow-soft hover:shadow-card flex flex-col">
            <div className="double-bezel-inner p-5 sm:p-7 lg:p-9 flex flex-col justify-between h-full bg-gradient-to-br from-white via-yali-card to-yali-accent/20 relative overflow-hidden">
              {/* Subtle Ambient Glow */}
              <div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-yali-accent/40 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Top Badge & Duration Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5 sm:mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yali-primary text-yali-bg text-xs font-bold tracking-wide shadow-xs shrink-0">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    <span>{flagshipService.bentoBadge}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-yali-text px-2.5 sm:px-3 py-1 rounded-full bg-white/90 border border-yali-border/80 shadow-xs shrink-0">
                    <Clock className="w-3.5 h-3.5 text-yali-primary" />
                    <span>{flagshipService.duration}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-yali-accent text-yali-primary flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-yali-primary tracking-tight group-hover:text-yali-primary-hover transition-colors leading-tight">
                      {flagshipService.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-yali-primary/80 mt-1">
                      {flagshipService.tagline}
                    </p>
                  </div>
                </div>

                {/* Spec Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-6 sm:mb-7">
                  {flagshipService.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-yali-border/60 text-xs text-yali-text font-medium"
                    >
                      <Check className="w-3.5 h-3.5 text-yali-primary shrink-0" />
                      <span className="truncate">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="relative z-10 pt-4 sm:pt-5 border-t border-yali-border/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(flagshipService)}
                  className="text-xs font-bold text-yali-primary hover:text-yali-primary-hover flex items-center justify-center sm:justify-start gap-1.5 group/btn py-1"
                >
                  <span>Clinical case overview</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectService(flagshipService.title)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-yali-primary hover:bg-yali-primary-hover text-yali-bg text-xs font-bold transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-2"
                >
                  <span>Simulate Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Guided Dental Implants (Spans 5 Cols) */}
          <div className="lg:col-span-5 group double-bezel hover:-translate-y-1 transition-all duration-300 ease-spring shadow-soft hover:shadow-card flex flex-col">
            <div className="double-bezel-inner p-5 sm:p-7 lg:p-8 flex flex-col justify-between h-full bg-white relative">
              <div>
                {/* Top Badge & Duration */}
                <div className="flex items-center justify-between gap-2 mb-5 sm:mb-6">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-yali-accent text-yali-primary text-[10px] sm:text-[11px] font-bold shrink-0">
                    {implantService.bentoBadge}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-yali-text-muted px-2.5 py-1 rounded-full bg-yali-bg border border-yali-border/70 shrink-0">
                    <Clock className="w-3 h-3 text-yali-primary" />
                    <span>{implantService.duration}</span>
                  </div>
                </div>

                {/* Icon & Title */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-yali-accent text-yali-primary flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform shrink-0">
                  <Smile className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-yali-primary group-hover:text-yali-primary-hover transition-colors leading-tight">
                  {implantService.title}
                </h3>
                <p className="text-xs font-semibold text-yali-primary/80 mt-1 mb-4">
                  {implantService.tagline}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5 sm:mb-6">
                  {implantService.highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-yali-text">
                      <CheckCircle2 className="w-3.5 h-3.5 text-yali-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-yali-border/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(implantService)}
                  className="text-xs font-bold text-yali-primary hover:text-yali-primary-hover flex items-center gap-1 group/btn"
                >
                  <span>Protocol details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={() => onSelectService(implantService.title)}
                  className="px-3.5 sm:px-4 py-1.5 rounded-full bg-yali-accent hover:bg-yali-accent-hover text-yali-primary text-xs font-bold transition-colors"
                >
                  Book Consult
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Clear Aligners & Invisalign (Spans 4 Cols) */}
          <div className="lg:col-span-4 group double-bezel hover:-translate-y-1 transition-all duration-300 ease-spring shadow-soft hover:shadow-card flex flex-col">
            <div className="double-bezel-inner p-5 sm:p-7 flex flex-col justify-between h-full bg-white">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-yali-accent text-yali-primary flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-yali-accent text-yali-primary shrink-0">
                    {alignerService.bentoBadge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-yali-primary mb-1">
                  {alignerService.title}
                </h3>
                <p className="text-xs font-semibold text-yali-primary/80 mb-3">
                  {alignerService.tagline}
                </p>
                <div className="space-y-1.5 mb-5">
                  {alignerService.highlights.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-yali-text">
                      <Check className="w-3.5 h-3.5 text-yali-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-yali-border/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(alignerService)}
                  className="text-xs font-bold text-yali-primary hover:text-yali-primary-hover"
                >
                  Details
                </button>
                <button
                  type="button"
                  onClick={() => onSelectService(alignerService.title)}
                  className="px-3 sm:px-3.5 py-1.5 rounded-full bg-yali-accent hover:bg-yali-accent-hover text-yali-primary text-xs font-bold transition-colors"
                >
                  Schedule Scan
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Fear-Free Pediatric Care (Spans 4 Cols) */}
          <div className="lg:col-span-4 group double-bezel hover:-translate-y-1 transition-all duration-300 ease-spring shadow-soft hover:shadow-card flex flex-col">
            <div className="double-bezel-inner p-5 sm:p-7 flex flex-col justify-between h-full bg-white">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-yali-accent text-yali-primary flex items-center justify-center shrink-0">
                    <Baby className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-yali-accent text-yali-primary shrink-0">
                    {pediatricService.bentoBadge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-yali-primary mb-1">
                  {pediatricService.title}
                </h3>
                <p className="text-xs font-semibold text-yali-primary/80 mb-3">
                  {pediatricService.tagline}
                </p>
                <div className="space-y-1.5 mb-5">
                  {pediatricService.highlights.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-yali-text">
                      <Check className="w-3.5 h-3.5 text-yali-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-yali-border/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(pediatricService)}
                  className="text-xs font-bold text-yali-primary hover:text-yali-primary-hover"
                >
                  Details
                </button>
                <button
                  type="button"
                  onClick={() => onSelectService(pediatricService.title)}
                  className="px-3 sm:px-3.5 py-1.5 rounded-full bg-yali-accent hover:bg-yali-accent-hover text-yali-primary text-xs font-bold transition-colors"
                >
                  Kids Visit
                </button>
              </div>
            </div>
          </div>

          {/* Card 5: Same-Day Emergency Relief (Spans 4 Cols) */}
          <div className="lg:col-span-4 group double-bezel hover:-translate-y-1 transition-all duration-300 ease-spring shadow-soft hover:shadow-card flex flex-col">
            <div className="double-bezel-inner p-5 sm:p-7 flex flex-col justify-between h-full bg-gradient-to-br from-white to-amber-50/40 border border-amber-200/60">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  {/* Live availability indicator */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-[10px] sm:text-[11px] font-bold shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open Today</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-yali-primary mb-1">
                  {emergencyService.title}
                </h3>
                <p className="text-xs font-semibold text-amber-900/80 mb-3">
                  {emergencyService.tagline}
                </p>
                <div className="space-y-1.5 mb-5">
                  {emergencyService.highlights.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-yali-text">
                      <Zap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-amber-200/50 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(emergencyService)}
                  className="text-xs font-bold text-amber-900 hover:text-amber-950"
                >
                  Urgent details
                </button>
                <button
                  type="button"
                  onClick={() => onSelectService(emergencyService.title)}
                  className="px-3 sm:px-3.5 py-1.5 rounded-full bg-yali-primary hover:bg-yali-primary-hover text-yali-bg text-xs font-bold transition-colors shadow-xs"
                >
                  Urgent Slot
                </button>
              </div>
            </div>
          </div>

          {/* Card 6: Preventative Laser Hygiene & 3D Health Scan (Spans Full 12 Cols) */}
          <div className="lg:col-span-12 group double-bezel hover:-translate-y-1 transition-all duration-300 ease-spring shadow-soft hover:shadow-card flex flex-col">
            <div className="double-bezel-inner p-5 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-white relative overflow-hidden">
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-yali-accent text-yali-primary flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-yali-primary">
                      {preventativeService.title}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-yali-accent text-yali-primary">
                      {preventativeService.bentoBadge}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-yali-text-muted flex items-center gap-1 font-semibold">
                      <Clock className="w-3 h-3 text-yali-primary" /> {preventativeService.duration}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-yali-text-muted max-w-3xl leading-relaxed">
                    {preventativeService.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1 pt-2 text-xs text-yali-text">
                    {preventativeService.highlights.map((item, idx) => (
                      <span key={idx} className="flex items-center gap-1.5 font-medium">
                        <Check className="w-3.5 h-3.5 text-yali-primary shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3 w-full lg:w-auto pt-3 lg:pt-0 border-t lg:border-t-0 border-yali-border/60">
                <button
                  type="button"
                  onClick={() => setSelectedService(preventativeService)}
                  className="flex-1 lg:flex-none px-4 py-2.5 rounded-full border border-yali-border text-yali-text text-xs font-semibold hover:bg-yali-bg transition-colors"
                >
                  Learn More
                </button>
                <button
                  type="button"
                  onClick={() => onSelectService(preventativeService.title)}
                  className="flex-1 lg:flex-none px-5 py-2.5 rounded-full bg-yali-primary hover:bg-yali-primary-hover text-yali-bg text-xs font-bold transition-colors shadow-xs"
                >
                  Schedule Checkup
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Informative Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-yali-text/50 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-lg rounded-3xl bg-yali-bg border border-yali-border shadow-elevated p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-yali-text-muted hover:text-yali-text hover:bg-yali-accent transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="w-14 h-14 rounded-2xl bg-yali-accent text-yali-primary flex items-center justify-center mb-4">
                <selectedService.icon className="w-7 h-7" />
              </div>

              <div className="text-xs font-semibold text-yali-primary tracking-wide uppercase">
                Clinical Overview
              </div>
              <h3 className="text-2xl font-bold text-yali-primary mt-1">
                {selectedService.title}
              </h3>
              <p className="text-xs text-yali-text-muted mt-1 italic">
                {selectedService.tagline}
              </p>

              <div className="my-5 p-4 rounded-2xl bg-white border border-yali-border space-y-3 text-sm">
                <p className="text-yali-text leading-relaxed">
                  {selectedService.description}
                </p>
                <div className="text-xs text-yali-text-muted pt-2 border-t border-yali-border">
                  <strong className="text-yali-primary">Best Suited For:</strong> {selectedService.idealFor}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold text-yali-text uppercase">Key Treatment Benefits:</div>
                {selectedService.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-yali-text">
                    <CheckCircle2 className="w-4 h-4 text-yali-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectService(title);
                  }}
                  className="flex-1 py-3 rounded-full bg-yali-primary hover:bg-yali-primary-hover text-yali-bg text-sm font-semibold transition-colors"
                >
                  Schedule This Service
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 rounded-full border border-yali-border text-yali-text text-sm font-medium hover:bg-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
