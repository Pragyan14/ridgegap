'use client';

export default function BrandsWeRepresent() {
    const brands = [
        {
            name: 'Google',
            logo: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/google-showlogimg.png',
        },
        {
            name: 'Amazon',
            logo: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/amazon-showlogimg.png',
        },
        {
            name: 'Mercedes-Benz',
            logo: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/mercedes-benz-showlogimg.png',
        },
        {
            name: 'JPMorgan',
            logo: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/jpmorgan-showlogimg.png',
        },
        {
            name: 'BigBasket',
            logo: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/bigbasket-showlogimg.png',
        },
        {
            name: 'Unacademy',
            logo: 'https://ridgegap.com/wp-content/themes/ridgegap-wptheme/images/unacademy-showlogimg.png',
        },
        {
            name: 'hummel',
            logo: 'https://ridgegap.com/wp-content/uploads/2025/04/hummel-brandshowimg.jpg',
        },
        {
            name: 'American Tourister',
            logo: 'https://ridgegap.com/wp-content/uploads/2025/04/american-tourister-brandshowimg.jpg',
        },
        {
            name: 'Pebble',
            logo: 'https://ridgegap.com/wp-content/uploads/2025/04/pebble-brandshowimg.jpg',
        },
        {
            name: 'JBL',
            logo: 'https://ridgegap.com/wp-content/uploads/2025/04/JBL-brandshowimg.jpg',
        },
        {
            name: 'Targus',
            logo: 'https://ridgegap.com/wp-content/uploads/2025/04/targus-brandshowimg.png',
        },
        {
            name: 'Portronics',
            logo: 'https://ridgegap.com/wp-content/uploads/2025/04/portronics-brandshowimg.jpg',
        },
    ];

    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Brands We Represent
                    </h2>
                </div>

                {/* Brand Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="w-full flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
