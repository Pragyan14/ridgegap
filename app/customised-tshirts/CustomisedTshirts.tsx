'use client'

import BrandsWeRepresent from "@/components/BrandsWeRepresent";
import CompanyLogos from "@/components/CompanyLogo";
import ContactForm from "@/components/Contactform";
import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import FloatingCTA from "@/components/FloatingCTA";
import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductHero from "@/components/ProductHero";
import ProductsFeatures, { FeatureItem } from "@/components/ProductsFeatures";
import RecentProjects from "@/components/Recentprojects";
import TestimonialCarousel from "@/components/Testimonials";
import PromoSection from "@/components/ui/PromoSection";


const featuresData: FeatureItem[] = [
    {
        icon: "/images/distribution-center.png",
        html: "Vast range of materials – For regular wear, formal wear, sportswear, winter or summer.",
    },
    {
        icon: "/images/delivery-service.png",
        html: "Distribution – Individually packed and shipped direct to your employees.",
    },
    {
        icon: "/images/customization-ico.png",
        html: "Vast color options – select based on your brand guidelines.",
    },
    {
        icon: "/images/warehouse-facility-ico.png",
        html: "Storage – Options to store the products at our warehouse so you don’t have to take the hassle.",
    },
    {
        icon: "/images/branded-ico.png",
        html: "Huge range of products – 30+ brands to choose from like Adidas, puma, marks & spencer’s, jack & jones, US polo, arrow, FCUK.",
    },
    {
        icon: "/images/personalized-ico.png",
        html: "Personalised – branded with your logo.",
    },
];

export default function CustomisedTshirts() {
    return <>

        <ProductHero
            backgroundImage="/images/Customised-Tshirts-banner-scaled.jpg"
            heading="Customised T-shirts, hoodies & jackets is a unique way to express yourself."
            subheading="Whether you are looking for business attire, casual wear or custom sports apparel. We have different types available with your company logo branded on them!"
            buttonMessage="Request a quote it take 2min!"
        />

        <CompanyLogos />

        <RecentProjects
            subtitle={"Customise your t-shirts, hoodies and jackets with our range of custom embroidery and branding. We can bring your logo to life on any of our apparel!"}
        />

        <MostPopularGifting />

        <PromoSection
            text={"Wish to Custom make & manufacture your own T-shirts/Jackets/hoodie as per your brand colors."}
            buttonText={"Connect Now!"}
        />

        <ProductsFeatures
            features={featuresData}
            heading="Features"
            subheading="Customised T-shirts, hoodies and jackets is a unique way to express yourself. Whether you are looking for business attire, casual wear or custom sports apparel. We have different types available with your company logo branded on them!"
        />

        <TestimonialCarousel />

        <CorporateGiftingSolutions />

        <BrandsWeRepresent />

        <ContactForm />

        <FloatingCTA type="connect" />
    </>;
}
