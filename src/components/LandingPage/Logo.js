import sunflower from "../../assets/sunflower.svg";
import LandingPage from "./LandingPage";

const Logo = () => {
  return (
    <div>
        <img
          src={sunflower}
          style={{ width: "10rem", height: "10rem" }}
          alt="Emilie Fernandes Sophrologue"
        ></img>
    </div>
  );
};

export default Logo;
