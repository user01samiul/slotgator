'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCode, FiLayers, FiCpu, FiDatabase, FiActivity } from 'react-icons/fi';

export default function PortfolioPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      title: 'Vatan Platform',
      description: 'Comprehensive iGaming platform featuring 12,741+ games with advanced SlotGator backend integration. Real-time gaming capabilities with 150+ REST API endpoints.',
      image: '/pics/A5Wi5ylMQ3bG7tUbcpLaa1Vk.avif',
      tags: ['Full Platform', 'Multi-Provider', 'Real-Time'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Vatan Game Casino',
      description: 'High-performance casino interface with seamless game aggregation. Cryptocurrency support with instant deposits/withdrawals powered by our backend API.',
      image: '/pics/LN2hsfjYcjQYn2wFXuRoOLIAM.avif',
      tags: ['Crypto Ready', 'API Integration', 'Mobile First'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Casino Extreme',
      description: 'Premium casino experience with sophisticated backend architecture. Supports 10,000+ concurrent WebSocket connections for live gaming.',
      image: '/pics/Lti9a6w6kxhn4f5pLzmfXbp2A.avif',
      tags: ['Live Gaming', 'WebSocket', 'Premium UI'],
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Casino Brango',
      description: 'Modern casino platform with enterprise-grade SlotGator infrastructure. Built on our TypeScript/Node.js stack with PostgreSQL, MongoDB, and Redis.',
      image: '/pics/ajV81GDdOjC5Trivrzqp0dMpmoQ.avif',
      tags: ['Enterprise', 'Scalable', 'High Performance'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Custom Casino Solution',
      description: 'Tailored iGaming solution with custom frontend and full SlotGator backend integration. Microservices architecture with 43 backend services.',
      image: '/pics/cSQqFEW1TEyyoTR93g09TmDZDQo.avif',
      tags: ['Custom Design', 'Microservices', 'Flexible'],
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
          {[...Array(18)].map((_, i) => (
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-full border border-white/20 mb-8 animate-fadeIn">
            <FiLayers className="text-purple-400" />
            <span className="text-sm font-semibold text-white">Custom Casino Platforms</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight animate-fadeIn">
            <span className="text-white">Our</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeIn">
            Custom-designed casino platforms powered by SlotGator backend technology from concept to live deployment
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FiDatabase className="text-4xl" />, value: '12,741', label: 'Total Games', gradient: 'from-purple-400 to-pink-400' },
              { icon: <FiCpu className="text-4xl" />, value: '150+', label: 'API Endpoints', gradient: 'from-blue-400 to-cyan-400' },
              { icon: <FiActivity className="text-4xl" />, value: '10K+', label: 'Concurrent Users', gradient: 'from-green-400 to-emerald-400' },
              { icon: <FiCode className="text-4xl" />, value: '2021', label: 'Founded', gradient: 'from-amber-400 to-orange-400' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`mb-4 flex justify-center bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.icon}
                  </div>
                  <p className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-gray-400 font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-6">
              <FiCode className="text-purple-400" />
              <span className="text-sm font-bold text-white">Featured Projects</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Custom Casino Platforms
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each platform showcases our expertise in combining beautiful frontend design with powerful SlotGator backend technology
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative group ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 transform group-hover:scale-[1.02]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                    Project {index + 1}
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl text-gray-300 rounded-full text-sm font-semibold border border-white/20 hover:border-white/30 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
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
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Powered by SlotGator Backend
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every frontend is backed by our sophisticated backend infrastructure
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Backend Services',
                value: '43',
                description: 'Microservices architecture for maximum scalability',
                icon: <FiLayers className="text-5xl" />,
                gradient: 'from-purple-400 to-pink-400',
              },
              {
                title: 'TypeScript Files',
                value: '217+',
                description: 'Production-ready codebase with full type safety',
                icon: <FiCode className="text-5xl" />,
                gradient: 'from-blue-400 to-cyan-400',
              },
              {
                title: 'Database Tables',
                value: '50+',
                description: 'PostgreSQL schema optimized for performance',
                icon: <FiDatabase className="text-5xl" />,
                gradient: 'from-green-400 to-emerald-400',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/20 text-center hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`mb-4 flex justify-center bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.icon}
                  </div>
                  <p className={`text-6xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}>
                    {item.value}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          {[...Array(12)].map((_, i) => (
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
            Ready to Build Your Platform?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
            Let's create a unique casino platform with our advanced SlotGator backend technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="group relative px-10 py-5 bg-white text-black rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative group-hover:text-white transition-colors duration-300">Start Your Project</span>
              </button>
            </Link>
            <Link href="/company/about">
              <button className="px-10 py-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-bold text-xl hover:border-white/40 hover:from-white/20 hover:to-white/10 transition-all duration-300">
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
