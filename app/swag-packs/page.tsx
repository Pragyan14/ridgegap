import SwagPacks from "./SwagPacks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Quality Company Swag Packs for effective branding",
  description:
    "Discover our wide range of high-quality company swags. From promotional items to branded merchandise, RidgeGap has the perfect swag for your corporate needs.",
  alternates: {
    canonical: "https://ridgegap.com/swag-packs/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "High-Quality Company Swag Packs for effective branding",
    description:
      "Discover our wide range of high-quality company swags. From promotional items to branded merchandise, RidgeGap has the perfect swag for your corporate needs.",
    url: "https://ridgegap.com/swag-packs/",
    siteName: "RIDGEGAP SOLUTIONS PVT. LTD",
    images: [
      {
        url: "/images/swag-packs-slider-mobile2.jpg",
        width: 1248,
        height: 641,
        alt: "swag box",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Quality Company Swag Packs for effective branding",
    description:
      "Discover our wide range of high-quality company swags. From promotional items to branded merchandise, RidgeGap has the perfect swag for your corporate needs.",
    images: [
      "/images/swag-packs-slider-mobile2.jpg",
    ],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ridgegap.com/swag-packs/#breadcrumb",
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
          "@id": "https://ridgegap.com/swag-packs/",
          name: "Swag Packs",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Page Component */}
      <SwagPacks />
    </>
  );
}