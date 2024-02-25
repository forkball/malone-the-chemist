import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";

import { Navigation } from "./components/";

import "./globals.css";
import Footer from "./components/Footer";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Malone the Chemist",
  description: "This description needs to be updated",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
