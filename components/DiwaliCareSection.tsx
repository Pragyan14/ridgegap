import Image from "next/image";

const cards = [
  {
    title: "Diwali Corporate Gifts for Employees",
    description:
      "Celebrate Diwali with your employees by giving them the perfect corporate gifts. From personalized items to festive hampers, find the ideal gift for each employee and make this Diwali truly memorable.",
    image: "https://ridgegap.com/wp-content/uploads/2025/06/employees.png",
  },
  {
    title: "Corporate Diwali Gifts for Clients",
    description:
      "Impress your clients this Diwali with unique corporate gifts. From sophisticated gift sets to premium hampers, reflect the festive spirit and strengthen business relationships.",
    image: "https://ridgegap.com/wp-content/uploads/2025/06/clients.png",
  },
  {
    title: "Diwali Gifts for Customers",
    description:
      "Express gratitude to your loyal customers with thoughtful gifts. From beautifully crafted presents to festive gift boxes, make this Diwali special for them.",
    image: "https://ridgegap.com/wp-content/uploads/2025/06/customers.png",
  },
  {
    title: "Diwali Gift Ideas for Corporates",
    description:
      "Impress corporate partners with curated gift ideas. From elegant desk accessories to gourmet gift sets, reflect the festive spirit in style.",
    image: "https://ridgegap.com/wp-content/uploads/2025/06/corporates.png",
  },
  {
    title: "Diwali Gift for Employees under ₹1000",
    description:
      "Celebrate Diwali on a budget with thoughtful gifts under ₹1000. Make employees feel valued without compromising on quality.",
    image: "https://ridgegap.com/wp-content/uploads/2025/06/under-1000.png",
  },
  {
    title: "Diwali Gift for Employees under ₹2000",
    description:
      "Explore impressive gift options under ₹2000. Choose stylish accessories and wellness sets to show gratitude.",
    image: "https://ridgegap.com/wp-content/uploads/2025/06/under-2000.png",
  },
];

export default function DiwaliCareSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-blue-900 mb-14">
          What do we care about?
        </h2>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              <h4 className="text-xl font-semibold text-blue-900 mb-4 leading-snug">
                {card.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}