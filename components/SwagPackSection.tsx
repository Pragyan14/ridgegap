import Image from "next/image";

export default function SwagPackSection() {
  const items = [
    "Your chosen Swag.",
    "Executive quality gift box.",
    "Custom card for insertion.",
    "Branded custom box label.",
    "Products are packaged together by us.",
    "Shipped right to their door.",
    "Your personal swag pack team member assistant.",
  ];

  return (
    <section className="bg-[#cfdbe6] py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#1f3b64] mb-12">
          What’s Included In A Swag Pack?
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="md:w-5/12 w-full flex justify-center">
            <Image
              src="/images/swag-pack-10.png"
              alt="Swag Packs"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* List */}
          <div className="md:w-7/12 w-full">
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-800 text-lg">
                  
                  {/* Check Icon */}
                  <span className="text-blue-600 font-extrabold">
                    ✓
                  </span>

                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}