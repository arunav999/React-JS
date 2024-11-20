import React from "react";
import OmniFoodLogo from "../../public/omnifood-logo.png";

const Header = ({ isNavOpen, handleNavToggle, handleNavClose, isSticky }) => {
  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <a href="#">
        <img src={OmniFoodLogo} alt="Omni food logo" class="logo" />
      </a>
      <nav className={`main-nav ${isNavOpen ? "nav-open" : ""}`}>
        <button className="btn-mobile-nav" onClick={handleNavToggle}>
          <span className="menu-icon"></span>
        </button>
        <ul className="main-nav-list">
          <li>
            <a href="#how" onClick={handleNavClose} className="main-nav-link">
              How it works
            </a>
          </li>
          <li>
            <a href="#meals" onClick={handleNavClose} className="main-nav-link">
              Meals
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={handleNavClose}
              className="main-nav-link"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              onClick={handleNavClose}
              className="main-nav-link"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#try"
              onClick={handleNavClose}
              className="main-nav-link nav-cta"
            >
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
