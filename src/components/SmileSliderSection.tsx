"use client";

import React, { useState, useRef, useCallback } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Clock, Check, Eye } from "lucide-react";

interface SmileSliderSectionProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

interface CaseStudy {
  id: string;
  name: string;
  category: string;
  serviceTitle: string;
  diagnosis: string;
  solution: string;
  timeline: string;
  comfortLevel: string;
  doctor: string;
  tag: string;
}

const cases: CaseStudy[] = [
  {
    id: "invisalign",
    name: "Clear Aligners / Invisalign®",
    category: "Orthodontics",
    serviceTitle: "Orthodontics & Clear Aligners",
    diagnosis: "Moderate maxillary crowding, minor crossbite, and midline asymmetry",
    solution: "14 custom SmartTrack® clear aligner trays with bi-weekly digital monitoring",
    timeline: "6 Months Total",
    comfortLevel: "100% Painless (Zero metal brackets)",
    doctor: "Dr. Priya Ramachandran, Lead Orthodontist",
    tag: "Crowded Bite ➔ Symmetrical Arch",
  },
  {
    id: "veneers",
    name: "Porcelain Veneers & Whitening",
    category: "Cosmetics",
    serviceTitle: "Teeth Whitening & Cosmetic",
    diagnosis: "Enamel micro-fractures, tetracycline discoloration, and irregular edges",
    solution: "6 ultra-thin minimal-prep e.max® porcelain veneers + 1 session laser whitening",
    timeline: "2 Visits (10 Days)",
    comfortLevel: "Gentle Local Wand® Anesthesia",
    doctor: "Dr. Arvind Menon, Clinical Director",
    tag: "Discolored Enamel ➔ Luminous Smile",
  },
  {
    id: "implant",
    name: "Guided Dental Implant",
    category: "Restoration",
    serviceTitle: "Dental Implants",
    diagnosis: "Single anterior tooth loss following sports trauma with bone recession risk",
    solution: "Computer-guided titanium implant fixture with bio-matched zirconia crown",
    timeline: "Same-Day Temporary, Final in 8 Wks",
    comfortLevel: "100% Pain-Free Digital Protocol",
    doctor: "Dr. Arvind Menon, Implantologist",
    tag: "Tooth Gap ➔ Undetectable Tooth",
  },
];

