'use client';

import Image from "next/image";
import CTABtn from "./ui/CTABtn";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-repeat"
        style={{
          backgroundImage:
            'url("/images/slider-pattern-bg.png")',
        }}
      >
        {/* Optional Light Overlay for better text visibility */}
        <div className="absolute inset-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-black font-semibold text-lg">
                  Welcome to RIDGEGAP
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f437f] leading-tight">
                  Your #1 source for Customized Corporate Gifting Solutions.
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Perfect Corporate Gift Makes Anyone Feel Special – Gifting
                  Solutions for Employees, Clients and Business Partners to
                  recognise and reward success in the workplace.
                </p>
              </div>

              <div>
                <CTABtn message={"Book a Call"} />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">
                    200+
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">
                    20000+
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Packages Delivered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">
                    5000+
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Innovative Products
                  </div>
                </div>
              </div>

              {/* Reviews Badge */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">
                  100+ Reviews
                </span>
              </div>
            </div>

            {/* Right Content - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/new-slider-hero-1.jpg"
                      alt="Curated Corporate Gift Boxes"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/new-slider-hero-3.jpg"
                      alt="Corporate Swag Packs"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/new-slider-hero-2.jpg"
                      alt="New Joiner Corporate Kits"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/new-slider-hero-4.jpg"
                      alt="Branded Office Stationery Gifts"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Blur Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200 rounded-full opacity-50 blur-2xl"></div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
