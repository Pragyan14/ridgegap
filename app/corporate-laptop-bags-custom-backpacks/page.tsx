'use client'

import BrandsWeRepresent from "@/components/BrandsWeRepresent";
import CompanyLogos from "@/components/CompanyLogo";
import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductBenefit from "@/components/ProductBenfits";
import ProductHero from "@/components/ProductHero";
import ProductsFeatures, { FeatureItem } from "@/components/ProductsFeatures";
import RecentProjects from "@/components/Recentprojects";
import TestimonialCarousel from "@/components/Testimonials";

const benefits = [
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/brand-awareness.png',
        alt: 'positive-attitude',
        text: 'Maximize Your Brand Awareness: Boost your brand exposure with customised backpacks & laptop bags that showcase your logo & messaging to potential customers everywhere you go.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/quality.png',
        alt: 'impression-rate',
        text: 'Unmatched Quality: Our design process and high-quality materials ensure that the backpacks and laptop bags provide both comfort and durability.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/tailored-services.png',
        alt: 'customer-retention',
        text: "Tailored to Your Needs: Our customisation options allow you to design bags that cater to the specific needs of your company, including added pockets, compartments, and features that enhance productivity on the go.",
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/employee-morale.png',
        alt: 'network',
        text: 'Improve Employee Morale: Our stylish & functional bags are perfect for bike commuters, digital nomads, & other professionals who need to stay organized and comfortable on the go, leading to improved employee morale and productivity.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/accessible.png',
        alt: 'career',
        text: 'Cost-Effective Solution: Our custom backpacks and laptop bags provide an affordable and practical solution to elevate your company’s brand identity and streamline your employee’s daily operations.',
    },
];

const featuresData: FeatureItem[] = [
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/customization.png",
        html: "100% customisable – Design based on your liking & brand guidelines.",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/low-turnaround-time-ico.png",
        html: "Personalised – Shipping directly to employees or clients.",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/management.png",
        html: "Manufacturing – option available for bulk orders.",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/distribution-center.png",
        html: "Vast range of products",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/customization-ico.png",
        html: "Choose from 2000+ styles",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/pre-curated-ico.png",
        html: "20+ Brands.",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/branded-ico.png",
        html: "Branded with your company logo.",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/warehouse-facility-ico.png",
        html: "Low turnaround time.",
    },
];

export default function CustomBackpacks() {
    return <>

        <ProductHero
            backgroundImage="https://ridgegap.com/wp-content/uploads/2025/05/Backpacks-Banner-scaled.jpg"
            heading="Don’t Miss Out on the Chance to Boost your Brand Awareness with Customized Corporate Bags."
            subheading="Customised Corporate bags make excellent corporate gifts. They will effectively convey your company’s branding & identity, while also providing a useful item to keep & use day-to-day."
            buttonMessage="Request a quote it take 2min!"
        />

        <CompanyLogos />

        <RecentProjects />

        <ProductBenefit
            benefits={benefits}
            subtitle={"Why are Welcome Packs so important?"}
            title={"Benefits of new joiner welcome packs"}
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
    </>;
}
