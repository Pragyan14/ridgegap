'use client'

import BrandsWeRepresent from "@/components/BrandsWeRepresent";
import CompanyLogos from "@/components/CompanyLogo";
import ContactForm from "@/components/Contactform";
import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import FloatingCTA from "@/components/FloatingCTA";
import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductBenefit from "@/components/ProductBenfits";
import ProductHero from "@/components/ProductHero";
import RecentProjects from "@/components/Recentprojects";
import TestimonialCarousel from "@/components/Testimonials";

const benefits = [
    {
        icon: '/images/brand-ico.png',
        alt: 'positive-attitude',
        text: 'Increased Brand Recognition & Boosts Brand Visibility.',
    },
    {
        icon: '/images/trusted-ico.png',
        alt: 'impression-rate',
        text: 'Loyalty & Retention.',
    },
    {
        icon: '/images/accessible.png',
        alt: 'customer-retention',
        text: "Cost Effective Marketing Strategy.",
    },
    {
        icon: '/images/customization-expertization-ico.png',
        alt: 'network',
        text: 'Ability to Stand Out Among Your Competition.',
    },
    {
        icon: '/images/brand-awareness.png',
        alt: 'career',
        text: 'Increase Leads and Generate Sales.',
    },
    {
        icon: '/images/brand-standout-ico.png',
        alt: 'career',
        text: 'Creates Healthy Customer Relationship.',
    },
    {
        icon: '/images/proposition.png',
        alt: 'career',
        text: 'People love them – creates a positive, lasting impression of your company.',
    },
];

export default function EventsConferencePromotionalGifts() {
    return <>

        <ProductHero
            backgroundImage="/images/Events-conference-Banner-scaled.jpg"
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

        <ContactForm/>

        <FloatingCTA type="connect"/>
    </>;
}
