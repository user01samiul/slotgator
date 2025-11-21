"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function KeyClients() {
  // Animation controls for infinite scroll
  const clientControls = useAnimation();
  const partnerControls = useAnimation();
  const clientRef = useRef(null);
  const partnerRef = useRef(null);

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

  // Infinite scroll animation setup
  const scrollVariants: Variants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const, // Explicitly type for type safety
          duration: 20,
          ease: "linear" as const, // Explicitly type as a valid Easing value
        },
      },
    },
  };

  // Pause animation on hover
  const handleHoverStart = (controls: ReturnType<typeof useAnimation>) => {
    controls.stop();
  };

  const handleHoverEnd = (controls: ReturnType<typeof useAnimation>) => {
    controls.start("animate");
  };

  // Start animation on mount
  useEffect(() => {
    clientControls.start("animate");
    partnerControls.start("animate");
  }, [clientControls, partnerControls]);

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
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Clients & Partners
          </span>
        </motion.h2>
        <motion.p
          variants={childVariants}
          className="text-sm sm:text-base text-muted-foreground text-left"
        >
          We are proud of the company we keep. We collaborate only with licensed
          and certified game developers and payment service providers, making our
          list of clients and partners a list of iGaming’s leading brands.
        </motion.p>
      </div>

      {/* Clients Section */}
      <div className="mb-12">
        <motion.h3
          variants={childVariants}
          className="text-xl sm:text-2xl font-semibold mb-4 text-left"
        >
          Clients
        </motion.h3>
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => handleHoverStart(clientControls)}
          onMouseLeave={() => handleHoverEnd(clientControls)}
        >
          <motion.div
            ref={clientRef}
            variants={scrollVariants}
            animate={clientControls}
            className="flex whitespace-nowrap"
          >
            {/* Duplicate the logos to create a seamless loop */}
            {[
              ...Array(19).fill("Game developer logo"),
              ...Array(19).fill("Game developer logo"),
            ].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4"
              >
                <Image
                  src="https://via.placeholder.com/160x80.png?text=Game+Developer+Logo"
                  alt="Game developer logo"
                  width={160}
                  height={80}
                  className="object-contain select-none"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Partners Section */}
      <div>
        <motion.h3
          variants={childVariants}
          className="text-xl sm:text-2xl font-semibold mb-4 text-left"
        >
          Partners
        </motion.h3>
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => handleHoverStart(partnerControls)}
          onMouseLeave={() => handleHoverEnd(partnerControls)}
        >
          <motion.div
            ref={partnerRef}
            variants={scrollVariants}
            animate={partnerControls}
            className="flex whitespace-nowrap"
          >
            {/* Duplicate the partners to create a seamless loop */}
            {[
              ...[
                "Pragmatic Play",
                "Evolution Gaming",
                "3 Oaks Gaming",
                "Endorphina",
                "Amatic Industries",
                "Spribe",
                "Pocket Games Soft",
                "Amigo Gaming",
                "Playson",
                "BELATRA",
                "Hacksaw Gaming",
                "NetGame Entertainment",
                "Igrosoft",
                "Amusnet Interactive",
                "Fazi",
                "KA Gaming",
                "BGaming",
                "SmartSoft Gaming",
                "Platipus Gaming",
                "Nolimit City",
                "Tom Horn",
                "Spinomenal",
                "Gamzix",
                "Thunderkick",
                "Aviatrix",
                "Greentube",
                "Clawbuster",
                "Formula Spin",
                "Dream Play",
              ],
              ...[
                "Pragmatic Play",
                "Evolution Gaming",
                "3 Oaks Gaming",
                "Endorphina",
                "Amatic Industries",
                "Spribe",
                "Pocket Games Soft",
                "Amigo Gaming",
                "Playson",
                "BELATRA",
                "Hacksaw Gaming",
                "NetGame Entertainment",
                "Igrosoft",
                "Amusnet Interactive",
                "Fazi",
                "KA Gaming",
                "BGaming",
                "SmartSoft Gaming",
                "Platipus Gaming",
                "Nolimit City",
                "Tom Horn",
                "Spinomenal",
                "Gamzix",
                "Thunderkick",
                "Aviatrix",
                "Greentube",
                "Clawbuster",
                "Formula Spin",
                "Dream Play",
              ],
            ].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4"
              >
                <Image
                  src="https://via.placeholder.com/160x80.png?text=Partner+Logo"
                  alt={partner}
                  width={160}
                  height={80}
                  className="object-contain select-none"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div variants={childVariants} className="mt-4 text-left">
          <Link
            href="/partners"
            className="inline-block py-2 px-4 bg-[var(--color-button)] rounded-md text-primary-foreground font-semibold text-sm hover:bg-[#E6202D] transition-colors"
          >
            All Partners
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}