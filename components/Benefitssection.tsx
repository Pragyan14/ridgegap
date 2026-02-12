'use client';

const benefits = [
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/thankyou-corporate-gift-ico.png',
    alt: 'thankyou-corporate-gift',
    text: 'Corporate gifting is a great way to say "thanks" to employees, clients & partners. And builds goodwill, loyalty, & brand recognition.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/increase-positivity-motivation-boost-ico.png',
    alt: 'increase-positivity-motivation-boost',
    text: 'It increases the positivity and motivation of employees. Corporate gifts are a great method to boost employee morale.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/nurturing-connections-ico.png',
    alt: 'nurturing-connections',
    text: "It's an excellent way to start and continue nurturing all your connections and relationships with clients and customers.",
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/express-goodwill-ico.png',
    alt: 'express-goodwill',
    text: 'Express goodwill in general.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/outreach-business-connections-ico.png',
    alt: 'outreach-business-connections',
    text: 'Outreach vital business connections without barriers.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/endorse-company-ico.png',
    alt: 'endorse-company',
    text: 'Endorse your company image.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/strengthen-company-culture-cio.png',
    alt: 'strengthen-company-culture',
    text: 'Strengthen company culture.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/cost-efficient-way-ico.png',
    alt: 'cost-efficient-way',
    text: 'Advertise in a cost-efficient way.',
  },
  {
    icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/build-maintain-strengthen-relationship-ico.png',
    alt: 'build-maintain-strengthen-relationship',
    text: 'Build, Maintain, & Strengthen Relationships.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">

      {/* Large watermark "BENEFITS" text in background */}
      <div className="absolute top-4 right-24 select-none pointer-events-none">
        <span
          className="text-[7rem] md:text-[10rem] lg:text-[12rem] font-black tracking-widest uppercase"
          style={{ color: 'rgba(200,210,230,0.35)', lineHeight: 1 }}
        >
          BENEFITS
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <p className="text-gray-500 text-sm md:text-base mb-1">
            Why is corporate gifting so important?
          </p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2e6e]"
            style={{ fontFamily: 'Georgia, serif' }}>
            Benefits of Corporate Gifts
          </h3>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#eef3fb] rounded-2xl p-6 md:p-7 flex flex-col gap-3"
            >
              {/* Icon + first line of text flow inline like original */}
              <div className="text-gray-700 text-base leading-relaxed">
                <img
                  src={benefit.icon}
                  alt={benefit.alt}
                  className="inline-block w-14 h-14 object-contain align-top mr-3 float-left"
                />
                {benefit.text}
                {/* clearfix */}
                <div className="clear-both" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}