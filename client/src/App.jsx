import React from "react";
import Home from "./Pages/Home";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";


const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
);

export default App;
