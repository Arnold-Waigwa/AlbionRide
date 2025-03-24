import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <div>
      <img src={getImageUrl("Images/arrow.png")} alt="Image of arrow" />
    </div>
  );
};

export default Hero;
