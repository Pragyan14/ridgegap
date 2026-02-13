"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What types of corporate gifts do you offer?",
    answer:
      "We offer a wide range of corporate gifts including branded merchandise, premium gift boxes, tech gadgets, eco-friendly products, customized stationery, and luxury items tailored to your brand and budget.",
  },
  {
    question: "Can I customize the corporate gifts with our company logo?",
    answer:
      "Absolutely! We specialize in custom branding. You can add your company logo, colors, and messaging to most of our products. Our design team will work with you to ensure the branding looks perfect.",
  },
  {
    question: "Do you provide bulk order discounts?",
    answer:
      "Yes, we offer competitive bulk order discounts. The more you order, the better the pricing. Contact our sales team for a custom quote based on your order quantity and product selection.",
  },
  {
    question:
      "Can I request a sample of the corporate gift before placing a bulk order?",
    answer:
      "Yes, we encourage clients to request samples before committing to a bulk order. This allows you to evaluate the quality, branding, and overall presentation of the product firsthand.",
  },
  {
    question:
      "Do you offer personalized packaging for the corporate gifts?",
    answer:
      "Yes, we offer fully personalized packaging options including custom boxes, branded tissue paper, ribbon, and personalized greeting cards to make your gifts truly special.",
  },
  {
    question:
      "Can I track the delivery status of my corporate gifts?",
    answer:
      "Yes, once your order is shipped, you will receive a tracking number via email. You can use this to monitor the delivery status of your corporate gifts in real-time.",
  },
  {
    question:
      "How long does it take to receive our corporate gifts?",
    answer:
      "Standard delivery typically takes 7-14 business days depending on the customization required. Rush orders can be accommodated with expedited shipping options available at checkout.",
  },
  {
    question:
      "Can you handle international shipping for our corporate gifts?",
    answer:
      "Yes, we ship internationally to over 100 countries. Our logistics team handles all customs documentation and ensures your gifts arrive safely and on time, wherever your recipients are located.",
  },
  {
    question:
      "Can you help with gift selection if I\u2019m unsure about what to choose?",
    answer:
      "Of course! Our gifting experts can help you select the perfect gifts based on your budget, occasion, recipient preferences, and branding requirements. Just reach out to our team for a consultation.",
  },
  {
    question:
      "Is there a minimum order quantity for corporate gifts?",
    answer:
      "Our minimum order quantity varies by product, but generally starts at 25 units for customized items. For standard products without customization, there may be no minimum order requirement.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, bank transfers, UPI, and corporate purchase orders for established accounts. We also offer flexible payment terms for large orders.",
  },
  {
    question:
      "Do you offer any additional services, such as gift wrapping or custom messaging?",
    answer:
      "Yes, we offer a variety of additional services including premium gift wrapping, custom messaging, handwritten notes, and curated gift hampers. Let us know your requirements and we will make it happen.",
  },
]

function FAQItem({
  number,
  question,
  answer,
  highlighted,
}: {
  number: number
  question: string
  answer: string
  highlighted?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`border-b border-[#d5dce3] ${
        highlighted
          ? "rounded border border-[#a8c4e0] bg-[#edf3fb] shadow-[0_0_0_3px_rgba(168,196,224,0.25)]"
          : ""
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-6 px-3 py-5 text-left transition-colors hover:bg-[#f0f5fa] md:py-6"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium leading-snug text-[#0a2a4a] md:text-lg">
          {number}. {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#5a6a7a] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-3 pb-5 text-sm leading-relaxed text-[#4a5a6a] md:text-base">
            <span className="font-semibold text-[#0a2a4a]">Ans:</span> {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const leftColumn = faqs.slice(0, 6)
  const rightColumn = faqs.slice(6)

  return (
    <section className="w-full bg-[#f5f7fa] px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <svg
            width="72"
            height="72"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Speech bubble */}
            <rect
              x="8"
              y="12"
              width="36"
              height="28"
              rx="4"
              stroke="#3a4a5a"
              strokeWidth="2.5"
              fill="none"
            />
            <path
              d="M16 40 L12 50 L24 40"
              stroke="#3a4a5a"
              strokeWidth="2.5"
              fill="none"
              strokeLinejoin="round"
            />
            {/* Lines inside bubble */}
            <line
              x1="16"
              y1="22"
              x2="36"
              y2="22"
              stroke="#3a4a5a"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="16"
              y1="28"
              x2="32"
              y2="28"
              stroke="#3a4a5a"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="16"
              y1="34"
              x2="28"
              y2="34"
              stroke="#3a4a5a"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Question mark circle */}
            <circle
              cx="46"
              cy="16"
              r="10"
              stroke="#3a4a5a"
              strokeWidth="2.5"
              fill="#f5f7fa"
            />
            <text
              x="46"
              y="21"
              textAnchor="middle"
              fill="#3a4a5a"
              fontSize="14"
              fontWeight="bold"
              fontFamily="serif"
            >
              ?
            </text>
          </svg>
        </div>

        {/* Heading */}
        <h2
          className="mb-14 text-center text-3xl font-bold text-[#0a2351] md:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Frequently Asked Questions
        </h2>

        {/* Two independent columns so expanding one doesn't affect the other */}
        <div className="flex flex-col gap-x-16 md:flex-row">
          {/* Left column */}
          <div className="flex-1">
            {leftColumn.map((faq, index) => (
              <FAQItem
                key={`left-${index}`}
                number={index + 1}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="flex-1">
            {rightColumn.map((faq, index) => (
              <FAQItem
                key={`right-${index}`}
                number={index + 7}
                question={faq.question}
                answer={faq.answer}
                highlighted={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
