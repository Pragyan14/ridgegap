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
import FloatingCTA from "@/components/FloatingCTA";

const benefits = [
    {
        icon: '/images/badge.png',
        alt: 'positive-attitude',
        text: 'Swagpacks creates or reinforces corporate identity.',
    },
    {
        icon: '/images/proposition.png',
        alt: 'impression-rate',
        text: 'Creates a unique gifting experience to excite your customers, sales prospects, or employees.',
    },
    {
        icon: '/images/innovative-gifting-ico.png',
        alt: 'customer-retention',
        text: "Leave a Lasting Impression on receivers.",
    },
    {
        icon: '/images/trusted-ico.png',
        alt: 'network',
        text: 'Builds customer trust.',
    },
    {
        icon: '/images/brand-ico.png',
        alt: 'career',
        text: 'Boosts brand awareness.',
    },
    {
        icon: '/images/accessible.png',
        alt: 'career',
        text: 'It’s cost-effective, creative, & versatile.',
    },
    {
        icon: '/images/corporate-culture.png',
        alt: 'career',
        text: 'Portrays company culture.',
    },
    {
        icon: '/images/lead-generation.png',
        alt: 'career',
        text: 'Proves to be an effective marketing tool',
    },
];

const featuresData: FeatureItem[] = [
    {
        icon: "/images/distribution-center.png",
        html: "<strong>Vast range of products</strong>",
    },
    {
        icon: "/images/customization-ico.png",
        html: "<strong>Custom designs</strong>",
    },
    {
        icon: "/images/pre-curated-ico.png",
        html: "<strong>Inventory support</strong>",
    },
    {
        icon: "/images/low-turnaround-time-ico.png",
        html: "<strong>Shipping & delivery</strong>",
    },
    {
        icon: "/images/brand-customization.png",
        html: "<strong>Branding customization</strong>",
    },
    {
        icon: "/images/accessible.png",
        html: "<strong>Budget Friendly</strong>",
    },
    {
        icon: "/images/personalization-1.png",
        html: "<strong>Personalization</strong>",
    },
];

export default function SwagPacks() {
    return <>

        <ProductHero
            backgroundImage="/images/Curated-Gift-boxes-Banner-page-scaled.jpg"
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

        <FloatingCTA type="connect"/>
    </>;
}
