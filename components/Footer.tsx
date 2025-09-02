import { FaPhone, FaEnvelope, FaTelegram, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaChevronRight } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';
import { Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#272727] text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact us</h3>
            <p className="text-gray-400 mb-4">Use only the official channels of communication listed below</p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="text-[#FF2432] mr-3" />
                <span>+357 24 030 557</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#FF2432] mr-3" />
                <span>hello@slotgator.com</span>
              </div>
              <div className="flex items-center">
                <SiTelegram className="text-[#FF2432] mr-3" />
                <span>@slotgator_info_bot</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-[#FF2432] mr-3" />
                <span>+420 797 651 006</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTelegram size={20} />
              </a>
            </div>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Integrations</h3>
            <ul className="space-y-2">
              {['Game providers', 'Slots', 'Live dealers', 'Bingo', 'Virtual sports'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                    <FaChevronRight className="text-[#FF2432] mr-2 text-xs" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xl font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {['Turnkey online casino', 'White label casino', 'Crypto casino', 'Casino builder', 'Solutions compared'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                    <FaChevronRight className="text-[#FF2432] mr-2 text-xs" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {['Game aggregator', 'Sportsbook integration', 'Telegram casino', 'Payment systems', 'Affiliate management', 'Bonus system'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                    <FaChevronRight className="text-[#FF2432] mr-2 text-xs" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Licensing */}
          <div>
            <h3 className="text-xl font-bold mb-4">Licensing</h3>
            <ul className="space-y-2">
              {['Advisory services', 'Web Hosting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                    <FaChevronRight className="text-[#FF2432] mr-2 text-xs" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h3 className="text-xl font-bold mb-4">Academy</h3>
            <ul className="space-y-2">
              {['Analytical articles', 'Industry news', 'Video Academy', 'Gambling regulations map'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                    <FaChevronRight className="text-[#FF2432] mr-2 text-xs" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About us', 'Careers', 'Company News', 'Reviews', 'Media partners', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                    <FaChevronRight className="text-[#FF2432] mr-2 text-xs" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* API Certified */}
          <div>
            <h3 className="text-xl font-bold mb-4">API certified for:</h3>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <img src="https://flagcdn.com/w20/lt.png" alt="Lithuania" className="w-5 h-5 mr-2" />
                <span>Lithuania</span>
              </div>
              <div className="flex items-center">
                <img src="https://flagcdn.com/w20/ge.png" alt="Georgia" className="w-5 h-5 mr-2" />
                <span>Georgia</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Our certificates:</h3>
          </div>
        </div>

        {/* Language Selector */}
        {/* <div className="mb-8">
          <div className="relative inline-block">
            <select className="bg-[#3a3a3a] text-white py-2 pl-10 pr-8 rounded appearance-none focus:outline-none">
              {['English', 'Русский', 'Español', 'Türk', 'हिन्दी', 'Português', 'Deutsch', 'Italiano', '中国', 'Français', 'ქართული', 'ไทย', '한국인', 'Tiếng Việt', 'Српски'].map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
            <IoMdGlobe className="absolute left-3 top-2.5 text-[#FF2432]" size={18} />
            <div className="absolute right-2 top-3 pointer-events-none">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {/* <a href="#" className="text-gray-400 hover:text-white transition">Sitemap</a> */}
            <Link href="privacy-policy" className="text-gray-400 hover:text-white transition">Privacy policy</Link>
          </div>
          <div className="text-gray-400 text-sm">
            © 2015-2025 Slotgator, All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;