"use client";

import { motion, Variants } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, BuildingOfficeIcon, ClockIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { SocialIcons } from "./SocialIcons";
import { useState, useEffect } from "react";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    setStatus(null);
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
        setStatus('We have received your message. We\'ll reach out to you within 24 hours!');
        setFormData({
          subject: "",
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.log(error)
      setStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-950">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={childVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Get in Touch</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Contact <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Slotgator</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to launch your iGaming platform? Get in touch with our team for a consultation.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <motion.div variants={childVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Email */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FiMail className="text-2xl text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:hello@slotgator.eu" className="text-gray-400 hover:text-purple-400 transition-colors">
                hello@slotgator.eu
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FiPhone className="text-2xl text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+447466068214" className="text-gray-400 hover:text-purple-400 transition-colors">
                +44 74 6606 8214
              </a>
            </div>

            {/* Location */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FiMapPin className="text-2xl text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400 text-sm">
                Ruse, Bulgaria<br />
                str. Stefan Karadja nr. 10
              </p>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Contact Form (3 columns) */}
            <motion.div variants={childVariants} className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-500 transition-all"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-500 transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-500 transition-all"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-500 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-500 transition-all resize-none"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className="h-4 w-4 mt-1 rounded border-white/20 focus:ring-purple-400 bg-white/5"
                      required
                    />
                    <label htmlFor="terms" className="ml-3 block text-sm text-gray-400">
                      I agree to the{" "}
                      <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 transition-colors">Privacy Policy</a> and{" "}
                      <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Terms of Service</a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full flex justify-center items-center gap-2 py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/50 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <FiSend className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {status && (
                    <div className={`p-4 rounded-xl ${status.includes('Failed') ? 'bg-red-500/10 border border-red-500/20 text-red-400' : 'bg-green-500/10 border border-green-500/20 text-green-400'}`}>
                      <p className="text-sm font-medium">{status}</p>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Right Column - Info & Map (2 columns) */}
            <motion.div variants={childVariants} className="lg:col-span-2 space-y-6">
              {/* Company Info */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <BuildingOfficeIcon className="h-6 w-6 text-purple-400" />
                  Company Information
                </h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-white font-semibold mb-1">UE NOBLE IMPEX EOOD</p>
                    <p className="text-gray-400">CUI: 206640105</p>
                    <p className="text-gray-400">VAT: BG206640105</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-gray-400 flex items-start gap-2">
                      <MapPinIcon className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Bulgaria, Orașul Ruse<br />
                        str. Stefan Karadja nr. 10
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <ClockIcon className="h-6 w-6 text-pink-400" />
                  Business Hours
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white font-medium">9:00 - 18:00 EET</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white font-medium">10:00 - 14:00 EET</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs text-gray-500">
                      Emergency support available 24/7 for existing clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className="rounded-xl overflow-hidden h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6726543389!2d25.956654!3d43.848677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae606b0c5f3b7b%3A0x833e6e4b5e3b6b7!2sstr.%20Stefan%20Karadja%2010%2C%207000%20Ruse%2C%20Bulgaria!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <GlobeAltIcon className="h-6 w-6 text-cyan-400" />
                  Follow Us
                </h2>
                <SocialIcons />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
