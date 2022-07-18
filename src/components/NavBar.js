import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import About from "./About";
import Consultations from "./Consultations";
import Faq from "./Faq";
import Contact from "./Contact";

import Name from "./LandingPage/Name";
import sunflower from "../assets/sunflower.svg";

const NavBar = () => {
  return (
    <div>
      <Router>
        <div
          style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "1rem",

            display: "flex",
            justifyContent: "space-around",
            alignContent: "space-around",
            flexDirection: "column",
          }}
        >
          <nav
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "space-around",
            }}
          >
            <a href={<LandingPage />}>
              
              <img
                src={sunflower}
                style={{ width: "10rem", height: "10rem" }}
                alt="Emilie Fernandes Sophrologue"
                
              ></img>
            </a>
            <Link to="/" style={{ textDecoration: "none", margin: "1rem" }}>
              Accueil
            </Link>
            <Link
              to="/a-propos"
              style={{ textDecoration: "none", margin: "1rem" }}
            >
              A propos
            </Link>

            <Link
              to="/consultations"
              style={{ textDecoration: "none", margin: "1rem" }}
            >
              Types de consultations
            </Link>

            <Link to="/faq" style={{ textDecoration: "none", margin: "1rem" }}>
              FAQ
            </Link>

            <Link
              to="/contact"
              style={{ textDecoration: "none", margin: "1rem" }}
            >
              Contact
            </Link>
          </nav>
          <div>
            <Name />
          </div>

          <Routes>

            <Route path="/" element={<LandingPage />}></Route>

            <Route path="/a-propos" element={<About />}></Route>

            <Route path="/consultations" element={<Consultations />}></Route>

            <Route path="/faq" element={<Faq />}></Route>

            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
      <div></div>
    </div>
  );
};

export default NavBar;
