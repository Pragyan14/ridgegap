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
        title: "Build your gift box",
        description: "Choose from over 150 impactful products to create the perfect gift box for your employees or clients."
    },
    {
        iconUrl: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/design-branding-ico.png",
        altText: "Design & Branding Icon",
        title: "Add personalisation",
        description: "Add your logo to the gift box, message card or add an everyday branded product."
    },
    {
        iconUrl: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/order-ico.png",
        altText: "Order Icon",
        title: "Ready in 3-10 days",
        description: "Bulk-ship to one location or ship individually to employee or client addresses."
    },
];

const featuresData: FeatureItem[] = [
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/brand-ico.png",
        html: "Create a positive brand image",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/tailored-services.png",
        html: "Reinforce your company’s values.",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/reduce.png",
        html: "Reduce carbon footprint.",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/customer-service.png",
        html: "Encourage others to live more sustainably.",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/brand-awareness.png",
        html: "Strengthen your position as a conscious company.",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/eco-friendly.png",
        html: "Reduce waste and embrace an Earth-friendly lifestyle.",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/environmental.png",
        html: "Make an environmental impact and make a difference in the world.",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/processing.png",
        html: "Encourage recycle and reuse.",
    },
];

export default function SustainableGifting() {
    return <>

        <ProductHero
            backgroundImage="https://ridgegap.com/wp-content/uploads/2025/05/Curated-Gift-boxes-Banner-page-scaled.jpg"
            heading="Sustainable gifting is a great way to celebrate any occasion by helping your clients or employees reduce their impact."
            subheading="If you want to make an environmental impact and make a difference in the world, then Sustainable Gifts are a perfect gift to give."
            buttonMessage="Request a quote it take 2min!"
        />

        <CompanyLogos />

        <RecentProjects />

        <MostPopularGifting />

        <ProductsFeatures
            features={featuresData}
            heading="Features"
            subheading="Reason to choose sustainable gifts for your brand Our sustainable products help reduce the environmental impact of your business. These offerings include everything from stylish reusable drink ware, notebooks, pens, giftsets and even gourmet treats."
        />

        <TestimonialCarousel />

        <CorporateGiftingSolutions />

        <BrandsWeRepresent />
    </>;
}
