import React from "react";
import CTABtn from "./CTABtn";

type PromoSectionProps = {
  text: string;
  buttonText: string;
  onButtonClick?: () => void;
};

const PromoSection: React.FC<PromoSectionProps> = ({
  text,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-[linear-gradient(90deg,#1e4f8f_0%,#2e4fa3_50%,#3b3fa3_100%)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-white text-lg md:text-2xl leading-relaxed max-w-3xl">
          {text}
        </p>

        <CTABtn message={buttonText} />
      </div>
    </section>
  );
};

export default PromoSection;