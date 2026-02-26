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

const faqs = [
  {
    question: "What types of corporate gifts do you offer?",
    answer:
      "We offer a wide range of corporate gifts including branded merchandise, premium gift boxes, tech gadgets, eco-friendly products, customized stationery, and luxury items tailored to your brand and budget.",
  },
  {
    question: "Can I customize the corporate gifts with our company logo?",
    answer:
      "Absolutely! We specialize in custom branding. You can add your company logo, colors, and messaging to most of our products. Our design team will work with you to ensure the branding looks perfect.",
  },
  {
    question: "Do you provide bulk order discounts?",
    answer:
      "Yes, we offer competitive bulk order discounts. The more you order, the better the pricing. Contact our sales team for a custom quote based on your order quantity and product selection.",
  },
  {
    question:
      "Can I request a sample of the corporate gift before placing a bulk order?",
    answer:
      "Yes, we encourage clients to request samples before committing to a bulk order. This allows you to evaluate the quality, branding, and overall presentation of the product firsthand.",
  },
  {
    question:
      "Do you offer personalized packaging for the corporate gifts?",
    answer:
      "Yes, we offer fully personalized packaging options including custom boxes, branded tissue paper, ribbon, and personalized greeting cards to make your gifts truly special.",
  },
  {
    question:
      "Can I track the delivery status of my corporate gifts?",
    answer:
      "Yes, once your order is shipped, you will receive a tracking number via email. You can use this to monitor the delivery status of your corporate gifts in real-time.",
  },
  {
    question:
      "How long does it take to receive our corporate gifts?",
    answer:
      "Standard delivery typically takes 7-14 business days depending on the customization required. Rush orders can be accommodated with expedited shipping options available at checkout.",
  },
  {
    question:
      "Can you handle international shipping for our corporate gifts?",
    answer:
      "Yes, we ship internationally to over 100 countries. Our logistics team handles all customs documentation and ensures your gifts arrive safely and on time, wherever your recipients are located.",
  },
  {
    question:
      "Can you help with gift selection if I\u2019m unsure about what to choose?",
    answer:
      "Of course! Our gifting experts can help you select the perfect gifts based on your budget, occasion, recipient preferences, and branding requirements. Just reach out to our team for a consultation.",
  },
  {
    question:
      "Is there a minimum order quantity for corporate gifts?",
    answer:
      "Our minimum order quantity varies by product, but generally starts at 25 units for customized items. For standard products without customization, there may be no minimum order requirement.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, bank transfers, UPI, and corporate purchase orders for established accounts. We also offer flexible payment terms for large orders.",
  },
  {
    question:
      "Do you offer any additional services, such as gift wrapping or custom messaging?",
    answer:
      "Yes, we offer a variety of additional services including premium gift wrapping, custom messaging, handwritten notes, and curated gift hampers. Let us know your requirements and we will make it happen.",
  },
]

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
    canonical: "https://ridgegap.com/",
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

const faqSchema = {
  "@type": "FAQPage",
  "@id": "https://ridgegap.com/#faq",
  inLanguage: "en",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ridgegap.com/#organization",
      name: "RIDGEGAP SOLUTIONS PVT. LTD",
      url: "https://ridgegap.com",
      logo: "https://ridgegap.com/images/ridge-gap-logo.png",
      sameAs: [
        "https://www.facebook.com/ridgegap",
        "https://instagram.com/ridgegap_corporate_gifting"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English"]
      }
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://ridgegap.com/#localbusiness",
      name: "Ridgegap Corporate Gifting Solutions",
      image: "https://ridgegap.com/images/ridge-gap-logo.png",
      url: "https://ridgegap.com",
      telephone: "+91-8296813621", // replace with real number
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN"
      },
      areaServed: "Bangalore",
      priceRange: "₹₹₹"
    },

    {
      "@type": "WebSite",
      "@id": "https://ridgegap.com/#website",
      url: "https://ridgegap.com",
      name: "Ridgegap",
      publisher: {
        "@id": "https://ridgegap.com/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://ridgegap.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
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
      },
      inLanguage: "en"
    },

    faqSchema
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
