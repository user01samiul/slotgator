"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function NextSteps() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const steps = [
    {
      number: 1,
      title: "Discussion of your business requirements",
      description: "We'll analyze your business model and discuss your specific needs to create the perfect solution.",
    },
    {
      number: 2,
      title: "Establishment of your project's technical specifications",
      description: "Our team will outline the technical architecture and features required for your platform.",
    },
    {
      number: 3,
      title: "Development and testing of the platform",
      description: "Our developers will build your platform with rigorous testing at every stage.",
    },
    {
      number: 4,
      title: "Integration of data feeds and payment systems",
      description: "We'll connect all necessary third-party services including games, odds providers, and payment processors.",
    },
    {
      number: 5,
      title: "The launch of your brand",
      description: "We'll assist with the official launch and initial marketing of your casino platform.",
    },
    {
      number: 6,
      title: "Technical support and account management",
      description: "Ongoing maintenance, updates, and dedicated account management to ensure your success.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-background text-foreground">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            What are the next steps?
          </h2>
          <p className="text-muted-foreground">
            Our proven process ensures a smooth journey from concept to successful launch
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={childVariants}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-primary">
                <CheckCircleIcon className="h-5 w-5 mr-1" />
                <span>Included in all packages</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
}