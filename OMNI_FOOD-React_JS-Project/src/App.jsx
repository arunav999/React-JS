import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent/Main";
import Footer from "./Components/Footer";

import "./Components/CSS/general.css";
import "./Components/CSS/style.css";
import "./Components/CSS/responsive.css";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Handle mobile navigation toggle
  const handleNavToggle = () => {
    setIsNavOpen(isNavOpen);
  };

  // Handle auto-close on nav-click
  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  // Sticky header logic using IntersectionObserver
  useEffect(() => {
    const sectionHeroEl = document.querySelector(".section-hero");
    const obs = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];
        if (!ent.isIntersecting) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );
    if (sectionHeroEl) {
      obs.observe(sectionHeroEl);
    }

    return () => {
      if (sectionHeroEl) {
        obs.unobserve(sectionHeroEl);
      }
    };
  }, []);

  return (
    <>
      <Header
        isNavOpen={isNavOpen}
        handleNavToggle={handleNavToggle}
        handleNavClose={handleNavClose}
        isSticky={isSticky}
      />
      <MainContent />
      <Footer currentYear={currentYear} />
    </>
  );
};

export default App;
