import React from "react";
import Home from "./Pages/Home";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import RentForm from "./Pages/RentForm";



const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/rent' element={<RentForm/>} />
      </Routes>
    </Router>
  </div>
);

export default App;
