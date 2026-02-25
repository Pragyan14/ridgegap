import NewJoinerKits from "./NewJoinerKits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome New Employees in style with Onboarding Kits",
  description:
    "Welcome new team members & foster a positive work environment. Make new employees feel valued and prepared. Get the best onboarding kits at RidgeGap.",
  alternates: {
    canonical: "https://ridgegap.com/new-joiner-kits/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Welcome New Employees in style with Onboarding Kits",
    description:
      "Welcome new team members & foster a positive work environment. Make new employees feel valued and prepared. Get the best onboarding kits at RidgeGap.",
    url: "https://ridgegap.com/new-joiner-kits/",
    siteName: "RIDGEGAP SOLUTIONS PVT. LTD",
    images: [
      {
        url: "/images/new-joiner-kit-slider-mobile2.jpg",
        width: 1248,
        height: 641,
        alt: "new employee welcome kit",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome New Employees in style with Onboarding Kits",
    description:
      "Welcome new team members & foster a positive work environment. Make new employees feel valued and prepared. Get the best onboarding kits at RidgeGap.",
    images: [
      "/images/new-joiner-kit-slider-mobile2.jpg",
    ],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ridgegap.com/new-joiner-kits/#breadcrumb",
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
          "@id": "https://ridgegap.com/new-joiner-kits/",
          name: "New Joiner Kits",
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

      <NewJoinerKits />
    </>
  );
}