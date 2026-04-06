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
import PromoSection from "@/components/ui/PromoSection";

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

        <RecentProjects
            subtitle={"Whether you are planning a prototype model of a rover to the moon or a rainbow coloured wheel of threads, we have achieved the best quality & highest standards in our industry. Check out our exclusive custom projects to see what we have done for our clients."}
            projects={[
                { image: "/images/special-custom-made-projects.png", title: "Festive Gifting" },
                { image: "/images/custom-projects03.png", },
                { image: "/images/custom-projects05.png", title: "Festive Gifting" },
                { image: "/images/special-custom-made-projects-2.png",  },
                { image: "/images/custom-projects02.png", title: "Festive Gifting" },
                { image: "/images/special-custom-made-projects-1.png",  },
            ]}
        />

        <PromoSection
            text={"Turn your ideas to reality with custom made gifts."}
            buttonText={"Talk to us Now!"}
        />

        <ProductBenefit
            benefits={benefits}
            subtitle={"Why is it so important?"}
            title={"Benefits of custom manufactured gifts"}
        />

        <MostPopularGifting />

        <TestimonialCarousel />

        <CorporateGiftingSolutions />

        <BrandsWeRepresent />

        <ContactForm />

        <FloatingCTA type="connect" />
    </>;
}
