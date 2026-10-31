"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import ToothLogo from "./ToothLogo";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Makeovers", href: "#makeovers" },
    { label: "Why Yali", href: "#why-yali" },
    { label: "Specialists", href: "#doctors" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-2 sm:top-3 z-40 w-full px-3 sm:px-6 lg:px-8 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto island-nav rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 transition-all duration-300 ${
          scrolled ? "shadow-elevated ring-1 ring-yali-primary/20" : "shadow-soft"
        }`}
      >
        {/* Singular Continuous Horizontal Row */}
        <div className="flex items-center justify-between gap-4 w-full">
          
          {/* Left: Brand Lockup */}
          <Link
            href="/"
            className="group flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-yali-primary rounded-full pr-1"
          >
            <ToothLogo height={46} className="transition-transform group-hover:scale-105 duration-300 ease-spring shrink-0" />
            <div className="flex flex-col justify-center whitespace-nowrap">
              <span className="font-extrabold text-sm sm:text-base lg:text-lg tracking-tight text-yali-primary leading-none group-hover:text-yali-primary-hover transition-colors">
                Yali Dental Clinic
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-yali-text-muted uppercase mt-0.5">
                Guardians of Your Smile
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links (Single Line) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 xl:px-3.5 py-1.5 text-xs xl:text-[13px] font-semibold text-yali-text hover:text-yali-primary rounded-full hover:bg-yali-accent/60 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Desktop Action Cluster (Single Line) */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3 shrink-0 whitespace-nowrap">
            <a
              href="tel:+18009254764"
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-yali-primary hover:text-yali-primary-hover transition-colors rounded-full hover:bg-yali-accent/40"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(800) 925-4764</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-full bg-yali-primary text-yali-bg hover:bg-yali-primary-hover font-semibold text-xs sm:text-sm transition-all duration-300 ease-spring shadow-sm hover:shadow-md flex items-center gap-2.5 group active:scale-[0.98]"
            >
              <span>Book Appointment</span>
              <span className="w-7 h-7 rounded-full bg-yali-accent text-yali-primary flex items-center justify-center transition-transform duration-300 ease-spring group-hover:translate-x-0.5 group-hover:scale-105 shadow-xs">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Right: Booking + Menu Trigger */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-full bg-yali-primary text-yali-bg text-xs font-semibold hover:bg-yali-primary-hover transition-colors md:hidden"
            >
              Book
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-yali-text hover:text-yali-primary hover:bg-yali-accent/60 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Floating Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto island-nav rounded-3xl p-5 shadow-elevated animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-yali-text hover:text-yali-primary hover:bg-yali-accent/50 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-yali-primary font-bold">→</span>
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-yali-border/80 flex flex-col gap-2.5">
            <a
              href="tel:+18009254764"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-yali-border text-xs font-semibold text-yali-primary bg-white/70"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Helpline: (800) 925-4764</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-yali-primary text-yali-bg font-semibold text-xs hover:bg-yali-primary-hover transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Book Appointment</span>
              <span className="w-5 h-5 rounded-full bg-yali-accent text-yali-primary flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
