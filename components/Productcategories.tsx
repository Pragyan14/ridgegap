'use client';

export default function ProductCategories() {
  const categories = [
    {
      title: 'Apparels',
      description: '30+ brand to choose from the finest quality for corporate gifting.',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/apparels-category-showcase.jpg',
      href: '/apparels',
    },
    {
      title: 'Backpacks',
      description: 'Stay comfortable and fashionable with our durable & Comfy backpacks.',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/backpacks-category-showcase.jpg',
      href: '/backpacks',
    },
    {
      title: 'Technology Gadgets',
      description: "Once you get your hands on these tech gifts, you won't want to let them go.",
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/technical-gadgets-category-showcase.jpg.jpeg',
      href: '/tech-gadgets',
    },
    {
      title: 'Drinkware',
      description: 'Browse our wide selection of premium drinkware, including mugs, bottles, flasks…',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/drinkware-category-showcase.jpg',
      href: '/drinkwares',
    },
    {
      title: 'Trophies & Awards',
      description: 'Best for Sports, Fitness & Outdoors from a great selection of Trophies, Medals.',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/trophies-awards-thumbnail-show.jpg',
      href: '/trophies-awards',
    },
    {
      title: 'Work from Home',
      description: 'One of the best gifts to give someone working with a lot of distractions at home.',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/work-from-home-thumbnail-show.jpg',
      href: '/work-from-home',
    },
    {
      title: 'Office & Stationary',
      description: 'What better a gift than office utility products for executives working in…',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/office-stationeries-thumbnail-show.jpg',
      href: '/office-stationeries',
    },
    {
      title: 'Travel Accessories',
      description: 'All that you need to make your travel comfortable and easy.',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/travel-accessories-category-showcase.jpg',
      href: '/travel-accessories',
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-base mb-1">Corporate Gift Products</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a]">
            Our Products Categories
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-[#eef2ff] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Image area — light blue bg */}
              <div className="bg-[#dbeafe] flex items-center justify-center h-50 overflow-hidden rounded-xl m-3">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-5 pb-6 flex flex-col flex-1">
                <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">
                  {cat.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                  {cat.description}
                </p>
                <a
                  href={cat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 text-[#1e3a8a] font-semibold text-sm hover:gap-2 transition-all"
                >
                  View More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}