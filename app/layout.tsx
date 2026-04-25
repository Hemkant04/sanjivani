import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjivani | Nurse-Led Home Health Visits in Kathmandu Valley",
  description:
    "Premium, nurse-led home health visits for parents in Kathmandu Valley. A trustworthy care experience for NRNs, families, and corporate wellness partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
