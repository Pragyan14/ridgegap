import BenefitsSection from "@/components/Benefitssection";
import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import CTAForm from "@/components/Ctaform";
import GetInTouch from "@/components/Getintouch";
import Hero from "@/components/Hero";
import MostPopularGifting from "@/components/Mostpopulargifting";
import RecentProjects from "@/components/Recentprojects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <CorporateGiftingSolutions/>
      <RecentProjects/>
      <CTAForm/>
      <BenefitsSection/>
      <MostPopularGifting/>
      <GetInTouch/>
    </div>
  );
}
