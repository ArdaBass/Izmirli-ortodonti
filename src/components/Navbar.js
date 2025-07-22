import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="İzmirli Ortodonti Logo" />
          </Link>
        </div>
        <div
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar top-bar"></span>
          <span className="bar middle-bar"></span>
          <span className="bar bottom-bar"></span>
        </div>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" className={isActive("/") ? "active" : ""} onClick={closeMenu}>Anasayfa</Link>
        </li>
        <li>
          <Link to="/hakkimizda" className={isActive("/hakkimizda") ? "active" : ""} onClick={closeMenu}>Hakkımızda</Link>
        </li>
        <li>
          <Link to="/tedaviler" className={isActive("/tedaviler") ? "active" : ""} onClick={closeMenu}>Tedaviler</Link>
        </li>
        <li>
          <Link to="/galeri" className={isActive("/galeri") ? "active" : ""} onClick={closeMenu}>Galeri</Link>
        </li>
        <li>
          <Link to="/iletisim" className={isActive("/iletisim") ? "active" : ""} onClick={closeMenu}>İletişim</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
