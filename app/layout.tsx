import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { GardenChat } from "@/components/garden-chat";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gestalt Gardens | Zen-Forward Garden Design in Austin",
  description:
    "Designed to slow you down. Full-service zen and Japanese-inspired garden design studio in Austin, TX. We create gardens that counterbalance a tech-heavy world.",
};

export const viewport: Viewport = {
  themeColor: "#0B1F16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <GardenChat />
      </body>
    </html>
  );
}
