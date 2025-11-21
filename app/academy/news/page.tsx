'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiArrowRight, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function AcademyNewsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const newsItems = [
    {
      id: 1,
      title: 'US Online Gambling Market Surpasses $10 Billion in 2024',
      category: 'Market Analysis',
      region: 'North America',
      date: 'January 19, 2025',
      excerpt: 'The US online gambling market continues explosive growth as more states legalize iGaming. Industry experts predict $15B revenue by 2026.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=500&fit=crop&q=80',
      featured: true,
    },
    {
      id: 2,
      title: 'Brazil Finalizes iGaming Regulations, Market Opens Q2 2025',
      category: 'Regulatory Update',
      region: 'Latin America',
      date: 'January 18, 2025',
      excerpt: 'Brazilian government announces final gaming regulations. Licensed operators can begin accepting players from April 2025, potentially the largest LatAm market.',
      image: 'https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?w=800&h=500&fit=crop&q=80',
      featured: true,
    },
    {
      id: 3,
      title: 'Evolution Gaming Launches Lightning Roulette XXXtreme',
      category: 'Product Launch',
      region: 'Global',
      date: 'January 17, 2025',
      excerpt: 'Industry leader Evolution debuts new live casino variant with multipliers up to 2000x. Early adoption shows 40% higher player engagement.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&q=80',
      featured: true,
    },
    {
      id: 4,
      title: 'Germany Tightens Online Casino Advertising Rules',
      category: 'Regulatory Update',
      region: 'Europe',
      date: 'January 16, 2025',
      excerpt: 'New advertising restrictions take effect February 1st including TV broadcast limits and social media targeting guidelines.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 5,
      title: 'Crypto Gaming Transactions Hit $50 Billion Annually',
      category: 'Crypto & Blockchain',
      region: 'Global',
      date: 'January 15, 2025',
      excerpt: 'Blockchain gaming platforms report record transaction volumes as cryptocurrency adoption in online gambling accelerates.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 6,
      title: 'Ontario Reports $600M Online Casino Revenue in Q4',
      category: 'Market Analysis',
      region: 'North America',
      date: 'January 14, 2025',
      excerpt: 'Canadian province sees 25% quarter-over-quarter growth as regulated market matures and player adoption increases.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 7,
      title: 'Pragmatic Play Signs Multi-Year Partnership with 888 Holdings',
      category: 'Industry Partnerships',
      region: 'Global',
      date: 'January 13, 2025',
      excerpt: 'Major game provider secures exclusive content distribution deal with leading operator across all European markets.',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 8,
      title: 'UK Gambling Commission Proposes Stricter KYC Requirements',
      category: 'Regulatory Update',
      region: 'Europe',
      date: 'January 12, 2025',
      excerpt: 'Consultation period opens for enhanced identity verification and affordability checks aimed at player protection.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 9,
      title: 'AI-Powered Personalization Drives 35% Engagement Increase',
      category: 'Technology & Innovation',
      region: 'Global',
      date: 'January 11, 2025',
      excerpt: 'New study shows machine learning algorithms for bonus targeting and game recommendations significantly boost player lifetime value.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 10,
      title: 'Asian Gaming Market to Reach $40B by 2027',
      category: 'Market Analysis',
      region: 'Asia',
      date: 'January 10, 2025',
      excerpt: 'Industry report forecasts rapid expansion across Philippines, Japan, and emerging Southeast Asian markets.',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 11,
      title: 'Malta Gaming Authority Updates Technical Standards',
      category: 'Regulatory Update',
      region: 'Europe',
      date: 'January 9, 2025',
      excerpt: 'MGA publishes new RNG testing requirements and responsible gaming tool specifications effective March 2025.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 12,
      title: 'Mobile Gaming Now Accounts for 75% of All Casino Sessions',
      category: 'Technology & Innovation',
      region: 'Global',
      date: 'January 8, 2025',
      excerpt: 'Latest data confirms smartphone dominance in online gambling as desktop usage continues steady decline.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
  ];

  const categories = ['All News', 'Regulatory Update', 'Market Analysis', 'Product Launch', 'Crypto & Blockchain', 'Technology & Innovation', 'Industry Partnerships'];
  const regions = ['Global', 'Europe', 'North America', 'Asia', 'Latin America'];

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
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <span className="text-sm font-semibold tracking-wide uppercase">Industry News</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Global iGaming<br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                News & Updates
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay informed with the latest regulatory changes, market trends, and industry developments worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-black/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-400 mb-2">Categories</p>
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    index === 0
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-400 mb-2">Regions</p>
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {regions.map((region, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10 transition-all"
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-400/30 rounded-full mb-4">
              <span className="text-sm font-semibold text-white">Breaking News</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Top Stories Today
            </h2>
          </div>

          {/* Large Featured */}
          <div className="mb-12">
            <div className="group relative grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
              <div className="relative h-96 md:h-full overflow-hidden">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
                    {newsItems[0].category}
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-xl text-white rounded-full text-sm font-semibold flex items-center">
                    <FiGlobe className="mr-1" />
                    {newsItems[0].region}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors">
                  {newsItems[0].title}
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {newsItems[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <FiCalendar className="mr-2" />
                    {newsItems[0].date}
                  </div>
                </div>
                <Link href="#read">
                  <button className="group/btn relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 overflow-hidden flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <span className="relative">Read Full Story</span>
                    <FiArrowRight className="ml-2 relative group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.slice(1, 3).map((news) => (
              <div key={news.id} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" />
                      {news.date}
                    </div>
                    <div className="flex items-center">
                      <FiGlobe className="mr-1" />
                      {news.region}
                    </div>
                  </div>
                  <Link href="#read">
                    <button className="text-purple-400 hover:text-pink-400 font-semibold flex items-center transition-colors">
                      Read More
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All News Grid */}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Recent News
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.slice(3).map((news) => (
              <div key={news.id} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-semibold">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" />
                      {news.date}
                    </div>
                    <span>•</span>
                    <span>{news.region}</span>
                  </div>
                  <Link href="#read">
                    <button className="text-purple-400 hover:text-pink-400 font-semibold flex items-center text-sm transition-colors">
                      Read Article
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights CTA */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="group relative bg-gradient-to-br from-purple-950 via-pink-950 to-purple-950 rounded-3xl p-8 md:p-12 text-center border border-white/10 overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-2xl" />
            <div className="relative z-10">
              <FiTrendingUp className="text-6xl mx-auto mb-6 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Get Weekly Market Insights
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Subscribe to our newsletter for curated industry news, regulatory updates, and market analysis
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button className="group/btn relative px-8 py-3 bg-white text-purple-600 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap overflow-hidden hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <span className="relative group-hover/btn:text-white transition-colors">Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enter the Market?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Launch your casino operation with our enterprise-grade platform solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Get Started</span>
              </button>
            </Link>
            <Link href="/solutions-compared">
              <button className="px-8 py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:border-white/40 hover:from-white/20 hover:to-white/10 transition-all duration-300">
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
