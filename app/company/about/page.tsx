'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiCheckCircle, FiCpu, FiDatabase, FiActivity, FiLayers, FiCode, FiGitBranch } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
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

          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
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
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8">
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Founded 2021 • Tech-Focused Start-up
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white mb-4" style={{ textShadow: '0 0 40px rgba(139, 92, 246, 0.3)' }}>
                Modern iGaming
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Backend Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A developer-first start-up building sophisticated casino infrastructure with Node.js, TypeScript, and microservices architecture
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8">
                <FiCode className="text-purple-400" />
                <span className="text-sm font-bold text-purple-400">Tech Start-up DNA</span>
              </div>
              <h2 className="text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Built by Developers, for Operators
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                SlotGator is a technology-focused start-up (not a corporation with 5,000 employees) specializing in advanced iGaming backend systems. We&apos;re a lean team of developers building sophisticated casino infrastructure with modern tools and architecture.
              </p>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Our platform features 150+ REST API endpoints and supports 10,000+ concurrent WebSocket connections for real-time gaming. Built with Node.js, TypeScript, Express 5, PostgreSQL, MongoDB, and Redis, our architecture comprises 217+ TypeScript files, 43 microservices, and 50+ PostgreSQL tables.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 hover:from-white/10 hover:to-white/5 transition-all duration-500 border border-white/10 hover:border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500" />
                  <div className="relative">
                    <FiCode className="text-4xl mb-4 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text" />
                    <p className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">217+</p>
                    <p className="text-white font-semibold">TypeScript Files</p>
                    <p className="text-sm text-gray-400">Production codebase</p>
                  </div>
                </div>
                <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 hover:from-white/10 hover:to-white/5 transition-all duration-500 border border-white/10 hover:border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500" />
                  <div className="relative">
                    <FiLayers className="text-4xl mb-4 text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text" />
                    <p className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">43</p>
                    <p className="text-white font-semibold">Backend Services</p>
                    <p className="text-sm text-gray-400">Microservices arch</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-3xl opacity-30" />

              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/pics/admin.png"
                  alt="SlotGator Admin Portal - Backend Dashboard"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <p className="text-white font-bold text-lg mb-1">SlotGator Admin Portal</p>
                  <p className="text-gray-300 text-sm">Enterprise backend management interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="relative py-32 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Platform Specifications
              </span>
            </h2>
            <p className="text-xl text-gray-400">Technical capabilities powering modern casino operations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '12,741', label: 'Casino Games', sublabel: 'Aggregated content', icon: <FiDatabase />, gradient: 'from-purple-600 to-pink-600' },
              { number: '150+', label: 'REST APIs', sublabel: 'Backend endpoints', icon: <FiCode />, gradient: 'from-blue-600 to-cyan-600' },
              { number: '10K+', label: 'WebSockets', sublabel: 'Concurrent connections', icon: <FiActivity />, gradient: 'from-green-600 to-emerald-600' },
              { number: '50+', label: 'DB Tables', sublabel: 'PostgreSQL schema', icon: <FiDatabase />, gradient: 'from-amber-600 to-orange-600' },
            ].map((stat, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 hover:from-white/10 hover:to-white/5 transition-all duration-500 border border-white/10 hover:border-white/20 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`} />
                <div className="relative text-center">
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <p className={`text-6xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.number}</p>
                  <p className="text-white font-semibold text-lg mb-1">{stat.label}</p>
                  <p className="text-gray-400 text-sm">{stat.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-3xl opacity-20" />
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-16 text-center border border-white/10">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8">
                <FiCode className="text-purple-400" />
                <span className="text-sm font-bold text-purple-400">Our Mission</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-8">Developer-First Approach</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To deliver sophisticated, scalable iGaming backend technology that empowers operators with enterprise-grade infrastructure, extensive game libraries, and modern API architecture. As a start-up, we move fast, iterate quickly, and focus on building technology that matters without the bureaucracy of large corporations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8">
              <FiLayers className="text-purple-400" />
              <span className="text-sm font-bold text-purple-400">Core Values</span>
            </div>
            <h2 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                What Drives Us
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Start-up agility meets enterprise-grade engineering
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Modern Stack',
                description: 'Node.js, TypeScript, Express 5, PostgreSQL, MongoDB, Redis: choosing the right tools for the job without legacy constraints.',
                icon: <FiCode className="text-6xl" />,
                gradient: 'from-violet-600 to-purple-600',
              },
              {
                title: 'Scalable Architecture',
                description: 'Microservices design with 43 independent services, built to handle massive concurrent loads and real-time gaming.',
                icon: <FiGitBranch className="text-6xl" />,
                gradient: 'from-blue-600 to-indigo-600',
              },
              {
                title: 'Start-up Speed',
                description: 'Launch casino platforms in 6 weeks. No corporate red tape, just focused development and rapid iteration.',
                icon: <FiActivity className="text-6xl" />,
                gradient: 'from-emerald-600 to-green-600',
              },
            ].map((value, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 hover:from-white/10 hover:to-white/5 transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`text-transparent bg-gradient-to-r ${value.gradient} bg-clip-text mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8">
              <FiCpu className="text-purple-400" />
              <span className="text-sm font-bold text-purple-400">Platform Capabilities</span>
            </div>
            <h2 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Full-Stack Casino Infrastructure
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to run a modern online casino, built from scratch
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'SlotGator Backend Platform',
              '150+ REST API Endpoints',
              'Real-Time WebSocket Gaming',
              'Multi-Provider Aggregation',
              '12,741 Integrated Games',
              'Custom Frontend Development',
              'Node.js + TypeScript Stack',
              'PostgreSQL + MongoDB + Redis',
              'Microservices Architecture',
              'Cryptocurrency Support',
              'Payment Gateway Integration',
              'Cloud-Native Infrastructure',
              'In-House CRM System',
              'Advanced Analytics',
              'Bonus & Promotion Engine',
              'Affiliate Management',
              'KYC & Compliance Tools',
              'Fraud Detection',
            ].map((item, index) => (
              <div key={index} className="group flex items-center p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl hover:from-white/10 hover:to-white/5 transition-all border border-white/10 hover:border-white/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FiCheckCircle className="text-white text-lg" />
                </div>
                <h3 className="font-bold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Join Our Platform
          </h2>
          <p className="text-2xl mb-16 max-w-3xl mx-auto text-gray-200">
            Experience the advantage of working with a tech-focused start-up: fast decisions, modern technology, and dedicated support
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button className="group px-12 py-6 bg-white text-purple-900 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
                Schedule Demo
              </button>
            </Link>
            <Link href="/solutions-compared">
              <button className="px-12 py-6 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-500">
                Compare Solutions
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
    </div>
  );
}
