import CorporateLaptopBags from "./CorporateLaptopBags";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Corporate Laptop Bags and Backpacks | RidgeGap",
  description:
    "Explore premium laptop bags & custom backpacks for corporate gifting. RidgeGap offers stylish, branded options perfect for clients and employees.",
  alternates: {
    canonical: "https://ridgegap.com/corporate-laptop-bags-custom-backpacks/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Custom Corporate Backpacks for Professionals - RidgeGap",
    description:
      "Stand out in the corporate world with our custom backpacks and laptop bags. Tailor-made for your brand and designed for style & practicality.",
    url: "https://ridgegap.com/corporate-laptop-bags-custom-backpacks/",
    siteName: "RIDGEGAP SOLUTIONS PVT. LTD",
    images: [
      {
        url: "/images/corporate-laptop-bags-slider-mobile1.jpg",
        width: 1248,
        height: 641,
        alt: "laptop bags",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Corporate Backpacks for Professionals - RidgeGap",
    description:
      "Stand out in the corporate world with our custom backpacks and laptop bags. Tailor-made for your brand and designed for style & practicality.",
    images: [
      "/images/corporate-laptop-bags-slider-mobile1.jpg",
    ],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id":
      "https://ridgegap.com/corporate-laptop-bags-custom-backpacks/#breadcrumb",
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
            "https://ridgegap.com/corporate-laptop-bags-custom-backpacks/",
          name: "Corporate Laptop Bags & Custom Backpacks",
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
      <CorporateLaptopBags />
    </>
  );
}