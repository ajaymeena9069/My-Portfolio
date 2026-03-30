import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/ajaymeena9069", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/ajay-meena-0719ab28a/", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/", label: "Twitter" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container container">
        {/* Footer Text */}
        <div className="footer-text">
          <p>
            Made with <FaHeart className="footer-heart" /> by Ajay Meena
          </p>
          <p className="copyright">
            &copy; {currentYear} | All Rights Reserved
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          {socialLinks.map(({ icon: Icon, url, label }) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              className="footer-iconTop"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <a onClick={scrollToTop} href="#" aria-label="Back to top">
                <FaArrowUp className="footer-icon-up" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}