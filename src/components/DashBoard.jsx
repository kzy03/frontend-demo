import React from "react";
import LogoOne from "../assets/LogoOne";
import LogoTwo from "../assets/LogoTwo";
import { Link } from "react-router-dom";
import {
  Home,
  CheckCircle,
  QrCode,
  ShoppingCart,
  MessagesSquare,
} from "lucide-react";

const DashBoard = () => {

  return (
    <div className="w-full h-full flex">


      <aside
        // id="default-sidebar"
        className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        // aria-label="Sidebar"
      >
        <div className="h-full px-3 py-10 overflow-y-auto bg-[#6f51a0]">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-white rounded-lg group"
              >
                <Home />
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg group"
              >
                <CheckCircle />
                <span className="ml-3">Rewards</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg group"
              >
                <QrCode />
                <span className="ml-3">Pay</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg group"
              >
                <ShoppingCart />
                <span className="ml-3">Merchent</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-700group"
              >
                <MessagesSquare />
                <span className="ml-3">Support</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full m-3">
        <div className="border-1 h-60">

          <div className="border rounded-md bg-white shadow-lg h-40 p-4 flex w-full">
            <h5 className="text-xl font-medium text-gray-700 ">Points</h5>
            <p className="text-md text-gray-700 self-end justify-self-end">
              00.00
            </p>
          </div>
        </div>
        <div className="bg-gray-400 p-4 border-1">

        </div>
        <div className="bg-gray-400 p-4 border-1">

        </div>
      </main>
    </div>
  );
};

export default DashBoard;
