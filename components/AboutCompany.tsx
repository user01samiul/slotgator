"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// Define animation variants with explicit typing
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

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const, // Explicitly type as a valid Easing value
    },
  },
};

// Counting animation component
const Counter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60); // 60 FPS for smooth animation
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(Math.floor(end));
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60); // Update every frame (60 FPS)

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      {count}
    </motion.span>
  );
};

export default function AboutCompany() {
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
          About the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Company
          </span>
        </motion.h2>
        <motion.p
          variants={childVariants}
          className="text-sm sm:text-base text-muted-foreground text-left"
        >
          Slotegrator, a leading software supplier and aggregator for online
          casino and sportsbook operators, has been developing innovative business
          solutions and client-oriented business services in the gambling industry
          since 2012.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          {
            value: 13,
            suffix: "+",
            description: "years in the industry",
          },
          {
            value: 180,
            suffix: "+",
            description: "partners",
          },
          {
            value: 250,
            suffix: "+",
            description: "clients worldwide",
          },
          {
            value: 500,
            suffix: "+",
            description: "projects launched",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-primary">
              <Counter end={card.value} />{card.suffix}
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}