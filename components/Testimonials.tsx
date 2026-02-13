"use client"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Young, hardworking guys who truly understand exactly what you need. Their dedication, responsiveness, and attention to detail make the entire experience smooth and hassle-free.",
    name: "Varun Darira",
  },
  {
    quote:
      "Choosing ridgegap was one of the best decisions I made. Their dedication to providing exceptional gifts and ensuring customer satisfaction is commendable. Keep up the great work!",
    name: "Ankita",
  },
  {
    quote:
      "Very reliable. Was able to get some custom branding on products done at a very short notice. The quality of the product and branding was great.",
    name: "Raghu Kashyap",
  },
  {
    quote:
      "Excellent service and top-notch quality. They went above and beyond to deliver exactly what we needed on time. Highly recommended for corporate gifting!",
    name: "Priya Sharma",
  },
  {
    quote:
      "Fantastic experience from start to finish. The team was professional, creative, and delivered stunning results. Will definitely use their services again.",
    name: "Aditya Rao",
  },
  {
    quote:
      "Outstanding work on our company event gifts. The personalization options were incredible and our clients loved the final products. Great value for money!",
    name: "Sneha Patel",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const cardsPerView = 3
  const maxIndex = Math.max(0, testimonials.length - cardsPerView)

  const goToPrev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => Math.max(0, prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning, maxIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0
        return prev + 1
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <section
      className="relative w-full overflow-hidden bg-repeat bg-center"
      style={{
        backgroundImage:
          'url("https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/bg-test.png")',
      }}
    >
      {/* Soft overlay for readability */}
      <div className="absolute inset-0" />

      <div className="relative px-6 py-16 md:px-16 md:py-24">
        {/* Heading */}
        <h2
          className="mb-12 text-center text-3xl md:text-4xl lg:text-5xl"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: "#0a2351",
          }}
        >
          {"Here's What People Have to Say!"}
        </h2>

        {/* Carousel container */}
        <div className="relative mx-auto max-w-7xl">
          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-sm bg-[#c0cdd8]/70 text-[#5a6a7a] transition-colors hover:bg-[#b0bfcc] disabled:opacity-30 md:-left-5"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-sm bg-[#c0cdd8]/70 text-[#5a6a7a] transition-colors hover:bg-[#b0bfcc] disabled:opacity-30 md:-right-5"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Cards track */}
          <div className="overflow-hidden px-6">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 px-4 md:w-1/3"
                  style={{ minWidth: `${100 / cardsPerView}%` }}
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  name,
}: {
  quote: string
  name: string
}) {
  return (
    <div className="flex h-full flex-col justify-between py-4">
      {/* Quote mark */}
      <div>
        <svg
          width="48"
          height="40"
          viewBox="0 0 48 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4"
          aria-hidden="true"
        >
          <path
            d="M0 40V24.8C0 20.267 0.8 16.067 2.4 12.2C4.133 8.2 6.867 4.467 10.6 1L16.8 5.8C14.133 8.467 12.133 11.133 10.8 13.8C9.6 16.467 8.933 19.267 8.8 22.2H18V40H0ZM28 40V24.8C28 20.267 28.8 16.067 30.4 12.2C32.133 8.2 34.867 4.467 38.6 1L44.8 5.8C42.133 8.467 40.133 11.133 38.8 13.8C37.6 16.467 36.933 19.267 36.8 22.2H46V40H28Z"
            fill="#d5dde5"
          />
        </svg>

        <p className="text-sm leading-relaxed text-[#3a3a3a] md:text-base">
          {quote}
        </p>
      </div>

      {/* Author */}
      <div className="mt-8">
        <div className="mb-3 h-px w-full bg-[#c0c8d0]" />
        <p className="text-sm font-semibold text-[#1a1a1a] md:text-base">
          {name}
        </p>
      </div>
    </div>
  )
}
