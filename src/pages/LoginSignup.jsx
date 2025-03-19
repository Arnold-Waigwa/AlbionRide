import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Logincomponents/Hero";
import styles from "./LoginSignup.module.css";
import Footer from "../components/Logincomponents/Footer";

const LoginSignup = () => {
  return (
    <div className={styles.loginContainer}>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default LoginSignup;
