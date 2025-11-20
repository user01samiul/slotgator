'use client';

import { FaPhone, FaEnvelope, FaTelegram, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaChevronRight } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const integrations = [
    { name: 'Game providers', href: '/game-providers' },
    { name: 'Slots', href: '/integrations/slots' },
    { name: 'Live dealers', href: '/integrations/livedealers' },
    { name: 'Bingo', href: '/integrations/bingo' },
    { name: 'Virtual sports', href: '/integrations/virtualsports' },
  ];

  const solutions = [
    { name: 'Turnkey online casino', href: '/solutions/turkeyonlinecasino' },
    { name: 'White label casino', href: '/solutions/whitelabelcasino' },
    { name: 'Crypto casino', href: '/solutions/cryptocasino' },
    { name: 'Casino builder', href: '/solutions/casinobuilder' },
    { name: 'Solutions compared', href: '/solutions-compared' },
  ];

  const products = [
    { name: 'Game aggregator', href: '/products/gameaggregator' },
    { name: 'Sportsbook integration', href: '/products/sportsintegration' },
    { name: 'Telegram casino', href: '/products/telegramcasino' },
    { name: 'Payment systems', href: '/products/paymentsystems' },
    { name: 'Affiliate management', href: '/products/affiliatemanagement' },
    { name: 'Bonus system', href: '/products/bonussystem' },
  ];

  const licensing = [
    { name: 'Advisory services', href: '/products/advisoryservices' },
    { name: 'Web Hosting', href: '/products/casinowebhosting' },
  ];

  const academy = [
    { name: 'Analytical articles', href: '/academy/articles' },
    { name: 'Industry news', href: '/academy/news' },
    { name: 'Video Academy', href: '/academy/video' },
    { name: 'Gambling regulations map', href: '/academy/regulations' },
  ];

  const company = [
    { name: 'About us', href: '/company/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Careers', href: '/company/careers' },
    { name: 'Company News', href: '/company/news' },
    { name: 'Reviews', href: '/company/reviews' },
    { name: 'Media partners', href: '/company/partners' },
    { name: 'FAQ', href: '/company/faq' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-slate-950 to-black text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section with Logo and Newsletter */}
        <div className="mb-16 pb-16 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo and Description */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  className="h-16 w-auto"
                  src="/slotgator.png"
                  alt="Slotgator Logo"
                  width={1000}
                  height={1000}
                />
              </Link>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed max-w-md">
                Enterprise iGaming solutions powering casino platforms with cutting-edge technology and comprehensive support.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: <FaInstagram size={20} />, href: '#' },
                  { icon: <FaTwitter size={20} />, href: '#' },
                  { icon: <FaLinkedin size={20} />, href: '#' },
                  { icon: <FaYoutube size={20} />, href: '#' },
                  { icon: <FaFacebook size={20} />, href: '#' },
                  { icon: <FaTelegram size={20} />, href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:border-white/20 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-gray-400 mb-6">
                Get the latest news, updates, and insights delivered to your inbox
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500/50 text-white placeholder-gray-500 transition-all"
                />
                <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Subscribe</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Integrations */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Integrations</h3>
            <ul className="space-y-3">
              {integrations.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group text-sm text-gray-400 hover:text-white transition-colors flex items-start">
                    <FaChevronRight className="text-purple-400 mr-2 text-xs mt-1 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group text-sm text-gray-400 hover:text-white transition-colors flex items-start">
                    <FaChevronRight className="text-purple-400 mr-2 text-xs mt-1 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Products</h3>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group text-sm text-gray-400 hover:text-white transition-colors flex items-start">
                    <FaChevronRight className="text-purple-400 mr-2 text-xs mt-1 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Licensing */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Licensing</h3>
            <ul className="space-y-3">
              {licensing.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group text-sm text-gray-400 hover:text-white transition-colors flex items-start">
                    <FaChevronRight className="text-purple-400 mr-2 text-xs mt-1 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Academy</h3>
            <ul className="space-y-3">
              {academy.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group text-sm text-gray-400 hover:text-white transition-colors flex items-start">
                    <FaChevronRight className="text-purple-400 mr-2 text-xs mt-1 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group text-sm text-gray-400 hover:text-white transition-colors flex items-start">
                    <FaChevronRight className="text-purple-400 mr-2 text-xs mt-1 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16 pb-16 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mr-3">
                    <FaPhone className="text-purple-400" />
                  </div>
                  <span>+44 74 6606 8214</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center mr-3">
                    <FaEnvelope className="text-pink-400" />
                  </div>
                  <span>hello@slotgator.eu</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mr-3">
                    <SiTelegram className="text-blue-400" />
                  </div>
                  <span>@slotgatorpro</span>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Company Details
              </h3>
              <div className="text-sm text-gray-400 space-y-2">
                <p className="font-semibold text-white">UE NOBLE IMPEX EOOD</p>
                <p>CUI: 206640105</p>
                <p>VAT: BG206640105</p>
                <p>Bulgaria, Orașul Ruse</p>
                <p>str. Stefan Karadja nr. 10</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                API Certified For
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { flag: '🌏', name: 'Asia' },
                  { flag: 'https://flagcdn.com/w20/ca.png', name: 'Canada' },
                  { flag: 'https://flagcdn.com/w20/au.png', name: 'Australia' },
                  { flag: '🌎', name: 'Latin America' },
                  { flag: 'https://flagcdn.com/w20/cw.png', name: 'Curacao' },
                  { flag: 'https://flagcdn.com/w20/km.png', name: 'Anjouan' },
                ].map((cert, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    {cert.flag.startsWith('http') ? (
                      <img src={cert.flag} alt={cert.name} className="w-5 h-5 mr-2" />
                    ) : (
                      <span className="mr-2">{cert.flag}</span>
                    )}
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
          <div className="text-gray-400 text-sm">
            © 2021-2025 Slotgator. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
