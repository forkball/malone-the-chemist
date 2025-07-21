import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";

import { Navigation, Footer } from "@/components";

import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Malone the Chemist",
  description: "Musical Pop Sensation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
