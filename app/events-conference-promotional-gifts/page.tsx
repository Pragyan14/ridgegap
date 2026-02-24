import EventsConferencePromotionalGifts from "./EventsConferencePromotionalGifts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promotional Gifts for Memorable Events - RidgeGap",
  description:
    "Leave a lasting impression with our event and conference promotional gifts. Enhance brand visibility and engage your attendees. Explore RidgeGap's selection",
  alternates: {
    canonical:
      "https://ridgegap.com/events-conference-promotional-gifts/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Promotional Gifts for Memorable Events - RidgeGap",
    description:
      "Leave a lasting impression with our event and conference promotional gifts. Enhance brand visibility and engage your attendees. Explore RidgeGap's selection",
    url: "https://ridgegap.com/events-conference-promotional-gifts/",
    siteName: "RIDGEGAP SOLUTIONS PVT. LTD",
    images: [
      {
        url: "https://ridgegap.com/wp-content/uploads/2023/05/events-conference-gifts-slider-mobile2-1.jpg",
        width: 1248,
        height: 641,
        alt: "promotional gifts",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promotional Gifts for Memorable Events - RidgeGap",
    description:
      "Leave a lasting impression with our event and conference promotional gifts. Enhance brand visibility and engage your attendees. Explore RidgeGap's selection",
    images: [
      "https://ridgegap.com/wp-content/uploads/2023/05/events-conference-gifts-slider-mobile2-1.jpg",
    ],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id":
      "https://ridgegap.com/events-conference-promotional-gifts/#breadcrumb",
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
            "https://ridgegap.com/events-conference-promotional-gifts/",
          name: "Events, Conference & Promotional Gifts",
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
      <EventsConferencePromotionalGifts />
    </>
  );
}