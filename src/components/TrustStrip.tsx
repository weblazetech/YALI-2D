import React from "react";
import { Award, ThumbsUp, Sparkles, Siren } from "lucide-react";

export default function TrustStrip() {
  const stats = [
    {
      icon: Award,
      metric: "15+ Years",
      title: "Clinical Experience",
      description: "Trusted by multi-generational families across the region",
    },
    {
      icon: ThumbsUp,
      metric: "99%",
      title: "Satisfaction Rate",
      description: "Based on 3,800+ post-treatment clinical surveys",
    },
    {
      icon: Sparkles,
      metric: "Pain-Free",
      title: "Modern Equipment",
      description: "Computerized STA anesthesia & 3D digital scanners",
    },
    {
      icon: Siren,
      metric: "24/7",
      title: "Emergency Care",
      description: "On-call specialist availability for sudden tooth trauma",
    },
  ];

  return (
    <section className="py-8 bg-yali-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="double-bezel shadow-card">
          <div className="double-bezel-inner p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-yali-border/80">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.title}
                    className={`flex flex-col items-start ${
                      index > 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-yali-accent flex items-center justify-center text-yali-primary mb-4 shrink-0 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-extrabold text-yali-primary tracking-tight tabular-nums">
                      {stat.metric}
                    </div>
                    <div className="text-sm font-bold text-yali-text mt-1">
                      {stat.title}
                    </div>
                    <div className="text-xs text-yali-text-muted mt-1 leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
