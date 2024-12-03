import React, { useState } from 'react';
import './Hero.scss';
import img from '../../../src/assets/solution/Picture2.png';
import { TypeAnimation } from 'react-type-animation';
import logo from "../../assets/hero/logo.png"; // Logo import

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="hero__section">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar__container container">
          {/* Navigation Links */}
          <ul className={`navbar__links ${isMobileMenuOpen ? 'open' : ''}`}>
            {['Services', 'Solutions', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={closeMobileMenu}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Logo on the Right */}
          <div className="navbar__logo">
            <img src={logo} alt="Logo" />
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="navbar__hamburger" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero__container">
        <div className="hero__left">
          <img src={img} alt="Hero" />
        </div>
        <div className="hero__right">
          <h1>
            <TypeAnimation
              sequence={['Banking & Payment Solutions']}
              speed={50} 
              cursor={false}
            />
          </h1>
          <p>Editeur de solutions <br /> Centre de services technologique</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
