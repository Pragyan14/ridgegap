'use client'

import BrandsWeRepresent from "@/components/BrandsWeRepresent";
import CTAForm from "@/components/Ctaform";
import DiwaliCareSection from "@/components/DiwaliCareSection";
import FAQSection from "@/components/FAQ";
import ProductCategories from "@/components/Productcategories";
import TestimonialCarousel from "@/components/Testimonials";
import Image from "next/image";

export default function CorporateDiwaliGifts() {
  const images = [
    "/images/diwali-special-500-1000.jpg",
    "/images/diwali-special-1000-2000.jpg",
    "/images/diwali-special-2000-4000.jpg",
    "/images/diwali-special-2000-7000.jpg",
    "/images/diwali-special-500-2000.jpg",
  ];

  const items = [
    "/images/diwali-gifts-img1.jpeg",
    "/images/diwali-gifts-img2.jpeg",
    "/images/diwali-gifts-img3.jpeg",
    "/images/diwali-gifts-img4.jpeg",
    "/images/diwali-gifts-img5.jpeg",
    "/images/diwali-gifts-img6.jpeg",
    "/images/diwali-gifts-img7.jpeg",
    "/images/diwali-gifts-img8.jpeg",
  ]

  return (<>
    <section className="relative w-full h-[80vh]">
      <Image
        src="/images/corporate-diwali-banner-scaled.jpg"
        alt="Diwali Corporate Gifting Banner"
        fill
        priority
        className="object-contain"
      />
    </section>

    <section>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative rounded-sm shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
            >
              <Image
                src={src}
                alt="Diwali Corporate Gift"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Diwali Corporate Gifts: Unique Hampers & gifts to Delight Your Employees
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Elevate your Diwali celebrations with exclusive corporate gift hampers that your team will love
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((src, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={src}
                  alt="Diwali Gift"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ProductCategories />

    <section className="py-8 md:py-12 bg-[#f6fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── LEFT — Illustration ── */}
          <div className="flex justify-center transition-all duration-300 lg:justify-start hover:-translate-y-3">
            <div className="md:p-6 w-full max-w-200">
              <img
                src="https://ridgegap.com/wp-content/uploads/2025/07/celebrate-diwali-img.jpeg"
                alt="Corporate Gifting Showcase"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* ── RIGHT — Text Content ── */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              Celebrate Diwali
            </h3>

            <div className="text-gray-600 text-[15px] text-justify md:text-base leading-relaxed space-y-4">
              <p>Gift Joy – During this festive season, we encourage you to express gratitude and appreciation to your clients, partners, and employees who have been instrumental in your journey. What better way to do so than with our exquisite range of customized corporate Diwali gifts? This Diwali, let Ridgegap Corporate Gifting be your partner in making your gestures of appreciation stand out. We are committed to providing exceptional quality, unparalleled service, and on-time delivery, ensuring a seamless gifting experience for you and your recipients.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <DiwaliCareSection/>

    <CTAForm/>

    <TestimonialCarousel/>

    <FAQSection/>

    <BrandsWeRepresent/>
    
  </>);
}
