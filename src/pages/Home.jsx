import React from "react";
import Hero from "../components/homepagecomponents/Hero";
import styles from "./Home.module.css";
import { getImageUrl } from "../utils";
import AlbionRide from "../components/homepagecomponents/AlbionRide";
import PurpleStrip from "../components/homepagecomponents/PurpleStrip";
import Footer from "../components/homepagecomponents/Footer";

const Home = () => {
  return (
    <div
      className={styles.homeContainer}
      style={{
        backgroundImage: `url(${getImageUrl("Images/HomeBackground.webp")})`,
      }}
    >
      <Hero />
      <AlbionRide />
      <PurpleStrip />
      <Footer />
    </div>
  );
};

export default Home;
