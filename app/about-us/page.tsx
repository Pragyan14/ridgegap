'use client'

import WhyChooseUs from "@/components/Whychooseus";

export default function AboutPage() {
    return (
        <>
            <section className="relative w-full bg-linear-to-r from-[#00d2ff] via-[#7165e3] to-[#ed1aff] text-white py-24 md:py-32 overflow-hidden">

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            About Ridgegap
                        </h2>

                        <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
                            Your #1 source for Customized Corporate Gifting Solutions.
                        </p>
                    </div>

                </div>
            </section>

            <section className="py-14 md:py-20 bg-[#eef2ff]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                    {/* ── Row 1: Text (9-col) + Image (3-col) ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-center">

                        {/* Left — body text */}
                        <div className="text-gray-600 text-[15px] md:text-base leading-relaxed space-y-4">
                            <p>
                                At ridgegap, we take immense pride in curating the most exquisite and thoughtful gift hampers and corporate gifts that enhance the joys of gifting. Recently, we had the pleasure of working with some of the most prestigious businesses in the country, including brands in the finance, healthcare, and hospitality industry. Our team of experts ensured that each gift was tailored to reflect the values, ethos, and preferences of each brand, ensuring a genuinely bespoke gifting experience.
                            </p>
                            <p>
                                We are thrilled to report that our customers have expressed their utmost satisfaction &amp; appreciation for our outstanding service &amp; exceptional gifting solutions. With our commitment to quality &amp; unparalleled customer service, we aim to continue to delight &amp; impress our clients for many years to come.
                            </p>
                            <p>
                                We have provided one-of-its-kind solutions to some of the top corporate organizations in Bangalore. Ridge gap is a company that provides the most comprehensive, customized solutions for corporate to keep their employees engaged and beautifully handpicked, customized corporate gifting solutions to establish business relationships, add to your brand image, and forge strong ties with your employees.
                            </p>
                        </div>

                        {/* Right — product image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="https://ridgegap.com/wp-content/uploads/2025/04/about-2.png"
                                alt="Corporate gifting products"
                                className="w-full max-w-70 h-auto object-contain drop-shadow-lg"
                            />
                        </div>
                    </div>

                    {/* ── Row 2: Vision & Mission cards ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Vision card */}
                        <div className="bg-white rounded-2xl p-8 border border-blue-50 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <img
                                src="https://ridgegap.com/wp-content/uploads/2025/04/vision.png"
                                alt="Vision"
                                className="w-14 h-14 object-contain mb-5"
                            />
                            <h3 className="text-2xl font-bold    text-[#1e3a8a] mb-3">
                                Vision
                            </h3>
                            <p className="text-gray-600 text-[15px] leading-relaxed">
                                We believe in a healthy relationship with our clients and to deliver our products with safety and consistency.
                            </p>
                        </div>

                        {/* Mission card */}
                        <div className="bg-white rounded-2xl p-8 border border-blue-50 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <img
                                src="https://ridgegap.com/wp-content/uploads/2025/04/mission.png"
                                alt="Mission"
                                className="w-14 h-14 object-contain mb-5"
                            />
                            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">
                                Mission
                            </h3>
                            <p className="text-gray-600 text-[15px] leading-relaxed">
                                To provide you the best corporate gifting experience which will help teams bond, grow together and achieve objectives as a team.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <WhyChooseUs />

        </>
    );
}
