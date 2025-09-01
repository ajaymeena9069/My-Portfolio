import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
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

  // 🔥 Proper ScrollSpy with activeSection update
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // state update yahi se hoga
          }
        });
      },
      {
        root: null,
        rootMargin: "-100px 0px 0px 0px", // sticky header ka offset
        threshold: 0.5, // 50% section visible hone pe active
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Mobile menu toggle
  const toggleFunc = () => setToggle(!toggle);
  const nav_style = toggle ? "mob-menue" : "desktop-menue";

  return (
    <header className={`header-img container-fluid ${isSticky ? "sticky" : ""}`}>
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

        <nav className="nav-bar">
          <ul className={`flex nav-list ${nav_style}`}>
            {["home", "about", "skills", "project", "contact"].map((id) => (
              <li className="nav-item" key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  onClick={() => setActiveSection(id)} // click pe bhi turant active
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {toggle ? (
          <IoMdClose onClick={toggleFunc} className="mob-nav" />
        ) : (
          <FaBarsStaggered onClick={toggleFunc} className="mob-nav" />
        )}
      </div>
    </header>
  );
};
