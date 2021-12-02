import React, { useState } from "react";
import ButtonPhoneNo from "../components/ButtonPhoneNo";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../assets/logo-servicii-tehnice.svg";
import phone from "../assets/telefon-servicii-tehnice-mobile.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src={logo}
            loading="lazy"
            alt="Servicii Tehnice logo"
            width="114"
          />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu on" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              exact
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
              to="/service"
            >
              Servicii
            </NavLink>
          </li>
          <li className="nav-item border">
            <Link
              to="tel: 0747 835 456"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              <img
                src={phone}
                loading="lazy"
                alt="Iconita numar de telefon 0747 457 394"
                width="39"
              />
              <span>Suna</span>&nbsp;Acum
            </Link>
          </li>
        </ul>
        <ButtonPhoneNo />
      </nav>
    </header>
  );
};

export default Navbar;
