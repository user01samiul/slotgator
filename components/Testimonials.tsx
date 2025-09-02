"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Testimonials() {
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

  // Carousel controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3; // Always show 3 cards per slide

  // Testimonial data
  const testimonials = [
    {
      company: "PHOENIX 7",
      quote: "We can't overstate how excited we are to partner with Slotgator. This collaboration is going to bring our innovative slot games to an even wider audience...",
    },
    {
      name: "Yann Bautista",
      title: "Commercial Director and Founder",
      company: "Peter & Sons",
      quote: "Slotgator is a leading force in the iGaming industry, so obviously we're excited to partner with them. APIgrator is a truly cutting-edge solution...",
    },
    {
      name: "Yann Bautista",
      title: "Commercial Director and Founder",
      company: "Octopus Global",
      quote: "From the outset, collaborating with Slotgator has been an absolute pleasure. Everyone on the team consistently demonstrates the utmost professionalism...",
    },
    {
      name: "Oleg Galushko",
      title: "CEO",
      company: "Formula Spin",
      quote: "We are fully confident that our partnership with Slotgator will help us lay the foundation for a transformative gaming experience...",
    },
    {
      name: "Michele Morotti",
      title: "CEO",
      company: "Capecod Gaming",
      quote: "Partnering with Slotgator is one of the best strategic moves we've made — they're an undisputed leader in the iGaming industry...",
    },
    {
      company: "RiCH88",
      quote: "We're beyond thrilled to announce our new collaboration with Slotgator! Slotgator is the perfect partner for distributing our easy-to-play...",
    },
  ];

  // Calculate total slides
  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  // Auto-slide logic
  useEffect(() => {
    if (typeof window === "undefined") return; // Skip during SSR
    if (inView) {
      const timer = setInterval(() => {
        const nextIndex = (currentIndex + 1) % totalSlides;
        setCurrentIndex(nextIndex);
        controls.start({
          x: `-${nextIndex * (100 / totalSlides)}%`,
          transition: { duration: 0.5, ease: "easeOut" as const }, // Explicitly type as a valid Easing value
        });
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [inView, currentIndex, controls, totalSlides]);

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.h2 variants={childVariants} className="text-3xl sm:text-4xl font-bold mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Testimonials</span>
        </motion.h2>
        <motion.p variants={childVariants} className="text-muted-foreground max-w-2xl">
          Our partners agree that we have the best software for online casinos. We collaborate only with licensed and certified providers.
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => {
            if (typeof window === "undefined") return; // Skip during SSR
            const nextIndex = (currentIndex + 1) % totalSlides;
            setCurrentIndex(nextIndex);
            controls.start({
              x: `-${nextIndex * (100 / totalSlides)}%`,
              transition: { duration: 0.5, ease: "easeOut" as const }, // Explicitly type as a valid Easing value
            });
          }}
        >
          <motion.div
            className="flex"
            animate={controls}
            initial={{ x: 0 }}
            style={{ 
              width: `${totalSlides * 100}%`,
              minWidth: `${totalSlides * 100}%`
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const slideTestimonials = testimonials.slice(
                slideIndex * cardsPerView,
                slideIndex * cardsPerView + cardsPerView
              );
              
              // Fill with empty cards if needed to maintain 3 cards per slide
              while (slideTestimonials.length < cardsPerView) {
                slideTestimonials.push(null);
              }

              return (
                <div 
                  key={slideIndex} 
                  className="flex-shrink-0"
                  style={{ 
                    width: `${100 / totalSlides}%`,
                    flex: `0 0 ${100 / totalSlides}%`
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-2 h-full">
                    {slideTestimonials.map((testimonial, cardIndex) => (
                      testimonial ? (
                        <motion.div
                          key={`${slideIndex}-${cardIndex}`}
                          variants={childVariants}
                          className="bg-card border-2 border-[var(--color-btn)] rounded-lg p-6 h-full flex flex-col shadow-lg shadow-primary/10"
                        >
                          <div>
                            <h3 className="font-semibold text-primary">{testimonial.company}</h3>
                            {testimonial.name && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {testimonial.name}{testimonial.title && `, ${testimonial.title}`}
                              </p>
                            )}
                            <p className="text-sm text-muted-foreground mt-4 line-clamp-4">
                              {testimonial.quote}
                            </p>
                          </div>
                        </motion.div>
                      ) : (
                        <div 
                          key={`${slideIndex}-${cardIndex}`} 
                          className="bg-transparent h-full"
                          aria-hidden="true"
                        />
                      )
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                controls.start({
                  x: `-${index * (100 / totalSlides)}%`,
                  transition: { duration: 0.5, ease: "easeOut" as const }, // Explicitly type as a valid Easing value
                });
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl" />
      </div>
    </motion.section>
  );
}