import React, { useState } from "react";
import { getImageUrl } from "../utils";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={styles.navbarWrapper}>
      <span className={styles.navbarImage}>
        <img src={getImageUrl("Images/Logo.png")} alt="Albion Ride Logo" />
      </span>
      <nav className={styles.navbar}>
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
          <li className={styles.dropdown}>
            <div
              className={styles.dropdownWrapper}
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
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
