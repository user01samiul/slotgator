"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function HeroContent() {
  // Animation variants
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
        ease: "easeOut" as const, // Explicitly type as a valid Easing value
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const, // Explicitly type as a valid Easing value
      },
    },
  };

  // Form state
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    setError("");
    // Handle form submission logic here
    console.log("Form submitted with email:", email);
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
            Casino Software Solutions
          </h2>
        </motion.div>

        <motion.h1
          variants={childVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
        >
          Ready-Made Online Casino Software &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Business Solutions
          </span>
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-sm sm:text-base text-muted-foreground max-w-md"
        >
          Bespoke platform solutions for online casinos and sportsbooks, game
          content integration, license acquisition, and more — everything your
          online casino business needs.
        </motion.p>

        {/* Form */}
        <motion.div variants={childVariants} className="mt-4 max-w-sm">
          <div className="bg-card p-4 rounded-lg border border-border">
            <h3 className="text-base font-semibold mb-3">
              Fill in the form to contact us
            </h3>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-md bg-input border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {error && <p className="text-destructive text-xs">{error}</p>}
              <button
                onClick={handleSubmit}
                className="w-full py-2 bg-[var(--color-button)] rounded-md text-primary-foreground font-semibold text-sm hover:bg-[#E6202D] transition-colors"
              >
                Free Consultation
              </button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                By clicking this button, you agree to our{" "}
                <a href="#" className="underline hover:text-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline hover:text-primary">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        variants={imageVariants}
        className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0"
      >
        <Image
          src="/home/heroimage.avif"
          alt="Casino platform illustration"
          width={400}
          height={400}
          className="rounded-lg select-none max-w-full h-auto"
          draggable={false}
        />
      </motion.div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl" />
      </div>
    </motion.div>
  );
}