'use client';

const features = [
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/10years-ico.png',
    html: '<strong>10 years</strong> of corporate gifting solutions.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/trusted-ico.png',
    html: 'Trusted by <strong>300+</strong> corporate clients.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/innovative-gifting-ico.png',
    html: '<strong>5000+</strong> innovative gifting products.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/packages-delivered-ico.png',
    html: '<strong>20000+</strong> packages delivered safely.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/projects-completed-ico.png',
    html: '<strong>200+</strong> Projects completed.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/brand-ico.png',
    html: '<strong>300+</strong> brands to choose from.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/category-ico.png',
    html: 'Live catalog for <strong>20+</strong> categories.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/gifts-door-delivery-ico.png',
    html: 'Gifts Door Delivered pan India.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/efficient-sourcing-ico.png',
    html: 'Bespoke personalization and efficient sourcing.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/quality-budget-ico.png',
    html: 'Premium quality and affordable for all types of budget.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/lowest-turnaround-time-ico.png',
    html: 'Lowest turnaround time promise.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/customization-expertization-ico.png',
    html: 'In-house team of corporate Gifting &amp; customization experts.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-12">

          {/* Top icon — gear/service */}
          <div className="flex justify-center mb-5">
            <img
              src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/feature-ico.png"
              alt="Corporate gifting feature"
              className="w-16 h-16 object-contain"
              onError={(e) => {
                // Fallback SVG gear icon if image fails
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          {/* Heading */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 leading-tight max-w-4xl mx-auto">
            Are we one of the top corporate gifting companies?
          </h3>

          {/* Subtext */}
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Corporate gifting Companies have unique attributes. Lets help you decide if we are one of the best gifting companies.
          </p>
        </div>

        {/* ── Feature Cards Grid — 4 columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {features.map((feat, index) => (
            <div
              key={index}
              className="bg-[#eef4ff] rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow duration-200 min-h-27.5"
            >
              {/* Icon */}
              <img
                src={feat.icon}
                alt=""
                className="w-14 h-14 object-contain shrink-0 mt-0.5"
              />

              {/* Text — bold numbers/keywords via dangerouslySetInnerHTML */}
              <p
                className="text-gray-700 text-[15px] leading-snug pt-1"
                dangerouslySetInnerHTML={{ __html: feat.html }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}