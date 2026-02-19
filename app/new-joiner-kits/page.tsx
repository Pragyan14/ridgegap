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
import JoinerSteps, { StepCard } from "@/components/JoinerSteps";


const stepsData: StepCard[] = [
    {
        iconUrl: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/content-ico.png",
        altText: "Content Icon",
        title: "Content",
        description: "Choose the content which goes inside the kit."
    },
    {
        iconUrl: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/design-branding-ico.png",
        altText: "Design & Branding Icon",
        title: "Design & Branding",
        description: "Choose design & branding based on your company values."
    },
    {
        iconUrl: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/order-ico.png",
        altText: "Order Icon",
        title: "Order",
        description: "Place the order & leave the rest on us."
    },
];

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

const featuresData: FeatureItem[] = [
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/warehouse-facility-ico.png",
        html: "Store your Stock with us – <strong> Warehouse facility. </strong>",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/pre-curated-ico.png",
        html: "<strong>Pre curated</strong> – boxes readily available to ship.",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/branded-ico.png",
        html: "<strong>Branded</strong> – With your company logo.",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/low-turnaround-time-ico.png",
        html: "<strong>Low turnaround time</strong> – For urgent needs.",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/box-ico.png",
        html: "Build your own box – Choose from <strong>5000+ products.</strong>",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/customization-ico.png",
        html: "<strong>100% customizable</strong> – Designed the way you like it.",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/personalized-ico.png",
        html: "<strong>Personalized</strong> – Shipping directly to employee.",
    },
];

export default function NewJoinerKits() {
    return <>

        <ProductHero
            backgroundImage="https://ridgegap.com/wp-content/uploads/2025/05/New-Joinee-Welcome-kit-Banner--scaled.jpg"
            heading="Swag up your new hire’s first day!"
            subheading="Enhance your employee onboarding experience with high quality welcome packs."
            buttonMessage="Request a quote it take 2min!"
        />

        <CompanyLogos />

        <JoinerSteps
            mainImageUrl="https://ridgegap.com/wp-content/uploads/2025/05/joiner-kit-2.png"
            heading="3 awesome steps to perfect new joiner kits & welcome packs"
            steps={stepsData}
        />

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
            subheading="Get started on the path to good employee retention & engagement by providing your new employees with a strong on boarding experience. We help companies just like yours enhance their employee on boarding experience with high quality welcome packs to make employees feel welcomed, valued & attended to before they even step foot in your building."
        />

        <TestimonialCarousel />

        <CorporateGiftingSolutions />

        <BrandsWeRepresent />
    </>;
}
