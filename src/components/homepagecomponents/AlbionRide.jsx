import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./AlbionRide.module.css";

const AlbionRide = () => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl("nav/Albionride.jpeg")}
        alt="Albion Ride Logo"
        className={styles.image}
      />
      <div className={styles.content}>
        <h1>What is Albion Ride?</h1>
        <p>
          Albion Ride is a platform made by students, for students. We connect
          Albion College students who need rides with drivers willing to offer
          them. Whether you're trying to get to the store, the airport, or home
          for the weekend, we’re here to make it easier.
        </p>
      </div>
    </div>
  );
};

export default AlbionRide;
