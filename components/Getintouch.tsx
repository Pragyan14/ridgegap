'use client';

import CTABtn from "./ui/CTABtn";

export default function GetInTouch() {
  return (
    <section className="py-12 md:py-20 bg-[#eef2ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT — Collage with geometric shapes ── */}
          <div className="relative w-full h-105 md:h-125">

            {/* Orange semicircle — top left */}
            <div className="absolute top-0 left-0 w-36 h-36 md:w-48 md:h-48 bg-[#e85d2f] rounded-full z-10" />

            {/* Yellow/gold blob — bottom center-left */}
            <div className="absolute bottom-4 left-16 md:left-24 w-40 h-40 md:w-52 md:h-52 bg-[#f0a500] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] z-10" />

            {/* Blue teardrop — bottom left */}
            <div className="absolute bottom-0 left-0 w-24 h-28 md:w-32 md:h-36 bg-[#1e3a8a] rounded-[50%_50%_50%_50%/40%_40%_60%_60%] z-10" />

            {/* Main product collage image — circle crop, right side */}
            <div className="absolute top-4 right-0 md:right-4 w-60 h-60 md:w-75 md:h-75 rounded-full overflow-hidden z-20 shadow-xl">
              <img
                src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/cg-gifting-showcase-1.png"
                alt="Corporate Gifting Products"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Jacket / Apparel image — left center */}
            <div className="absolute top-[30%] left-0 w-35 h-42.5 md:w-45 md:h-52.5 rounded-xl overflow-hidden z-20 shadow-lg">
              <img
                src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-7.jpg"
                alt="Customised Apparel"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Red burst / starburst decoration */}
            <div className="absolute top-[28%] left-32.5 md:left-41.25 z-30">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180
                  const x2 = (20 + 18 * Math.cos(rad)).toFixed(4)
                  const y2 = (20 + 18 * Math.sin(rad)).toFixed(4)

                  return (
                    <line
                      key={i}
                      x1="20"
                      y1="20"
                      x2={x2}
                      y2={y2}
                      stroke="#e85d2f"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  )
                })}

              </svg>
            </div>

            {/* Pink zig-zag / arrow decoration */}
            <div className="absolute bottom-[28%] left-2.5 z-30">
              <svg width="36" height="50" viewBox="0 0 36 50" fill="none">
                {[0, 1, 2, 3].map((i) => (
                  <polyline
                    key={i}
                    points={`4,${8 + i * 10} 18,${2 + i * 10} 32,${8 + i * 10}`}
                    stroke="#e85d80" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  />
                ))}
              </svg>
            </div>

          </div>

          {/* ── RIGHT — Text Content ── */}
          <div className="space-y-5">

            {/* Eyebrow label */}
            <p className="text-[#3b82f6] font-semibold tracking-widest text-sm uppercase">
              Get In Touch
            </p>

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
              Send the perfect corporate gift to your employees and clients.
            </h3>

            {/* Body text */}
            <p className="text-gray-600 text-base leading-relaxed">
              Make Any Occasion Memorable with Our Personalized Gift Ideas. At ridge gap we believe gifting has to be useful, fun, creative and feel more personalized. It makes the employees feel more valued for their work. We work with our clients one to one to handle the complete process from sourcing to packaging to shipping. To get you exactly what you have imagined. Ready to delight your team?
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <CTABtn message={"Connect Now!"} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}