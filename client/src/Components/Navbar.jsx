import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("token") !== null;
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div>
      <nav className="bg-[#3f757e] text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 text-white">
            <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-20 w-[300px]" alt="Park&Go Logo" />
            </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to='/parking'
              className="text-[20px]  cursor-pointer hover:underline"
            >
              Parking
            </Link>
            <Link
              to="/rental"
              className="text-[20px]  cursor-pointer hover:underline"
            >
              Rental
            </Link>
           
            {isLoggedIn ? (
              <>
              <Link to='/myCar'>
                <span className="text-[20px]  cursor-pointer hover:underline">
                  Hii !! {user && user.userName ? user.userName : ""}
                </span>{" "}
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-[20px]  cursor-pointer hover:underline"
                >
                  Logout
                </button>
              </>

            ) : (
              <>
                <Link
                  to="/login"
                  className="text-[20px]  cursor-pointer hover:underline"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-[20px]  cursor-pointer hover:underline"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
