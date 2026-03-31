import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ cart }) => {
  return (
    <>
      <div className=" mx-auto">
        <div className="navbar bg-base-100 shadow-sm ">
          <div className="navbar-start container mx-auto">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
              </ul>
            </div>
            <a className="btn btn-ghost text-4xl gradient text-transparent bg-clip-text">
              DigiTools
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex justify-center items-center gap-4 font-semibold text-gray-900 cursor-pointer">
              <li>Products</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex justify-center items-center gap-4 font-semibold text-gray-900">
              <div className="text-3xl relative cursor-pointer">
                <CiShoppingCart />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
              <button className="cursor-pointer">Login</button>
              <button className="bg-gradient-to-l from-[#9514FA] to-[#4F39F6] px-4 py-2 rounded-full text-white cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
