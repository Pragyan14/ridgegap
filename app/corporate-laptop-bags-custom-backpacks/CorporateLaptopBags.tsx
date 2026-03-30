'use client'

import BrandsWeRepresent from "@/components/BrandsWeRepresent";
import CompanyLogos from "@/components/CompanyLogo";
import ContactForm from "@/components/Contactform";
import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import FloatingCTA from "@/components/FloatingCTA";
import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductBenefit from "@/components/ProductBenfits";
import ProductHero from "@/components/ProductHero";
import ProductsFeatures, { FeatureItem } from "@/components/ProductsFeatures";
import RecentProjects from "@/components/Recentprojects";
import TestimonialCarousel from "@/components/Testimonials";

const benefits = [
    {
        icon: '/images/brand-awareness.png',
        alt: 'positive-attitude',
        text: 'Maximize Your Brand Awareness: Boost your brand exposure with customised backpacks & laptop bags that showcase your logo & messaging to potential customers everywhere you go.',
    },
    {
        icon: '/images/quality.png',
        alt: 'impression-rate',
        text: 'Unmatched Quality: Our design process and high-quality materials ensure that the backpacks and laptop bags provide both comfort and durability.',
    },
    {
        icon: '/images/tailored-services.png',
        alt: 'customer-retention',
        text: "Tailored to Your Needs: Our customisation options allow you to design bags that cater to the specific needs of your company, including added pockets, compartments, and features that enhance productivity on the go.",
    },
    {
        icon: '/images/employee-morale.png',
        alt: 'network',
        text: 'Improve Employee Morale: Our stylish & functional bags are perfect for bike commuters, digital nomads, & other professionals who need to stay organized and comfortable on the go, leading to improved employee morale and productivity.',
    },
    {
        icon: '/images/accessible.png',
        alt: 'career',
        text: 'Cost-Effective Solution: Our custom backpacks and laptop bags provide an affordable and practical solution to elevate your company’s brand identity and streamline your employee’s daily operations.',
    },
];

const featuresData: FeatureItem[] = [
    {
        icon: "/images/customization.png",
        html: "100% customisable – Design based on your liking & brand guidelines.",
    },
    {
        icon: "/images/low-turnaround-time-ico.png",
        html: "Personalised – Shipping directly to employees or clients.",
    },
    {
        icon: "/images/management.png",
        html: "Manufacturing – option available for bulk orders.",
    },
    {
        icon: "/images/distribution-center.png",
        html: "Vast range of products",
    },
    {
        icon: "/images/customization-ico.png",
        html: "Choose from 2000+ styles",
    },
    {
        icon: "/images/pre-curated-ico.png",
        html: "20+ Brands.",
    },
    {
        icon: "/images/branded-ico.png",
        html: "Branded with your company logo.",
    },
    {
        icon: "/images/warehouse-facility-ico.png",
        html: "Low turnaround time.",
    },
];

export default function CorporateLaptopBags() {
    return <>

        <ProductHero
            backgroundImage="/images/Backpacks-Banner-scaled.jpg"
            heading="Don’t Miss Out on the Chance to Boost your Brand Awareness with Customized Corporate Bags."
            subheading="Customised Corporate bags make excellent corporate gifts. They will effectively convey your company’s branding & identity, while also providing a useful item to keep & use day-to-day."
            buttonMessage="Request a quote it take 2min!"
        />

        <CompanyLogos />

        <RecentProjects />

        <ProductBenefit
            benefits={benefits}
            subtitle={"Why are Corporate Bags so important?"}
            title={"Benefits of gifting corporate bags & laptop bags"}
        />

        <MostPopularGifting />

        <ProductsFeatures
            features={featuresData}
            heading="Features"
            subheading="With our corporate bag packs, you can be sure that your logo will be in front view of others every time they use their bag to carry their laptops around!"
        />

        <TestimonialCarousel />

        <CorporateGiftingSolutions />

        <BrandsWeRepresent />

        <ContactForm/>

        <FloatingCTA type="connect" />
    </>;
}
