import "./App.css";
import NavBar from "./components/NavBar";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div
      style={{
        fontFamily: "Raleway, sans-serif",
    
      }}
    >
      <NavBar />
      <Quotes />
    </div>
  );
}

export default App;
