import React from "react";

export interface CardItem {
  image: string;
  title: string;
}

interface CardGridProps {
  mainHeading: string;
  items: CardItem[];
}

const ProductGrid: React.FC<CardGridProps> = ({ mainHeading, items }) => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50">
      
      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-blue-900 mb-12">
        {mainHeading}
      </h2>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-2xl p-4 hover:shadow-xl transition duration-300 group"
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden bg-gray-100 mb-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-42 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-serif text-blue-900 font-semibold">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
