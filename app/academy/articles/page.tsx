'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiClock, FiUser, FiArrowRight, FiBookOpen } from 'react-icons/fi';

export default function AcademyArticlesPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const articles = [
    {
      id: 1,
      title: 'Complete Guide to Starting an Online Casino in 2025',
      category: 'Business Strategy',
      author: 'Michael Torres',
      readTime: '12 min read',
      date: 'January 18, 2025',
      excerpt: 'Everything you need to know about launching a successful online casino business from licensing and platform selection to marketing strategies and player retention.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop&q=80',
      featured: true,
    },
    {
      id: 2,
      title: 'Understanding iGaming Licenses: Malta, Curacao, and Beyond',
      category: 'Licensing & Compliance',
      author: 'Sarah Mitchell',
      readTime: '10 min read',
      date: 'January 15, 2025',
      excerpt: 'A comprehensive comparison of the world\'s leading gambling jurisdictions costs, requirements, benefits, and which license is right for your business model.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop&q=80',
      featured: true,
    },
    {
      id: 3,
      title: 'Payment Processing for Online Casinos: Best Practices',
      category: 'Payment Solutions',
      author: 'David Kumar',
      readTime: '8 min read',
      date: 'January 12, 2025',
      excerpt: 'Master payment gateway selection, fraud prevention, cryptocurrency integration, and optimizing deposit/withdrawal success rates for your casino platform.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&q=80',
      featured: true,
    },
    {
      id: 4,
      title: 'Game Provider Integration: Technical Deep Dive',
      category: 'Technical Guides',
      author: 'Alex Petrov',
      readTime: '15 min read',
      date: 'January 10, 2025',
      excerpt: 'Technical walkthrough of game aggregation APIs, seamless single wallet integration, RNG certification, and managing 180+ provider relationships.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 5,
      title: 'Building a Successful Crypto Casino Platform',
      category: 'Crypto Gaming',
      author: 'Elena Rodriguez',
      readTime: '11 min read',
      date: 'January 8, 2025',
      excerpt: 'Explore blockchain integration strategies, multi-chain wallet support, provably fair gaming systems, and capturing the crypto gambling market.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 6,
      title: 'Player Retention Strategies That Actually Work',
      category: 'Marketing & Growth',
      author: 'James Wilson',
      readTime: '9 min read',
      date: 'January 5, 2025',
      excerpt: 'Data-driven retention tactics including personalized bonuses, VIP programs, gamification, and CRM automation that increase lifetime value.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 7,
      title: 'Responsible Gaming: Requirements and Implementation',
      category: 'Compliance',
      author: 'Dr. Anna Berg',
      readTime: '10 min read',
      date: 'January 3, 2025',
      excerpt: 'Implementing effective player protection measures including deposit limits, self-exclusion, reality checks, and meeting regulatory obligations.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 8,
      title: 'White Label vs. Turnkey: Making the Right Choice',
      category: 'Business Strategy',
      author: 'Marcus Chen',
      readTime: '7 min read',
      date: 'December 30, 2024',
      excerpt: 'Detailed comparison of casino platform solutions analyze costs, timeframes, customization levels, and scalability to choose what fits your goals.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
    {
      id: 9,
      title: 'Optimizing Casino Platform Performance and Uptime',
      category: 'Technical Guides',
      author: 'Dmitri Volkov',
      readTime: '13 min read',
      date: 'December 28, 2024',
      excerpt: 'Infrastructure best practices covering CDN setup, database optimization, load balancing, monitoring systems, and achieving 99.9% uptime.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&q=80',
      featured: false,
    },
  ];

  const categories = [
    'All Articles',
    'Business Strategy',
    'Technical Guides',
    'Licensing & Compliance',
    'Marketing & Growth',
    'Payment Solutions',
    'Crypto Gaming',
  ];

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
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              animation: 'pulse 8s ease-in-out infinite',
            }} />
          </div>
        </div>

        {/* Animated particles */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-white/10 mb-8">
            <span className="text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Slotgator Academy
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              iGaming Knowledge
            </span>
            <br />
            <span className="text-white">Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Expert insights, technical guides, and industry best practices for building successful online casino operations
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 text-gray-300 hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-purple-500/30 mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Content
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Must-Read Articles
              </span>
            </h2>
          </div>

          {/* Large Featured Article */}
          <div className="mb-12">
            <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />

              <div className="relative z-10 grid md:grid-cols-2 gap-0 items-center">
                <div className="relative h-96 md:h-full overflow-hidden">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg">
                      {articles[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {articles[0].title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-8 text-sm text-gray-400">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <FiUser className="text-purple-400" />
                      </div>
                      {articles[0].author}
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-3">
                        <FiClock className="text-pink-400" />
                      </div>
                      {articles[0].readTime}
                    </div>
                  </div>
                  <Link href="#read">
                    <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center">
                      <span className="relative z-10 flex items-center">
                        Read Article
                        <FiArrowRight className="ml-2" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {articles.slice(1, 3).map((article) => (
              <div
                key={article.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-6 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center">
                        <FiUser className="mr-2 text-purple-400" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <FiClock className="mr-2 text-pink-400" />
                        {article.readTime}
                      </div>
                    </div>
                    <Link href="#read">
                      <button className="text-purple-400 hover:text-pink-400 font-semibold flex items-center transition-colors">
                        Read More
                        <FiArrowRight className="ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-950/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.slice(3).map((article) => (
              <div
                key={article.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                      <div className="flex items-center">
                        <FiClock className="mr-1 text-purple-400" />
                        {article.readTime}
                      </div>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <Link href="#read">
                      <button className="text-purple-400 hover:text-pink-400 font-semibold flex items-center text-sm transition-colors">
                        Read Article
                        <FiArrowRight className="ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-12 md:p-16 text-center border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 mb-8 mx-auto">
                <FiBookOpen className="text-4xl text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Never Miss an Update
                </span>
              </h2>
              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest articles, industry insights, and platform updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white placeholder-gray-400"
                />
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 whitespace-nowrap">
                  <span className="relative z-10">Subscribe</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Casino?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Apply the knowledge you&apos;ve gained and start building your casino platform today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>
            <Link href="/solutions-compared">
              <button className="px-8 py-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border-2 border-purple-500/30 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:border-purple-500/50 hover:scale-105">
                Compare Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
