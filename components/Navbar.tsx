"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";

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
          icon: "🎮",
        },
        {
          name: "Slots",
          description:
            "Access thousands of slot games from trusted developers.",
          href: "/integrations/slots",
          icon: "🎰",
        },
        {
          name: "Live dealers",
          description: "Immersive live casino software experience.",
          href: "/integrations/livedealers",
          icon: "🎥",
        },
        {
          name: "Bingo",
          description: "Professional bingo software for your casino.",
          href: "/integrations/bingo",
          icon: "🔔",
        },
        {
          name: "Virtual sports",
          description: "24/7 betting with virtual sports software.",
          href: "/integrations/virtualsports",
          icon: "🏈",
        },
      ],
    },
    solutions: {
      title: "Solutions",
      subcategories: [
        {
          name: "Turkey online casino",
          description: "Integrate casino games from leading developers.",
          href: "/solutions/turkeyonlinecasino",
          icon: "🕹️",
        },
        {
          name: "White label casino",
          description: "Thousands of slot games from international developers.",
          href: "/solutions/whitelabelcasino",
          icon: "🎲",
        },
        {
          name: "Crypto casino",
          description: "Best live casino software experience.",
          href: "/solutions/cryptocasino",
          icon: "🎬",
        },
        {
          name: "Casino builder",
          description: "Professional bingo software solutions.",
          href: "/solutions/casinobuilder",
          icon: "🧩",
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
          icon: "📊",
        },
        {
          name: "Sportsbook",
          description: "API with live odds and thousands of events.",
          href: "/products/sportsbookintegration",
          icon: "🏆",
        },
        {
          name: "Telegram casino",
          description: "Mobile-first casino in Telegram.",
          href: "/products/telegramcasino",
          icon: "📱",
        },
        {
          name: "Payment systems",
          description: "Secure gambling payment gateways.",
          href: "/products/paymentsystems",
          icon: "💳",
        },
        {
          name: "Affiliate management",
          description: "Marketing tools with reporting.",
          href: "/products/affiliatemanagement",
          icon: "🤝",
        },
        {
          name: "Bonus system",
          description: "Custom bonuses and rewards.",
          href: "/products/bonussystem",
          icon: "🎁",
        },
        {
          name: "Licensing",
          description: "Comprehensive licensing solutions for compliance.",
          href: "/products/licensing",
          icon: "📜",
        },
        {
          name: "Advisory services",
          description: "Expert guidance for casino operations.",
          href: "/products/advisoryservices",
          icon: "🧠",
        },
        {
          name: "Casino web hosting",
          description: "Reliable hosting for online casino platforms.",
          href: "/products/casinowebhosting",
          icon: "🌐",
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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center"
              onClick={closeAllDropdowns}
            >
              <Image
                className="h-16 w-auto"
                src="/slotgator.png"
                alt="Slotgator Logo"
                width={1000}
                height={1000}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {Object.entries(categories).map(([key, category]) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeDropdown === key || pathname.startsWith(`/${key}`)
                      ? "text-[#FF2432]"
                      : "text-gray-700 hover:text-[#FF2432]"
                  }`}
                >
                  {category.title}
                  {activeDropdown === key ? (
                    <FiChevronUp className="ml-1" />
                  ) : (
                    <FiChevronDown className="ml-1" />
                  )}
                </button>

                {activeDropdown === key && (
                  <div
                    className={`absolute z-20 left-1/2 transform -translate-x-1/2 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-gray-200 overflow-hidden animate-fadeIn ${
                      key === "products" ? "w-[640px]" : "w-80"
                    }`}
                  >
                    <div
                      className={`p-4 ${
                        key === "products"
                          ? "grid grid-cols-2 gap-x-4 gap-y-2"
                          : ""
                      }`}
                    >
                      {category.subcategories.map((subcategory, index) => (
                        <Link
                          key={index}
                          href={subcategory.href}
                          className={`flex items-start p-3 rounded-md transition-colors ${
                            isActive(subcategory.href)
                              ? "bg-[#FF2432]/10"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={closeAllDropdowns}
                        >
                          <span className="text-xl mr-3">
                            {subcategory.icon}
                          </span>
                          <div>
                            <p
                              className={`font-medium ${
                                isActive(subcategory.href)
                                  ? "text-[#FF2432]"
                                  : "text-gray-900"
                              }`}
                            >
                              {subcategory.name}
                            </p>
                            <p className="text-sm text-gray-500">
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
              className="ml-4 px-4 py-2 bg-[#FF2432] text-white text-sm font-medium rounded-md hover:bg-[#E02030] transition-colors shadow-sm"
              onClick={closeAllDropdowns}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#FF2432] focus:outline-none"
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

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <Link
            href="/"
            className="flex items-center"
            onClick={closeAllDropdowns}
          >
            <Image
              className="h-10 w-auto"
              src="/slotgator.png"
              alt="Slotgator Logo"
              width={1000}
              height={1000}
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-md text-gray-700 hover:text-[#FF2432] focus:outline-none"
          >
            <FiX className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="px-4 pt-2 pb-4 space-y-1 overflow-y-auto h-[calc(100vh-64px)]">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleDropdown(`mobile-${key}`)}
                className={`w-full flex justify-between items-center px-3 py-4 text-base font-medium rounded-md ${
                  pathname.startsWith(`/${key}`)
                    ? "text-[#FF2432]"
                    : "text-gray-700 hover:text-[#FF2432]"
                }`}
              >
                {category.title}
                {activeDropdown === `mobile-${key}` ? (
                  <FiChevronUp className="ml-1" />
                ) : (
                  <FiChevronDown className="ml-1" />
                )}
              </button>

              {activeDropdown === `mobile-${key}` && (
                <div className="pl-4 pb-2 space-y-2">
                  {category.subcategories.map((subcategory, index) => (
                    <Link
                      key={index}
                      href={subcategory.href}
                      className={`block px-3 py-2 text-base rounded-md ${
                        isActive(subcategory.href)
                          ? "bg-[#FF2432]/10 text-[#FF2432]"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={closeAllDropdowns}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{subcategory.icon}</span>
                        {subcategory.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA Button */}
          <Link
            href="/contact"
            className="block w-full mt-4 px-4 py-3 bg-[#FF2432] text-white text-center font-medium rounded-md hover:bg-[#E02030] transition-colors shadow-sm"
            onClick={closeAllDropdowns}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
