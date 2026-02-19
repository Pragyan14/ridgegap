import Image from "next/image";

export interface StepCard {
  iconUrl: string;
  altText: string;
  title: string;
  description: string;
}

interface JoinerStepsProps {
  mainImageUrl: string;
  mainImageAlt?: string;
  heading: string;
  steps: StepCard[];
}

export default function JoinerSteps({
  mainImageUrl,
  mainImageAlt = "New Joiner Kits",
  heading,
  steps,
}: JoinerStepsProps) {
  return (
    <section className="bg-[#f5f6f7] py-10 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h3 className="text-center text-3xl md:text-4xl font-semibold text-[#1f3c6e] mb-14">
          {heading}
        </h3>

        {/* Main Row */}
        <div className="flex flex-col lg:flex-row items-center gap-4">

          {/* Left Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <Image
              src={mainImageUrl}
              alt={mainImageAlt}
              width={350}
              height={350}
            />
          </div>

          {/* Right Steps */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {steps.map(({ iconUrl, altText, title, description }, i) => (
                <div
                  key={`step-${i}`}
                  className="bg-white p-8 rounded-sm shadow-md hover:-translate-y-2 transition duration-300"
                >
                  <Image
                    src={iconUrl}
                    alt={altText}
                    width={60}
                    height={60}
                  />
                  <h4 className="text-xl font-semibold text-[#1f3c6e] mt-6 mb-3">
                    {title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
