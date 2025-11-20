'use client';

import Link from 'next/link';
import { FiCheck, FiX, FiStar, FiTrendingUp, FiLayers, FiZap } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function SolutionsComparedPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    { name: 'Game Library', turnkey: '30,000+ games', whiteLabel: '30,000+ games', crypto: '30,000+ games', builder: '30,000+ games' },
    { name: 'Technical Infrastructure', turnkey: 'Full platform ownership', whiteLabel: 'Shared infrastructure', crypto: 'Blockchain-ready', builder: 'No-code customization' },
    { name: 'Payment Integration', turnkey: '150+ methods', whiteLabel: '150+ methods', crypto: 'Crypto-focused', builder: '150+ methods' },
    { name: 'Licensing', turnkey: 'Your own license', whiteLabel: 'Our sublicense', crypto: 'Your own license', builder: 'Your own license' },
    { name: 'Legal Entity', turnkey: 'Your company', whiteLabel: 'Our company', crypto: 'Your company', builder: 'Your company' },
    { name: 'Backend Management', turnkey: true, whiteLabel: true, crypto: true, builder: true },
    { name: 'Frontend Customization', turnkey: 'Developer required', whiteLabel: 'Limited templates', crypto: 'Developer required', builder: 'Drag & drop' },
    { name: 'Player Support', turnkey: 'Your team', whiteLabel: 'Optional our team', crypto: 'Your team', builder: 'Your team' },
    { name: 'Time to Launch', turnkey: '2-3 months', whiteLabel: '1 month', crypto: '2-3 months', builder: '1-2 months' },
    { name: 'Initial Investment', turnkey: 'High', whiteLabel: 'Medium', crypto: 'High', builder: 'Medium' },
    { name: 'Monthly Costs', turnkey: 'Platform + hosting', whiteLabel: 'Revenue share', crypto: 'Platform + hosting', builder: 'Platform + hosting' },
    { name: 'Cryptocurrency Support', turnkey: 'Optional', whiteLabel: 'Optional', crypto: 'Primary focus', builder: 'Optional' },
    { name: 'Multi-brand Support', turnkey: true, whiteLabel: false, crypto: true, builder: true },
    { name: 'Full Code Access', turnkey: true, whiteLabel: false, crypto: true, builder: false },
    { name: 'Regulatory Compliance', turnkey: 'Your responsibility', whiteLabel: 'Included', crypto: 'Your responsibility', builder: 'Your responsibility' },
  ];

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-black overflow-hidden">
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

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-400/30 rounded-full mb-8">
              <FiLayers className="text-purple-400" />
              <span className="text-sm font-semibold tracking-wide uppercase">Solution Comparison</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Choose Your Ideal
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Casino Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Compare our enterprise solutions side-by-side to find the perfect match for your business model, budget, and growth strategy
            </p>
          </div>
        </div>
      </section>

      {/* Solution Cards Overview */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                title: 'Turnkey Casino',
                icon: <FiStar className="text-4xl" />,
                highlight: 'Most Popular',
                color: 'from-blue-500 to-cyan-500',
                link: '/solutions/turkeyonlinecasino',
              },
              {
                title: 'White Label',
                icon: <FiZap className="text-4xl" />,
                highlight: 'Fastest Launch',
                color: 'from-purple-500 to-pink-500',
                link: '/solutions/whitelabelcasino',
              },
              {
                title: 'Crypto Casino',
                icon: <FiTrendingUp className="text-4xl" />,
                highlight: 'Web3 Ready',
                color: 'from-green-500 to-emerald-500',
                link: '/solutions/cryptocasino',
              },
              {
                title: 'Casino Builder',
                icon: <FiLayers className="text-4xl" />,
                highlight: 'No-Code',
                color: 'from-orange-500 to-red-500',
                link: '/solutions/casinobuilder',
              },
            ].map((solution, index) => (
              <Link key={index} href={solution.link}>
                <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden h-full">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${solution.color} mb-6`}>
                      {solution.icon}
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gradient-to-r ${solution.color} text-white`}>
                      {solution.highlight}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {solution.title}
                    </h3>
                    <div className="text-purple-400 font-semibold group-hover:translate-x-2 transition-transform">
                      Explore →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Comparison Table */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950 to-black">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive side-by-side analysis of all platform capabilities
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-10 blur-2xl" />
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="p-6 text-left font-bold text-white text-lg">Feature</th>
                        <th className="p-6 text-center">
                          <div className="font-bold text-white mb-2">Turnkey Casino</div>
                          <Link href="/solutions/turkeyonlinecasino">
                            <span className="text-sm text-purple-400 hover:text-pink-400 transition-colors">Learn more →</span>
                          </Link>
                        </th>
                        <th className="p-6 text-center">
                          <div className="font-bold text-white mb-2">White Label</div>
                          <Link href="/solutions/whitelabelcasino">
                            <span className="text-sm text-purple-400 hover:text-pink-400 transition-colors">Learn more →</span>
                          </Link>
                        </th>
                        <th className="p-6 text-center">
                          <div className="font-bold text-white mb-2">Crypto Casino</div>
                          <Link href="/solutions/cryptocasino">
                            <span className="text-sm text-purple-400 hover:text-pink-400 transition-colors">Learn more →</span>
                          </Link>
                        </th>
                        <th className="p-6 text-center">
                          <div className="font-bold text-white mb-2">Casino Builder</div>
                          <Link href="/solutions/casinobuilder">
                            <span className="text-sm text-purple-400 hover:text-pink-400 transition-colors">Learn more →</span>
                          </Link>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {features.map((feature, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-4 font-semibold text-white">{feature.name}</td>
                          <td className="p-4 text-center">
                            {typeof feature.turnkey === 'boolean' ? (
                              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full" style={{
                                background: feature.turnkey ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)',
                              }}>
                                {feature.turnkey ? (
                                  <FiCheck className="text-white text-xl" />
                                ) : (
                                  <FiX className="text-white text-xl" />
                                )}
                              </div>
                            ) : (
                              <span className="text-gray-300">{feature.turnkey}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feature.whiteLabel === 'boolean' ? (
                              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full" style={{
                                background: feature.whiteLabel ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)',
                              }}>
                                {feature.whiteLabel ? (
                                  <FiCheck className="text-white text-xl" />
                                ) : (
                                  <FiX className="text-white text-xl" />
                                )}
                              </div>
                            ) : (
                              <span className="text-gray-300">{feature.whiteLabel}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feature.crypto === 'boolean' ? (
                              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full" style={{
                                background: feature.crypto ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)',
                              }}>
                                {feature.crypto ? (
                                  <FiCheck className="text-white text-xl" />
                                ) : (
                                  <FiX className="text-white text-xl" />
                                )}
                              </div>
                            ) : (
                              <span className="text-gray-300">{feature.crypto}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feature.builder === 'boolean' ? (
                              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full" style={{
                                background: feature.builder ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)',
                              }}>
                                {feature.builder ? (
                                  <FiCheck className="text-white text-xl" />
                                ) : (
                                  <FiX className="text-white text-xl" />
                                )}
                              </div>
                            ) : (
                              <span className="text-gray-300">{feature.builder}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-400/30 rounded-full mb-6">
              <span className="text-sm font-semibold text-white">Find Your Match</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Which Solution Fits Your Vision?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Each platform is designed for specific business models and growth trajectories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Turnkey Casino',
                emoji: '🏢',
                gradient: 'from-blue-500 to-cyan-500',
                bestFor: 'Established enterprises seeking complete platform ownership, full customization capabilities, and multi-brand management with their own gaming license.',
                ideal: 'Large operators & Enterprises',
                link: '/solutions/turkeyonlinecasino',
              },
              {
                title: 'White Label',
                emoji: '⚡',
                gradient: 'from-purple-500 to-pink-500',
                bestFor: 'Ambitious entrepreneurs and startups wanting rapid market entry with minimal technical complexity and shared regulatory framework.',
                ideal: 'Startups & New operators',
                link: '/solutions/whitelabelcasino',
              },
              {
                title: 'Crypto Casino',
                emoji: '₿',
                gradient: 'from-green-500 to-emerald-500',
                bestFor: 'Forward-thinking operators targeting the cryptocurrency market with blockchain integration, anonymous play, and instant settlements.',
                ideal: 'Crypto-focused markets',
                link: '/solutions/cryptocasino',
              },
              {
                title: 'Casino Builder',
                emoji: '🎨',
                gradient: 'from-orange-500 to-red-500',
                bestFor: 'Operators prioritizing unique design and brand identity with intuitive no-code customization tools and visual editors.',
                ideal: 'Design-focused brands',
                link: '/solutions/casinobuilder',
              },
            ].map((solution, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className={`absolute -inset-1 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="text-6xl mb-6">{solution.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r ${solution.gradient} text-white`}>
                    {solution.ideal}
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed">{solution.bestFor}</p>
                  <Link href={solution.link}>
                    <button className={`group/btn relative w-full px-6 py-4 bg-gradient-to-r ${solution.gradient} text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden`}>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                      <span className="relative">Explore Solution →</span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Helper */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950 to-black">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Key Decision Factors
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Budget & Investment', desc: 'Consider initial setup costs, monthly fees, and revenue share models', gradient: 'from-blue-500 to-cyan-500' },
                  { title: 'Time to Market', desc: 'Balance speed of launch with customization requirements', gradient: 'from-purple-500 to-pink-500' },
                  { title: 'Technical Resources', desc: 'Assess your team\'s development capabilities and ongoing support needs', gradient: 'from-green-500 to-emerald-500' },
                  { title: 'Regulatory Requirements', desc: 'Evaluate licensing complexity and compliance responsibilities', gradient: 'from-orange-500 to-red-500' },
                  { title: 'Scalability Needs', desc: 'Plan for future growth and multi-brand expansion', gradient: 'from-indigo-500 to-purple-500' },
                  { title: 'Market Positioning', desc: 'Align platform capabilities with your target audience', gradient: 'from-pink-500 to-rose-500' },
                ].map((factor, index) => (
                  <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${factor.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${factor.gradient} bg-clip-text text-transparent`}>
                        {factor.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{factor.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Need Expert Guidance?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
            Our solution architects will analyze your business requirements and recommend the optimal platform for your success
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="group relative px-12 py-6 bg-white text-black rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative group-hover:text-white transition-colors">Schedule Free Consultation</span>
              </button>
            </Link>
            <Link href="/company/about">
              <button className="px-12 py-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-bold text-xl hover:border-white/40 hover:from-white/20 hover:to-white/10 transition-all duration-300">
                Learn About Slotgator
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
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
