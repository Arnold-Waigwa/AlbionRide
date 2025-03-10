import React, { useState } from "react";
import { getImageUrl } from "../utils";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarImage}>
        <img src={getImageUrl("nav/Albionride.jpeg")} alt="Albion Ride Logo" />
      </div>
      <div className={styles.navbarContainer}>
        <h3 className={styles.title}>Albion Ride</h3>
        <ul className={styles.menuItems}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log in/Sign up</Link>
          </li>
          <li>
            <Link to="/findaride">Find a Ride</Link>
          </li>
          <li>
            <Link to="/offeraride">Offer a Ride</Link>
          </li>
          <li
            className={styles.dropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className={styles.moreBtn}>More ▼</span>
            {isDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link to="/safetyandguidelines">Safety & Guidelines</Link>
                </li>
                <li>
                  <Link to="/termsandservices">Terms & Services</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
