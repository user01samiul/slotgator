'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiArrowRight, FiMail } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function CompanyNewsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const newsArticles = [
    {
      id: 1,
      title: 'Slotgator Expands API Integration Portfolio with 20 New Premium Game Providers',
      category: 'Product Launch',
      date: 'January 15, 2025',
      excerpt: 'APIgrator platform now offers access to over 30,000 games from 180+ providers, strengthening our position as the industry\'s most comprehensive game aggregation solution.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
      content: 'We are thrilled to announce the integration of 20 additional premium game providers into our APIgrator platform, bringing our total to 180+ partners and 30,000+ games. This expansion includes top-tier providers such as Red Tiger Gaming, Yggdrasil, and Push Gaming, offering our clients unparalleled content diversity and quality.',
    },
    {
      id: 2,
      title: 'Slotgator Achieves ISO 27001 Security Certification',
      category: 'Company Milestone',
      date: 'December 10, 2024',
      excerpt: 'Our commitment to enterprise-grade security is now officially recognized with ISO 27001 certification, demonstrating our dedication to protecting client and player data.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop&q=80',
      content: 'Slotgator has successfully achieved ISO 27001 certification, the international standard for information security management systems. This milestone validates our comprehensive security protocols and demonstrates our commitment to maintaining the highest standards of data protection for our clients and their players.',
    },
    {
      id: 3,
      title: 'Partnership Announcement: Slotgator Powers Leading European Casino Group',
      category: 'Partnership',
      date: 'November 28, 2024',
      excerpt: 'Major European gaming group selects Slotgator\'s turnkey platform to power their multi-brand expansion across five regulated markets.',
      image: 'https://images.unsplash.com/photo-1560472355-109703aa3edc?w=800&h=500&fit=crop&q=80',
      content: 'We are proud to announce our partnership with a leading European casino operator managing multiple brands across regulated markets. This collaboration demonstrates the scalability and compliance capabilities of our enterprise turnkey solution, supporting their ambitious growth strategy.',
    },
    {
      id: 4,
      title: 'Slotgator Platform Update: AI-Powered Player Analytics Now Available',
      category: 'Product Update',
      date: 'October 22, 2024',
      excerpt: 'New machine learning algorithms provide operators with predictive player insights, enabling personalized gaming experiences and improved retention strategies.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
      content: 'Our latest platform update introduces AI-powered analytics that help operators understand player behavior patterns, predict churn risk, and optimize marketing campaigns. This data-driven approach enables personalized player experiences that drive engagement and lifetime value.',
    },
    {
      id: 5,
      title: 'Slotgator Celebrates 13 Years of Innovation in iGaming Technology',
      category: 'Company Milestone',
      date: 'September 15, 2024',
      excerpt: 'From startup to industry leader reflecting on over a decade of powering successful online casinos worldwide and shaping the future of iGaming.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=500&fit=crop&q=80',
      content: 'This year marks 13 years since Slotgator was founded with a vision to democratize access to enterprise casino technology. Today, we power operations in 50+ countries, serve 500+ clients, and continue innovating to meet the evolving needs of the iGaming industry. Thank you to our clients, partners, and team for making this journey possible.',
    },
    {
      id: 6,
      title: 'New Crypto Casino Solution Supports 50+ Cryptocurrencies',
      category: 'Product Launch',
      date: 'August 8, 2024',
      excerpt: 'Enhanced blockchain integration supports major cryptocurrencies and DeFi tokens, positioning operators for the future of digital payments in online gaming.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop&q=80',
      content: 'Our upgraded crypto casino platform now supports 50+ cryptocurrencies including Bitcoin, Ethereum, USDT, and emerging DeFi tokens. With instant withdrawals, provably fair gaming, and multi-chain wallet integration, operators can capture the rapidly growing crypto gaming market.',
    },
  ];

  const pressReleases = [
    {
      title: 'Slotgator Named "Best B2B Platform Provider" at iGaming Excellence Awards',
      date: 'November 2024',
    },
    {
      title: 'Slotgator Expands Operations with New Development Center in Prague',
      date: 'September 2024',
    },
    {
      title: 'Slotgator Launches Free Demo Program for Prospective Clients',
      date: 'July 2024',
    },
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
            <FiCalendar className="text-white" />
            <span className="text-sm font-semibold text-white">Latest Updates</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Company News &</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Announcements
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed about Slotgator&apos;s latest innovations, partnerships, and industry-leading achievements
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Latest Article */}
          <div className="mb-20 relative z-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-2xl" />
              <div className="relative grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10">
                <div className="relative h-96 md:h-full">
                  <Image
                    src={newsArticles[0].image}
                    alt={newsArticles[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold">
                      {newsArticles[0].category}
                    </span>
                    <div className="flex items-center text-gray-400">
                      <FiCalendar className="mr-2" />
                      <span className="font-medium">{newsArticles[0].date}</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {newsArticles[0].content}
                  </p>
                  <Link href="#contact">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative">Learn More</span>
                      <FiArrowRight className="ml-2 relative group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 blur-2xl bg-purple-500 opacity-0 group-hover:opacity-50 -z-10" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="mb-16 relative z-10">
            <h2 className="text-5xl font-bold text-white mb-16 text-center">
              Recent News
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <div key={article.id} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 border border-white/10 hover:border-white/20">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                  <div className="relative h-56">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold border border-purple-500/30">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <FiCalendar className="mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link href="#contact">
                      <button className="text-purple-400 hover:text-pink-400 font-bold flex items-center transition-colors">
                        Read More
                        <FiArrowRight className="ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <span className="text-sm font-bold text-white">Press Releases</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Recent Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Official announcements and media coverage
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            {pressReleases.map((release, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 rounded-3xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {release.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-gray-400 font-medium">{release.date}</span>
                    <Link href="#contact">
                      <button className="group/btn relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center whitespace-nowrap overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <span className="relative">View</span>
                        <FiArrowRight className="ml-2 relative" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                <FiMail className="text-white text-3xl" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
                Subscribe to our newsletter for the latest platform updates, industry insights, and company news
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-medium"
                />
                <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 whitespace-nowrap overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Subscribe</span>
                  <div className="absolute inset-0 blur-2xl bg-purple-500 opacity-0 group-hover:opacity-50 -z-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover how Slotgator can power your online casino operation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Contact Our Team</span>
                <div className="absolute inset-0 blur-2xl bg-purple-500 opacity-0 group-hover:opacity-50 -z-10" />
              </button>
            </Link>
            <Link href="/company/about">
              <button className="px-10 py-5 border-2 border-white/20 text-white rounded-xl font-bold text-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 bg-white/5 backdrop-blur-md">
                About Slotgator
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
