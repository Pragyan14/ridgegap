import CuratedGiftBoxes from "./CuratedGiftBoxes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curated Corporate Gift Boxes for Clients & Teams | RidgeGap",
  description:
    "Discover RidgeGap’s curated corporate gift boxes for clients and employees. Premium, customizable, and perfect for festive or year-round gifting.",
  alternates: {
    canonical: "https://ridgegap.com/curated-gift-boxes/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Thoughtfully Curated Gift Boxes - RidgeGap",
    description:
      "Delight your recipients with curated gift boxes. Perfect for any occasion, these gifts are sure to leave a lasting impression. Tailormade gifts for your clients, employees, & occasions.",
    url: "https://ridgegap.com/curated-gift-boxes/",
    siteName: "RIDGEGAP SOLUTIONS PVT. LTD",
    images: [
      {
        url: "https://ridgegap.com/wp-content/uploads/2023/05/curated-gift-boxes-slider-mobile2.jpg",
        width: 1248,
        height: 641,
        alt: "corporate gift boxes",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thoughtfully Curated Gift Boxes - RidgeGap",
    description:
      "Delight your recipients with curated gift boxes. Perfect for any occasion, these gifts are sure to leave a lasting impression. Tailormade gifts for your clients, employees, & occasions.",
    images: [
      "https://ridgegap.com/wp-content/uploads/2023/05/curated-gift-boxes-slider-mobile2.jpg",
    ],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ridgegap.com/curated-gift-boxes/#breadcrumb",
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
          "@id": "https://ridgegap.com/curated-gift-boxes/",
          name: "Curated Gift Boxes",
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
      <CuratedGiftBoxes />
    </>
  );
}