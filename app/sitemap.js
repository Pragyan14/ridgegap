export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = [
    "",
    "/corporate-diwali-gifts",
    "/christmas-new-year-corporate-gifts",
    "/privacy-policy",
    "/apparels",
    "/luxury-cxo-gifting",
    "/tech-accessories",
    "/sustainable-eco-friendly-gifting",
    "/products",
    "/office-stationeries",
    "/customised-tshirts",
    "/home-2",
    "/about-3",
    "/contact",
    "/health-fitness-gifts",
    "/events-conference-promotional-gifts",
    "/drinkwares",
    "/desk-accessories",
    "/curated-gift-boxes",
    "/corporate-laptop-bags-custom-backpacks",
    "/corporate-gifts-2k-3k",
    "/corporate-gifts",
    "/contact-us",
    "/travel-accessories",
    "/trophies-awards",
    "/about-us",
    "/backpacks",
    "/special-custom-made-projects",
    "/swag-packs",
    "/new-joiner-kits",
    "/home2",
    "/work-from-home",
    "/tech-gadgets",
    "/home-updated",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}