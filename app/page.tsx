import BenefitsSection from "@/components/Benefitssection";
import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import CTAForm from "@/components/Ctaform";
import GetInTouch from "@/components/Getintouch";
import Hero from "@/components/Hero";
import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductCategories from "@/components/Productcategories";
import RecentProjects from "@/components/Recentprojects";
import Testimonials from "@/components/Testimonials";
import WhatWeDoBest from "@/components/Whatwedobest";
import WhyChooseUs from "@/components/Whychooseus";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <CorporateGiftingSolutions/>
      <RecentProjects/>
      <CTAForm/>
      <BenefitsSection/>
      <MostPopularGifting/>
      <GetInTouch/>
      <ProductCategories/>
      <WhyChooseUs/>
      <WhatWeDoBest/>
      <Testimonials/>
    </div>
  );
}
