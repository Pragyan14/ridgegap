export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Corporate Gifting for Gen Z Employees: A Complete 2026 Guide",
    slug: "corporate-gifting-for-gen-z-employees",
    excerpt:
      "The corporate landscape in India is undergoing a generational shift, and your gifting strategy needs to evolve with it...",
    image: "/images/blog1.jpg",
    date: "February 13, 2026",
  },
  {
    id: 2,
    title: "Quarterly Appreciation Gifting vs Annual Bonuses: What Works Better?",
    slug: "quarterly-appreciation-gifting-vs-annual-bonuses",
    excerpt:
      "Employee recognition has evolved beyond the traditional annual bonus model...",
    image: "/images/blog2.jpg",
    date: "February 9, 2026",
  },
  {
    id: 3,
    title: "Corporate Gifting Mistakes That Damage Employer Brand",
    slug: "corporate-gifting-mistakes",
    excerpt:
      "In India’s competitive talent marketplace, every touchpoint matters...",
    image: "/images/blog3.jpg",
    date: "February 2, 2026",
  },
  {
    id: 4,
    title: "Phygital Corporate Gifts for Employees and Clients",
    slug: "phygital-corporate-gifts",
    excerpt:
      "The corporate gifting landscape in India is experiencing a revolutionary transformation...",
    image: "/images/blog4.jpg",
    date: "February 2, 2026",
  },
];
