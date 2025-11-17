import React, { useEffect, useState, useRef } from "react";
import './mrf.css';
import { useNavigate } from "react-router-dom";

const NAVBAR_HEIGHT = 70; // keep in sync with your .navbar height in css

const Navbar2 = () => {
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    // IntersectionObserver options: trigger when at least 30% of section visible
    const ioOptions = {
      root: null,
      rootMargin: `-${NAVBAR_HEIGHT}px 0px 0px 0px`, // account for fixed navbar
      threshold: 0.3,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          setActiveSection(id);
        }
      });
    }, ioOptions);

    sections.forEach((sec) => observerRef.current.observe(sec));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // smooth scroll but account for fixed navbar offset
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // get element top relative to document
    const top = el.getBoundingClientRect().top + window.pageYOffset;
    const offset = NAVBAR_HEIGHT + 8; // extra 8px breathing space
    window.scrollTo({
      top: top - offset,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  return (
    <nav className="navbar2 d-flex justify-content-start">
      <ul>
        <li>
          <button
            className={activeSection === "home"  ? "active" : ""}
            onClick={() => {navigate("/");
             window.scrollTo(0, 0);}
            }
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={activeSection === "overview" || activeSection === "heading"? "active" : ""}
            onClick={() => scrollToSection("overview")}
          >
            Overview
          </button>
        </li>
        <li>
          <button
            className={activeSection === "trend" ? "active" : ""}
            onClick={() => scrollToSection("trend")}
          >
            Trends
          </button>
        </li>
        <li>
          <button
            className={activeSection === "report" ? "active" : ""}
            onClick={() => scrollToSection("report")}
          >
           Report
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
