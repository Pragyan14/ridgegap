'use client';

export default function MostPopularGifting() {
  const row1Items = [
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/event-and-conference-1.png',
      title: 'Event/Conference Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/recent-project-3.png',
      title: 'New Joiner Kits',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/curated-box-1.png',
      title: 'Curated Gift Boxes',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/recent-project-.png',
      title: 'New Joiner Kits',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/luxury-gift-1.png',
      title: 'Luxury CXO Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/recent-project-2.png',
      title: 'New Joiner Kits',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/swag-pack-3-1.png',
      title: 'Swag Packs',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/luxury-gift.png',
      title: 'Luxury CXO Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-17.jpg',
      title: 'New Joiner Kits',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/curated-gift5.png',
      title: 'Luxury CXO Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-5.jpg',
      title: 'Luxury CXO Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/curated-box-3.png',
      title: 'Curated Corporate Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/customized-tshirt6.png',
      title: 'Customised Apparels',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/swag-pack-2-1.png',
      title: 'Swag Packs',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-18.jpg',
      title: 'Promotional Giveaways',
    },
  ];

  const row2Items = [
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/recent-project-2.png',
      title: 'New Joiner Kits',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/event-and-conference-5.png',
      title: 'Event/Conference Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-14.jpg',
      title: 'New Joiner Kits',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/event-and-conference-2.png',
      title: 'Curated Gift Boxes',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-15.jpg',
      title: 'New Joiner Kits',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-16.jpg',
      title: 'Luxury CXO Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/curated-gift5.png',
      title: 'Luxury CXO Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-19.jpg',
      title: 'Swag Packs',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-21.jpg',
      title: 'Luxury CXO Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-5.jpg',
      title: 'Luxury CXO Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-6.jpg',
      title: 'Curated Corporate Gifts',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-7.jpg',
      title: 'Customised Apparels',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-8.jpg',
      title: 'Swag Packs',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-9.jpg',
      title: 'Promotional Giveaways',
    },
    {
      image: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-10.jpg',
      title: 'New Joiner Kits',
    },
  ];

  // Duplicate for seamless infinite loop
  const row1Doubled = [...row1Items, ...row1Items];
  const row2Doubled = [...row2Items, ...row2Items];

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: scroll-left 35s linear infinite;
        }
        .marquee-right {
          animation: scroll-right 3s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="py-12 md:py-16 bg-[#eef2ff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e3a8a]">
              Most Popular Corporate Gifting Options
            </h2>
          </div>
        </div>

        {/* Row 1 — scrolls LEFT (right to left) */}
        <div className="overflow-hidden mb-1">
          <div className="flex w-max gap-8">
            {row1Doubled.map((item, index) => (
              <div
                key={`r1-${index}`}
                className="group shrink-0 w-[150px] sm:w-[170px] md:w-[190px] lg:w-[210px]"
              >
                <div className="overflow-hidden aspect-square bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 py-3 px-2">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls RIGHT (left to right) */}
        <div className="overflow-hidden">
          <div className="flex w-max gap-8">
            {row2Doubled.map((item, index) => (
              <div
                key={`r2-${index}`}
                className="group shrink-0 w-[150px] sm:w-[170px] md:w-[190px] lg:w-[210px]"
              >
                <div className="overflow-hidden aspect-square bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 py-3 px-2">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}