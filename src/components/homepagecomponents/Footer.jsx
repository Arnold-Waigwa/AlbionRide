import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.pictureContainer}>
        <div className={styles.image}>
          <img
            src={getImageUrl("Images/findaride.png")}
            alt="find a ride image"
          />
          <div className={styles.content}>
            <h2>Find a Ride</h2>
            <p>Search for rides from other students.</p>
          </div>
        </div>
        <div className={styles.image}>
          <img
            src={getImageUrl("Images/offeraride.png")}
            alt="offer a ride image"
          />
          <div className={styles.content}>
            <h2>Offer a Ride</h2>
            <p>List your ride and earn extra money. </p>
          </div>
        </div>
        <div className={styles.image}>
          <img
            src={getImageUrl("Images/safeandsimple.png")}
            alt="safe and simple image"
          />
          <div className={styles.content}>
            <h2>Safe & Simple</h2>
            <p>Made for Albion students, with your safety in mind.</p>
          </div>
        </div>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <a href="">Log in/ Sign up</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
