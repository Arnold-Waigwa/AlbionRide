import React from "react";
import Navbar from "../components/Navbar";
import styles from "./FindaRide.module.css";
import Hero from "../components/findaridecomponents/Hero";

const FindaRide = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default FindaRide;
