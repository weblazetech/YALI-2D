"use client";

import React, { useState } from "react";
import { Star, Quote, CheckCircle2, MessageSquareHeart } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Marcus Vance",
      category: "Painless Care",
      treatment: "Single-Visit Root Canal & Crown",
      rating: 5,
      date: "2 weeks ago",
      quote:
        "After avoiding dentists for 8 years out of fear, computerized anesthesia was completely imperceptible. Zero pain from start to finish.",
      verified: true,
      initial: "MV",
    },
    {
      id: 2,
      name: "Elena Rostova",
      category: "Cosmetic & Veneers",
      treatment: "Porcelain Veneers & Laser Whitening",
      rating: 5,
      date: "1 month ago",
      quote:
        "The 3D preview showed my smile before touching a tooth. The final porcelain veneers look luminous and natural—the clinic feels more like a day spa.",
      verified: true,
      initial: "ER",
    },
    {
      id: 3,
      name: "David & Maya Chen",
      category: "Family & Pediatric",
      treatment: "Pediatric Checkups & Orthodontic Care",
      rating: 5,
      date: "3 weeks ago",
      quote:
        "Our 6-year-old used to cry at dentist appointments. Dr. Sarah was pure magic with her—she left with a sparkling smile asking when she can return.",
      verified: true,
      initial: "DC",
    },
    {
      id: 4,
      name: "Siddharth Verma",
      category: "Implants",
      treatment: "Immediate Guided Dental Implant",
      rating: 5,
      date: "Just recently",
      quote:
        "I fractured a front tooth during sports. Yali saw me within the hour and placed a guided implant with an aesthetic temporary crown the very same morning.",
      verified: true,
      initial: "SV",
    },
  ];

  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Painless Care", "Cosmetic & Veneers", "Family & Pediatric", "Implants"];

  const filteredReviews = activeFilter === "All"
    ? reviews
    : reviews.filter((r) => r.category === activeFilter);

  return (
    <section id="testimonials" className="py-20 bg-yali-bg scroll-mt-20 border-t border-yali-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yali-accent text-yali-primary text-xs font-semibold tracking-wide border border-yali-border-mint/80">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-yali-primary tracking-tight leading-tight">
            Real Stories from Conquered Dental Anxiety
          </h2>
          <p className="text-base text-yali-text-muted leading-relaxed">
            Read how gentle technology, attentive listening, and transparent care have transformed smiles across our community.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === category
                  ? "bg-yali-primary text-yali-bg shadow-sm"
                  : "bg-white text-yali-text hover:bg-yali-accent/60 border border-yali-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="relative rounded-3xl bg-white border border-yali-accent p-7 sm:p-8 shadow-soft flex flex-col justify-between hover:shadow-card transition-all duration-300"
            >
              <div>
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-yali-accent fill-yali-accent/30 shrink-0" />
                </div>

                {/* Treatment Tag */}
                <div className="inline-block px-2.5 py-1 rounded-full bg-yali-bg text-yali-primary text-[11px] font-bold border border-yali-border mb-3">
                  {review.treatment}
                </div>

                {/* Patient Quote */}
                <p className="text-sm text-yali-text leading-relaxed italic mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Patient Footer */}
              <div className="pt-4 border-t border-yali-border/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yali-accent text-yali-primary font-bold flex items-center justify-center text-sm shadow-inner shrink-0">
                    {review.initial}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-yali-text">
                      {review.name}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-yali-text-muted">
                      <CheckCircle2 className="w-3 h-3 text-yali-primary" />
                      <span>Verified Patient • {review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Social Proof Strip */}
        <div className="mt-12 p-6 rounded-3xl bg-white/60 border border-yali-accent text-center flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm text-yali-text">
          <div>
            <strong className="text-yali-primary font-bold text-base">Google Reviews:</strong> 4.9 ★ (420+ reviews)
          </div>
          <div className="hidden sm:block w-px h-4 bg-yali-border" />
          <div>
            <strong className="text-yali-primary font-bold text-base">Practo / DentalGrade:</strong> 99% Recommended
          </div>
          <div className="hidden sm:block w-px h-4 bg-yali-border" />
          <div>
            <strong className="text-yali-primary font-bold text-base">Wait Times:</strong> Average under 8 mins
          </div>
        </div>

      </div>
    </section>
  );
}

