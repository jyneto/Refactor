import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons
import "./Navbar.css";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => setIsNavOpen(!isNavOpen);
  const closeMenu = () => setIsNavOpen(false); // Closes menu when clicking a link

  return (
    <>
      <header className="navbar">
        <h2 className="logo">J.Toledo</h2>

        {/* Mobile menu button */}
        <button className="toggle-input" onClick={toggleMenu}>
          {isNavOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navigation Menu */}
        <nav className={isNavOpen ? "open" : ""}>
          <ul className={isNavOpen ? "nav-menu open" : "nav-menu"}>
            {/* Close Button inside Mobile Menu */}
            <button className="close-menu" onClick={closeMenu}>
              <X size={30} color="rgba(255, 128, 0, 0.69)" />
            </button>

            <li>
              <NavLink 
                to="/" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/experience" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/skills" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
