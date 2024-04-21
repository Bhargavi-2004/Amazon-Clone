import "./App.css";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// https://youtu.be/RDV3Z1KCBvo?si=XkC-aUFMwEnU79VO&t=12212