import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/checkout">
            <p>Checkout</p>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// https://www.youtube.com/watch?v=RDV3Z1KCBvo&t=1427s