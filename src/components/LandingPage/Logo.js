import sunflower from "../../assets/sunflower.svg";

const Logo = () => {
  return (
    // <div style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
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
