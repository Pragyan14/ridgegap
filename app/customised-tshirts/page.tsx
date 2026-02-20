'use client'

import BrandsWeRepresent from "@/components/BrandsWeRepresent";
import CompanyLogos from "@/components/CompanyLogo";
import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductHero from "@/components/ProductHero";
import ProductsFeatures, { FeatureItem } from "@/components/ProductsFeatures";
import RecentProjects from "@/components/Recentprojects";
import TestimonialCarousel from "@/components/Testimonials";


const featuresData: FeatureItem[] = [
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/distribution-center.png",
        html: "Vast range of materials – For regular wear, formal wear, sportswear, winter or summer.",
    },
    {
        icon: "https://ridgegap.com/wp-content/uploads/2025/04/delivery-service.png",
        html: "Distribution – Individually packed and shipped direct to your employees.",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/customization-ico.png",
        html: "Vast color options – select based on your brand guidelines.",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/warehouse-facility-ico.png",
        html: "Storage – Options to store the products at our warehouse so you don’t have to take the hassle.",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/branded-ico.png",
        html: "Huge range of products – 30+ brands to choose from like Adidas, puma, marks & spencer’s, jack & jones, US polo, arrow, FCUK.",
    },
    {
        icon: "https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/personalized-ico.png",
        html: "Personalised – branded with your logo.",
    },
];

export default function CustomisedTshirts() {
    return <>

        <ProductHero
            backgroundImage="https://ridgegap.com/wp-content/uploads/2025/05/Customised-Tshirts-banner-scaled.jpg"
            heading="Customised T-shirts, hoodies & jackets is a unique way to express yourself."
            subheading="Whether you are looking for business attire, casual wear or custom sports apparel. We have different types available with your company logo branded on them!"
            buttonMessage="Request a quote it take 2min!"
        />

        <CompanyLogos />

        <RecentProjects />

        <MostPopularGifting />

        <ProductsFeatures
            features={featuresData}
            heading="Features"
            subheading="Customised T-shirts, hoodies and jackets is a unique way to express yourself. Whether you are looking for business attire, casual wear or custom sports apparel. We have different types available with your company logo branded on them!"
        />

        <TestimonialCarousel />

        <CorporateGiftingSolutions />

        <BrandsWeRepresent />
    </>;
}
