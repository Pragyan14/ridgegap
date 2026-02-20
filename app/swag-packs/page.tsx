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
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/badge.png',
        alt: 'positive-attitude',
        text: 'Swagpacks creates or reinforces corporate identity.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/proposition.png',
        alt: 'impression-rate',
        text: 'Creates a unique gifting experience to excite your customers, sales prospects, or employees.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/innovative-gifting-ico.png',
        alt: 'customer-retention',
        text: "Leave a Lasting Impression on receivers.",
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/trusted-ico.png',
        alt: 'network',
        text: 'Builds customer trust.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/brand-ico.png',
        alt: 'career',
        text: 'Boosts brand awareness.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/accessible.png',
        alt: 'career',
        text: 'It’s cost-effective, creative, & versatile.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/corporate-culture.png',
        alt: 'career',
        text: 'Portrays company culture.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/lead-generation.png',
        alt: 'career',
        text: 'Proves to be an effective marketing tool',
    },
];

const featuresData: FeatureItem[] = [
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/distribution-center.png",
        html: "<strong>Vast range of products</strong>",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/customization-ico.png",
        html: "<strong>Custom designs</strong>",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/pre-curated-ico.png",
        html: "<strong>Inventory support</strong>",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/low-turnaround-time-ico.png",
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

export default function SwagPacks() {
    return <>

        <ProductHero
            backgroundImage="https://ridgegap.com/wp-content/uploads/2025/05/Curated-Gift-boxes-Banner-page-scaled.jpg"
            heading="Swag packs are a great way to get your story out there in a swift yet meaningful way."
            subheading="Our swag packs are specially designed and curated to your brand, budget & needs.."
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
            subheading="Get started on the path to good employee retention & engagement by providing your new employees with a strong on boarding experience. We help companies just like yours enhance their employee on boarding experience with high quality welcome packs to make employees feel welcomed, valued & attended to before they even step foot in your building."
        />

        <TestimonialCarousel />

        <CorporateGiftingSolutions />

        <BrandsWeRepresent />
    </>;
}
