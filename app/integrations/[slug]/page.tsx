'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiCheck, FiArrowRight, FiCode, FiLayers, FiPlay } from 'react-icons/fi';
import { integrations } from '@/data/integrations';

export default function IntegrationPage() {
  const [isClient, setIsClient] = useState(false);
  const params = useParams();
  const slug = params.slug as string;
  const integration = integrations[slug as keyof typeof integrations];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!integration) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              }}
            />
          </div>
        </div>
        <div className="text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Integration Not Found</h1>
          <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                animation: 'pulse 8s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Animated particles */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-400/30 rounded-full mb-6">
                <FiPlay className="text-purple-400" />
                <span className="text-sm font-bold text-white">Game Integration</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  {integration.heroSection.title}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {integration.heroSection.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center">
                      Request Integration
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/game-providers">
                  <button className="px-8 py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white rounded-xl font-bold text-lg hover:border-white/40 hover:from-white/20 hover:to-white/10 transition-all duration-300">
                    View Providers
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fadeIn">
              {integration.heroSection.image?.includes('.webm') || integration.heroSection.image?.includes('.mp4') ? (
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500">
                    <video autoPlay loop muted playsInline className="w-full h-auto">
                      <source src={integration.heroSection.image} type="video/webm" />
                    </video>
                  </div>
                </div>
              ) : integration.heroSection.image ? (
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 p-8">
                    <Image
                      src={integration.heroSection.image}
                      alt={integration.heroSection.title}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Overview with Stats or Cards */}
      {('section1' in integration) && integration.section1 && (
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-6">
                  <FiLayers className="text-purple-400" />
                  <span className="text-sm font-bold text-white">Integration Platform</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  {integration.section1.title}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {integration.section1.description}
                </p>
                {integration.section1.cards && (
                  <div className="grid grid-cols-2 gap-4">
                    {integration.section1.cards.map((card, index) => (
                      <div
                        key={index}
                        className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
                        <div className="relative">
                          <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                            {card.numbers}
                          </p>
                          <p className="text-gray-400 text-sm">{card.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {'image' in integration.section1 && integration.section1.image && (
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500">
                    <Image
                      src={integration.section1.image}
                      alt={integration.section1.title as string}
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Section 2 - Features or Benefits Grid */}
      {('section2' in integration) && integration.section2 && (
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950 to-black">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '50px 50px',
              }}></div>
            </div>
          </div>

          {/* Glow effects */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-6">
                <FiCheck className="text-purple-400" />
                <span className="text-sm font-bold text-white">Key Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {integration.section2.title}
              </h2>
              {integration.section2.description && (
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  {integration.section2.description}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integration.section2.cards.map((card, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                  <div className="relative z-10">
                    {card.image && (
                      <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={300}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 3 - Additional Content */}
      {('section3' in integration) && integration.section3 && (
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-6">
                <FiCode className="text-purple-400" />
                <span className="text-sm font-bold text-white">Platform Features</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {integration.section3.title}
              </h2>
              {integration.section3.description && (
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  {integration.section3.description}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integration.section3.cards.map((card, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                  <div className="relative h-full flex flex-col">
                    {'image' in card && card.image && (
                      <div className="mb-6 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                          src={card.image as string}
                          alt={card.title as string}
                          width={300}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed flex-grow">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 4 - Advantages */}
      {('section4' in integration) && integration.section4 && (
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-slate-950 to-black">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '50px 50px',
              }}></div>
            </div>
          </div>

          {/* Glow effects */}
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {integration.section4.title}
              </h2>
              {integration.section4.description && (
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  {integration.section4.description}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integration.section4.cards.map((card, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                  <div className="relative">
                    {card.image && (
                      <div className="mb-6 rounded-2xl overflow-hidden border border-white/10">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={300}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 5 - Final Content */}
      {('section5' in integration) && integration.section5 && (
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {integration.section5.title}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {integration.section5.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-pink-950 to-slate-950">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)',
              }}
            />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-pink-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Integrate?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
            Contact us today to discuss game integration options and get started with premium content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="group relative px-10 py-5 bg-white text-black rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative group-hover:text-white transition-colors duration-300">Start Integration</span>
              </button>
            </Link>
            <Link href="/game-providers">
              <button className="px-10 py-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-bold text-xl hover:border-white/40 hover:from-white/20 hover:to-white/10 transition-all duration-300">
                Browse Providers
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
