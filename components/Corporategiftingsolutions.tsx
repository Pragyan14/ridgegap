'use client';

export default function CorporateGiftingSolutions() {
  const solutions = [
    {
      title: 'New Joiner Kits',
      href: '/new-joiner-kits',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/new-joiner-kit-product-showinfoimg.png',
      bgColor: 'bg-[#2d2d2d]', // Dark gray/black
      textColor: 'text-white',
    },
    {
      title: 'Customised T-shirts',
      href: '/customised-tshirts',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/customised-tshirts-showinfoimg.png',
      bgColor: 'bg-[#f4b631]', // Yellow/Gold
      textColor: 'text-white',
    },
    {
      title: 'Corporate Laptop Bags & Backpacks',
      href: '/corporate-laptop-bags-custom-backpacks',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/corporate-customised-bags-showinfoimg.png',
      bgColor: 'bg-[#ff4757]', // Red/Pink
      textColor: 'text-white',
    },
    {
      title: 'Swag Packs',
      href: '/swag-packs',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/swagpacks-showinfoimg.png',
      bgColor: 'bg-[#e8e8e8]', // Light gray
      textColor: 'text-gray-900',
    },
    {
      title: 'Curated Gift Boxes',
      href: '/curated-gift-boxes',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/curated-giftbox-showinfoimg.png',
      bgColor: 'bg-[#2ecc71]', // Green
      textColor: 'text-white',
    },
    {
      title: 'Luxury CXO Gifting',
      href: '/luxury-cxo-gifting',
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/luxury-gift-showing-1.png',
      bgColor: 'bg-[#3498db]', // Blue
      textColor: 'text-white',
    },
    {
      title: 'Custom Projects',
      href: '/special-custom-made-projects',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/custom-made-projects-showinfoimg.png',
      bgColor: 'bg-[#ff4757]', // Red/Pink
      textColor: 'text-white',
    },
    {
      title: 'Event/Conference Giveaways',
      href: '/events-conference-promotional-gifts',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/event-conference-promotional-gifts-showinfoimg.png',
      bgColor: 'bg-[#f4b631]', // Yellow/Gold
      textColor: 'text-white',
    },
    {
      title: 'Sustainable/Eco-friendly Gifts',
      href: '/sustainable-eco-friendly-gifting',
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/sustainable-product-showinfoimg (1).png',
      bgColor: 'bg-[#2d2d2d]', // Dark gray/black
      textColor: 'text-white',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Corporate Gifting Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Corporate gifting solution that delivers value to your workforce and clients. We provide a full range of creative solutions to suit all budgets and occasions.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <a
              key={index}
              href={solution.href}
              target="_blank"
              rel="noopener"
              className={`${solution.bgColor} ${solution.textColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] group relative`}
            >
              <div className="flex items-center justify-between h-full min-h-[180px] md:min-h-[200px] p-6 md:p-8">
                {/* Left Content */}
                <div className="flex-1 pr-4">
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {solution.title}
                  </h4>
                  <span className="inline-block text-sm md:text-base font-semibold opacity-90 group-hover:opacity-100 transition-opacity">
                    Know More!
                  </span>
                </div>

                {/* Right Image */}
                <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 relative">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Decorative Pattern Overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}