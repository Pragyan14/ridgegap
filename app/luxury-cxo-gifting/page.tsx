'use client'

import BrandsWeRepresent from "@/components/BrandsWeRepresent";
import CompanyLogos from "@/components/CompanyLogo";
import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductHero from "@/components/ProductHero";
import RecentProjects from "@/components/Recentprojects";
import TestimonialCarousel from "@/components/Testimonials";
import JoinerSteps, { StepCard } from "@/components/JoinerSteps";


const stepsData: StepCard[] = [
    {
        iconUrl: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/content-ico.png",
        altText: "Content Icon",
        title: "Need",
        description: "Based on your specific luxury gifting requirements, you can use this review to determine the best possible options for your client."
    },
    {
        iconUrl: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/design-branding-ico.png",
        altText: "Design & Branding Icon",
        title: "Evaluate",
        description: "Internal steps like self-evaluation and brand selection can lead to a pretty accurate model of the kind of person they are – and what they expect."
    },
    {
        iconUrl: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/order-ico.png",
        altText: "Order Icon",
        title: "Decide",
        description: "This information will allow you to be more confident in narrowing down your choices."
    },
];

export default function LuxuryCxoGifting() {
    return <>

        <ProductHero
            backgroundImage="https://ridgegap.com/wp-content/uploads/2025/05/Luxury-CXO-Gifts-banners-scaled.jpg"
            heading="Delight your clients with an Impressive Luxury Corporate Gift."
            subheading="The ideal gift should be personal, intentional and practical. Let us guide you toward a truly successful gifting experience."
            buttonMessage="Request a quote it take 2min!"
        />

        <CompanyLogos />

        <JoinerSteps
            mainImageUrl="https://ridgegap.com/wp-content/uploads/2025/05/curated-gift-image.png"
            heading="How to identify what is the best luxury corporate gift?"
            steps={stepsData}
        />

        <RecentProjects />

        <MostPopularGifting />

        <TestimonialCarousel />

        <CorporateGiftingSolutions />

        <BrandsWeRepresent />
    </>;
}
