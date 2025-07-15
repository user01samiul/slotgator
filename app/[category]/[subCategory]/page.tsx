/* eslint-disable @typescript-eslint/no-explicit-any */
import NextSteps from "@/components/NextSteps";
import { integrations } from "@/data/integrations";
import { products } from "@/data/products";
import { solutions } from "@/data/solutions";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

// Define the shape of the heroSection
interface HeroSection {
  title: string;
  description: string;
  image: string;
}

// Define the shape of a section
interface Section {
  title: string;
  description?: string;
  requirements?: string[];
  certifications?: string[];
  whyObtain?: string[];
  services?: { title: string; description?: string }[];
  cards?: {
    title: string;
    description?: string;
    image?: string;
    numbers?: string;
  }[];
  moreRegions?: string;
}

// Define the shape of a data source entry
interface DataSource {
  [subCategory: string]: {
    heroSection: HeroSection;
    [sectionKey: string]: HeroSection | Section;
  };
}

// Combine all data sources with explicit typing
const dataSources: {
  integrations: DataSource;
  products: DataSource;
  solutions: DataSource;
} = {
  integrations,
  products,
  solutions,
};

interface SubCategoriesProps {
  params: Promise<{
    category: string;
    subCategory: string;
  }>;
}

const SubCategories = async ({ params }: SubCategoriesProps) => {
  const { category, subCategory } = await params;
  const dataSource = dataSources[category as keyof typeof dataSources];
  const pageData = dataSource?.[subCategory];

  if (!category || !subCategory || !pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            The requested page does not exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#FF2432] text-white font-medium rounded-md hover:bg-[#E02030] transition-colors shadow-md hover:shadow-lg"
          >
            Return to Home
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  const { heroSection, ...sections } = pageData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-red-900 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800/30 to-red-900/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {heroSection.title}
              </h1>
              <p className="text-xl text-red-100 opacity-90">
                {heroSection.description}
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <button className="bg-white text-red-700 hover:bg-red-100 px-6 py-3 rounded-md font-semibold transition duration-300 shadow-lg hover:shadow-xl">
                    Get Started
                  </button>
                </Link>
                {/* <button className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-semibold transition duration-300">
                  Learn More
                </button> */}
              </div>
            </div>
            <div className="md:w-1/2">
              {heroSection.image.endsWith(".webm") ? (
                <div className="rounded-xl shadow-2xl overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  >
                    <source src={heroSection.image} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="rounded-xl shadow-2xl overflow-hidden">
                  <Image
                    src={heroSection.image}
                    alt={heroSection.title}
                    width={666}
                    height={666}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {Object.entries(sections).map(
        ([sectionKey, section]: [string, Section]) => (
          <section
            key={sectionKey}
            className={`py-16 md:py-20 ${
              parseInt(sectionKey.replace("section", "")) % 2 === 0
                ? "bg-gray-50"
                : "bg-white"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    {section.description}
                  </p>
                )}
              </div>

              {/* Handle special sections */}
              {section.requirements ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {section.requirements.map((item: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    >
                      <FiCheckCircle className="text-[#FF2432] mr-4 mt-1 flex-shrink-0 text-xl" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : section.certifications ? (
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                      Certifications
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {section.certifications.map(
                        (cert: string, index: number) => (
                          <li
                            key={index}
                            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                          >
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                              <FiCheckCircle className="text-[#FF2432] text-2xl" />
                            </div>
                            <span className="text-gray-700 font-medium">
                              {cert}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                      Why Obtain a Certificate?
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      {section.whyObtain.map(
                        (reason: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                          >
                            <FiCheckCircle className="text-[#FF2432] mr-4 mt-1 flex-shrink-0 text-xl" />
                            <span className="text-gray-700">{reason}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              ) : section.services ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.services.map((service: any, index: number) => (
                    <li
                      key={index}
                      className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      {service.description && (
                        <p className="text-gray-600 mb-6 flex-grow">
                          {service.description}
                        </p>
                      )}
                      {/* <Link
                      href="#"
                      className="text-[#FF2432] font-medium inline-flex items-center mt-auto"
                    >
                      Learn more <FiArrowRight className="ml-2" />
                    </Link> */}
                    </li>
                  ))}
                </ul>
              ) : section.cards ? (
                <div
                  className={`grid grid-cols-1 ${
                    sectionKey === "section2" &&
                    category === "products" &&
                    subCategory === "affiliateManagement"
                      ? "md:grid-cols-2 lg:grid-cols-3"
                      : "md:grid-cols-2 lg:grid-cols-4"
                  } gap-8`}
                >
                  {section.cards.map((card: any, index: number) => (
                    <div
                      key={index}
                      className={`p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center ${
                        card.image ? "pt-10" : ""
                      }`}
                    >
                      {card.image && (
                        <div className="mb-6">
                          <Image
                            src={card.image}
                            alt={card.title}
                            width={
                              sectionKey === "section2" &&
                              category === "products" &&
                              subCategory === "affiliateManagement"
                                ? 86
                                : 120
                            }
                            height={
                              sectionKey === "section2" &&
                              category === "products" &&
                              subCategory === "affiliateManagement"
                                ? 86
                                : 120
                            }
                            className={`${
                              sectionKey === "section2" &&
                              category === "products" &&
                              subCategory === "affiliateManagement"
                                ? ""
                                : "rounded-lg"
                            }`}
                          />
                        </div>
                      )}
                      {card.numbers ? (
                        <>
                          <p className="text-3xl font-bold text-[#FF2432] mb-2">
                            {card.numbers}
                          </p>
                          <p className="text-gray-900 font-semibold text-lg">
                            {card.title}
                          </p>
                        </>
                      ) : (
                        <>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {card.title}
                          </h3>
                          {card.description && (
                            <p className="text-gray-600">{card.description}</p>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ) : sectionKey === "anjouan" ? (
                <div className="text-center max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
                  <p className="text-lg text-gray-600 mb-6">
                    {section.description}
                  </p>
                  <p className="text-gray-500 italic">{section.moreRegions}</p>
                </div>
              ) : null}
            </div>
          </section>
        )
      )}

      <NextSteps />

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to get started?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Contact our team today to learn more about our solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="bg-white text-red-700 hover:bg-red-100 px-8 py-3 rounded-md font-semibold transition duration-300 shadow-lg hover:shadow-xl">
                  Contact Us Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubCategories;
