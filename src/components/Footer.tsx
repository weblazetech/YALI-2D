import React from "react";
import {
  MapPin,
  Clock,
  ShieldCheck,
  Navigation,
} from "lucide-react";
import ToothLogo from "./ToothLogo";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#f5ede3] text-yali-text pt-16 pb-12 border-t border-yali-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-yali-border">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <ToothLogo size={56} />
              <div>
                <span className="font-extrabold text-xl tracking-tight text-yali-primary block">
                  Yali Dental Clinic
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-yali-text-muted uppercase">
                  Guardians of Your Smile
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-yali-text-muted leading-relaxed max-w-sm">
              Providing modern, compassionate, and painless dental healthcare to individuals and families. Built on trust, gentle expertise, and hospital-grade safety.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-yali-primary">
              <ShieldCheck className="w-4 h-4 text-yali-primary" />
              <span>Certified ADA & ISO 9001:2015 Accredited</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-yali-primary uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="text-yali-text-muted hover:text-yali-primary transition-colors">
                  Treatments & Services
                </a>
              </li>
              <li>
                <a href="#why-yali" className="text-yali-text-muted hover:text-yali-primary transition-colors">
                  Why Choose Yali
                </a>
              </li>
              <li>
                <a href="#doctors" className="text-yali-text-muted hover:text-yali-primary transition-colors">
                  Our Specialists
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-yali-text-muted hover:text-yali-primary transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="text-yali-text-muted hover:text-yali-primary transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#book-now" className="text-yali-text-muted hover:text-yali-primary transition-colors">
                  Book Online
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Emergency (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-yali-primary uppercase tracking-wider">
              Working Hours
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-yali-text-muted">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-yali-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-yali-text">Monday – Friday</div>
                  <div>8:00 AM – 7:30 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-yali-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-yali-text">Saturday</div>
                  <div>9:00 AM – 5:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-yali-text">Sunday</div>
                  <div className="text-amber-800 font-medium">Emergency Calls Only</div>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[11px] uppercase font-bold text-yali-primary">Emergency 24/7 Line</div>
                <a
                  href="tel:+18009254764"
                  className="font-bold text-sm text-yali-primary hover:underline"
                >
                  (800) 925-4764
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Interactive Map Card & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-yali-primary uppercase tracking-wider">
              Visit Our Clinic
            </h4>

            {/* Address */}
            <div className="flex items-start gap-2 text-xs sm:text-sm text-yali-text-muted">
              <MapPin className="w-4 h-4 text-yali-primary shrink-0 mt-0.5" />
              <span>
                Suite 400, Orchid Health Plaza, 142 Green Avenue, Metro District, NY 10018
              </span>
            </div>

            {/* Simulated Interactive Map Card */}
            <div className="relative rounded-2xl overflow-hidden border border-yali-border bg-white shadow-sm p-3 group">
              <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-yali-accent/50 to-white flex items-center justify-center relative overflow-hidden">
                {/* Visual grid representing map streets */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#49674a_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-yali-primary text-yali-bg flex items-center justify-center shadow-md animate-bounce">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="mt-1 text-[11px] font-bold text-yali-primary bg-white/90 px-2 py-0.5 rounded-full shadow-sm">
                    Yali Clinic
                  </span>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[11px] font-bold text-yali-primary hover:text-yali-primary-hover flex items-center justify-center gap-1 w-full py-1.5 rounded-lg bg-yali-bg hover:bg-yali-accent transition"
              >
                <Navigation className="w-3 h-3" />
                <span>Get Directions via Google Maps</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Sub-Footer: Copyright, Privacy & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-yali-text-muted">
          <div>
            © {new Date().getFullYear()} Yali Dental Clinic. Guardians of Your Smile. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-yali-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-yali-primary transition-colors">Terms of Care</a>
            <span>•</span>
            <a href="#" className="hover:text-yali-primary transition-colors">HIPAA Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

