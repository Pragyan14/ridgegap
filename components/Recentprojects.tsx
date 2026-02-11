'use client';

export default function RecentProjects() {
  const projects = [
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/recent-project-3.png',
      title: 'Curated Gift Boxes',
      bgColor: 'bg-sky-400',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/curated-box-4.png',
      title: 'Festive Gifting',
      bgColor: 'bg-sky-400',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/custom-tshirt.png',
      title: 'Festive Gifting',
      bgColor: 'bg-sky-400',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/05/backpack.png',
      title: 'Curated Gift Boxes',
      bgColor: 'bg-gray-200',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/swag-pack.png',
      title: 'Curated Gift Boxes',
      bgColor: 'bg-sky-400',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/event-and-conference.png',
      title: 'Festive Gifting',
      bgColor: 'bg-gray-200',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/luxury-gift-2.png',
      title: 'Festive Gifting',
      bgColor: 'bg-sky-400',
    },
    {
      image: 'https://ridgegap.com/wp-content/uploads/2025/04/special-custom-made-projects.png',
      title: 'Curated Gift Boxes',
      bgColor: 'bg-sky-400',
    },
  ];

  // Split into two rows
  const row1 = projects.slice(0, 2);
  const row2 = projects.slice(2, 4);
  const row3 = projects.slice(4, 6);
  const row4 = projects.slice(6, 8);

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">
            Recent Projects Completed
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ridgegap has been helping clients for years, providing high quality gifts & products with customer satisfaction as our highest priority. Through our work, our customers have been able to express their gratitude & appreciation at every gifting occasion.
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-6 min-w-max">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {row1.map((project, index) => (
                <div
                  key={`row1-${index}`}
                  className={`${project.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-[280px] md:w-[320px]`}
                >
                  <div className="p-6 pb-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-contain mb-4"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-center text-gray-800 font-semibold text-base">
                      {project.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              {row2.map((project, index) => (
                <div
                  key={`row2-${index}`}
                  className={`${project.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-[280px] md:w-[320px]`}
                >
                  <div className="p-6 pb-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-contain mb-4"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-center text-gray-800 font-semibold text-base">
                      {project.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              {row3.map((project, index) => (
                <div
                  key={`row3-${index}`}
                  className={`${project.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-[280px] md:w-[320px]`}
                >
                  <div className="p-6 pb-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-contain mb-4"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-center text-gray-800 font-semibold text-base">
                      {project.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-6">
              {row4.map((project, index) => (
                <div
                  key={`row4-${index}`}
                  className={`${project.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-[280px] md:w-[320px]`}
                >
                  <div className="p-6 pb-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-contain mb-4"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-center text-gray-800 font-semibold text-base">
                      {project.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Hint for Mobile */}
        <div className="text-center mt-4 md:hidden">
          <p className="text-sm text-gray-500">
            ← Swipe to see more projects →
          </p>
        </div>
      </div>
    </section>
  );
}