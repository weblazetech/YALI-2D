import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const plusJakartaSans = localFont({
  src: "./fonts/PlusJakartaSans-Variable.woff2",
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yali Dental Clinic | Guardians of Your Smile",
  description:
    "Modern, painless dentistry for the whole family. Experience stress-free, compassionate dental care with state-of-the-art technology at Yali Dental Clinic.",
  keywords: [
    "Yali Dental Clinic",
    "Dentist",
    "Painless Dentistry",
    "Dental Implants",
    "Invisalign",
    "Teeth Whitening",
    "Family Dental Care",
    "Pediatric Dentistry",
  ],
  authors: [{ name: "Yali Dental Clinic" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="min-h-screen bg-yali-bg text-yali-text antialiased selection:bg-yali-accent selection:text-yali-primary overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
