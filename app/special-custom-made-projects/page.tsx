import SpecialCustomMadeProjects from "./SpecialCustomMadeProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailor-Made Gifts | RidgeGap - exclusive custom made gifts",
  description:
    "Celebrate special occasions with custom made gifts. Personalize your presents and make every moment unforgettable with RidgeGap's unique gift options.",
  alternates: {
    canonical: "https://ridgegap.com/special-custom-made-projects/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tailor-Made Gifts | RidgeGap - exclusive custom made gifts",
    description:
      "Celebrate special occasions with custom made gifts. Personalize your presents and make every moment unforgettable with RidgeGap's unique gift options.",
    url: "https://ridgegap.com/special-custom-made-projects/",
    siteName: "RIDGEGAP SOLUTIONS PVT. LTD",
    images: [
      {
        url: "https://ridgegap.com/wp-content/uploads/2023/05/custom-made-projects-slider-mobile2.jpg",
        width: 1248,
        height: 641,
        alt: "custom made gifts",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailor-Made Gifts | RidgeGap - exclusive custom made gifts",
    description:
      "Celebrate special occasions with custom made gifts. Personalize your presents and make every moment unforgettable with RidgeGap's unique gift options.",
    images: [
      "https://ridgegap.com/wp-content/uploads/2023/05/custom-made-projects-slider-mobile2.jpg",
    ],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id":
      "https://ridgegap.com/special-custom-made-projects/#breadcrumb",
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
            "https://ridgegap.com/special-custom-made-projects/",
          name: "Special & Custom-Made Projects",
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
      <SpecialCustomMadeProjects />
    </>
  );
}