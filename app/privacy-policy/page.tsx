'use client';

import { useEffect, useState } from 'react';
import { FiShield, FiLock, FiEye, FiDatabase, FiMail, FiPhone } from 'react-icons/fi';

export default function PrivacyPolicyPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              animation: 'pulse 8s ease-in-out infinite',
            }} />
          </div>
        </div>

        {/* Animated particles */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 mb-8 mx-auto">
            <FiShield className="text-4xl text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <FiEye className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1. Introduction</h2>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Slotgator (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <FiDatabase className="text-pink-400 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2. Information We Collect</h2>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Personal Data:</strong>
                    <span className="text-gray-300"> Name, email address, phone number, company name, and other contact information you provide when you register, contact us, or use our services.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Technical Data:</strong>
                    <span className="text-gray-300"> IP address, browser type, operating system, referring URLs, and other technical information automatically collected when you visit our website.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Usage Data:</strong>
                    <span className="text-gray-300"> Information about how you use our website and services, including pages visited, time spent, and actions taken.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Communication Data:</strong>
                    <span className="text-gray-300"> Records of your communications with us, including emails, chat messages, and support tickets.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="space-y-3">
                {[
                  'Providing, operating, and maintaining our services',
                  'Improving, personalizing, and expanding our services',
                  'Understanding and analyzing how you use our services',
                  'Communicating with you, including customer service and support',
                  'Sending you marketing communications (with your consent)',
                  'Processing transactions and managing accounts',
                  'Preventing fraud and enhancing security',
                  'Complying with legal obligations',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-pink-400 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Disclosure of Your Information</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We may share your information in the following situations:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Service Providers:</strong>
                    <span className="text-gray-300"> We may share your information with third-party service providers who perform services on our behalf.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Business Transfers:</strong>
                    <span className="text-gray-300"> Your information may be transferred in connection with a merger, acquisition, or sale of assets.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">Legal Requirements:</strong>
                    <span className="text-gray-300"> We may disclose your information if required by law or in response to valid legal requests.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-white">With Your Consent:</strong>
                    <span className="text-gray-300"> We may disclose your information for any other purpose with your consent.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <FiLock className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">5. Data Security</h2>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 6 */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            {/* Section 7 */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            {/* Section 8 */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">8. Your Data Protection Rights</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="space-y-3">
                {[
                  'The right to access, update, or delete your information',
                  'The right to rectification if your information is inaccurate or incomplete',
                  'The right to object to our processing of your information',
                  'The right to request restriction of processing',
                  'The right to data portability',
                  'The right to withdraw consent',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-pink-400 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections 9-11 */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">9. Third-Party Websites</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">10. Children&apos;s Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">11. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and maintained on servers located outside of your jurisdiction where data protection laws may differ. By using our services, you consent to such transfers.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Section */}
            <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-10 blur-2xl" />

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">13. Contact Us</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-purple-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <p className="text-white font-medium">hello@slotgator.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <FiPhone className="text-pink-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Phone</p>
                      <p className="text-white font-medium">+357 24 030 557</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Telegram</p>
                      <p className="text-white font-medium">@slotgator_info_bot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
