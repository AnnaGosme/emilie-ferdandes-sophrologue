import Name from './Name'
import Logo from "./Logo";

const LandingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "space-around",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Logo />
      </div>
      <div style={{ flexGrow: 4, flexShrink: 3, alignSelf: "center" }}>
        <Name />
      </div>
    </div>
  );
};

export default LandingPage;
