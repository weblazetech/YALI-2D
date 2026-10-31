"use client";

import React, { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesGrid from "@/components/ServicesGrid";
import SmileSliderSection from "@/components/SmileSliderSection";
import WhyChooseYali from "@/components/WhyChooseYali";
import DoctorsSection from "@/components/DoctorsSection";
import Testimonials from "@/components/Testimonials";
import QuickBookingCTA from "@/components/QuickBookingCTA";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("General Checkup & Cleaning");

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-yali-bg text-yali-text selection:bg-yali-accent selection:text-yali-primary font-sans overflow-x-hidden w-full">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Glassmorphism Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 3. Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* 4. Stats / Trust Strip */}
      <TrustStrip />

      {/* 5. Key Services / Treatments Grid */}
      <ServicesGrid onSelectService={(service) => handleOpenBooking(service)} />

      {/* 5b. Interactive Before & After Smile Makeover Slider */}
      <SmileSliderSection onOpenBooking={(service) => handleOpenBooking(service)} />

      {/* 6. Why Choose Yali Section */}
      <WhyChooseYali />

      {/* 7. Meet Our Specialists */}
      <DoctorsSection onOpenBooking={(consult) => handleOpenBooking(consult)} />

      {/* 8. Patient Reviews / Testimonials */}
      <Testimonials />

      {/* 9. Direct Booking CTA Banner */}
      <QuickBookingCTA onOpenBooking={() => handleOpenBooking()} />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        defaultService={selectedService}
      />
    </main>
  );
}

