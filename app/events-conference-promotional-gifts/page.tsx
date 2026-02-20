'use client'

import BrandsWeRepresent from "@/components/BrandsWeRepresent";
import CompanyLogos from "@/components/CompanyLogo";
import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductBenefit from "@/components/ProductBenfits";
import ProductHero from "@/components/ProductHero";
import RecentProjects from "@/components/Recentprojects";
import TestimonialCarousel from "@/components/Testimonials";

const benefits = [
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/brand-ico.png',
        alt: 'positive-attitude',
        text: 'Increased Brand Recognition & Boosts Brand Visibility.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/trusted-ico.png',
        alt: 'impression-rate',
        text: 'Loyalty & Retention.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/accessible.png',
        alt: 'customer-retention',
        text: "Cost Effective Marketing Strategy.",
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/customization-expertization-ico.png',
        alt: 'network',
        text: 'Ability to Stand Out Among Your Competition.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/brand-awareness.png',
        alt: 'career',
        text: 'Increase Leads and Generate Sales.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/brand-standout-ico.png',
        alt: 'career',
        text: 'Creates Healthy Customer Relationship.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/proposition.png',
        alt: 'career',
        text: 'People love them – creates a positive, lasting impression of your company.',
    },
];

export default function EventGifts() {
    return <>

        <ProductHero
            backgroundImage="https://ridgegap.com/wp-content/uploads/2025/05/Events-conference-Banner-scaled.jpg"
            heading="Stand out at your next conference & events with awesome promotional gifts & giveaway swags."
            subheading="Engage your attendees, employees, clients, visitors and partners with unique gifting options."
            buttonMessage="Request a quote it take 2min!"
        />

        <CompanyLogos />

        <RecentProjects />

        <ProductBenefit
            benefits={benefits}
            subtitle={"Why is it so important?"}
            title={"Benefits of Events, Conference & Promotional Gifts"}
        />

        <MostPopularGifting />

        <TestimonialCarousel />

        <CorporateGiftingSolutions />

        <BrandsWeRepresent />
    </>;
}
