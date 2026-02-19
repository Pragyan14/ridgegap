'use client'

import CTABtn from "@/components/ui/CTABtn";
import ProductGrid, { CardItem } from "@/components/ProductGrid";

const tshirtData: CardItem[] = [
    {
        image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
        title: "Crocodile Collar Tshirt",
    },
    {
        image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
        title: "Hummel Polo Neck Tshirt",
    },
    {
        image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
        title: "Jack & Jones Round Neck Tshirt",
    },
    {
        image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
        title: "Marks – Spencers Tipping Collar Tshirt",
    },
    {
        image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
        title: "Crocodile Collar Tshirt",
    },
    {
        image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
        title: "Hummel Polo Neck Tshirt",
    },
];

export default function BackpacksPage() {
    return <>
        <section
            id="product-showcase"
            className="relative min-h-120 flex items-center px-6 sm:px-12 lg:px-24 overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://ridgegap.com/wp-content/uploads/2025/05/Products-BAckpack-banner-1-scaled.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                backgroundSize: "cover",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">

                {/* Left Content */}
                <div className="w-full md:w-1/2 text-white max-w-lg text-center md:text-left">
                    <h1 className="text-6xl font-serif font-bold mb-6">
                        Backpacks
                    </h1>
                    <p className="text-lg mb-8 leading-relaxed">
                        Find the perfect corporate gift for your employees and clients
                        with Ridge gap with 5000+ innovative products to choose from.
                    </p>
                    <CTABtn message={"Download Catalogue"} />
                </div>

                <div className="hidden md:block md:w-1/2" />
            </div>
        </section>

        <ProductGrid
            mainHeading="Tshirts"
            items={tshirtData}
        />
    </>;
}
