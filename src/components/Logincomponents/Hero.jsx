import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.contentContainer}>
        <h1>Log In/ Sign Up</h1>
        <h2>Log in to Connect with Drivers and Riders </h2>
      </div>
    </section>
  );
};

export default Hero;
