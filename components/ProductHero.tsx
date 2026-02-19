'use client';

import CTABtn from "./ui/CTABtn";

interface ProductHeroProps {
  backgroundImage: string;
  heading: string;
  subheading: string;
  buttonMessage: string;
}

export default function ProductHero({
  backgroundImage,
  heading,
  subheading,
  buttonMessage,
}: ProductHeroProps) {
  return (
    <section
      className="relative min-h-[500px] flex items-center px-6 sm:px-12 lg:px-24 overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">

        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white max-w-5xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
            {heading}
          </h1>

          <p className="text-base sm:text-lg mb-8 leading-relaxed">
            {subheading}
          </p>

          <CTABtn message={buttonMessage} />
        </div>

        {/* Empty right column for layout balance */}
        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
}
