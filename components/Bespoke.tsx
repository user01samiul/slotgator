"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Bespoke() {
  // Animation variants for container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for child elements
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const, // Explicitly type as a valid Easing value
      },
    },
  };

  // Card hover animation
  const cardVariants: Variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const, // Explicitly type as a valid Easing value
      },
    },
  };

  // Image height animation for hover
  const imageVariants: Variants = {
    initial: { height: "160px" },
    hover: {
      height: "120px",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const, // Explicitly type as a valid Easing value
      },
    },
  };

  // Button animation for hover
  const buttonVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const, // Explicitly type as a valid Easing value
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex flex-col px-4 sm:px-8 lg:px-16 py-12 lg:py-16 w-full bg-background text-foreground"
    >
      {/* Top Left Content */}
      <div className="flex flex-col gap-6 max-w-md lg:max-w-lg mb-8">
        <motion.h2
          variants={childVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-left"
        >
          Bespoke{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            iGaming Solutions
          </span>
        </motion.h2>
        <motion.p
          variants={childVariants}
          className="text-sm sm:text-base text-muted-foreground text-left"
        >
          Our B2B casino software and gambling solutions can help your brand take
          its next big step. Launch your project rapidly with a powerful and
          versatile platform fully equipped with the games and payment methods
          your players need.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max二维码-5xl mx-auto">
        {[
          {
            title: "Turnkey Online Casino",
            description:
              "Readymade Turnkey casino platform, complete with a range of modules to tackle every problem that operators face.",
            image:
              "https://static.slotegrator.pro/uploads/t_key_1_2x_b882523c24.png?f=avif&resize=160x160&q=100",
            link: "/turnkey-casino",
          },
          {
            title: "White Label Casino",
            description:
              "Complete online casino platform operated under Slotegrator’s business structure.",
            image:
              "https://static.slotegrator.pro/uploads/white_label_1_2x_c25ee0133c.png?f=avif&resize=160x160&q=100",
            link: "/white-label-casino",
          },
          {
            title: "Crypto Casino",
            description:
              "Customizable bitcoin casino platform fully equipped with cryptocurrency payment methods.",
            image:
              "https://static.slotegrator.pro/uploads/crypto_casino_1_2x_526877e822.png?f=avif&resize=160x160&q=100",
            link: "/crypto-casino",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="relative bg-card border border-border rounded-lg p-4 flex flex-col items-center text-center overflow-hidden"
          >
            <motion.div variants={imageVariants} className="w-full">
              <Image
                src={card.image}
                alt={card.title}
                width={160}
                height={160}
                className="w-full h-auto object-cover rounded-md select-none"
                draggable={false}
              />
            </motion.div>
            <h3 className="text-lg font-semibold mt-4">{card.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              {card.description}
            </p>
            <motion.div
              variants={buttonVariants}
              className="absolute bottom-4 w-full px-4"
            >
              <Link
                href={card.link}
                className="block w-full py-2 bg-[var(--color-button)] rounded-md text-primary-foreground font-semibold text-sm hover:bg-[#E6202D] transition-colors"
              >
                More Details
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}