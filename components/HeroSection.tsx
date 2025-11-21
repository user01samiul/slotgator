"use client";

import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaDice, FaCoins, FaChartLine } from "react-icons/fa";

export default function HeroContent() {
  // Enhanced animation variants
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

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 100, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const floatingVariants: Variants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse" as const, // Explicitly type as RepeatType
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-8 lg:py-12 w-full min-h-screen bg-background text-foreground overflow-hidden"
    >
      {/* Left Content */}
      <div className="flex flex-col gap-6 lg:w-1/2 z-10">
        <motion.div
          variants={childVariants}
          className="flex items-center bg-primary/20 border border-primary/50 rounded-full py-1 px-3 w-fit"
        >
          <SparklesIcon className="h-5 w-5 text-primary mr-2" />
          <h2 className="text-xs sm:text-sm font-semibold">
            Enterprise iGaming Solutions
          </h2>
        </motion.div>

        <motion.h1
          variants={childVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
        >
          Complete Online Casino Platform &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Gaming Aggregation Services
          </span>
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-sm sm:text-base text-muted-foreground max-w-md"
        >
          Comprehensive casino platform solutions with integrated game aggregation from 180+ providers, advanced payment processing, and complete licensing support. Transform your iGaming vision into reality with our proven infrastructure.
        </motion.p>

        {/* Feature Icons */}
        <motion.div 
          variants={childVariants}
          className="flex gap-4 mt-2"
        >
          <motion.div 
            className="p-3 bg-primary/10 rounded-lg"
            whileHover={{ scale: 1.05 }}
            animate="float"
            variants={floatingVariants}
          >
            <FaDice className="h-6 w-6 text-primary" />
          </motion.div>
          <motion.div 
            className="p-3 bg-primary/10 rounded-lg"
            whileHover={{ scale: 1.05 }}
            animate="float"
            variants={floatingVariants}
            transition={{ delay: 0.2 }}
          >
            <FaCoins className="h-6 w-6 text-primary" />
          </motion.div>
          <motion.div 
            className="p-3 bg-primary/10 rounded-lg"
            whileHover={{ scale: 1.05 }}
            animate="float"
            variants={floatingVariants}
            transition={{ delay: 0.4 }}
          >
            <FaChartLine className="h-6 w-6 text-primary" />
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={childVariants} className="mt-6">
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-primary-foreground rounded-lg bg-[var(--color-button)] hover:bg-[#E6202D] transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Free Consultation <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <p className="text-xs text-muted-foreground mt-3 max-w-xs">
            By clicking this button, you agree to our{" "}
            <a href="#" className="underline hover:text-primary">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-primary">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>

      {/* Right Video */}
      <motion.div
        variants={imageVariants}
        className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 relative"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg select-none max-w-full h-auto relative z-10"
        >
          <source src="/pics/Slotgator_ iGaming Innovators.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Floating decorative elements */}
        <motion.div 
          className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl z-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl z-0"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        {/* Animated floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse" as const, // Explicitly type as RepeatType
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}