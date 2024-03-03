import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

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
     <nav class="bg-[#232121]">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-20 w-[300px]" alt="Flowbite Logo" />
            </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-sm text-black cursor-pointer hover:underline"
            >
              Parking
            </a>
            <a
              href="#"
              className="text-sm text-black cursor-pointer hover:underline"
            >
              Rental
            </a>
            {isLoggedIn ? (
              <>
                <span className="text-sm text-black cursor-pointer hover:underline">
                  Hii !! {user && user.userName ? user.userName : ""}
                </span>{" "}
                <button
                  onClick={handleLogout}
                  className="text-sm text-black cursor-pointer hover:underline"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm text-black cursor-pointer hover:underline"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-sm text-black cursor-pointer hover:underline"
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
