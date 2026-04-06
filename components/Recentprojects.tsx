'use client';

import Image from "next/image";

interface RecentProjectsProps{
  subtitle?: string,
}

const defaultSubtitle = "Ridgegap has been helping clients for years, providing high quality gifts & products with customer satisfaction as our highest priority. Through our work, our customers have been able to express their gratitude & appreciation at every gifting occasion."

export default function RecentProjects({subtitle = defaultSubtitle}: RecentProjectsProps) {
  const projects = [
    {
      image: '/images/recent-project-3.png',
      title: 'Curated Gift Boxes',
      bgColor: 'bg-sky-400',
    },
    {
      image: '/images/curated-box-4.png',
      title: 'Festive Gifting',
      bgColor: 'bg-sky-400',
    },
    {
      image: '/images/custom-tshirt.png',
      title: 'Festive Gifting',
      bgColor: 'bg-sky-400',
    },
    {
      image: '/images/backpack.png',
      title: 'Curated Gift Boxes',
      bgColor: 'bg-gray-200',
    },
    {
      image: '/images/swag-pack.png',
      title: 'Curated Gift Boxes',
      bgColor: 'bg-sky-400',
    },
    {
      image: '/images/event-and-conference.png',
      title: 'Festive Gifting',
      bgColor: 'bg-gray-200',
    },
    {
      image: '/images/luxury-gift-2.png',
      title: 'Festive Gifting',
      bgColor: 'bg-sky-400',
    },
    {
      image: '/images/special-custom-made-projects.png',
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
            {subtitle}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden hover:transition-shadow duration-300`}
            >
              <div className="pb-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={192}
                  className="shadow-lg object-contain mb-4"
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