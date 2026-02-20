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
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/increase-positivity-motivation-boost-ico.png',
        alt: 'positive-attitude',
        text: 'Long-lasting and positive effect on your customers.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/build-maintain-strengthen-relationship-ico.png',
        alt: 'impression-rate',
        text: 'Shows appreciation, strengthen relationships.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/nurturing-connections-ico.png',
        alt: 'customer-retention',
        text: "Stay present in your clients’ & employees’ lives.",
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/express-goodwill-ico.png',
        alt: 'network',
        text: 'Indisputably grabs everyone’s attention.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/cost-efficient-way-ico.png',
        alt: 'career',
        text: 'Comes with Exquisite Packaging.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/value-proposition.png',
        alt: 'career',
        text: 'Unique and eye-catching.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/endorse-company-ico.png',
        alt: 'career',
        text: 'Makes Your Brand Stand Out.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/uploads/2025/04/customer-service.png',
        alt: 'career',
        text: 'Delivers value to your workforce and clients.',
    },
    {
        icon: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/quality-budget-ico.png',
        alt: 'career',
        text: 'High quality branded products.',
    },
];

export default function CustomMadeProjects() {
    return <>

        <ProductHero
            backgroundImage="https://ridgegap.com/wp-content/uploads/2025/05/Special-custom-Projects-banner-scaled.jpg"
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
    </>;
}
