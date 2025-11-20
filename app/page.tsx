'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiCheck, FiArrowRight, FiCpu, FiDatabase, FiActivity, FiLayers, FiCode, FiTarget, FiZap } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);

    // Generate particles only on client side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${5 + Math.random() * 10}s`,
      }))
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: 'Turnkey Casino',
      description: 'Complete platform with full backend ownership and comprehensive API infrastructure',
      icon: <FiLayers className="text-5xl" />,
      features: ['Full source access', 'PostgreSQL + MongoDB', 'Complete control'],
      link: '/solutions/turkeyonlinecasino',
      gradient: 'from-purple-600 via-purple-500 to-pink-500',
      delay: '0ms',
    },
    {
      title: 'White Label',
      description: 'Launch in 6 weeks with shared infrastructure and Curaçao sublicense',
      icon: <FiZap className="text-5xl" />,
      features: ['6-week deployment', 'Shared infrastructure', 'Curaçao sublicense'],
      link: '/solutions/whitelabelcasino',
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
      delay: '100ms',
    },
    {
      title: 'Crypto Casino',
      description: 'Blockchain-native platform with 100+ cryptocurrency integrations',
      icon: <FiActivity className="text-5xl" />,
      features: ['100+ cryptocurrencies', 'Instant settlements', 'DeFi ready'],
      link: '/solutions/cryptocasino',
      gradient: 'from-amber-600 via-orange-500 to-red-500',
      delay: '200ms',
    },
    {
      title: 'Casino Builder',
      description: 'No-code CMS for frontend customization without developers',
      icon: <FiCode className="text-5xl" />,
      features: ['Visual editor', 'No coding needed', 'Unlimited brands'],
      link: '/solutions/casinobuilder',
      gradient: 'from-emerald-600 via-green-500 to-teal-500',
      delay: '300ms',
    },
    {
      title: 'CRM System',
      description: 'In-house player intelligence and marketing automation platform',
      icon: <FiTarget className="text-5xl" />,
      features: ['AI insights', '360° player view', 'Campaign automation'],
      link: '/solutions/crm',
      gradient: 'from-violet-600 via-purple-500 to-fuchsia-500',
      delay: '400ms',
    },
    {
      title: 'Accounting System',
      description: 'Comprehensive financial management and reporting platform',
      icon: <FiDatabase className="text-5xl" />,
      features: ['Real-time tracking', 'Automated reports', 'Multi-currency'],
      link: '/solutions/accounting',
      gradient: 'from-teal-600 via-cyan-500 to-blue-500',
      delay: '500ms',
    },
  ];

  const stats = [
    { number: '2021', label: 'Founded', sublabel: 'Tech-focused start-up', icon: <FiActivity />, gradient: 'from-purple-600 to-pink-600' },
    { number: '12,741', label: 'Casino Games', sublabel: 'Diverse content', icon: <FiDatabase />, gradient: 'from-blue-600 to-cyan-600' },
    { number: '150+', label: 'API Endpoints', sublabel: 'RESTful architecture', icon: <FiCpu />, gradient: 'from-green-600 to-emerald-600' },
    { number: '10K+', label: 'WebSocket Connections', sublabel: 'Real-time gaming', icon: <FiActivity />, gradient: 'from-amber-600 to-orange-600' },
    { number: '217+', label: 'TypeScript Files', sublabel: 'Production codebase', icon: <FiCode />, gradient: 'from-violet-600 to-purple-600' },
    { number: '43', label: 'Backend Services', sublabel: 'Microservices', icon: <FiLayers />, gradient: 'from-pink-600 to-rose-600' },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-black to-slate-950">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-purple-500/20">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-300">Enterprise iGaming Platform • Trusted Since 2021</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="block text-white">Launch Your</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Casino Platform
                  </span>
                  <span className="block text-white">in 6 Weeks</span>
                </h1>

                <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                  Enterprise-grade iGaming infrastructure with 180+ game providers, advanced backend management, and complete licensing support.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">30K+</div>
                  <div className="text-sm text-gray-400">Casino Games</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">180+</div>
                  <div className="text-sm text-gray-400">Game Providers</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-sm text-gray-400">Payment Methods</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="group">
                  <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    Schedule Demo
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/solutions-compared">
                  <button className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    View Solutions
                  </button>
                </Link>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center gap-3 pt-4 text-sm text-gray-400">
                <span>Built with:</span>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded-md text-purple-400 font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-pink-400 font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-cyan-400 font-medium">Microservices</span>
                </div>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative lg:pl-8">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full blur-3xl" />

              {/* Video Container */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />

                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl">
                  <video
                    loop
                    playsInline
                    controls
                    className="w-full h-auto"
                    poster="/pics/admin.png"
                  >
                    <source src="/pics/SlotGator_ iGaming Engineered.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Play Indicator */}
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                  <span className="text-sm text-white font-medium">Platform Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Platform by the Numbers
              </span>
            </h2>
            <p className="text-xl text-gray-400">Technical capabilities and scale of our iGaming infrastructure</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 hover:from-white/10 hover:to-white/5 transition-all duration-500 border border-white/10 hover:border-white/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`} />

                <div className="relative">
                  <div className={`text-3xl mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <p className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </p>
                  <p className="text-sm font-semibold text-white mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-400">{stat.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8">
              <FiLayers className="text-purple-400" />
              <span className="text-sm font-bold text-purple-400">Our Solutions</span>
            </div>
            <h2 className="text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Choose Your Casino Platform
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Flexible deployment models built on the same powerful SlotGator backend technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link key={index} href={solution.link}>
                <div
                  className="group relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 hover:from-white/10 hover:to-white/5 transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden hover:-translate-y-2"
                  style={{ animationDelay: solution.delay }}
                >
                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`text-transparent bg-gradient-to-r ${solution.gradient} bg-clip-text mb-8 transform group-hover:scale-110 transition-transform duration-300`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="space-y-4 mb-10">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${solution.gradient} flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <FiCheck className="text-white text-sm" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`flex items-center text-transparent bg-gradient-to-r ${solution.gradient} bg-clip-text font-semibold group-hover:gap-3 transition-all duration-300`}>
                      Learn More
                      <FiArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Showcase */}
      <section className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8">
                <FiDatabase className="text-purple-400" />
                <span className="text-sm font-bold text-purple-400">SlotGator Backend</span>
              </div>
              <h2 className="text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  12,741 Games via Unified API
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Our game aggregation backend integrates 180+ providers through a single REST API: slots, live dealers, table games, bingo, and virtual sports all accessible from one endpoint.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  '150+ REST API endpoints for complete platform control',
                  '10,000+ concurrent WebSocket connections for live gaming',
                  'TypeScript codebase with 43 microservices architecture',
                  'PostgreSQL + MongoDB + Redis for optimal performance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <FiCheck className="text-white" />
                    </div>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/products/gameaggregator">
                <button className="group px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] transition-all duration-500 hover:scale-105">
                  <span className="flex items-center">
                    Explore Game Aggregation
                    <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="relative">
              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-3xl opacity-30" />

              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/pics/admin.png"
                  alt="SlotGator backend admin portal"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />

                <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <p className="text-white font-bold text-lg mb-1">SlotGator Admin Portal</p>
                  <p className="text-gray-300 text-sm">Complete backend management interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-pink-950 to-purple-950">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8" style={{ textShadow: '0 0 60px rgba(168, 85, 247, 0.5)' }}>
            Ready to Build Your Casino?
          </h2>
          <p className="text-2xl mb-16 max-w-3xl mx-auto text-gray-200">
            Launch in 6 weeks with our advanced backend technology and comprehensive iGaming infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="group px-12 py-6 bg-white text-purple-900 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
                <span className="flex items-center justify-center">
                  Schedule Demo
                  <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </Link>
            <Link href="/company/about">
              <button className="px-12 py-6 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-500">
                About Our Start-up
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
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }

        .animate-gradient {
          animation: gradient 6s ease infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </main>
  );
}
