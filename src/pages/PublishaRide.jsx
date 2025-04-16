import React from "react";
import styles from "./PublishaRide.module.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const PublishaRide = () => {
  return (
    <section>
      <div className={styles.title}>
        <Link to="/">Home</Link>
        <h1>Find a Ride</h1>
      </div>
      <div className={styles.enterLocation}>
        <input
          type="text"
          placeholder="Pickup Address"
          className={styles.searchBar}
        />
        <input
          type="text"
          placeholder="Destination Address"
          className={styles.searchBar}
        />
        <div className={styles.departureDate}>
          <h3>Departure Date</h3>

          <form action="">
            <input type="date" name="departure" required />
          </form>
        </div>
      </div>
    </section>
  );
};

export default PublishaRide;
