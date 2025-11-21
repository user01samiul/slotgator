"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX, FiGrid, FiZap, FiActivity, FiMonitor, FiCpu, FiDatabase, FiTarget, FiUsers, FiDollarSign, FiTrendingUp, FiShield, FiAward, FiGlobe, FiHeadphones } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = {
    integrations: {
      title: "Integrations",
      subcategories: [
        {
          name: "Game providers",
          description:
            "Integrate casino games from leading developers with our API.",
          href: "/game-providers",
          icon: <FiGrid className="text-xl" />,
        },
        {
          name: "Slots",
          description:
            "Access thousands of slot games from trusted developers.",
          href: "/integrations/slots",
          icon: <FiZap className="text-xl" />,
        },
        {
          name: "Live dealers",
          description: "Immersive live casino software experience.",
          href: "/integrations/livedealers",
          icon: <FiMonitor className="text-xl" />,
        },
        {
          name: "Bingo",
          description: "Professional bingo software for your casino.",
          href: "/integrations/bingo",
          icon: <FiTarget className="text-xl" />,
        },
        {
          name: "Virtual sports",
          description: "24/7 betting with virtual sports software.",
          href: "/integrations/virtualsports",
          icon: <FiActivity className="text-xl" />,
        },
      ],
    },
    solutions: {
      title: "Solutions",
      subcategories: [
        {
          name: "Turnkey online casino",
          description: "Complete platform with full ownership and control.",
          href: "/solutions/turkeyonlinecasino",
          icon: <FiCpu className="text-xl" />,
        },
        {
          name: "White label casino",
          description: "Fast market entry with our shared infrastructure.",
          href: "/solutions/whitelabelcasino",
          icon: <FiZap className="text-xl" />,
        },
        {
          name: "Crypto casino",
          description: "Blockchain platform with 100+ cryptocurrencies.",
          href: "/solutions/cryptocasino",
          icon: <FiActivity className="text-xl" />,
        },
        {
          name: "Casino builder",
          description: "No-code platform with drag-and-drop design tools.",
          href: "/solutions/casinobuilder",
          icon: <FiMonitor className="text-xl" />,
        },
        {
          name: "CRM system",
          description: "In-house customer relationship management platform.",
          href: "/solutions/crm",
          icon: <FiTarget className="text-xl" />,
        },
        {
          name: "Accounting system",
          description: "Financial management and reporting platform.",
          href: "/solutions/accounting",
          icon: <FiDollarSign className="text-xl" />,
        },
      ],
    },
    products: {
      title: "Products",
      subcategories: [
        {
          name: "Game aggregator",
          description: "All game types in one integration.",
          href: "/products/gameaggregator",
          icon: <FiDatabase className="text-xl" />,
        },
        {
          name: "Sportsbook",
          description: "API with live odds and thousands of events.",
          href: "/products/sportsbookintegration",
          icon: <FiTrendingUp className="text-xl" />,
        },
        {
          name: "Telegram casino",
          description: "Mobile-first casino in Telegram.",
          href: "/products/telegramcasino",
          icon: <FiZap className="text-xl" />,
        },
        {
          name: "Payment systems",
          description: "Secure gambling payment gateways.",
          href: "/products/paymentsystems",
          icon: <FiDollarSign className="text-xl" />,
        },
        {
          name: "Affiliate management",
          description: "Marketing tools with reporting.",
          href: "/products/affiliatemanagement",
          icon: <FiUsers className="text-xl" />,
        },
        {
          name: "Bonus system",
          description: "Custom bonuses and rewards.",
          href: "/products/bonussystem",
          icon: <FiAward className="text-xl" />,
        },
        {
          name: "Licensing",
          description: "Comprehensive licensing solutions for compliance.",
          href: "/products/licensing",
          icon: <FiShield className="text-xl" />,
        },
        {
          name: "Advisory services",
          description: "Expert guidance for casino operations.",
          href: "/products/advisoryservices",
          icon: <FiHeadphones className="text-xl" />,
        },
        {
          name: "Casino web hosting",
          description: "Reliable hosting for online casino platforms.",
          href: "/products/casinowebhosting",
          icon: <FiGlobe className="text-xl" />,
        },
      ],
    },
  };

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  if (!isClient) return null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 py-2 shadow-lg"
            : "bg-white py-4 shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="flex items-center group"
                onClick={closeAllDropdowns}
              >
                <Image
                  className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                  src="/slotgator.png"
                  alt="Slotgator Logo"
                  width={1000}
                  height={1000}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {Object.entries(categories).map(([key, category]) => (
                <div key={key} className="relative">
                  <button
                    onClick={() => toggleDropdown(key)}
                    className={`flex items-center px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      activeDropdown === key || pathname.startsWith(`/${key}`)
                        ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-200"
                        : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                    }`}
                  >
                    {category.title}
                    {activeDropdown === key ? (
                      <FiChevronUp className="ml-1 transition-transform duration-300" />
                    ) : (
                      <FiChevronDown className="ml-1 transition-transform duration-300" />
                    )}
                  </button>

                  {activeDropdown === key && (
                    <div
                      className={`absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 rounded-2xl shadow-2xl bg-white border border-gray-200 overflow-hidden animate-fadeIn ${
                        key === "products" ? "w-[640px]" : "w-80"
                      }`}
                    >
                      <div
                        className={`p-6 ${
                          key === "products"
                            ? "grid grid-cols-2 gap-x-4 gap-y-3"
                            : ""
                        }`}
                      >
                        {category.subcategories.map((subcategory, index) => (
                          <Link
                            key={index}
                            href={subcategory.href}
                            className={`group flex items-start p-4 rounded-xl transition-all duration-300 ${
                              isActive(subcategory.href)
                                ? "bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200"
                                : "hover:bg-gray-50 border border-transparent"
                            }`}
                            onClick={closeAllDropdowns}
                          >
                            <div className={`mr-3 transition-colors duration-300 ${isActive(subcategory.href) ? "text-purple-600" : "text-gray-500 group-hover:text-purple-600"}`}>
                              {subcategory.icon}
                            </div>
                            <div>
                              <p
                                className={`font-semibold transition-colors duration-300 ${
                                  isActive(subcategory.href)
                                    ? "text-purple-600"
                                    : "text-gray-800 group-hover:text-purple-600"
                                }`}
                              >
                                {subcategory.name}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">
                                {subcategory.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="group relative ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                onClick={closeAllDropdowns}
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-all duration-300"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <FiX className="block h-6 w-6" />
                ) : (
                  <FiMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Link
            href="/"
            className="flex items-center"
            onClick={closeAllDropdowns}
          >
            <Image
              className="h-12 w-auto"
              src="/slotgator.png"
              alt="Slotgator Logo"
              width={1000}
              height={1000}
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-all duration-300"
          >
            <FiX className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="px-4 pt-4 pb-4 space-y-2 overflow-y-auto h-[calc(100vh-96px)]">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="border-b border-gray-200 last:border-0 pb-4 mb-4">
              <button
                onClick={() => toggleDropdown(`mobile-${key}`)}
                className={`w-full flex justify-between items-center px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                  pathname.startsWith(`/${key}`)
                    ? "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 border border-purple-200"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                }`}
              >
                {category.title}
                {activeDropdown === `mobile-${key}` ? (
                  <FiChevronUp className="ml-1 transition-transform duration-300" />
                ) : (
                  <FiChevronDown className="ml-1 transition-transform duration-300" />
                )}
              </button>

              {activeDropdown === `mobile-${key}` && (
                <div className="pl-2 pt-3 space-y-2">
                  {category.subcategories.map((subcategory, index) => (
                    <Link
                      key={index}
                      href={subcategory.href}
                      className={`flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                        isActive(subcategory.href)
                          ? "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 border border-purple-200"
                          : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                      }`}
                      onClick={closeAllDropdowns}
                    >
                      <span className={`mr-3 ${isActive(subcategory.href) ? "text-purple-600" : "text-gray-500"}`}>{subcategory.icon}</span>
                      {subcategory.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA Button */}
          <Link
            href="/contact"
            className="group relative block w-full mt-6 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            onClick={closeAllDropdowns}
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
