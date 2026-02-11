import CorporateGiftingSolutions from "@/components/Corporategiftingsolutions";
import CTAForm from "@/components/Ctaform";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/Recentprojects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <CorporateGiftingSolutions/>
      <RecentProjects/>
      <CTAForm/>
    </div>
  );
}
