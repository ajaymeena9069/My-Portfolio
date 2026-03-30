import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaHome,
  FaUserAlt,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Tilt from "react-parallax-tilt";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [toggle, setToggle] = useState(false);

  // Sticky Header
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy with activeSection update
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-100px 0px 0px 0px",
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = (id) => {
    setActiveSection(id);
    setToggle(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggle]);

  const toggleFunc = () => setToggle(!toggle);

  const navItems = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "about", label: "About", icon: FaUserAlt },
    { id: "skills", label: "Skills", icon: FaCode },
    { id: "project", label: "Projects", icon: FaProjectDiagram },
    { id: "contact", label: "Contact", icon: FaEnvelope },
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: FaTwitter, url: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`header-img container-fluid ${isSticky ? "sticky" : ""}`}
      >
        <div className="header flex container">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            glareEnable={true}
            transitionSpeed={1000}
            perspective={1000}
            scale={1.05}
            gyroscope={true}
            glareColor="transparent"
          >
            <div className="nav-logo">
              <h1>
                AJAY <span>Meena</span>
              </h1>
            </div>
          </Tilt>

          {/* Desktop Navigation */}
          <nav className="nav-bar desktop-nav">
            <ul className="flex nav-list">
              {navItems.map(({ id, label }) => (
                <li className="nav-item" key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link ${activeSection === id ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      setActiveSection(id);
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mob-nav-btn" onClick={toggleFunc} aria-label="Toggle menu">
            {toggle ? (
              <IoMdClose className="mob-nav-icon" />
            ) : (
              <FaBars className="mob-nav-icon" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation - LEFT SIDE */}
      <AnimatePresence>
        {toggle && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleFunc}
            />

            {/* Menu Panel - Left Side */}
            <motion.div
              className="mobile-menu-panel"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Profile Section */}
              <div className="mobile-profile">
                <div className="profile-image">
                  <div className="profile-circle">
                    <span>A</span>
                  </div>
                </div>
                <h3 className="profile-name">Ajay Meena</h3>
                <p className="profile-title">Full Stack Developer</p>
                <div className="profile-divider"></div>
              </div>

              {/* Navigation Links */}
              <ul className="mobile-nav-list">
                {navItems.map(({ id, label, icon: Icon }, index) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <a
                      href={`#${id}`}
                      className={`mobile-nav-link ${activeSection === id ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(id)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                        handleNavClick(id);
                      }}
                    >
                      <div className="nav-icon-wrapper">
                        <Icon className="nav-icon" />
                      </div>
                      <span className="nav-label">{label}</span>
                      <span className="nav-indicator"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Footer Section */}
              <div className="mobile-menu-footer">
                <div className="social-links">
                  {socialLinks.map(({ icon: Icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
                <a href="#contact" className="mobile-contact-btn" onClick={() => handleNavClick("contact")}>
                  Let's Connect
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};