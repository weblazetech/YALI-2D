import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
