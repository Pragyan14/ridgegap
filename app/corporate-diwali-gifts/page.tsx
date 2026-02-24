import CorporateDiwaliGifts from "./CorporateDiwaliGifts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Diwali Gifts for Clients & Employees | RidgeGap",
  description:
    "Discover unique Diwali gift ideas for employees and clients. Strengthen professional relationships with thoughtful corporate Diwali gifts.",
  alternates: {
    canonical: "https://ridgegap.com/corporate-diwali-gifts/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Corporate Diwali Gifts: Delight Employees and Clients",
    description:
      "Discover unique Diwali gift ideas for employees and clients. Strengthen professional relationships with thoughtful corporate Diwali gifts.",
    url: "https://ridgegap.com/corporate-diwali-gifts/",
    siteName: "RIDGEGAP SOLUTIONS PVT. LTD",
    images: [
      {
        url: "https://ridgegap.com/wp-content/uploads/2023/07/diwali-corporate-gifting-solutions-banner.jpg",
        width: 1920,
        height: 576,
        alt: "Corporate Diwali Gifts",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Diwali Gifts: Delight Employees and Clients",
    description:
      "Discover unique Diwali gift ideas for employees and clients. Strengthen professional relationships with thoughtful corporate Diwali gifts.",
    images: [
      "https://ridgegap.com/wp-content/uploads/2023/07/diwali-corporate-gifting-solutions-banner.jpg",
    ],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ridgegap.com/corporate-diwali-gifts/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://ridgegap.com",
          name: "Home",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": "https://ridgegap.com/corporate-diwali-gifts/",
          name: "Corporate Diwali Gifts",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <CorporateDiwaliGifts />
    </>
  );
}