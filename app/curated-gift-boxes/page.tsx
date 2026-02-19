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

const benefits = [
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/personalized-gift.png',
        alt: 'positive-attitude',
        text: 'Our gift hampers and boxes are curated to perfection with a personal touch that adds meaning to every gift we put together.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/convenience.png',
        alt: 'impression-rate',
        text: 'Save time and effort with our hassle-free corporate gifting solutions; our team will ensure timely delivery to your desired location.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/customization.png',
        alt: 'customer-retention',
        text: "We can customize your gift hampers and boxes to your company’s branding, making them the perfect corporate gift for any occasion.",
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/customer-service.png',
        alt: 'network',
        text: 'Our team of experts provides excellent customer service, ensuring you have a seamless experience from start to finish.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/quality.png',
        alt: 'career',
        text: 'Our products are of the highest quality, with premium ingredients sourced from the best suppliers, ensuring your clients and employees receive the best gifting experience.',
    },
];

const featuresData: FeatureItem[] = [
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/distribution-center.png",
        html: "<strong>Vast range of products</strong>",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/custom-design.png",
        html: "<strong>Custom designs</strong>",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/inventory.png",
        html: "<strong>Inventory support</strong>",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/delivery-service.png",
        html: "<strong>Shipping & delivery</strong>",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/brand-customization.png",
        html: "<strong>Branding customization</strong>",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/accessible.png",
        html: "<strong>Budget Friendly</strong>",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/personalization-1.png",
        html: "<strong>Personalization</strong>",
    },
];

export default function CuratedGiftBoxes() {
    return <>

        <ProductHero
            backgroundImage="https://ridgegap.com/wp-content/uploads/2025/05/Curated-Gift-boxes-Banner-page-scaled.jpg"
            heading="Express Your Appreciation to employees & clients with Our thoughtful Curated Gift Boxes."
            subheading="Make every gifting come alive with a curated corporate gift boxes of your choice. You can personalise a box with a vast range of products."
            buttonMessage="Request a quote it take 2min!"
        />

        <CompanyLogos />

        <JoinerSteps
            mainImageUrl="https://ridgegap.com/wp-content/uploads/2025/05/curated-gift-image.png"
            heading="3 awesome steps to get perfect Custom Curated CorporateGift Boxes."
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
