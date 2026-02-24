import CustomisedTshirts from "./CustomisedTshirts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customized T-Shirts for Corporates in Bangalore | RidgeGap",
  description:
    "Get customised T-shirts for your team in Bangalore. RidgeGap offers high-quality prints, bulk orders, and logo branding for corporate gifting needs.",
  alternates: {
    canonical: "https://ridgegap.com/customised-tshirts/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Personalized Apparel for Corporate Identity - RidgeGap",
    description:
      "Unify your team and showcase your brand with our customized apparel. From tshirts to branded clothing, discover RidgeGap's apparel customization.",
    url: "https://ridgegap.com/customised-tshirts/",
    siteName: "RIDGEGAP SOLUTIONS PVT. LTD",
    images: [
      {
        url: "https://ridgegap.com/wp-content/uploads/2023/05/customised-tshirts-slider-mobile1.jpg",
        width: 1248,
        height: 641,
        alt: "Customized T-Shirts",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personalized Apparel for Corporate Identity - RidgeGap",
    description:
      "Unify your team and showcase your brand with our customized apparel. From tshirts to branded clothing, discover RidgeGap's apparel customization.",
    images: [
      "https://ridgegap.com/wp-content/uploads/2023/05/customised-tshirts-slider-mobile1.jpg",
    ],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ridgegap.com/customised-tshirts/#breadcrumb",
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
          "@id": "https://ridgegap.com/customised-tshirts/",
          name: "Customised Tshirts",
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
      <CustomisedTshirts />
    </>
  );
}