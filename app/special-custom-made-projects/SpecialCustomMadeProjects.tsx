'use client'

import BrandsWeRepresent from "@/components/BrandsWeRepresent";
import CompanyLogos from "@/components/CompanyLogo";
import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import FloatingCTA from "@/components/FloatingCTA";
import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductBenefit from "@/components/ProductBenfits";
import ProductHero from "@/components/ProductHero";
import RecentProjects from "@/components/Recentprojects";
import TestimonialCarousel from "@/components/Testimonials";

const benefits = [
    {
        icon: '/images/increase-positivity-motivation-boost-ico.png',
        alt: 'positive-attitude',
        text: 'Long-lasting and positive effect on your customers.',
    },
    {
        icon: '/images/build-maintain-strengthen-relationship-ico.png',
        alt: 'impression-rate',
        text: 'Shows appreciation, strengthen relationships.',
    },
    {
        icon: '/images/nurturing-connections-ico.png',
        alt: 'customer-retention',
        text: "Stay present in your clients’ & employees’ lives.",
    },
    {
        icon: '/images/express-goodwill-ico.png',
        alt: 'network',
        text: 'Indisputably grabs everyone’s attention.',
    },
    {
        icon: '/images/cost-efficient-way-ico.png',
        alt: 'career',
        text: 'Comes with Exquisite Packaging.',
    },
    {
        icon: '/images/value-proposition.png',
        alt: 'career',
        text: 'Unique and eye-catching.',
    },
    {
        icon: '/images/endorse-company-ico.png',
        alt: 'career',
        text: 'Makes Your Brand Stand Out.',
    },
    {
        icon: '/images/customer-service.png',
        alt: 'career',
        text: 'Delivers value to your workforce and clients.',
    },
    {
        icon: '/images/quality-budget-ico.png',
        alt: 'career',
        text: 'High quality branded products.',
    },
];

export default function SpecialCustomMadeProjects() {
    return <>

        <ProductHero
            backgroundImage="/images/Special-custom-Projects-banner-scaled.jpg"
            heading="Add a Touch of Elegance to your Gifting with Custom made & special projects."
            subheading="At Ridgegap corporate gifting solutions we have the expertise and knowledge to turn your exact vision into reality."
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

        <TestimonialCarousel />

        <CorporateGiftingSolutions />

        <BrandsWeRepresent />

        <FloatingCTA type="connect"/>
    </>;
}
