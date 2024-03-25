import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// react icons
import { GiBunkBeds } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { MdMenu, MdClose } from "react-icons/md";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header
        className={`navbar-header ${
          scrollPosition > 80 ? "scroll-header" : ""
        }`}
      >
        <NavLink to="/" className="nav-logo">
          <GiBunkBeds className="logo-icon" />
          <span> Dev~</span> hostels
        </NavLink>
        <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" className="center-nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/hostels" className="center-nav-link">
              Hostels
            </NavLink>
          </li>
          <li>
            <NavLink to="/host-your-hostel" className="center-nav-link">
              Host
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="center-nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className="center-nav-link">
              Contacts
            </NavLink>
          </li>
        </ul>
        <div className="authentication-nav">
          <NavLink to="/signup" className="auth-link">
            <FaCircleUser /> Sign up
          </NavLink>
          <NavLink to="/login" className="auth-link login-button">
            Login
          </NavLink>
          {isOpen ? (
            <MdMenu className="nav-toggle" onClick={toggleMenu} />
          ) : (
            <MdClose className="nav-toggle" onClick={toggleMenu} />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
