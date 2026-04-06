'use client';

import Image from "next/image";

interface ProjectItem {
  image: string;
  title?: string;
}

interface RecentProjectsProps {
  subtitle?: string;
  projects?: ProjectItem[];
}

const defaultSubtitle =
  "Ridgegap has been helping clients for years, providing high quality gifts & products with customer satisfaction as our highest priority. Through our work, our customers have been able to express their gratitude & appreciation at every gifting occasion.";

const defaultProjects: ProjectItem[] = [
  { image: '/images/recent-project-3.png', title: 'Curated Gift Boxes' },
  { image: '/images/curated-box-4.png', title: 'Festive Gifting' },
  { image: '/images/custom-tshirt.png', title: 'Festive Gifting' },
  { image: '/images/backpack.png', title: 'Curated Gift Boxes' },
  { image: '/images/swag-pack.png', title: 'Curated Gift Boxes' },
  { image: '/images/event-and-conference.png', title: 'Festive Gifting' },
  { image: '/images/luxury-gift-2.png', title: 'Festive Gifting' },
  { image: '/images/special-custom-made-projects.png', title: 'Curated Gift Boxes' },
];

export default function RecentProjects({
  subtitle = defaultSubtitle,
  projects,
}: RecentProjectsProps) {

  // Merge custom + default → ALWAYS 8 items
  const mergedProjects: ProjectItem[] = [
    ...(projects || []),
    ...defaultProjects,
  ].slice(0, 8);

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">
            Recent Projects Completed
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mergedProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden hover:transition-shadow duration-300"
            >
              <div>
                <Image
                  src={project.image}
                  alt={project.title || `Project ${index + 1}`}
                  width={800}
                  height={192}
                  className="shadow-lg object-contain mb-4"
                />
              </div>

              <div className="px-6 pb-6">
                <p className="text-center text-gray-800 font-semibold text-base">
                  {project.title || "Curated Gift Boxes"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Hint */}
        <div className="text-center mt-4 md:hidden">
          <p className="text-sm text-gray-500">
            ← Swipe to see more projects →
          </p>
        </div>

      </div>
    </section>
  );
}