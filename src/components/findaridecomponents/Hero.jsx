import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Link to="/">
        <img
          src={getImageUrl("Images/arrow.png")}
          alt="Image of arrow"
          className={styles.arrow}
        />
      </Link>
      <img
        src={getImageUrl("Images/roadtrip.png")}
        alt="image of road trip"
        className={styles.roadTrip}
      />
      <Link to="/" className={styles.button}>
        Find a Ride
      </Link>
      <Link to="/" className={styles.button}>
        Publish a Ride
      </Link>
    </div>
  );
};

export default Hero;
