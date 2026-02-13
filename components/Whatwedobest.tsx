'use client';

export default function WhatWeDoBest() {
  return (
    <section className="py-8 md:py-12 bg-[#eef2ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── LEFT — Illustration ── */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-[#dde8e4] rounded-3xl md:p-6 w-full max-w-125">
              <img
                src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/cg-gifting-showcase-1.png"
                alt="Corporate Gifting Showcase"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* ── RIGHT — Text Content ── */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              What we do best?
            </h3>

            <div className="text-gray-600 text-[15px] text-justify md:text-base leading-relaxed space-y-4">
              <p>
                Ridgegap.com, one of the leading and most preferred corporate gifting companies in Bangalore. Completing 10yrs in the corporate gifting industry, we specialize in providing customized corporate gifts that are sure to impress both your employees, clients &amp; customers.

                With our unique selection of 10k+ top-quality gifts, you can show your appreciation to employees and strengthen your professional relationships with clients for any occasion.

                Discover the best corporate gifting solutions tailored to your brand and budget. Our extensive range includes personalized gifts, employee gifts, clients gifts, new employee welcome kits, customised tshirts, curated gift boxes, backpacks, swags, luxury gift sets, tech gadgets, and more.

                As the top corporate gifts company in Bangalore, we take pride in delivering exceptional customer service and high-quality products. Trust us to help you make a lasting impression with our customised corporate gifts that reflect your brand identity. Contact us today to find the perfect corporate gift for employees and clients.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}