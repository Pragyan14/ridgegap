import MostPopularGifting from "@/components/Mostpopulargifting";
import ProductGrid, { CardItem } from "@/components/ProductGrid";
import RecentProjects from "@/components/Recentprojects";
import CTABtn from "@/components/ui/CTABtn";
import WhyChooseUs from "@/components/Whychooseus";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const productPage = await prisma.productPage.findUnique({
    where: {
      slug,
    },
  });

  if (!productPage) {
    notFound();
  }

  const dataJson = productPage.data_json;

  let sections: Record<string, CardItem[]> | undefined;

  if (dataJson && typeof dataJson === "object" && !Array.isArray(dataJson)) {
    // Now TypeScript knows dataJson is an object
    sections = (dataJson as Record<string, any>).sections;
  }

  return (
    <>
      <section
        id="product-showcase"
        className="relative min-h-120 flex items-center px-6 sm:px-12 lg:px-24 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/slider-pattern-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000822]/80 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">

          {/* Left Content */}
          <div className="w-full md:w-1/2 text-white max-w-lg text-center md:text-left">
            <h1 className="text-6xl font-serif font-bold mb-6">
              {productPage.h1}
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Find the perfect corporate gift for your employees and clients with Ridge gap with 5000+ innovative products to choose from.
            </p>
            <CTABtn message={"Download Catalogue"} />
          </div>

          <div className="hidden md:block md:w-1/2" />
        </div>
      </section>

      <div className="text-center m-8">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          Corporate Gift Products
        </p>
        <h2 className="text-5xl font-serif font-bold text-[#0B2A63]">
          {productPage.h2}
        </h2>
      </div>

      {sections && Object.entries(sections).map(([sectionName, items]) => (
        <div key={sectionName}>
          <ProductGrid
            mainHeading={sectionName}
            items={items as CardItem[]}
          />
        </div>
      ))}

    </>
  );
}