export default function SmileSliderSection({ onOpenBooking }: SmileSliderSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("invisalign");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = cases.find((c) => c.id === activeTab) || cases[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPercent);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <section id="makeovers" className="py-20 bg-yali-bg scroll-mt-20 border-t border-yali-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yali-accent text-yali-primary text-xs font-semibold tracking-wide border border-yali-border-mint/80">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Visual Proof</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-yali-primary tracking-tight leading-tight">
            Before & After Smile Makeovers
          </h2>
          <p className="text-sm sm:text-base text-yali-text-muted leading-relaxed">
            Drag the interactive slider handle left and right to inspect real patient transformations achieved through digital planning and gentle dentistry.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveTab(c.id);
                setSliderPosition(50);
              }}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ease-spring ${
                activeTab === c.id
                  ? "bg-yali-primary text-yali-bg shadow-sm scale-[1.02]"
                  : "bg-white text-yali-text hover:bg-yali-accent/60 border border-yali-border/80"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Main Interactive Stage & Spec Sheet (2-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Interactive Split-Screen Slider (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="double-bezel shadow-elevated h-full flex flex-col">
              <div className="double-bezel-inner p-4 sm:p-6 flex-1 flex flex-col justify-between">
                
                {/* Drag Stage Canvas Container */}
                <div
                  ref={containerRef}
                  onMouseMove={(e) => isDragging && handleMove(e.clientX)}
                  onTouchMove={handleTouchMove}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white select-none cursor-ew-resize border border-yali-border shadow-inner"
                  role="slider"
                  aria-label="Before and After transformation slider"
                  aria-valuenow={Math.round(sliderPosition)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {/* Layer 1: "BEFORE" State (Base Layer) */}
                  <div className="absolute inset-0 w-full h-full">
                    {renderSmileGraphic(activeTab, "before")}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-yali-text/80 text-white text-[11px] font-bold tracking-wider uppercase backdrop-blur-sm shadow-xs">
                      Before
                    </div>
                  </div>

                  {/* Layer 2: "AFTER" State (Clipped on Top) */}
                  <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    {renderSmileGraphic(activeTab, "after")}
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-yali-primary text-yali-bg text-[11px] font-bold tracking-wider uppercase backdrop-blur-sm shadow-xs">
                      After
                    </div>
                  </div>

                  {/* Vertical Divider Line with Tactile Draggable Handle */}
                  <div
                    className="absolute top-0 bottom-0 z-20 pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    {/* Line */}
                    <div className="w-0.5 h-full bg-yali-primary shadow-sm -ml-[1px]" />

                    {/* Circular Grip Knob */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-yali-primary shadow-elevated flex items-center justify-center text-yali-primary font-bold text-xs pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                      <div className="flex items-center gap-0.5 select-none">
                        <span>◀</span>
                        <span>▶</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-label under slider */}
                <div className="mt-4 flex items-center justify-between text-xs text-yali-text-muted px-1">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-yali-primary" /> Drag handle across smile
                  </span>
                  <span className="font-semibold text-yali-primary">{activeCase.tag}</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Clinical Spec Sheet & Action (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="double-bezel shadow-elevated h-full flex flex-col">
              <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                
                <div>
                  {/* Category Pill */}
                  <div className="inline-block px-3 py-1 rounded-full bg-yali-accent text-yali-primary text-xs font-bold uppercase tracking-wider mb-3">
                    {activeCase.category} Case Study
                  </div>

                  <h3 className="text-2xl font-bold text-yali-primary tracking-tight">
                    {activeCase.name}
                  </h3>
                  <p className="text-xs text-yali-text-muted mt-1 italic">
                    Supervised by {activeCase.doctor}
                  </p>

                  {/* Clinical Breakdown */}
                  <div className="mt-6 space-y-4">
                    <div className="p-3.5 rounded-2xl bg-yali-bg border border-yali-border/80">
                      <div className="text-[11px] font-bold text-yali-primary uppercase tracking-wide">
                        Initial Diagnosis
                      </div>
                      <div className="text-xs text-yali-text mt-0.5 leading-relaxed">
                        {activeCase.diagnosis}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-yali-bg border border-yali-border/80">
                      <div className="text-[11px] font-bold text-yali-primary uppercase tracking-wide">
                        Clinical Treatment Performed
                      </div>
                      <div className="text-xs text-yali-text mt-0.5 leading-relaxed">
                        {activeCase.solution}
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-yali-border/60">
                    <div className="flex items-start gap-2 text-xs">
                      <Clock className="w-4 h-4 text-yali-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] text-yali-text-muted block">Duration</span>
                        <strong className="text-yali-text font-bold">{activeCase.timeline}</strong>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs">
                      <ShieldCheck className="w-4 h-4 text-yali-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] text-yali-text-muted block">Comfort Standard</span>
                        <strong className="text-yali-primary font-bold">{activeCase.comfortLevel}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct CTA Button */}
                <div className="pt-4 border-t border-yali-border/80">
                  <button
                    onClick={() => onOpenBooking(activeCase.serviceTitle)}
                    className="w-full pl-6 pr-2 py-2 rounded-full bg-yali-primary hover:bg-yali-primary-hover text-yali-bg font-semibold text-sm transition-all duration-300 ease-spring shadow-card hover:shadow-elevated flex items-center justify-between group active:scale-[0.98]"
                  >
                    <span>Simulate My Smile Consultation</span>
                    <span className="w-8 h-8 rounded-full bg-yali-accent text-yali-primary flex items-center justify-center transition-transform duration-300 ease-spring group-hover:translate-x-1 group-hover:scale-105 shadow-xs">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                  <p className="text-[11px] text-center text-yali-text-muted mt-2.5">
                    Includes digital 3D preview of your proposed smile prior to treatment.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/**
 * High-definition anatomical dental smile illustration renderer
 * Renders realistic arches, gum line curvatures, tooth anatomy, and lighting reflections.
 */
function renderSmileGraphic(caseId: string, state: "before" | "after") {
  if (caseId === "invisalign") {
    return (
      <svg viewBox="0 0 500 375" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Soft Clinical Dental Background */}
        <rect width="500" height="375" fill="#FAF6F0" />
        {/* Ambient Warm Gingival Arch */}
        <ellipse cx="250" cy="180" rx="190" ry="120" fill="#E8DCD0" fillOpacity="0.4" />
        
        {/* Healthy Gum Contour Arc */}
        <path
          d="M80 155 Q 250 110 420 155 Q 430 190 420 220 Q 250 250 80 220 Z"
          fill="#E5B3A7"
        />

        {/* Dental Teeth Composition */}
        <g id="teeth-arch">
          {state === "before" ? (
            // Crowded, Overlapping & Rotated Teeth
            <>
              {/* Left Premolar */}
              <rect x="110" y="145" width="40" height="58" rx="14" fill="#EFE8D8" stroke="#D3C7B2" strokeWidth="2" />
              {/* Left Canine (Shifted upward) */}
              <rect x="145" y="132" width="44" height="68" rx="16" fill="#F4EFE2" stroke="#D3C7B2" strokeWidth="2" transform="rotate(-6 145 132)" />
              {/* Left Lateral Incisor (Rotated inward & recessed) */}
              <rect x="185" y="142" width="38" height="62" rx="12" fill="#E9E2D2" stroke="#CCA788" strokeWidth="2" transform="rotate(8 185 142)" />
              {/* Central Left Incisor (Prominent overlap) */}
              <rect x="215" y="136" width="48" height="74" rx="14" fill="#F9F6ED" stroke="#D3C7B2" strokeWidth="2" />
              {/* Central Right Incisor (Tilted overlap) */}
              <rect x="256" y="138" width="48" height="74" rx="14" fill="#F4EFE2" stroke="#D3C7B2" strokeWidth="2" transform="rotate(-4 256 138)" />
              {/* Right Lateral Incisor (Crowded behind) */}
              <rect x="300" y="144" width="38" height="60" rx="12" fill="#EAE3D3" stroke="#D3C7B2" strokeWidth="2" />
              {/* Right Canine */}
              <rect x="332" y="136" width="44" height="66" rx="16" fill="#F4EFE2" stroke="#D3C7B2" strokeWidth="2" transform="rotate(5 332 136)" />
              {/* Right Premolar */}
              <rect x="370" y="145" width="40" height="58" rx="14" fill="#EFE8D8" stroke="#D3C7B2" strokeWidth="2" />
            </>
          ) : (
            // Perfectly Aligned & Symmetrical Arch (Invisalign After)
            <>
              {/* Left Premolar */}
              <rect x="110" y="142" width="42" height="60" rx="14" fill="#FFFFFF" stroke="#D7E9D8" strokeWidth="2" />
              {/* Left Canine */}
              <rect x="150" y="136" width="44" height="68" rx="16" fill="#FFFFFF" stroke="#D7E9D8" strokeWidth="2" />
              {/* Left Lateral Incisor (Harmonious alignment) */}
              <rect x="192" y="138" width="42" height="66" rx="14" fill="#FCFCFC" stroke="#D7E9D8" strokeWidth="2" />
              {/* Central Left Incisor */}
              <rect x="232" y="134" width="46" height="74" rx="14" fill="#FFFFFF" stroke="#D7E9D8" strokeWidth="2" />
              {/* Central Right Incisor */}
              <rect x="276" y="134" width="46" height="74" rx="14" fill="#FFFFFF" stroke="#D7E9D8" strokeWidth="2" />
              {/* Right Lateral Incisor */}
              <rect x="320" y="138" width="42" height="66" rx="14" fill="#FCFCFC" stroke="#D7E9D8" strokeWidth="2" />
              {/* Right Canine */}
              <rect x="360" y="136" width="44" height="68" rx="16" fill="#FFFFFF" stroke="#D7E9D8" strokeWidth="2" />
              {/* Enamel Specular Radiance */}
              <path d="M245 142 Q 255 145 250 165" stroke="#D7F5D8" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
              <path d="M290 142 Q 300 145 295 165" stroke="#D7F5D8" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            </>
          )}
        </g>

        {/* Lower Lip Arc Boundary */}
        <path
          d="M70 215 Q 250 265 430 215 Q 410 285 250 295 Q 90 285 70 215 Z"
          fill="#D68A80"
        />
      </svg>
    );
  }

  if (caseId === "veneers") {
    return (
      <svg viewBox="0 0 500 375" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="500" height="375" fill="#FAF6F0" />
        <ellipse cx="250" cy="180" rx="190" ry="120" fill="#E8DCD0" fillOpacity="0.4" />
        <path d="M80 155 Q 250 110 420 155 Q 430 190 420 220 Q 250 250 80 220 Z" fill="#E5B3A7" />

        <g id="teeth-arch-veneers">
          {state === "before" ? (
            // Yellowed, dull enamel with chipped central edge
            <>
              <rect x="115" y="144" width="42" height="58" rx="12" fill="#E4D6BD" stroke="#C5B498" strokeWidth="2" />
              <rect x="155" y="138" width="44" height="66" rx="14" fill="#DDD0B4" stroke="#C5B498" strokeWidth="2" />
              <rect x="197" y="140" width="42" height="64" rx="12" fill="#E2D4BA" stroke="#C5B498" strokeWidth="2" />
              {/* Central Left Incisor (Micro-chipped bottom edge) */}
              <path
                d="M237 135 H283 V205 L275 208 L265 204 L255 207 L237 205 Z"
                fill="#DDD0B4"
                stroke="#C5B498"
                strokeWidth="2"
              />
              {/* Central Right Incisor (Discolored hairline fracture) */}
              <rect x="281" y="135" width="46" height="72" rx="12" fill="#D8CAA8" stroke="#C5B498" strokeWidth="2" />
              <path d="M298 145 L303 165 L299 185" stroke="#B8A786" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="325" y="140" width="42" height="64" rx="12" fill="#E2D4BA" stroke="#C5B498" strokeWidth="2" />
              <rect x="365" y="138" width="44" height="66" rx="14" fill="#DDD0B4" stroke="#C5B498" strokeWidth="2" />
            </>
          ) : (
            // Hollywood Luminous e.max® Porcelain Veneers (Bright Pearl White)
            <>
              <rect x="115" y="140" width="42" height="62" rx="14" fill="#FFFFFF" stroke="#D7F5D8" strokeWidth="2" />
              <rect x="155" y="134" width="44" height="68" rx="16" fill="#FFFFFF" stroke="#D7F5D8" strokeWidth="2" />
              <rect x="197" y="136" width="42" height="66" rx="14" fill="#FFFFFF" stroke="#D7F5D8" strokeWidth="2" />
              {/* Seamless, Mirror-Smooth Central Veneers */}
              <rect x="237" y="132" width="46" height="76" rx="15" fill="#FFFFFF" stroke="#D7F5D8" strokeWidth="2" />
              <rect x="281" y="132" width="46" height="76" rx="15" fill="#FFFFFF" stroke="#D7F5D8" strokeWidth="2" />
              <rect x="325" y="136" width="42" height="66" rx="14" fill="#FFFFFF" stroke="#D7F5D8" strokeWidth="2" />
              <rect x="365" y="134" width="44" height="68" rx="16" fill="#FFFFFF" stroke="#D7F5D8" strokeWidth="2" />

              {/* Radiant Porcelain Highlights */}
              <ellipse cx="250" cy="155" rx="5" ry="12" fill="#EFFBF0" />
              <ellipse cx="295" cy="155" rx="5" ry="12" fill="#EFFBF0" />
              <circle cx="260" cy="145" r="3" fill="#49674A" opacity="0.3" />
              {/* Sparkle Flares */}
              <path d="M235 130 L237 135 L242 137 L237 139 L235 144 L233 139 L228 137 L233 135 Z" fill="#49674A" />
              <path d="M325 134 L327 138 L331 140 L327 142 L325 146 L323 142 L319 140 L323 138 Z" fill="#49674A" />
            </>
          )}
        </g>

        <path d="M70 215 Q 250 265 430 215 Q 410 285 250 295 Q 90 285 70 215 Z" fill="#D68A80" />
      </svg>
    );
  }

  // Guided Dental Implant
  return (
    <svg viewBox="0 0 500 375" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="500" height="375" fill="#FAF6F0" />
      <ellipse cx="250" cy="180" rx="190" ry="120" fill="#E8DCD0" fillOpacity="0.4" />
      <path d="M80 155 Q 250 110 420 155 Q 430 190 420 220 Q 250 250 80 220 Z" fill="#E5B3A7" />

      <g id="teeth-arch-implant">
        {state === "before" ? (
          // Noticeable gap where right lateral incisor is missing
          <>
            <rect x="115" y="142" width="42" height="60" rx="14" fill="#FBF8F0" stroke="#D3C7B2" strokeWidth="2" />
            <rect x="155" y="136" width="44" height="68" rx="16" fill="#FAF5E8" stroke="#D3C7B2" strokeWidth="2" />
            <rect x="197" y="138" width="42" height="66" rx="14" fill="#FAF5E8" stroke="#D3C7B2" strokeWidth="2" />
            <rect x="237" y="134" width="46" height="74" rx="14" fill="#FDFCFA" stroke="#D3C7B2" strokeWidth="2" />
            <rect x="281" y="134" width="46" height="74" rx="14" fill="#FDFCFA" stroke="#D3C7B2" strokeWidth="2" />
            
            {/* MISSING GAP (empty shaded socket area) */}
            <rect x="325" y="148" width="42" height="52" rx="10" fill="#754842" fillOpacity="0.45" stroke="#B87B72" strokeWidth="2" strokeDasharray="4 4" />
            <text x="333" y="178" fill="#5A2E2A" fontSize="10" fontWeight="bold">GAP</text>

            <rect x="365" y="136" width="44" height="68" rx="16" fill="#FAF5E8" stroke="#D3C7B2" strokeWidth="2" />
          </>
        ) : (
          // Bio-compatible Zirconia Implant Crown seamlessly restored
          <>
            <rect x="115" y="142" width="42" height="60" rx="14" fill="#FFFFFF" stroke="#D7E9D8" strokeWidth="2" />
            <rect x="155" y="136" width="44" height="68" rx="16" fill="#FFFFFF" stroke="#D7E9D8" strokeWidth="2" />
            <rect x="197" y="138" width="42" height="66" rx="14" fill="#FFFFFF" stroke="#D7E9D8" strokeWidth="2" />
            <rect x="237" y="134" width="46" height="74" rx="14" fill="#FFFFFF" stroke="#D7E9D8" strokeWidth="2" />
            <rect x="281" y="134" width="46" height="74" rx="14" fill="#FFFFFF" stroke="#D7E9D8" strokeWidth="2" />

            {/* RESTORED PERMANENT IMPLANT CROWN */}
            <rect x="325" y="138" width="42" height="66" rx="14" fill="#FFFFFF" stroke="#49674A" strokeWidth="2.5" />
            <path d="M340 148 V168" stroke="#D7F5D8" strokeWidth="2.5" strokeLinecap="round" />

            <rect x="365" y="136" width="44" height="68" rx="16" fill="#FFFFFF" stroke="#D7E9D8" strokeWidth="2" />
            
            {/* Precision Indicator Tag */}
            <g transform="translate(330, 208)">
              <rect width="32" height="14" rx="4" fill="#49674A" />
              <text x="5" y="10" fill="#FFFBF6" fontSize="8" fontWeight="bold">FIXED</text>
            </g>
          </>
        )}
      </g>

      <path d="M70 215 Q 250 265 430 215 Q 410 285 250 295 Q 90 285 70 215 Z" fill="#D68A80" />
    </svg>
  );
}

