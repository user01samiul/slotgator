'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiPlay, FiBookmark, FiEye } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function VideoAcademyPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const videoSeries = [
    {
      id: 1,
      title: 'Casino Platform Fundamentals',
      description: 'Complete beginner-friendly series covering casino platform basics, architecture, and key components',
      videos: 12,
      totalDuration: '3h 45min',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
      level: 'Beginner',
      category: 'Platform Basics',
    },
    {
      id: 2,
      title: 'Licensing & Compliance Masterclass',
      description: 'Step-by-step guidance through obtaining gaming licenses and maintaining regulatory compliance',
      videos: 8,
      totalDuration: '2h 30min',
      thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop&q=80',
      level: 'Intermediate',
      category: 'Legal & Compliance',
    },
    {
      id: 3,
      title: 'Payment Gateway Integration',
      description: 'Technical tutorials on integrating payment processors, managing transactions, and fraud prevention',
      videos: 10,
      totalDuration: '4h 15min',
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&q=80',
      level: 'Advanced',
      category: 'Technical',
    },
  ];

  const featuredVideos = [
    {
      id: 1,
      title: 'How to Choose Between Turnkey and White Label Casino Solutions',
      duration: '18:32',
      views: '45.2K',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80',
      category: 'Business Strategy',
      instructor: 'Michael Torres',
      published: '3 days ago',
    },
    {
      id: 2,
      title: 'Setting Up Your First Live Casino Integration - Complete Walkthrough',
      duration: '25:47',
      views: '38.5K',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&q=80',
      category: 'Technical Tutorial',
      instructor: 'Alex Petrov',
      published: '1 week ago',
    },
    {
      id: 3,
      title: 'Understanding Gambling Licenses: Malta vs Curacao vs Gibraltar',
      duration: '22:15',
      views: '52.1K',
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80',
      category: 'Legal & Compliance',
      instructor: 'Sarah Mitchell',
      published: '1 week ago',
    },
    {
      id: 4,
      title: 'Crypto Casino Setup: Bitcoin, Ethereum & Smart Contract Integration',
      duration: '31:20',
      views: '29.8K',
      thumbnail: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop&q=80',
      category: 'Crypto Gaming',
      instructor: 'Elena Rodriguez',
      published: '2 weeks ago',
    },
    {
      id: 5,
      title: 'Building Effective Player Retention Strategies That Actually Work',
      duration: '19:45',
      views: '41.3K',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
      category: 'Marketing & Growth',
      instructor: 'James Wilson',
      published: '2 weeks ago',
    },
    {
      id: 6,
      title: 'APIgrator Game Aggregation Platform Deep Dive',
      duration: '28:50',
      views: '35.7K',
      thumbnail: 'https://images.unsplash.com/photo-1560472355-109703aa3edc?w=800&h=500&fit=crop&q=80',
      category: 'Platform Features',
      instructor: 'David Kumar',
      published: '3 weeks ago',
    },
    {
      id: 7,
      title: 'Implementing Responsible Gaming Tools and Player Protection',
      duration: '16:35',
      views: '27.4K',
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80',
      category: 'Compliance',
      instructor: 'Dr. Anna Berg',
      published: '3 weeks ago',
    },
    {
      id: 8,
      title: 'Optimizing Casino Platform Performance for 99.9% Uptime',
      duration: '24:18',
      views: '33.9K',
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&q=80',
      category: 'Technical',
      instructor: 'Dmitri Volkov',
      published: '1 month ago',
    },
    {
      id: 9,
      title: 'Complete Guide to Casino Bonus Systems and Promotion Engines',
      duration: '21:42',
      views: '39.2K',
      thumbnail: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&h=500&fit=crop&q=80',
      category: 'Platform Features',
      instructor: 'Marcus Chen',
      published: '1 month ago',
    },
  ];

  const categories = ['All Videos', 'Business Strategy', 'Technical Tutorial', 'Legal & Compliance', 'Marketing & Growth', 'Platform Features', 'Crypto Gaming'];

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
              <span className="text-sm font-semibold tracking-wide uppercase">Video Academy</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Learn from Industry<br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Experts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive video tutorials covering every aspect of launching and operating a successful online casino
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-black/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
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
      </section>

      {/* Video Series */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-400/30 rounded-full mb-4">
              <span className="text-sm font-semibold text-white">Structured Learning</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Video Course Series
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl">
              Complete educational series designed to take you from beginner to expert in specific topics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {videoSeries.map((series) => (
              <div key={series.id} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={series.thumbnail}
                    alt={series.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <FiPlay className="text-white text-2xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
                      {series.level}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <span className="text-xs font-semibold text-purple-400 uppercase">{series.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3 mt-2 group-hover:text-purple-400 transition-colors">
                    {series.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {series.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{series.videos} videos</span>
                    <span>{series.totalDuration}</span>
                  </div>
                  <button className="group/btn relative w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <FiPlay className="mr-2 relative" />
                    <span className="relative">Start Series</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Grid */}
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
            Featured Video Tutorials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <div key={video.id} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <FiPlay className="text-purple-600 text-2xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="px-2 py-1 bg-black/80 backdrop-blur-xl text-white rounded text-sm font-semibold">
                      {video.duration}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-semibold">
                      {video.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span className="font-semibold">{video.instructor}</span>
                    <div className="flex items-center">
                      <FiEye className="mr-1" />
                      {video.views}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{video.published}</span>
                    <button className="text-purple-400 hover:text-pink-400 transition-colors">
                      <FiBookmark className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Demo CTA */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80"
                    alt="Platform demo"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-950/80 to-transparent"></div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Want a Live Platform Demo?
                  </h2>
                  <p className="text-xl mb-8 text-gray-300">
                    Schedule a personalized walkthrough of our casino platform with one of our solution architects
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative">Request Demo</span>
                      </button>
                    </Link>
                    <Link href="/solutions-compared">
                      <button className="px-8 py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:border-white/40 hover:from-white/20 hover:to-white/10 transition-all duration-300">
                        View Solutions
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Recommended Learning Paths
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Follow these curated paths based on your role and goals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                path: 'Entrepreneur Path',
                description: 'For business owners planning to launch their first casino',
                topics: ['Business Strategy', 'Licensing', 'Platform Selection', 'Marketing Basics'],
                duration: '8-10 hours',
              },
              {
                path: 'Technical Path',
                description: 'For developers and technical teams implementing platforms',
                topics: ['API Integration', 'Payment Systems', 'Security', 'Performance Optimization'],
                duration: '12-15 hours',
              },
              {
                path: 'Operations Path',
                description: 'For operators managing day-to-day casino operations',
                topics: ['Player Management', 'Compliance', 'Retention Strategies', 'Analytics'],
                duration: '10-12 hours',
              },
            ].map((path, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">{path.path}</h3>
                  <p className="text-gray-300 mb-4">{path.description}</p>
                  <div className="space-y-2 mb-6">
                    {path.topics.map((topic, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2"></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      <FiClock className="inline mr-1" />
                      {path.duration}
                    </span>
                    <button className="text-purple-400 hover:text-pink-400 font-semibold transition-colors">
                      Start Path →
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
            Ready to Launch Your Casino?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Apply what you&apos;ve learned and start building your casino platform today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Get Started</span>
              </button>
            </Link>
            <Link href="/academy/articles">
              <button className="px-8 py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:border-white/40 hover:from-white/20 hover:to-white/10 transition-all duration-300">
                Browse Articles
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
