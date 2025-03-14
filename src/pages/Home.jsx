import React from "react";
import Hero from "../components/homepagecomponents/Hero";
import styles from "./Home.module.css";
import { getImageUrl } from "../utils";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className={styles.homeContainer}
        style={{
          backgroundImage: `url(${getImageUrl("Images/HomeBackground.webp")})`,
        }}
      >
        <Hero />
      </div>
    </>
  );
};

export default Home;
