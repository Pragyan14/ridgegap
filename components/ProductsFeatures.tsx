'use client';

import Image from "next/image";

export interface FeatureItem {
    icon: string;
    html: string;
}

interface WhyChooseUsProps {
    features: FeatureItem[];
    heading: string;
    subheading: string;
}

export default function ProductsFeatures({
    features,
    heading,
    subheading,
}: WhyChooseUsProps) {
    return (
        <section className="py-14 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Section Header ── */}
                <div className="text-center mb-12">

                    {/* Optional Top Icon */}
                    <div className="flex justify-center mb-5">
                        <Image
                            src="/images/feature-ico.png"
                            alt="Corporate-gifting-feature"
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                    </div>

                    {/* Heading */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 leading-tight max-w-4xl mx-auto">
                        {heading}
                    </h3>

                    {/* Subheading */}
                    <p className="text-gray-500 text-base max-w-7xl mx-auto leading-relaxed">
                        {subheading}
                    </p>
                </div>

                {/* ── Feature Cards Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {features.map((feat, index) => {
                        return (
                            <div
                                key={`feature-${index}`}
                                className={`bg-[#eef4ff] rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow duration-200`}
                            >
                                <Image
                                    src={feat.icon}
                                    alt=""
                                    width={56}
                                    height={56}
                                    className="object-contain shrink-0 mt-0.5"
                                />

                                <p
                                    className="text-gray-700 text-[15px] leading-snug pt-1"
                                    dangerouslySetInnerHTML={{ __html: feat.html }}
                                />
                            </div>
                        );
                    })}
                </div>


            </div>
        </section>
    );
}
