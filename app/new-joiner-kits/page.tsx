'use client'

import BenefitsSection from "@/components/Benefitssection";
import BrandsWeRepresent from "@/components/BrandsWeRepresent";
import JoinerSteps from "@/components/JoinerSteps";
import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductBenefit from "@/components/ProductBenfits";
import RecentProjects from "@/components/Recentprojects";
import CTABtn from "@/components/ui/CTABtn";
import WhyChooseUs from "@/components/Whychooseus";

const benefits = [
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/positive-attitude.png',
        alt: 'positive-attitude',
        text: 'Designed to give both you and your new hires a blast of positive thinking.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/impression-rate.png',
        alt: 'impression-rate',
        text: 'Makes your new hire impression an experience to remember.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/customer-retention.png',
        alt: 'customer-retention',
        text: "Joinee kits for new employees can improve employee retention by 82%.",
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/network.png',
        alt: 'network',
        text: 'A great chance to connect with new colleagues, but also important in building a great team.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/career.png',
        alt: 'career',
        text: 'Demonstrates your commitment to their professional success.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/introduction.png',
        alt: 'introduction',
        text: 'Helps to introduce your company culture and values to your new employees.',
    },
];

export default function NewJoinerKits() {
    return <>
        <section
            id="product-showcase"
            className="relative min-h-120 flex items-center px-6 sm:px-12 lg:px-24 overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://ridgegap.com/wp-content/uploads/2025/05/New-Joinee-Welcome-kit-Banner--scaled.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                backgroundSize: "cover",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">

                {/* Left Content */}
                <div className="w-full md:w-1/2 text-white max-w-lg text-center md:text-left">
                    <h1 className="text-6xl font-serif font-bold mb-6">
                        Swag up your new hire’s first day!
                    </h1>
                    <p className="text-lg mb-8 leading-relaxed">
                        Enhance your employee onboarding experience with high quality welcome packs.
                    </p>
                    <CTABtn message={"Request a quote it take 2min!"} />
                </div>

                <div className="hidden md:block md:w-1/2" />
            </div>
        </section>

        <BrandsWeRepresent />

        <JoinerSteps />

        <RecentProjects />

        <ProductBenefit
            benefits={benefits}
            subtitle={"Why are Welcome Packs so important?"}
            title={"Benefits of new joiner welcome packs"}
        />

        <MostPopularGifting/>

        <WhyChooseUs/>
    </>;
}
