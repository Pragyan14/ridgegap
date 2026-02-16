'use client';

import ProductCategories from "@/components/Productcategories";
import TestimonialCarousel from "@/components/Testimonials";
import CTABtn from "@/components/ui/CTABtn";
import WhyChooseUs from "@/components/Whychooseus";

export default function ProductsPage() {
  return (
    <>
    <section
      id="product-showcase"
      className="relative bg-blue-500 py-16 px-6 sm:px-12 lg:px-24 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://ridgegap.com/wp-content/uploads/2025/05/Products-Banner-page-scaled.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay to darken background for text contrast */}
      <div className="absolute inset-0"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-white max-w-lg mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold leading-tight mb-6">
            Unwrap the Joy of Giving with Our Corporate Gifting products.
          </h1>
          <p className="text-lg mb-8">
            Find the perfect corporate gift for your employees and clients with Ridge gap with 5000+ innovative products to choose from.
          </p>
          <CTABtn message={"Request a quote it takes 2 min!"} />
        </div>

        {/* Empty right side, background image shows here */}
        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>

    <ProductCategories/>
    <WhyChooseUs/>

    <TestimonialCarousel/>
    </>
  );
}
