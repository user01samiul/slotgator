'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiSearch, FiCheck, FiX, FiAlertCircle, FiGlobe, FiDollarSign, FiClock } from 'react-icons/fi';

export default function RegulationsPage() {
  const [isClient, setIsClient] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const jurisdictions = [
    {
      country: 'Malta',
      region: 'Europe',
      status: 'Fully Licensed',
      authority: 'Malta Gaming Authority (MGA)',
      licenseCost: '€25,000 - €30,000',
      processingTime: '4-6 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Premier European jurisdiction with excellent reputation. Requires strong compliance, financial stability, and local presence.',
      taxRate: '5% on gross gaming revenue',
      flag: '🇲🇹',
    },
    {
      country: 'Curacao',
      region: 'Caribbean',
      status: 'Fully Licensed',
      authority: 'Curacao eGaming',
      licenseCost: '$10,000 - $20,000',
      processingTime: '6-8 weeks',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Cost-effective licensing option popular with startup operators. Streamlined application process and competitive pricing.',
      taxRate: 'Fixed annual fee',
      flag: '🇨🇼',
    },
    {
      country: 'United Kingdom',
      region: 'Europe',
      status: 'Fully Licensed',
      authority: 'UK Gambling Commission (UKGC)',
      licenseCost: '£10,000 - £100,000+',
      processingTime: '8-12 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Highly regulated market with strict compliance requirements. Largest regulated European market with high player trust.',
      taxRate: '21% Point of Consumption Tax',
      flag: '🇬🇧',
    },
    {
      country: 'Gibraltar',
      region: 'Europe',
      status: 'Fully Licensed',
      authority: 'Gibraltar Gambling Commissioner',
      licenseCost: '£85,000 - £100,000',
      processingTime: '3-4 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Reputable jurisdiction with strong regulatory framework. Favorable tax environment and UK market access.',
      taxRate: '1% on turnover (capped at £425,000)',
      flag: '🇬🇮',
    },
    {
      country: 'Estonia',
      region: 'Europe',
      status: 'Fully Licensed',
      authority: 'Estonian Tax and Customs Board',
      licenseCost: '€50,000',
      processingTime: '2-3 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'EU jurisdiction with competitive licensing fees. Growing popularity among operators seeking EU licensing.',
      taxRate: '5% on GGR',
      flag: '🇪🇪',
    },
    {
      country: 'Isle of Man',
      region: 'Europe',
      status: 'Fully Licensed',
      authority: 'Isle of Man Gambling Supervision Commission',
      licenseCost: '£50,000 - £75,000',
      processingTime: '3-5 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Well-established jurisdiction with strong reputation. UK market access and robust regulatory framework.',
      taxRate: '0.1% - 1.5% on GGR',
      flag: '🇮🇲',
    },
    {
      country: 'Ontario (Canada)',
      region: 'North America',
      status: 'Fully Licensed',
      authority: 'Alcohol and Gaming Commission of Ontario (AGCO)',
      licenseCost: 'CAD $100,000+',
      processingTime: '6-9 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Newly regulated Canadian market with significant potential. Requires local presence and strong compliance.',
      taxRate: '20% on gaming revenue',
      flag: '🇨🇦',
    },
    {
      country: 'Sweden',
      region: 'Europe',
      status: 'Fully Licensed',
      authority: 'Spelinspektionen',
      licenseCost: 'SEK 250,000 - 400,000',
      processingTime: '4-6 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Re-regulated Nordic market with strong player protections. Mandatory responsible gaming measures.',
      taxRate: '18% on GGR',
      flag: '🇸🇪',
    },
    {
      country: 'Brazil',
      region: 'Latin America',
      status: 'Opening 2025',
      authority: 'Ministry of Finance',
      licenseCost: '$5M - $10M (estimated)',
      processingTime: 'TBD',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Massive market opening Q2 2025. Regulations finalized, licensing process to begin soon. Huge potential.',
      taxRate: '12% on GGR (proposed)',
      flag: '🇧🇷',
    },
    {
      country: 'United States',
      region: 'North America',
      status: 'State-by-State',
      authority: 'Various State Regulators',
      licenseCost: 'Varies ($100K - $1M+)',
      processingTime: 'Varies (3-12 months)',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Fragmented market with state-level regulation. NJ, PA, MI, WV, CT leading states. Ongoing expansion.',
      taxRate: '12% - 54% (varies by state)',
      flag: '🇺🇸',
    },
    {
      country: 'Denmark',
      region: 'Europe',
      status: 'Fully Licensed',
      authority: 'Spillemyndigheden',
      licenseCost: 'DKK 250,000+',
      processingTime: '4-6 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Mature Nordic market with strict advertising rules. Requires local presence and Danish language support.',
      taxRate: '20% on GGR',
      flag: '🇩🇰',
    },
    {
      country: 'Philippines',
      region: 'Asia',
      status: 'Fully Licensed',
      authority: 'Philippine Amusement and Gaming Corporation (PAGCOR)',
      licenseCost: '$40,000+',
      processingTime: '3-4 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Popular Asian jurisdiction for offshore operations. Lower costs and faster processing than European licenses.',
      taxRate: 'Various structures available',
      flag: '🇵🇭',
    },
    {
      country: 'Germany',
      region: 'Europe',
      status: 'Restricted',
      authority: 'Gemeinsame Glücksspielbehörde der Länder (GGL)',
      licenseCost: '€50,000 - €100,000',
      processingTime: '6-12 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Heavily restricted market with strict advertising and deposit limits (€1,000/month). Limited slots allowed.',
      taxRate: '5.3% on stakes',
      flag: '🇩🇪',
    },
    {
      country: 'Netherlands',
      region: 'Europe',
      status: 'Fully Licensed',
      authority: 'Kansspelautoriteit (KSA)',
      licenseCost: '€100,000+',
      processingTime: '6-9 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Re-regulated market since 2021. Strict compliance and advertising restrictions. Growing market.',
      taxRate: '29.5% on GGR',
      flag: '🇳🇱',
    },
    {
      country: 'Romania',
      region: 'Europe',
      status: 'Fully Licensed',
      authority: 'National Gambling Office (ONJN)',
      licenseCost: '€100,000+',
      processingTime: '4-6 months',
      onlineAllowed: true,
      sportsAllowed: true,
      casinoAllowed: true,
      details: 'Emerging EU market with growing online presence. Requires local company and banking presence.',
      taxRate: '2% on turnover + 16% income tax',
      flag: '🇷🇴',
    },
    {
      country: 'Japan',
      region: 'Asia',
      status: 'Limited',
      authority: 'Various (Evolving)',
      licenseCost: 'TBD',
      processingTime: 'TBD',
      onlineAllowed: false,
      sportsAllowed: false,
      casinoAllowed: false,
      details: 'Land-based casinos approved but online gambling remains prohibited. Future market potential.',
      taxRate: 'N/A (Online prohibited)',
      flag: '🇯🇵',
    },
  ];

  const regions = ['All', 'Europe', 'North America', 'Latin America', 'Asia', 'Caribbean'];

  const filteredJurisdictions = jurisdictions.filter((j) => {
    const matchesRegion = selectedRegion === 'All' || j.region === selectedRegion;
    const matchesSearch = j.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          j.authority.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Fully Licensed':
        return 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30';
      case 'Opening 2025':
        return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30';
      case 'State-by-State':
        return 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border border-yellow-500/30';
      case 'Restricted':
        return 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border border-orange-500/30';
      case 'Limited':
        return 'bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-400 border border-red-500/30';
      default:
        return 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-400 border border-gray-500/30';
    }
  };

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
              Global Regulations Database
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Worldwide Gambling
            </span>
            <br />
            <span className="text-white">Regulations Map</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive guide to gaming licenses, regulatory requirements, and compliance across 50+ jurisdictions
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="sticky top-0 z-40 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-xl" />
              <input
                type="text"
                placeholder="Search jurisdictions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 text-white placeholder-gray-400 transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                    selectedRegion === region
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 text-gray-300 hover:border-white/20'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdictions Grid */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 flex items-center justify-between">
            <p className="text-gray-300">
              Showing <span className="font-bold text-purple-400 text-xl">{filteredJurisdictions.length}</span> jurisdictions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredJurisdictions.map((jurisdiction, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{jurisdiction.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{jurisdiction.country}</h3>
                        <p className="text-sm text-purple-400 font-medium">{jurisdiction.region}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(jurisdiction.status)}`}>
                      {jurisdiction.status}
                    </span>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Regulatory Authority</p>
                    <p className="text-white font-medium">{jurisdiction.authority}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="text-center">
                      {jurisdiction.onlineAllowed ? (
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 mb-2">
                          <FiCheck className="text-green-400 text-xl" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 mb-2">
                          <FiX className="text-red-400 text-xl" />
                        </div>
                      )}
                      <p className="text-xs text-gray-400">Online Casino</p>
                    </div>
                    <div className="text-center">
                      {jurisdiction.sportsAllowed ? (
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 mb-2">
                          <FiCheck className="text-green-400 text-xl" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 mb-2">
                          <FiX className="text-red-400 text-xl" />
                        </div>
                      )}
                      <p className="text-xs text-gray-400">Sports Betting</p>
                    </div>
                    <div className="text-center">
                      {jurisdiction.casinoAllowed ? (
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 mb-2">
                          <FiCheck className="text-green-400 text-xl" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 mb-2">
                          <FiX className="text-red-400 text-xl" />
                        </div>
                      )}
                      <p className="text-xs text-gray-400">Casino Games</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {jurisdiction.details}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                          <FiDollarSign className="text-purple-400 text-sm" />
                        </div>
                        <span className="text-sm">License Cost</span>
                      </div>
                      <span className="font-semibold text-white">{jurisdiction.licenseCost}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center mr-3">
                          <FiClock className="text-pink-400 text-sm" />
                        </div>
                        <span className="text-sm">Processing Time</span>
                      </div>
                      <span className="font-semibold text-white">{jurisdiction.processingTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
                          <FiGlobe className="text-blue-400 text-sm" />
                        </div>
                        <span className="text-sm">Tax Rate</span>
                      </div>
                      <span className="font-semibold text-white">{jurisdiction.taxRate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-yellow-500/30">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-10 blur-2xl" />

            <div className="relative z-10 flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <FiAlertCircle className="text-yellow-400 text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Important Licensing Information
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-yellow-400">Regulations Change Frequently:</strong> Gaming laws and licensing requirements are subject to change. Always verify current requirements with the relevant regulatory authority.
                  </p>
                  <p>
                    <strong className="text-yellow-400">Professional Legal Advice Required:</strong> This information is for general guidance only. Consult with specialized gambling law attorneys and compliance experts before pursuing any license.
                  </p>
                  <p>
                    <strong className="text-yellow-400">Hidden Costs:</strong> Published licensing fees don't include legal fees, compliance costs, bond requirements, or ongoing regulatory fees which can be substantial.
                  </p>
                  <p>
                    <strong className="text-yellow-400">Market Access vs. License Location:</strong> Holding a license in one jurisdiction doesn't automatically grant market access to other regions. Research target market requirements carefully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Quick Facts */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Licensing Quick Facts
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Key insights to guide your licensing decisions
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Most Affordable',
                subtitle: 'Curacao & Philippines',
                description: 'Starting from $10K-$40K with faster processing times and lower ongoing costs.',
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Most Prestigious',
                subtitle: 'UK, Malta & Gibraltar',
                description: 'Premium European licenses with excellent reputation but higher costs and stricter requirements.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Fastest Processing',
                subtitle: 'Estonia & Curacao',
                description: 'Get licensed in 6-12 weeks vs. 6-12 months for traditional European jurisdictions.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Largest Markets',
                subtitle: 'US, UK & Brazil',
                description: 'Highest revenue potential but most complex regulatory environments and compliance costs.',
                gradient: 'from-orange-500 to-red-500',
              },
              {
                title: 'Best Tax Rates',
                subtitle: 'Isle of Man & Gibraltar',
                description: 'Low tax jurisdictions with rates as low as 0.1%-1% on GGR with favorable caps.',
                gradient: 'from-yellow-500 to-orange-500',
              },
              {
                title: 'Emerging Markets',
                subtitle: 'Brazil, Netherlands & Ontario',
                description: 'Recently regulated or opening markets with significant growth opportunities.',
                gradient: 'from-pink-500 to-rose-500',
              },
            ].map((fact, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${fact.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${fact.gradient} mb-4`}>
                    <div className="w-8 h-8" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${fact.gradient} bg-clip-text text-transparent`}>
                    {fact.title}
                  </h3>
                  <p className="font-semibold text-white mb-3 text-lg">{fact.subtitle}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{fact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing Consultation CTA */}
      <section className="py-20 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-12 md:p-16 text-center border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Need Help Choosing the Right License?
                </span>
              </h2>
              <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our licensing experts can guide you through the entire process and help you select the optimal jurisdiction for your business model
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                    <span className="relative z-10">Schedule Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Link>
                <Link href="/academy/articles">
                  <button className="px-8 py-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:border-purple-500/50 hover:scale-105">
                    Read Licensing Articles
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Licensing Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            We provide full licensing support and guidance as part of our turnkey and white label solutions
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
                View Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
