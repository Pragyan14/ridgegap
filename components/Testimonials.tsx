'use client';

import { useState } from 'react';

const testimonials = [
  { name: 'Bhavani', text: '"I am highly impressed with the exceptional service provided by this company. Their attention to detail and commitment to delivering high-quality products have made them my go-to choice for corporate gifts."' },
  { name: 'Kanishka', text: 'Their prompt service and quality gifts have made a positive impact on our employee engagement initiatives. The thoughtful selection and timely delivery have helped us create memorable experiences and strengthen employee satisfaction.' },
  { name: 'Prabhu', text: "I can't recommend ridgegap enough for corporate gifting. Their wide range of customizable options and excellent customer service have helped me worry less about gifting." },
  { name: 'Dhivya', text: 'The level of professionalism and attention to detail exhibited by ridgegap is very impressive. They understand your requirements clearly and deliver on time.' },
  { name: 'Priyanka', text: 'From start to finish, the team at this ridgegap has demonstrated utmost professionalism and expertise. Their innovative ideas and seamless execution has made it easy for us to procure from them.' },
  { name: 'Krishna', text: 'We have been consistently ordering our corporate gifts from ridgegap the service provided is exceptional and offer creative solutions that make our employees feel valued.' },
  { name: 'Sarabjith', text: 'The team at ridgegap is a pleasure to work with. They go above and beyond to ensure that our employee recognition efforts are a success. Their professionalism and commitment to excellence are commendable.' },
  { name: 'Ankita', text: 'Choosing ridgegap was one of the best decisions I made. Their dedication to providing exceptional gifts and ensuring customer satisfaction is commendable. Keep up the great work!' },
  { name: 'Raghu Kashyap', text: 'Very reliable. Was able to get some custom branding on products done at a very short notice. The quality of the product and branding was great.' },
  { name: 'Rahul Shettigar', text: 'Great work and delivered on time. Highly professional and exceeded expectations with attention to detail. Their commitment to quality and customer satisfaction truly set them apart, making the entire experience seamless and impressive.' },
  { name: 'Prakash Kukreja', text: 'Loved the quality of the bags & design, it was customised to my requirement. The final product perfectly matched my vision and was delivered with great craftsmanship.' },
  { name: 'Dheeraj Achar', text: "Had engaged with them for corporate gifting. They have a very efficient team. All products are branded and were delivered on time." },
  { name: 'Rahul Ostawal', text: 'Brilliant planning! I really liked the options of the hand-picked resorts they showcased, each thoughtfully selected to match our preferences and make the experience truly memorable.' },
  { name: 'Kunal Mehta', text: 'Great activities to choose from, offering something for everyone. The customisation on the packages was impressive, allowing for a truly personalized and enjoyable experience.' },
  { name: 'Varun Darira', text: 'Young, hardworking guys who truly understand exactly what you need. Their dedication, responsiveness, and attention to detail make the entire experience smooth and hassle-free.' },
];

// Background collage images
const bgImages = [
  'https://ridgegap.com/wp-content/uploads/2025/04/recent-project-3.png',
  'https://ridgegap.com/wp-content/uploads/2025/04/curated-box-1.png',
  'https://ridgegap.com/wp-content/uploads/2025/04/luxury-gift-1.png',
  'https://ridgegap.com/wp-content/uploads/2025/04/recent-project-.png',
  'https://ridgegap.com/wp-content/uploads/2025/04/swag-pack-3-1.png',
  'https://ridgegap.com/wp-content/uploads/2025/04/event-and-conference-1.png',
  'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-5.jpg',
  'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-17.jpg',
  'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/works/all-works/our-works-showcase-18.jpg',
  'https://ridgegap.com/wp-content/uploads/2025/04/custom-tshirt.png',
  'https://ridgegap.com/wp-content/uploads/2025/04/curated-box-4.png',
  'https://ridgegap.com/wp-content/uploads/2025/04/luxury-gift-2.png',
];

const ITEMS_PER_PAGE = 3;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = testimonials.slice(
    current * ITEMS_PER_PAGE,
    current * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  // Pad to always show 3
  while (visible.length < ITEMS_PER_PAGE) {
    visible.push(testimonials[visible.length % testimonials.length]);
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#dbe1e4]">

      {/* <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-6 grid-rows-2 w-full h-full opacity-[0.12]">
          {bgImages.map((img, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[#eef2ff]/70" />
      </div> */}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
            Here's What People Have to Say!
          </h3>
        </div>

        {/* Carousel wrapper with prev/next */}
        <div className="relative flex items-center gap-4">

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 text-[#1e3a8a]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 3-column testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 min-h-65">
            {visible.map((t, i) => (
              <div key={`${current}-${i}`} className="flex flex-col">
                {/* Large quote mark */}
                <div className="text-[#c8d8f0] text-[80px] leading-none font-serif mb-1 select-none">
                  "
                </div>

                {/* Quote text */}
                <p className="text-gray-700 text-[15px] leading-relaxed flex-1 mb-5">
                  {t.text}
                </p>

                {/* Divider */}
                <hr className="border-gray-300 mb-3" />

                {/* Name — middle card active name gets blue color like the screenshot */}
                <p className={`font-semibold text-sm ${i === 1 ? 'text-[#3b82f6]' : 'text-gray-900'}`}>
                  {t.name}
                </p>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 text-[#1e3a8a]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === current
                  ? 'bg-[#1e3a8a] scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}