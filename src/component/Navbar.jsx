import React from "react";
import { Link, NavLink } from "react-router";
import logoImage from "../assets/logo.webp"
import Login from "../pages/Login";
import Register from "../pages/Register";

const Navbar = () => {

    const getNavActive = ({ isActive }) => {
    const navLink = "border-b rounded-none border-[#632EE3] text-[18px] font-semibold bg-linear-to-r from-[#2e52e3] to-[#065265] bg-clip-text text-transparent";
    const navLinkActive = "text-[16px] font-medium";

    return isActive ? navLink : navLinkActive; 
  };


  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm px-5 md:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              <li>
                <NavLink to="/" className={getNavActive } >Home</NavLink>
              </li>
              <li>
                <NavLink to="/service" className={getNavActive}>Services</NavLink>
              </li>
            </ul>
          </div>

          <Link to="/">
            <div className="flex justify-center items-center">
              <img src={logoImage} alt="" className="w-8 h-8" />
              <a className="btn btn-ghost p-1 text-lg  bg-linear-to-r from-[#2e52e3] to-[#065265] bg-clip-text text-transparent">
                WarmPaws
              </a>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 text-[18px]">
            <li>
              <NavLink to="/" className={getNavActive}>
                
                Home
              </NavLink>
            </li>
            <li>
              
              <NavLink to="/service" className={getNavActive}>
                
                Services
              </NavLink>
            </li>
        
          </ul>
        </div>

        <div className="navbar-end flex gap-1 md:gap-3">
          <Link to="/signup"
            className="px-3 rounded-md text-white text-[16px] font-semibold btn 
                                bg-linear-to-r from-[#2e52e3] to-[#065265] hover:from-blue-300 hover:to-purple-300"
          > Register
          </Link>
          <Link to="/login"
            className="px-3 border-2 rounded-md text-[#2e52e3] text-[16px] font-semibold  btn 
                                bg-linear-to-r from-[#cfd2de] to-[#a7d1dc] hover:from-white hover:to-purple-300"
          > Login
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
