'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiMessageCircle, FiBook } from 'react-icons/fi';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'What is Slotgator and what services do you provide?',
          answer: 'Slotgator is an enterprise B2B iGaming solutions provider specializing in turnkey and white-label casino platforms. We offer complete casino solutions including game aggregation (30,000+ games from 180+ providers), payment integration (150+ methods), licensing support, sportsbook integration, and 24/7 technical support. Our platforms power online casinos in over 50 countries worldwide.',
        },
        {
          question: 'What is the difference between Turnkey and White Label solutions?',
          answer: 'Turnkey Casino gives you complete platform ownership with your own gaming license, full code access, and unlimited customization. White Label operates under our license with shared infrastructure, offering faster market entry (1 month vs 2-3 months) and lower initial investment. Turnkey is ideal for established operators seeking full control, while White Label suits entrepreneurs wanting quick launch with minimal technical complexity.',
        },
        {
          question: 'How long does it take to launch a casino platform?',
          answer: 'Launch timelines vary by solution: White Label casinos can be live in 1 month, Casino Builder in 1-2 months, while Turnkey and Crypto Casino solutions typically require 2-3 months. This includes platform setup, game integration, payment gateway configuration, design customization, and testing. We provide a detailed project timeline during consultation.',
        },
      ],
    },
    {
      category: 'Platform & Technology',
      questions: [
        {
          question: 'What games and providers are available on your platform?',
          answer: 'Our APIgrator game aggregation platform provides access to 30,000+ games from 180+ premium providers including NetEnt, Microgaming, Pragmatic Play, Evolution Gaming, Playtech, and many more. Game categories include slots, live dealers, table games, bingo, virtual sports, and instant win games. All games are integrated through our unified API for seamless management.',
        },
        {
          question: 'Is your platform mobile-friendly?',
          answer: 'Yes, all our solutions are fully responsive and mobile-optimized. Players can access games on any device desktop, tablet, or smartphone without downloading apps. We also support native iOS and Android app development for operators who want branded mobile applications.',
        },
        {
          question: 'What payment methods do you support?',
          answer: 'We integrate 150+ payment methods including credit/debit cards (Visa, Mastercard), e-wallets (Skrill, Neteller, PayPal), bank transfers, cryptocurrencies (Bitcoin, Ethereum, USDT, and 50+ altcoins), local payment methods per region, and mobile payments. Payment routing, fraud prevention, and multi-currency support are built-in.',
        },
        {
          question: 'How secure is your platform?',
          answer: 'Security is our top priority. We implement bank-level encryption (SSL/TLS), ISO 27001 certified infrastructure, PCI DSS compliance for payment processing, DDoS protection, two-factor authentication, fraud detection systems, and regular security audits. Our platform guarantees 99.9% uptime with 24/7 monitoring and instant failover systems.',
        },
      ],
    },
    {
      category: 'Licensing & Compliance',
      questions: [
        {
          question: 'Do I need a gaming license to operate an online casino?',
          answer: 'Yes, a valid gaming license is required to legally operate an online casino in most jurisdictions. With our Turnkey and Crypto Casino solutions, you obtain your own license. With White Label, you operate under our existing license through a sublicense agreement. We provide advisory services to help you navigate the licensing process in jurisdictions like Curacao, Malta, Gibraltar, and others.',
        },
        {
          question: 'Which jurisdictions do you support?',
          answer: 'We support casino operations in 50+ countries and hold certifications for Lithuania and Georgia. Our platforms are designed to comply with major regulatory frameworks including MGA (Malta), Curacao eGaming, UKGC guidelines, and others. We provide localization, KYC/AML tools, responsible gaming features, and geo-blocking to meet specific regulatory requirements.',
        },
        {
          question: 'How do you handle responsible gaming and player protection?',
          answer: 'Our platform includes comprehensive responsible gaming tools: deposit limits, loss limits, session time limits, self-exclusion options, reality checks, age verification, and activity monitoring. We also integrate with third-party verification services like GamCare and BeGambleAware, and provide detailed reporting for regulatory compliance.',
        },
      ],
    },
    {
      category: 'Pricing & Business Model',
      questions: [
        {
          question: 'What are your pricing models?',
          answer: 'Pricing varies by solution type. White Label typically operates on a revenue share model (percentage of GGR) with lower upfront costs. Turnkey solutions involve a one-time platform fee plus monthly hosting/support fees, giving you full ownership. Crypto Casino and Casino Builder have their own pricing structures. Contact us for a customized quote based on your specific requirements, expected volume, and desired features.',
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No hidden fees. We provide complete pricing transparency including: platform license fees, monthly hosting/support costs, game provider integration fees, payment gateway transaction fees, and optional add-ons like custom development. All costs are clearly outlined in your contract. Some third-party services (certain game providers, payment processors) charge their own fees, which we disclose upfront.',
        },
        {
          question: 'What is the expected ROI and how long to profitability?',
          answer: 'ROI depends on many factors: target market, marketing budget, player acquisition strategy, and operational efficiency. Most clients achieve profitability within 6-12 months of launch. We provide business planning support, market analysis, and ongoing optimization guidance to maximize your success. Our account managers work with you to set realistic revenue targets and KPIs.',
        },
      ],
    },
    {
      category: 'Support & Customization',
      questions: [
        {
          question: 'What kind of technical support do you provide?',
          answer: 'We offer 24/7 dedicated technical support through multiple channels: live chat, email, phone, and ticketing system. Each client gets a dedicated account manager and access to our technical team. Support includes: platform maintenance, bug fixes, game integration assistance, payment troubleshooting, performance optimization, and regulatory compliance guidance. SLA response times are guaranteed in your contract.',
        },
        {
          question: 'Can I customize the platform design and features?',
          answer: 'Yes! Turnkey and Crypto Casino solutions offer unlimited customization change anything in the codebase. White Label provides template-based customization (colors, logos, layouts). Casino Builder offers drag-and-drop design freedom without coding. We also provide custom development services for unique features, API integrations, and specialized functionality at additional cost.',
        },
        {
          question: 'Do you provide marketing and player acquisition support?',
          answer: 'Yes, we offer comprehensive marketing support: affiliate management systems, bonus and promotion engines, CRM and player retention tools, SEO optimization, and integration with marketing platforms. While we don\'t run marketing campaigns directly, we provide the tools and strategic guidance. We can also connect you with trusted marketing agencies specializing in iGaming.',
        },
      ],
    },
    {
      category: 'Integration & Migration',
      questions: [
        {
          question: 'Can you migrate my existing casino to your platform?',
          answer: 'Yes, we provide full migration services from other platforms. Our team handles: player database transfer, game history migration, bonus and wallet balance transfers, payment method re-integration, and design replication. We ensure zero downtime during migration and maintain complete data integrity. Migration complexity and cost depend on your current platform and data volume.',
        },
        {
          question: 'How easy is it to integrate third-party tools and services?',
          answer: 'Our platform is API-first and designed for easy integration. We support: payment gateway APIs, CRM systems, marketing automation tools, analytics platforms (Google Analytics, etc.), affiliate tracking systems, and custom integrations. Our technical team provides API documentation and integration support. Most standard integrations take 1-2 weeks.',
        },
        {
          question: 'Do you offer a demo or trial period?',
          answer: 'Yes! We provide live platform demos during consultation calls so you can see the backend management system, game library, and player interface in action. For serious prospects, we can arrange a limited trial period or sandbox environment to test features. Contact our sales team to schedule a personalized demo tailored to your business needs.',
        },
      ],
    },
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
            <FiBook className="text-white" />
            <span className="text-sm font-semibold text-white">Help Center</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Questions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Everything you need to know about our casino platform solutions and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="relative py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 relative z-10">
              <h2 className="text-4xl font-bold text-white mb-8 pb-4 border-b-4 border-gradient-to-r from-purple-600 to-pink-600" style={{
                borderImage: 'linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119)) 1',
              }}>
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="relative z-10 w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <span className="text-xl font-bold text-white pr-8 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {faq.question}
                        </span>
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          isOpen
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                            : 'bg-white/10 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600'
                        }`}>
                          {isOpen ? (
                            <FiChevronUp className="text-white text-xl" />
                          ) : (
                            <FiChevronDown className={`text-xl transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-8 pb-8 relative z-10">
                          <div className="pt-4 border-t border-white/10">
                            <p className="text-lg text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions - Modern Card */}
      <section className="relative py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 md:p-16 text-center border border-white/10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                <FiMessageCircle className="text-white text-3xl" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Our team of experts is ready to answer all your questions and provide personalized guidance for your casino project
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
                  <button className="px-10 py-5 bg-white/5 backdrop-blur-md border-2 border-white/20 text-white rounded-xl font-bold text-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                    Learn More About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links - Gradient Cards */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-white mb-16 relative z-10">
            Explore Our Solutions
          </h2>
          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {[
              { title: 'Turnkey Casino', href: '/solutions/turkeyonlinecasino', gradient: 'from-purple-500 to-purple-600' },
              { title: 'White Label', href: '/solutions/whitelabelcasino', gradient: 'from-pink-500 to-pink-600' },
              { title: 'Crypto Casino', href: '/solutions/cryptocasino', gradient: 'from-blue-500 to-blue-600' },
              { title: 'Solutions Compared', href: '/solutions-compared', gradient: 'from-green-500 to-green-600' },
            ].map((link, index) => (
              <Link key={index} href={link.href}>
                <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 rounded-3xl transition-all duration-500 border border-white/10 hover:border-white/20 text-center overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <h3 className="relative z-10 text-xl font-bold text-white transition-colors duration-500">
                    {link.title}
                  </h3>
                </div>
              </Link>
            ))}
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
