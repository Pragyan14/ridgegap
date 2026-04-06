'use client'

import BrandsWeRepresent from "@/components/BrandsWeRepresent";
import CompanyLogos from "@/components/CompanyLogo";
import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductHero from "@/components/ProductHero";
import RecentProjects from "@/components/Recentprojects";
import TestimonialCarousel from "@/components/Testimonials";
import JoinerSteps, { StepCard } from "@/components/JoinerSteps";
import FloatingCTA from "@/components/FloatingCTA";
import ContactForm from "@/components/Contactform";
import PromoSection from "@/components/ui/PromoSection";


const stepsData: StepCard[] = [
    {
        iconUrl: "/images/content-ico.png",
        altText: "Content Icon",
        title: "Need",
        description: "Based on your specific luxury gifting requirements, you can use this review to determine the best possible options for your client."
    },
    {
        iconUrl: "/images/design-branding-ico.png",
        altText: "Design & Branding Icon",
        title: "Evaluate",
        description: "Internal steps like self-evaluation and brand selection can lead to a pretty accurate model of the kind of person they are – and what they expect."
    },
    {
        iconUrl: "/images/order-ico.png",
        altText: "Order Icon",
        title: "Decide",
        description: "This information will allow you to be more confident in narrowing down your choices."
    },
];

export default function LuxuryCXOGifting() {
    return <>

        <ProductHero
            backgroundImage="/images/Luxury-CXO-Gifts-banners-scaled.jpg"
            heading="Delight your clients with an Impressive Luxury Corporate Gift."
            subheading="The ideal gift should be personal, intentional and practical. Let us guide you toward a truly successful gifting experience."
            buttonMessage="Request a quote it take 2min!"
        />

        <CompanyLogos />

        <JoinerSteps
            mainImageUrl="/images/curated-gift-image.png"
            heading="How to identify what is the best luxury corporate gift?"
            steps={stepsData}
        />

        <RecentProjects subtitle={"Luxury corporate gifts are something many businesses consider. But it’s not easy to pull together a thoughtful, impactful gift for an important client. Given the company’s needs and unique circumstances, different companies provide different items for their VIP clients."}/>

        <MostPopularGifting />

        <PromoSection
            text={"If you’re looking to give a gift that will wow your clients, then look no further than our luxury corporate gift collection."}
            buttonText={"Request a catalogue Now!"}
        />

        <TestimonialCarousel />

        <CorporateGiftingSolutions />

        <BrandsWeRepresent />

        <ContactForm/>

        <FloatingCTA type="connect"/>
    </>;
}
