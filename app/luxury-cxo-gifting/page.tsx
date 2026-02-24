import LuxuryCXOGifting from "./LuxuryCXOGifting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Corporate and CXO Gifting Solutions - RidgeGap",
  description:
    "Impress your clients and enhance business relationships with our exquisite luxury corporate gifts. Gifts that will wow your clients, Discover now.",
  alternates: {
    canonical: "https://ridgegap.com/luxury-cxo-gifting/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Elevate client Relationships with Luxury Corporate Gifts - RidgeGap",
    description:
      "Impress your clients and enhance business relationships with our exquisite luxury corporate gifts. Gifts that will wow your clients, Discover now.",
    url: "https://ridgegap.com/luxury-cxo-gifting/",
    siteName: "RIDGEGAP SOLUTIONS PVT. LTD",
    images: [
      {
        url: "https://ridgegap.com/wp-content/uploads/2023/05/luxury-gifting-slider-mobile1.jpg",
        width: 1248,
        height: 641,
        alt: "CXO Gifting",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Elevate client Relationships with Luxury Corporate Gifts - RidgeGap",
    description:
      "Impress your clients and enhance business relationships with our exquisite luxury corporate gifts. Gifts that will wow your clients, Discover now.",
    images: [
      "https://ridgegap.com/wp-content/uploads/2023/05/luxury-gifting-slider-mobile1.jpg",
    ],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ridgegap.com/luxury-cxo-gifting/#breadcrumb",
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
          "@id": "https://ridgegap.com/luxury-cxo-gifting/",
          name: "Luxury & CXO Gifting",
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
      <LuxuryCXOGifting />
    </>
  );
}