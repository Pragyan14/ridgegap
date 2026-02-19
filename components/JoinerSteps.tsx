import { NotebookPen } from "lucide-react";
import Image from "next/image";

export default function JoinerSteps() {
    return (
        <section className="bg-[#f5f6f7] py-10 px-5">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h3 className="text-center text-3xl md:text-4xl font-semibold text-[#1f3c6e] mb-14">
                    3 awesome steps to perfect new joiner kits & welcome packs
                </h3>

                {/* Main Row */}
                <div className="flex flex-col lg:flex-row items-center gap-4">

                    {/* Left Image */}
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                        <Image
                            src="https://ridgegap.com/wp-content/uploads/2025/05/joiner-kit-2.png"
                            alt="New Joiner Kits"
                            width={350}
                            height={350}
                        />
                    </div>

                    {/* Right Steps */}
                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            {/* Step 1 */}
                            <div className="bg-white p-8 rounded-sm shadow-md hover:-translate-y-2 transition duration-300">
                                <Image
                                    src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/content-ico.png"
                                    alt="Content"
                                    width={60}
                                    height={60}
                                />
                                <h4 className="text-xl font-semibold text-[#1f3c6e] mt-6 mb-3">
                                    Content
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Choose the content which goes inside the kit.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white p-8 rounded-sm shadow-md hover:-translate-y-2 transition duration-300">
                                <Image
                                    src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/design-branding-ico.png"
                                    alt="Design-branding"
                                    width={60}
                                    height={60}
                                />
                                <h4 className="text-xl font-semibold text-[#1f3c6e] mt-6 mb-3">
                                    Design & Branding
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Choose design & branding based on your company values.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white p-8 rounded-sm shadow-md hover:-translate-y-2 transition duration-300">
                                <Image
                                    src="https://ridgegap.com/wp-content/themes/ridgegap-wptheme/img/icons/order-ico.png"
                                    alt="Order"
                                    width={60}
                                    height={60}
                                />
                                <h4 className="text-xl font-semibold text-[#1f3c6e] mt-6 mb-3">
                                    Order
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Place the order & leave the rest on us.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
