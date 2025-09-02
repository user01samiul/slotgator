import Image from "next/image";
import Link from "next/link";

export default function OurGamingProducts() {
  return (
    <section
      className="relative flex flex-col px-4 sm:px-8 lg:px-16 py-12 lg:py-16 w-full bg-background text-foreground"
    >
      {/* Top Left Content */}
      <div className="flex flex-col gap-6 lg:w-1/2 z-10 mb-8">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            iGaming Products
          </span>{" "}
          and Services
        </h2>
        <p
          className="text-sm sm:text-base text-muted-foreground max-w-md"
        >
          Our range of iGaming products and services will take your platform to
          the next level. From online casino software to jurisdictional advisory
          and license acquisition assistance, we have everything you need, all in
          the same place.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Telegram Casino",
            description:
              "This innovative, alternative online casino frontend can be a standalone product or an extension of your platform.",
            image:
              "https://static.slotegrator.pro/uploads/sportsbook_1_2x_f5a85e9a8e.png?f=avif&resize=160x160&q=100",
            link: "/telegram-casino",
          },
          {
            title: "Sportegrator",
            description:
              "A sports betting platform solution with live and virtual sports betting opportunities — a complete sportsbook platform.",
            image:
              "https://static.slotegrator.pro/uploads/sportsbook_1_2x_f5a85e9a8e.png?f=avif&resize=160x160&q=100",
            link: "/sportegrator",
          },
          {
            title: "APIgrator",
            description:
              "Our best-selling game aggregator casino software product integrates over 30,000 casino games into an online casino platform.",
            image:
              "https://static.slotegrator.pro/uploads/sportsbook_1_2x_f5a85e9a8e.png?f=avif&resize=160x160&q=100",
            link: "/apigrator",
          },
          {
            title: "Partnergator",
            description:
              "Our solution for affiliate management helps you track your affiliate partners’ performance with real-time analytics.",
            image:
              "https://static.slotegrator.pro/uploads/sportsbook_1_2x_f5a85e9a8e.png?f=avif&resize=160x160&q=100",
            link: "/partnergator",
          },
          {
            title: "Moneygrator",
            description:
              "A complete payments solution for online casino and bookmaking platforms with over 150 payment options from over 30 providers.",
            image:
              "https://static.slotegrator.pro/uploads/sportsbook_1_2x_f5a85e9a8e.png?f=avif&resize=160x160&q=100",
            link: "/moneygrator",
          },
          {
            title: "Bonusgrator",
            description:
              "A bonus management system for effective online casino marketing and promotion. This gambling product increases player retention.",
            image:
              "https://static.slotegrator.pro/uploads/sportsbook_1_2x_f5a85e9a8e.png?f=avif&resize=160x160&q=100",
            link: "/bonusgrator",
          },
          {
            title: "License Acquisition",
            description:
              "Before getting iGaming software, you need a license. We provide assistance with every step of the licensing process.",
            image:
              "https://static.slotegrator.pro/uploads/sportsbook_1_2x_f5a85e9a8e.png?f=avif&resize=160x160&q=100",
            link: "/license-acquisition",
          },
          {
            title: "Advisory Services",
            description:
              "When starting an iGaming business, we help you decide where to register your company and what market to target.",
            image:
              "https://static.slotegrator.pro/uploads/sportsbook_1_2x_f5a85e9a8e.png?f=avif&resize=160x160&q=100",
            link: "/advisory-services",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="relative bg-card border border-border rounded-lg p-4 flex flex-col items-center text-center overflow-hidden"
          >
            <div className="w-full">
              <Image
                src={card.image}
                alt={card.title}
                width={160}
                height={160}
                className="w-full h-auto object-cover rounded-md select-none"
                draggable={false}
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{card.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              {card.description}
            </p>
            <div
              className="absolute bottom-4 w-full px-4"
            >
              <Link
                href={card.link}
                className="block w-full py-2 bg-[var(--color-button)] rounded-md text-primary-foreground font-semibold text-sm hover:bg-[#E6202D] transition-colors"
              >
                More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}