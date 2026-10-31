"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, User, Phone, Mail, CheckCircle2 } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  defaultService = "General Checkup & Cleaning",
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    date: "",
    timeSlot: "Morning (9:00 AM - 12:00 PM)",
    isEmergency: false,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = "YAL-" + Math.floor(100000 + Math.random() * 900000);
    setAppointmentId(id);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-yali-text/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-yali-bg border border-yali-border shadow-elevated p-6 md:p-8 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-yali-text-muted hover:text-yali-text hover:bg-yali-accent/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-yali-accent text-yali-primary mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-yali-accent text-yali-primary text-xs font-semibold tracking-wide">
              CONFIRMATION: #{appointmentId}
            </div>
            <h3 id="modal-title" className="text-2xl font-bold text-yali-primary">
              Appointment Reserved!
            </h3>
            <p className="text-sm text-yali-text-muted max-w-sm mx-auto">
              Thank you, <strong className="text-yali-text">{formData.name || "Patient"}</strong>. Our clinic concierge will call you at{" "}
              <strong className="text-yali-text">{formData.phone}</strong> within 15 minutes to confirm your preferred slot.
            </p>
            <div className="bg-white/80 rounded-2xl p-4 border border-yali-border text-left text-xs space-y-2 text-yali-text">
              <div className="flex justify-between">
                <span className="text-yali-text-muted">Selected Treatment:</span>
                <span className="font-semibold text-yali-primary">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yali-text-muted">Requested Date:</span>
                <span className="font-semibold">{formData.date || "Next Available"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yali-text-muted">Time Window:</span>
                <span className="font-semibold">{formData.timeSlot}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="w-full mt-4 py-3 rounded-full bg-yali-primary text-yali-bg font-medium hover:bg-yali-primary-hover transition-colors shadow-sm"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yali-accent text-yali-primary text-xs font-semibold mb-2">
                <Calendar className="w-3.5 h-3.5" /> Book Your Visit
              </div>
              <h3 id="modal-title" className="text-2xl font-bold text-yali-primary">
                Schedule an Appointment
              </h3>
              <p className="text-xs text-yali-text-muted mt-1">
                Zero anxiety, painless dentistry. We verify slots and insurance prior to arrival.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-yali-text mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-yali-text-light" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Jennifer Harris"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-yali-border bg-white text-sm text-yali-text placeholder:text-yali-text-light/70 focus:outline-none focus:ring-2 focus:ring-yali-primary/20 focus:border-yali-primary transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-yali-text mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-yali-text-light" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 234-5678"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-yali-border bg-white text-sm text-yali-text placeholder:text-yali-text-light/70 focus:outline-none focus:ring-2 focus:ring-yali-primary/20 focus:border-yali-primary transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-yali-text mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-yali-text-light" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="patient@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-yali-border bg-white text-sm text-yali-text placeholder:text-yali-text-light/70 focus:outline-none focus:ring-2 focus:ring-yali-primary/20 focus:border-yali-primary transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-yali-text mb-1">
                    Treatment Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-yali-border bg-white text-sm text-yali-text focus:outline-none focus:ring-2 focus:ring-yali-primary/20 focus:border-yali-primary transition"
                  >
                    <option value="Cosmetic Dentistry & Porcelain Veneers">Cosmetic Dentistry & Porcelain Veneers</option>
                    <option value="Computer-Guided Dental Implants">Computer-Guided Dental Implants</option>
                    <option value="Clear Aligners & Invisalign®">Clear Aligners & Invisalign®</option>
                    <option value="Fear-Free Pediatric Dentistry">Fear-Free Pediatric Dentistry</option>
                    <option value="Same-Day Emergency Relief">Same-Day Emergency Relief</option>
                    <option value="Preventative Hygiene & 3D Health Scan">Preventative Hygiene & 3D Health Scan</option>
                    <option value="General Checkup & Cleaning">General Checkup & Cleaning</option>
                    <option value="Teeth Whitening & Cosmetic">Teeth Whitening & Cosmetic</option>
                    <option value="Orthodontics & Clear Aligners">Orthodontics & Clear Aligners</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Pediatric Dental Care">Pediatric Dental Care</option>
                    <option value="Root Canal Therapy">Root Canal Therapy</option>
                    {/* Fallback if a custom service title was passed */}
                    {![
                      "Cosmetic Dentistry & Porcelain Veneers",
                      "Computer-Guided Dental Implants",
                      "Clear Aligners & Invisalign®",
                      "Fear-Free Pediatric Dentistry",
                      "Same-Day Emergency Relief",
                      "Preventative Hygiene & 3D Health Scan",
                      "General Checkup & Cleaning",
                      "Teeth Whitening & Cosmetic",
                      "Orthodontics & Clear Aligners",
                      "Dental Implants",
                      "Pediatric Dental Care",
                      "Root Canal Therapy"
                    ].includes(formData.service) && (
                      <option value={formData.service}>{formData.service}</option>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-yali-text mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-yali-border bg-white text-sm text-yali-text focus:outline-none focus:ring-2 focus:ring-yali-primary/20 focus:border-yali-primary transition"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-yali-accent/30 border border-yali-accent">
                <input
                  type="checkbox"
                  id="emergency-check"
                  checked={formData.isEmergency}
                  onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                  className="rounded text-yali-primary focus:ring-yali-primary h-4 w-4"
                />
                <label htmlFor="emergency-check" className="text-xs text-yali-text cursor-pointer">
                  <span className="font-semibold text-yali-primary">Urgent / Emergency:</span> I am experiencing active pain or dental injury.
                </label>
              </div>

              <div>
                <label className="block text-xs font-medium text-yali-text mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any specific dental concerns, allergies, or questions..."
                  className="w-full px-3 py-2 rounded-xl border border-yali-border bg-white text-xs text-yali-text placeholder:text-yali-text-light/70 focus:outline-none focus:ring-2 focus:ring-yali-primary/20 focus:border-yali-primary transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-yali-primary hover:bg-yali-primary-hover text-yali-bg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yali-primary focus:ring-offset-2 flex items-center justify-center gap-2"
              >
                Confirm Booking Request
              </button>

              <p className="text-[11px] text-center text-yali-text-light">
                🔒 Your personal information is strictly confidential and protected by HIPAA standards.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

