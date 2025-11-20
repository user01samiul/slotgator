'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import NextSteps from '@/components/NextSteps';

export default function ProductPage() {
  const [isClient, setIsClient] = useState(false);
  const params = useParams();
  const slug = params.slug as string;
  const product = products[slug as keyof typeof products];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10">
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-8">
            Product not found
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Return Home
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  const { heroSection, ...sections } = product;

  return (
    <div className="min-h-screen bg-black">
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                animation: 'pulse 8s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Animated particles */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text content */}
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  {heroSection.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                {heroSection.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Image/Video */}
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl">
                  {heroSection.image.endsWith('.webm') ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    >
                      <source src={heroSection.image} type="video/webm" />
                    </video>
                  ) : (
                    <Image
                      src={heroSection.image}
                      alt={heroSection.title}
                      width={666}
                      height={666}
                      className="w-full h-auto object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {Object.entries(sections).map(([sectionKey, section]: [string, any]) => (
        <section
          key={sectionKey}
          className="relative py-24 overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {section.title}
                </span>
              </h2>
              {section.description && (
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {section.description}
                </p>
              )}
            </div>

            {/* Requirements list */}
            {section.requirements && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {section.requirements.map((item: string, index: number) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                    <div className="relative flex items-start gap-4">
                      <FiCheckCircle className="text-purple-400 text-2xl flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-lg">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {section.certifications && (
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.certifications.map((cert: string, index: number) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 text-center"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                      <div className="relative">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10">
                          <FiCheckCircle className="text-purple-400 text-3xl" />
                        </div>
                        <span className="text-white font-semibold text-lg">
                          {cert}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {section.whyObtain && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Why Obtain Certification?
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.whyObtain.map((reason: string, index: number) => (
                        <div
                          key={index}
                          className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                          <div className="relative flex items-start gap-4">
                            <FiCheckCircle className="text-purple-400 text-2xl flex-shrink-0 mt-1" />
                            <span className="text-gray-300 text-lg">{reason}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Services grid */}
            {section.services && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.services.map((service: any, index: number) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      {service.description && (
                        <p className="text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Cards grid */}
            {section.cards && (
              <div className={`grid grid-cols-1 ${
                section.cards[0]?.image
                  ? 'md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : section.cards[0]?.numbers
                  ? 'md:grid-cols-2 lg:grid-cols-4 gap-6'
                  : 'md:grid-cols-2 lg:grid-cols-3 gap-8'
              }`}>
                {section.cards.map((card: any, index: number) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                    <div className="relative">
                      {card.image && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                      )}
                      <div className={`p-8 ${card.image ? '' : 'text-center'}`}>
                        {card.numbers ? (
                          <>
                            <div className="text-5xl font-bold mb-3">
                              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {card.numbers}
                              </span>
                            </div>
                            <p className="text-white font-semibold text-xl">
                              {card.title}
                            </p>
                          </>
                        ) : (
                          <>
                            <h3 className="text-2xl font-bold text-white mb-4">
                              {card.title}
                            </h3>
                            {card.description && (
                              <p className="text-gray-300 leading-relaxed">
                                {card.description}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Special Anjouan section */}
            {sectionKey === 'anjouan' && (
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-5 blur-2xl" />
                  <div className="relative">
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                      {section.description}
                    </p>
                    <p className="text-gray-400 italic">{section.moreRegions}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Next Steps */}
      <div className="relative z-10">
        <NextSteps />
      </div>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-pink-950 to-purple-950">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)',
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Connect with our enterprise solutions team to accelerate your iGaming platform launch
          </p>
          <Link href="/contact">
            <button className="group relative px-10 py-5 bg-white text-purple-900 font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Schedule Consultation
                <FiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
