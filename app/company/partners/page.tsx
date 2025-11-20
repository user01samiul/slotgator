'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiUsers, FiGlobe, FiAward, FiTrendingUp, FiDownload } from 'react-icons/fi';

export default function PartnersPage() {
  const partnerCategories = [
    {
      title: 'Industry Media',
      partners: [
        { name: 'SBC News', category: 'Industry Publication' },
        { name: 'iGaming Business', category: 'B2B Magazine' },
        { name: 'CalvinAyre', category: 'News Portal' },
        { name: 'G3 Newswire', category: 'Press Distribution' },
      ],
    },
    {
      title: 'Event Partners',
      partners: [
        { name: 'SiGMA', category: 'Global Expo' },
        { name: 'ICE London', category: 'Trade Show' },
        { name: 'iGB Affiliate', category: 'Affiliate Conference' },
        { name: 'G2E Las Vegas', category: 'Gaming Expo' },
      ],
    },
    {
      title: 'Technology Partners',
      partners: [
        { name: 'Amazon Web Services', category: 'Cloud Infrastructure' },
        { name: 'Cloudflare', category: 'Security & CDN' },
        { name: 'MongoDB', category: 'Database Solutions' },
        { name: 'Stripe', category: 'Payment Processing' },
      ],
    },
  ];

  const benefits = [
    {
      icon: <FiGlobe className="text-5xl" />,
      title: 'Global Reach',
      description: 'Access to our network operating in 50+ countries worldwide',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: <FiUsers className="text-5xl" />,
      title: 'Joint Marketing',
      description: 'Co-branded campaigns and content distribution opportunities',
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      icon: <FiAward className="text-5xl" />,
      title: 'Brand Association',
      description: 'Align with an industry-leading B2B platform provider',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FiTrendingUp className="text-5xl" />,
      title: 'Business Growth',
      description: 'Collaborative opportunities to expand both businesses',
      gradient: 'from-green-500 to-green-600',
    },
  ];

  const mediaKit = [
    { name: 'Company Logo Pack', size: '2.5 MB', format: 'PNG, SVG' },
    { name: 'Brand Guidelines', size: '5.1 MB', format: 'PDF' },
    { name: 'Product Screenshots', size: '12.3 MB', format: 'PNG' },
    { name: 'Executive Photos', size: '8.7 MB', format: 'JPG' },
    { name: 'Company Fact Sheet', size: '1.2 MB', format: 'PDF' },
    { name: 'Press Release Template', size: '850 KB', format: 'DOCX' },
  ];

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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <FiUsers className="text-white" />
            <span className="text-sm font-semibold text-white">Partnerships</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Growing Together with</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Industry Leaders
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Strategic partnerships that drive innovation and mutual success in the iGaming ecosystem
          </p>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <span className="text-sm font-bold text-white">Our Approach</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Building Lasting Relationships
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                At Slotgator, we believe in the power of collaboration. Our partnership program connects industry media, event organizers, technology providers, and service companies to create a stronger iGaming ecosystem.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Whether you're a media outlet covering the industry, an event bringing stakeholders together, or a technology company enhancing our platform capabilities we're interested in exploring partnership opportunities that deliver mutual value.
              </p>
              <Link href="/contact">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Become a Partner</span>
                  <div className="absolute inset-0 blur-2xl bg-purple-500 opacity-0 group-hover:opacity-50 -z-10" />
                </button>
              </Link>
            </div>
            <div className="relative z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&q=80"
                  alt="Partnership collaboration"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <span className="text-sm font-bold text-white">Benefits</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Partner with Slotgator?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic advantages that drive growth for both organizations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-10 rounded-3xl transition-all duration-500 border border-white/10 hover:border-white/20 text-center overflow-hidden">
                <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`text-transparent bg-gradient-to-r ${benefit.gradient} bg-clip-text flex justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <span className="text-sm font-bold text-white">Our Partners</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Trusted Industry Collaborations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading organizations across the iGaming ecosystem
            </p>
          </div>

          <div className="space-y-16 relative z-10">
            {partnerCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-3xl font-bold text-white mb-8 pb-4 border-b-4" style={{
                  borderImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119)) 1',
                }}>{category.title}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, index) => (
                    <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 rounded-3xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                      <div className="relative z-10">
                        <div className="h-24 flex items-center justify-center mb-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-colors border border-white/10">
                          <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{partner.name.substring(0, 2)}</span>
                        </div>
                        <h4 className="font-bold text-white mb-2 text-lg">{partner.name}</h4>
                        <p className="text-gray-400">{partner.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <span className="text-sm font-bold text-white">Press Resources</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Download Media Kit
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Brand assets, company information, and press materials for media partners
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-2xl" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {mediaKit.map((item, index) => (
                    <div key={index} className="group flex items-center justify-between p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 cursor-pointer border border-white/10 hover:border-white/20 overflow-hidden">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
                      <div className="flex items-center relative z-10">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <FiDownload className="text-white text-xl" />
                        </div>
                        <div>
                          <p className="font-bold text-white">{item.name}</p>
                          <p className="text-sm text-gray-400">{item.format} • {item.size}</p>
                        </div>
                      </div>
                      <button className="text-purple-400 font-bold group-hover:scale-110 transition-transform relative z-10">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Link href="/contact">
                    <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative">Request Complete Media Kit</span>
                      <div className="absolute inset-0 blur-2xl bg-purple-500 opacity-0 group-hover:opacity-50 -z-10" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
            Let's explore how we can create mutual value and drive the iGaming industry forward together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Start Partnership Discussion</span>
                <div className="absolute inset-0 blur-2xl bg-purple-500 opacity-0 group-hover:opacity-50 -z-10" />
              </button>
            </Link>
            <Link href="/company/about">
              <button className="px-10 py-5 bg-white/5 backdrop-blur-md border-2 border-white/20 text-white rounded-xl font-bold text-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300">
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
