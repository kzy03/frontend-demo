import React from "react";
import LogoTwo from "../../assets/LogoTwo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">
            <LogoTwo className="w-24" />
          </Link>
          <ul className="font-medium flex flex-row bg-white  border border-gray-100 rounded-lg space-x-8 mt-0 border-0 ">
            <li>
              <Link
                to="signIn"
                className="block p-2 rounded text-gray-700"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block p-2 rounded text-gray-700"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
