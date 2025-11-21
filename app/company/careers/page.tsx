'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiClock, FiBriefcase, FiArrowRight, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';

export default function CareersPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Limassol, Cyprus',
      type: 'Full-time',
      description: 'Build and scale our enterprise casino platform using modern web technologies',
    },
    {
      title: 'iGaming Product Manager',
      department: 'Product',
      location: 'Remote (EU)',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our game aggregation platform',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Prague, Czech Republic',
      type: 'Full-time',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines',
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Remote (Global)',
      type: 'Full-time',
      description: 'Expand our client base and forge strategic partnerships in new markets',
    },
    {
      title: 'QA Automation Engineer',
      department: 'Engineering',
      location: 'Limassol, Cyprus',
      type: 'Full-time',
      description: 'Design and implement automated testing frameworks for our platform',
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote (EU)',
      type: 'Full-time',
      description: 'Ensure client satisfaction and drive platform adoption',
    },
  ];

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', desc: 'Market-leading compensation packages' },
    { icon: '🏖️', title: 'Flexible PTO', desc: '25+ days paid vacation annually' },
    { icon: '🏥', title: 'Health Insurance', desc: 'Premium health coverage for you and family' },
    { icon: '📚', title: 'Learning Budget', desc: 'Annual allowance for courses and conferences' },
    { icon: '🏡', title: 'Remote Work', desc: 'Hybrid or fully remote options available' },
    { icon: '🚀', title: 'Career Growth', desc: 'Clear advancement paths and mentorship' },
    { icon: '💻', title: 'Latest Tech', desc: 'Top-tier equipment and tools' },
    { icon: '🎯', title: 'Impact', desc: 'Work on products used by millions' },
  ];

  const values = [
    {
      title: 'Innovation First',
      desc: 'We encourage creative thinking and reward bold ideas that push the industry forward',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Ownership Culture',
      desc: 'Take ownership of your projects and see them through from concept to launch',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Work-Life Balance',
      desc: 'We believe in sustainable performance and support flexible working arrangements',
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      title: 'Continuous Learning',
      desc: 'Access to training, conferences, and mentorship programs to accelerate your growth',
      gradient: 'from-pink-500 to-rose-500',
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

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-full border border-white/20 mb-8">
              <span className="text-sm font-semibold text-white">Join Our Team</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Build the Future of</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                iGaming Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Join a talented team of innovators shaping the next generation of online casino platforms
            </p>
            <Link href="#positions">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center">
                  View Open Positions
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-6">
                  <span className="text-sm font-bold text-white">Why Slotgator</span>
                </div>
                <h2 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Where Talent Meets Opportunity
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  At Slotgator, you&apos;ll work alongside industry veterans and rising stars on technology that powers online casinos in over 50 countries. We&apos;re building the infrastructure of tomorrow&apos;s iGaming industry and we need exceptional people to make it happen.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  We offer more than just a job: we provide a platform to grow your career, work with cutting-edge technology, and make a real impact on a global scale. Our culture celebrates innovation, rewards performance, and supports work-life balance.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                    <div className="relative">
                      <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">150+</p>
                      <p className="text-gray-300 font-semibold">Team Members</p>
                    </div>
                  </div>
                  <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                    <div className="relative">
                      <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">30+</p>
                      <p className="text-gray-300 font-semibold">Countries Represented</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                    alt="Team collaboration"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-6">
                <span className="text-sm font-bold text-white">Our Culture</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                What Defines Us
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our values shape how we work, collaborate, and build products that make a difference
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 hover:from-white/10 hover:to-white/5 transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-6">
                <span className="text-sm font-bold text-white">Perks & Benefits</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                We Invest in Your Success
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive benefits designed to support your professional growth and personal well-being
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 text-center">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-6">
                <span className="text-sm font-bold text-white">Current Openings</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Join Our Growing Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We&apos;re actively hiring talented professionals across multiple departments and locations
              </p>
            </div>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                  <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {position.title}
                      </h3>
                      <p className="text-lg text-gray-400 mb-6">{position.description}</p>
                      <div className="flex flex-wrap gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                          <FiBriefcase className="text-purple-400" />
                          <span className="font-medium">{position.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin className="text-pink-400" />
                          <span className="font-medium">{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiClock className="text-blue-400" />
                          <span className="font-medium">{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 flex items-center whitespace-nowrap overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <span className="relative">Apply Now</span>
                        <FiArrowRight className="ml-2 relative group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Our Hiring Process</h2>
              <p className="text-xl text-gray-400">Transparent, respectful, and designed to find the right fit</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Apply', desc: 'Submit your application through our careers page', gradient: 'from-purple-500 to-purple-600' },
                { step: '2', title: 'Screen', desc: 'Initial review and phone screening with HR', gradient: 'from-pink-500 to-pink-600' },
                { step: '3', title: 'Interview', desc: 'Technical and cultural fit interviews with team', gradient: 'from-blue-500 to-blue-600' },
                { step: '4', title: 'Offer', desc: 'Receive offer and join the Slotgator family', gradient: 'from-green-500 to-green-600' },
              ].map((stage, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stage.gradient} text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                    {stage.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{stage.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Don&apos;t See the Right Role?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-400">
              We&apos;re always looking for exceptional talent. Send us your CV and tell us how you can contribute to our mission.
            </p>
            <Link href="/contact">
              <button className="group relative px-10 py-5 bg-white text-black rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative group-hover:text-white transition-colors duration-300">Get in Touch</span>
              </button>
            </Link>
          </div>
        </section>
      </div>

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
