import React from "react";
import Home from "./Pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import RentForm from "./Pages/RentForm";
import CarRent from "./Pages/CarRent.jsx";
import MyCar from "./Pages/myCar.jsx";

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lend" element={<RentForm />} />
        <Route path="/rent" element={<CarRent />} />
        <Route path="/myCar" element={<MyCar />} />
      </Routes>
    </Router>
  </div>
);

export default App;
