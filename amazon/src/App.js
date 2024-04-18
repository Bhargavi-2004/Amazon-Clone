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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// https://www.youtube.com/watch?v=RDV3Z1KCBvo&t=1427s
