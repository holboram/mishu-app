import React, { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo-servicii-tehnice.svg";
import telefon from "../images/telefon-servicii-tehnice-mobile.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src={logo}
            loading="lazy"
            alt="Servicii Tehnice logo"
            width="114"
          />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu on" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-links"
              onClick={closeMobileMenu}
              to="/"
            >
              Acasă
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-links"
              onClick={closeMobileMenu}
              to="/servicii"
            >
              Servicii
            </NavLink>
          </li>
          <li className="nav-item border">
            <NavLink
              // to="/sign-up"
              to="tel: 0747 835 456"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              <img
                src={telefon}
                loading="lazy"
                alt="Iconita numar de telefon 0747 457 394"
                width="39"
              />
              <span>Suna</span>&nbsp;Acum
            </NavLink>
          </li>
        </ul>
        <Button />
      </nav>
    </header>
  );
};

export default Navbar;
