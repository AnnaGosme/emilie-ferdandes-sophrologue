import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import About from "./About";
import Consultations from "./Consultations";
import Faq from "./Faq";
import Contact from "./Contact";

const NavBar = () => {
  return (
    <Router>
      <div
        style={{
          fontFamily: "Raleway, sans-serif",
          fontSize: "2rem",
          textAlign: "center",
          justifySelf: "center",
          alignItems: "center",
        }}
      >
        <nav>
          <Link to="/accueil">Accueil</Link>
          <Link to="/a-propos">A propos</Link>{" "}
          <Link to="/consultations">Types de consultations</Link>{" "}
          <Link to="/faq">FAQ</Link> <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/accueil" element={<LandingPage />}></Route>

          <Route path="/a-propos" element={<About />}></Route>

          <Route path="/consultations" element={<Consultations />}></Route>

          <Route path="/faq" element={<Faq />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;
