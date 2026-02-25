import SustainableEcoFriendlyGifting from "./SustainableEcoFriendlyGifting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promote Sustainability with Eco-friendly Corporate Gifts",
  description:
    "Choose eco-friendly alternatives with our sustainable corporate gift options. Make a positive impact on the planet and align your brand with sustainability.",
  alternates: {
    canonical: "https://ridgegap.com/sustainable-eco-friendly-gifting/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Promote Sustainability with Eco-friendly Corporate Gifts - RidgeGap",
    description:
      "Choose eco-friendly alternatives with our sustainable corporate gift options. Make a positive impact on the planet and align your brand with sustainability.",
    url: "https://ridgegap.com/sustainable-eco-friendly-gifting/",
    siteName: "RIDGEGAP SOLUTIONS PVT. LTD",
    images: [
      {
        url: "/images/sustainable-products-slider-mobile2.jpg",
        width: 1248,
        height: 641,
        alt: "eco-friendly",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Promote Sustainability with Eco-friendly Corporate Gifts - RidgeGap",
    description:
      "Choose eco-friendly alternatives with our sustainable corporate gift options. Make a positive impact on the planet and align your brand with sustainability.",
    images: [
      "/images/sustainable-products-slider-mobile2.jpg",
    ],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id":
      "https://ridgegap.com/sustainable-eco-friendly-gifting/#breadcrumb",
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
          "@id":
            "https://ridgegap.com/sustainable-eco-friendly-gifting/",
          name: "Sustainable & Eco-Friendly Gifting",
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
      <SustainableEcoFriendlyGifting />
    </>
  );
}