import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./navbar/link/Home";
import Signin from "./navbar/link/Signin";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
