import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corporate Gifting Solutions Bangalore - Ridgegap",
  description: "Customized corporate gifting solutions for employees, clients & partners with 5000+ products and creative services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {<Header />}
        {children}
        <Toaster position="top-right"/>
        <a
          href="/contact-us"
          className="fixed right-0 top-2/3 -translate-y-1/2 z-50"
        >
          <div className="bg-blue-900 text-white px-8 py-3 shadow-lg rotate-360 [writing-mode:vertical-rl] hover:bg-blue-800">
            Connect Now!
          </div>
        </a>
        {<Footer />}
      </body>
    </html>
  );
}
