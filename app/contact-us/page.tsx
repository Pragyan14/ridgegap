'use client'

import ContactForm from "@/components/Contactform";

export default function ContactsPage() {
  return <>
    <section className="relative w-full bg-linear-to-r from-[#00d2ff] via-[#7165e3] to-[#ed1aff] text-white py-24 md:py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact Ridgegap
          </h2>

          <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
            Your #1 source for Customized Corporate Gifting Solutions.
          </p>
        </div>

      </div>
    </section>

    <ContactForm/>
  </>;
}
