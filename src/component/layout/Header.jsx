import { useEffect, useState, useCallback, useRef } from "react";
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
  const scrollTimeout = useRef(null);
  const observerRef = useRef(null);
  const headerRef = useRef(null);
  const isScrollingRef = useRef(false);
  const initialLoadRef = useRef(true);

  // Get header height
  const getHeaderHeight = useCallback(() => {
    return headerRef.current ? headerRef.current.offsetHeight : 80;
  }, []);

  // Sticky Header
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking && !isScrollingRef.current) {
        requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy - Fixed for mobile
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    if (sections.length === 0) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        // Get all visible sections
        const visibleSections = entries.filter(entry => entry.isIntersecting);

        if (visibleSections.length > 0) {
          // Find section with highest intersection ratio
          let bestMatch = visibleSections[0];
          let bestRatio = bestMatch.intersectionRatio;

          visibleSections.forEach(section => {
            if (section.intersectionRatio > bestRatio) {
              bestRatio = section.intersectionRatio;
              bestMatch = section;
            }
          });

          if (bestMatch && bestMatch.target.id && bestMatch.target.id !== activeSection) {
            setActiveSection(bestMatch.target.id);
          }
        }
      },
      {
        rootMargin: "-90px 0px -50px 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    observerRef.current = observer;

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [activeSection]);

  // Smooth scroll function
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) return;

    isScrollingRef.current = true;

    const headerHeight = getHeaderHeight();
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Update active section immediately
    setActiveSection(id);

    // Reset scrolling flag
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  }, [getHeaderHeight]);

  // Handle navigation click
  const handleNavClick = useCallback((id, e) => {
    if (e) e.preventDefault();

    if (toggle) {
      setToggle(false);
      setTimeout(() => {
        scrollToSection(id);
      }, 200);
    } else {
      scrollToSection(id);
    }
  }, [toggle, scrollToSection]);

  // Handle body scroll lock for mobile menu
  useEffect(() => {
    if (toggle) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [toggle]);

  const toggleFunc = useCallback(() => {
    setToggle(prev => !prev);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "about", label: "About", icon: FaUserAlt },
    { id: "skills", label: "Skills", icon: FaCode },
    { id: "project", label: "Projects", icon: FaProjectDiagram },
    { id: "contact", label: "Contact", icon: FaEnvelope },
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/ajaymeena9069", label: "GitHub" },
    { icon: FaTwitter, url: "https://twitter.com/", label: "Twitter" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/ajay-meena-0719ab28a/", label: "LinkedIn" },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      x: "-100%",
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className={`header-img container-fluid ${isSticky ? "sticky" : ""}`}
      >
        <div className="header flex container">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={false}
            transitionSpeed={600}
            perspective={800}
            scale={1.02}
            gyroscope={false}
            className="nav-logo-wrapper"
          >
            <div className="nav-logo">
              <h1>
                AJAY <span>Meena</span>
              </h1>
            </div>
          </Tilt>

          <nav className="nav-bar desktop-nav">
            <ul className="flex nav-list">
              {navItems.map(({ id, label }) => (
                <li className="nav-item" key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link ${activeSection === id ? "active" : ""}`}
                    onClick={(e) => handleNavClick(id, e)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <motion.button
            className="mob-nav-btn"
            onClick={toggleFunc}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            {toggle ? (
              <IoMdClose className="mob-nav-icon" />
            ) : (
              <FaBars className="mob-nav-icon" />
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">
        {toggle && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={toggleFunc}
            />
            <motion.div
              className="mobile-menu-panel"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
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

              <ul className="mobile-nav-list">
                {navItems.map(({ id, label, icon: Icon }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`mobile-nav-link ${activeSection === id ? "active" : ""}`}
                      onClick={(e) => handleNavClick(id, e)}
                    >
                      <div className="nav-icon-wrapper">
                        <Icon className="nav-icon" />
                      </div>
                      <span className="nav-label">{label}</span>
                      <span className="nav-indicator"></span>
                    </a>
                  </li>
                ))}
              </ul>

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
                <a
                  href="#contact"
                  className="mobile-contact-btn"
                  onClick={(e) => handleNavClick("contact", e)}
                >
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