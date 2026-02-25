import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  metadataBase: new URL("https://ridgegap.com"),

  title: "Corporate Gifting Solutions Bangalore - Ridgegap",
  description:
    "RidgeGap offers end-to-end corporate gifting solutions in Bangalore. Branded, personalized gifts for clients, teams & events. Bulk orders welcome.",

  keywords: [
    "Corporate Gifting Bangalore",
    "Corporate Gifts",
    "Customized Corporate Gifts",
    "Bulk Corporate Gifts",
    "Employee Gifting Solutions",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ridgegap.com/",
    siteName: "RIDGEGAP SOLUTIONS PVT. LTD",
    title: "Corporate Gifting Solutions Bangalore - Ridgegap",
    description:
      "Ridgegap provides professional Corporate Gifting Solutions. We have provided one-of-its-kind solutions to some of the top corporate organizations in Bangalore.",
    images: [
      {
        url: "/wp-content/themes/ridgegap-wptheme/images/new-slider-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Gifting Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Corporate Gifting Solutions Bangalore - Ridgegap",
    description:
      "Ridgegap provides professional Corporate Gifting Solutions. We have provided one-of-its-kind solutions to some of the top corporate organizations in Bangalore.",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ridgegap.com/#organization",
      name: "RIDGEGAP SOLUTIONS PVT. LTD",
      url: "https://ridgegap.com",
      logo: "/images/ridge-gap-logo.png",
      sameAs: [
        "https://www.facebook.com/ridgegap",
        "https://instagram.com/ridgegap_corporate_gifting"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://ridgegap.com/#website",
      url: "https://ridgegap.com",
      name: "Ridgegap",
      publisher: {
        "@id": "https://ridgegap.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://ridgegap.com/#webpage",
      url: "https://ridgegap.com/",
      name: "Corporate Gifting Solutions Bangalore - Ridgegap",
      isPartOf: {
        "@id": "https://ridgegap.com/#website"
      },
      about: {
        "@id": "https://ridgegap.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {<Header />}
        {children}
        <Toaster position="top-right" />
        {<Footer />}
      </body>
    </html>
  );
}
