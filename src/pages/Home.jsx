import React from "react";
import Hero from "../components/homepagecomponents/Hero";
import styles from "./Home.module.css";
import { getImageUrl } from "../utils";
import AlbionRide from "../components/homepagecomponents/AlbionRide";
import PurpleStrip from "../components/homepagecomponents/PurpleStrip";
import Footer from "../components/homepagecomponents/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Hero />
      <AlbionRide />
      <PurpleStrip />
      <Footer />
    </div>
  );
};

export default Home;
