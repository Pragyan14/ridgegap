'use client';

export interface BenefitItem {
  icon: string;
  alt: string;
  text: string;
}

interface ProductBenefitProps {
  benefits: BenefitItem[];
  subtitle: string;   // for <p>
  title: string;      // for <h3>
  watermarkText?: string; // optional (BONUS)
}

export default function ProductBenefit({
  benefits,
  subtitle,
  title,
  watermarkText = "BENEFITS",
}: ProductBenefitProps) {
  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">
      
      {/* Watermark */}
      <div className="absolute top-4 right-24 select-none pointer-events-none">
        <span
          className="text-[7rem] md:text-[10rem] lg:text-[12rem] font-black tracking-widest uppercase"
          style={{ color: 'rgba(200,210,230,0.35)', lineHeight: 1 }}
        >
          {watermarkText}
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="text-gray-500 text-sm md:text-base mb-1">
            {subtitle}
          </p>
          <h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2e6e]"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {title}
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={`${benefit.alt}-${index}`}
              className="bg-[#eef3fb] rounded-2xl p-6 md:p-7 flex flex-col gap-3"
            >
              <div className="text-gray-700 text-base leading-relaxed">
                <img
                  src={benefit.icon}
                  alt={benefit.alt}
                  className="inline-block w-14 h-14 object-contain align-top mr-3 float-left"
                />
                {benefit.text}
                <div className="clear-both" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
