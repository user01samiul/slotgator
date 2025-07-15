"use client";

import { motion, Variants } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, PaperAirplaneIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { SocialIcons } from "./SocialIcons"; 
import { useState } from "react";

export default function ContactPage() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setStatus(null); // Clear status on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('We have received your email, we\'ll reach you soon!');
        setFormData({
          subject: "",
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setStatus('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.log(error)
      setStatus('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={childVariants} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Contact us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us by filling out the form below
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={childVariants} className="bg-card p-6 sm:p-8 rounded-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject of request
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="h-4 w-4 rounded border-border focus:ring-primary"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                  By clicking this button, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center gap-2 py-3 px-6 bg-[var(--color-button)] hover:bg-[#E6202D] text-primary-foreground font-semibold rounded-lg transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <PaperAirplaneIcon className="h-5 w-5" />
                </button>
                {status && (
                  <p className={`mt-4 text-sm text-center ${status.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
                    {status}
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={childVariants} className="space-y-8">
            <div className="bg-card p-6 sm:p-8 rounded-xl border border-border">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-primary" />
                Our official contacts
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Use only these official channels of communication to prevent phishing attempts.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <EnvelopeIcon className="h-5 w-5 text-primary" />
                  </div>
                  <a href="mailto:hello@slotegrator.com" className="hover:text-primary transition-colors">
                    hello@slotegrator.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <PhoneIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <a href="tel:+35724030557" className="hover:text-primary transition-colors block">
                      +357 24 030 557
                    </a>
                    <a href="tel:+420797651006" className="hover:text-primary transition-colors block">
                      +420 797 651 006
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <PaperAirplaneIcon className="h-5 w-5 text-primary" />
                  </div>
                  <a href="https://t.me/slotegrator_info_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    @slotegrator_info_bot
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card p-6 sm:p-8 rounded-xl border border-border">
              <h2 className="text-xl font-bold mb-6">Follow us</h2>
              <SocialIcons />
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-3">Integrations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Game providers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Slots</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Live dealers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Bingo</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Virtual sports</a></li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-3">Solutions</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Turnkey online casino</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">White label casino</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Crypto casino</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Casino builder</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Solutions compared</a></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}