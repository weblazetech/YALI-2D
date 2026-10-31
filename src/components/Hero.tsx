"use client";

import React from "react";
import {
  Star,
  ShieldCheck,
  Heart,
  Sparkles,
  ArrowRight,
  Clock,
  Award,
  Users,
  Zap,
  Layers,
  Headphones
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle organic background volumetric glow */}
      <div 
        className="absolute top-0 right-0 -mr-28 -mt-24 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-yali-accent/60 via-yali-accent/20 to-transparent blur-3xl pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-0 -ml-20 w-80 h-80 rounded-full bg-yali-accent/35 blur-3xl pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Reassurance & Headline */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Subtle Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yali-accent/80 text-yali-primary text-xs sm:text-sm font-semibold tracking-wide shadow-xs border border-yali-border-mint/80 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yali-primary" />
              <span>Compassionate Dental Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[26px] xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-yali-primary tracking-tight leading-[1.22] sm:leading-[1.15]">
              Modern, Painless <br className="sm:hidden" />
              <span className="relative inline-block">
                Dentistry
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2.5 text-yali-accent -z-10 pointer-events-none"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 3 150 3 197 9"
                    stroke="#bde7be"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              <br className="sm:hidden" />
              for the Whole Family.
            </h1>

            {/* Subtitle Reassurance */}
            <p className="text-base sm:text-lg text-yali-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Say goodbye to dental anxiety. At Yali Dental Clinic, we combine gentle touch, computerized painless anesthesia, and hospital-grade sterilization in a calming, welcoming environment you’ll actually look forward to visiting.
            </p>

            {/* Action Group: Button-in-Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 sm:pl-7 sm:pr-2 py-3 sm:py-2 rounded-full bg-yali-primary hover:bg-yali-primary-hover text-yali-bg font-semibold text-sm sm:text-base transition-all duration-300 ease-spring shadow-card hover:shadow-elevated flex items-center justify-center sm:justify-start gap-3 sm:gap-4 group active:scale-[0.98]"
              >
                <span>Book an Appointment</span>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-yali-accent text-yali-primary flex items-center justify-center transition-transform duration-300 ease-spring group-hover:translate-x-1 group-hover:scale-105 shadow-xs shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <a
                href="#services"
                onClick={scrollToServices}
                className="w-full sm:w-auto px-7 py-3 sm:py-3 rounded-full border border-yali-primary/30 hover:border-yali-primary text-yali-primary hover:bg-yali-accent/50 font-semibold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 group text-center"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="pt-4 border-t border-yali-border/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-4 sm:gap-x-8 text-xs sm:text-sm font-medium text-yali-text">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-amber-400 stroke-amber-500" />
                  ))}
                </div>
                <span className="font-bold text-yali-primary tabular-nums">4.9/5 Rating</span>
              </div>

              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-yali-text/25" />

              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-yali-primary" />
                <span className="font-semibold text-yali-text tabular-nums">5,000+ Happy Smiles</span>
              </div>

              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-yali-text/25" />

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-yali-primary" />
                <span className="font-semibold text-yali-text">ISO Certified Clinic</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic with Double-Bezel and Layered Depth */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Aura Backing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-yali-accent/50 via-white/40 to-yali-primary/10 rounded-[2.5rem] blur-xl -z-10" />

            {/* Double-Bezel Outer Shell */}
            <div className="double-bezel max-w-md lg:max-w-none mx-auto shadow-elevated">
              {/* Double-Bezel Inner Core */}
              <div className="double-bezel-inner p-5 sm:p-7 relative overflow-hidden">
                
                {/* SVG Visual Composition: Modern Dental Suite & Radiance */}
                <div className="aspect-[4/3] w-full relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 400 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full max-h-72 drop-shadow-sm select-none"
                  >
                    {/* Background Clinic Arc Pattern */}
                    <circle cx="200" cy="150" r="130" fill="#D7F5D8" fillOpacity="0.4" />
                    <circle cx="200" cy="150" r="95" stroke="#49674A" strokeOpacity="0.18" strokeDasharray="6 6" />
                    
                    {/* Stylized Modern Clinic Chair & Ergonomic Base */}
                    <path
                      d="M100 240H300C300 240 280 200 260 190C240 180 230 185 200 185C170 185 160 180 140 190C120 200 100 240 100 240Z"
                      fill="#E6F2E7"
                      stroke="#49674A"
                      strokeWidth="2.5"
                    />
                    {/* Precision Medical Laser / Scan Arm */}
                    <path
                      d="M290 80L240 120M240 120L210 110M240 120V150"
                      stroke="#49674A"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="290" cy="80" r="10" fill="#49674A" />
                    <circle cx="240" cy="120" r="6" fill="#D7F5D8" stroke="#49674A" strokeWidth="2" />
                    
                    {/* Focal Modern Tooth Graphic */}
                    <g transform="translate(150, 70)">
                      <rect width="100" height="100" rx="30" fill="#49674A" className="drop-shadow-md" />
                      {/* Shield Tooth */}
                      <path
                        d="M50 20C40 20 30 25 28 36C26 45 28 54 31 62C34 71 37 80 43 82C46 83 48 79 50 74C52 79 54 83 57 82C63 80 66 71 69 62C72 54 74 45 72 36C70 25 60 20 50 20Z"
                        fill="#FFFBF6"
                      />
                      <path
                        d="M50 34C57 34 62 40 62 47C62 55 54 62 50 66C46 62 38 55 38 47C38 40 43 34 50 34Z"
                        fill="#D7F5D8"
                      />
                      <circle cx="50" cy="46" r="4" fill="#49674A" />
                      {/* Sparkles */}
                      <path d="M78 28L80 34L86 36L80 38L78 44L76 38L70 36L76 34L78 28Z" fill="#D7F5D8" />
                      <path d="M22 68L23 72L27 73L23 74L22 78L21 74L17 73L21 72L22 68Z" fill="#D7F5D8" />
                    </g>

                    {/* Calming Wave Graphic */}
                    <path
                      d="M60 260C110 245 160 265 210 250C260 235 310 255 340 248"
                      stroke="#49674A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>

                {/* Patient Reassurance Mini Callout */}
                <div className="mt-4 pt-4 border-t border-yali-border/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yali-primary shrink-0" />
                    <span className="font-semibold text-yali-text">Sterilization Class B Standard</span>
                  </div>
                  <span className="text-yali-primary font-bold">100% Sterile</span>
                </div>
              </div>

              {/* Floating Node 1: Accepting New Patients (Top-Right) */}
              <div className="absolute top-4 right-3 sm:top-7 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl px-3 sm:px-3.5 py-1.5 sm:py-2 border border-yali-border-mint shadow-soft flex items-center gap-2 sm:gap-2.5 animate-bounce-slow">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-yali-primary">Status</span>
                  <span className="text-xs font-bold text-yali-text whitespace-nowrap">Accepting Patients</span>
                </div>
              </div>

              {/* Floating Node 2: Painless Wand Anesthesia (Bottom-Left) */}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-yali-border shadow-card flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-yali-accent flex items-center justify-center text-yali-primary shrink-0">
                  <Zap className="w-4 h-4 text-yali-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-yali-primary">Wand® Digital Anesthesia</div>
                  <div className="text-[10px] text-yali-text-muted">Zero-pinch computerized flow</div>
                </div>
              </div>

              {/* Floating Node 3: 3D Scan Precision (Middle-Right) */}
              <div className="hidden sm:flex absolute top-1/2 -translate-y-8 -right-3 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-2 border border-yali-border shadow-soft items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-yali-accent/80 flex items-center justify-center text-yali-primary shrink-0">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-yali-text">
                  3D Scan in 90s
                </div>
              </div>
            </div>

            {/* Experience Pill under visual */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2.5 rounded-2xl bg-yali-accent/40 border border-yali-accent/80 text-xs text-yali-text text-center sm:text-left">
              <span className="flex items-center gap-1.5 font-medium">
                <Headphones className="w-3.5 h-3.5 text-yali-primary shrink-0" /> Bose Acoustic Sanctuary & Netflix
              </span>
              <span className="font-bold text-yali-primary flex items-center gap-1 shrink-0">
                <Clock className="w-3 h-3" /> &lt;8m Wait Time
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
