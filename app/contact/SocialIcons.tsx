"use client";

import { motion } from "framer-motion";
import { 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube, 
  FaFacebook, 
  FaTelegram 
} from "react-icons/fa";

export function SocialIcons() {
  const socials = [
    { icon: <FaInstagram className="h-5 w-5" />, name: "Instagram", url: "#" },
    { icon: <FaTwitter className="h-5 w-5" />, name: "X", url: "#" },
    { icon: <FaLinkedin className="h-5 w-5" />, name: "LinkedIn", url: "#" },
    { icon: <FaYoutube className="h-5 w-5" />, name: "YouTube", url: "#" },
    { icon: <FaFacebook className="h-5 w-5" />, name: "Facebook", url: "#" },
    { icon: <FaTelegram className="h-5 w-5" />, name: "Telegram", url: "#" },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          className="p-3 rounded-lg bg-input hover:bg-primary/10 transition-colors"
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}