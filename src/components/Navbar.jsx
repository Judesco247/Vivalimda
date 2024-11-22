import { useState } from "react";

import { vivalimdalogo, close, menu } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [open, setopen] = useState(false);
  const [activePage, setActivePage] = useState(location.pathname);
  return (
    <nav
      className="flex pt-3 justify-between items-center navbar lg:w-[1280px] w-[428px] lg:h-[81px] h-[75px] md:w-[850px] mb-5
       l-[160px] t-[10px]"
    >
      {/* <nav className="flex items-center justify-between pt-5"></nav> */}
      <img
        src={open ? close : menu}
        className="md:hidden  fixed right-5 cursor-pointer z-20 top-6 text-black"
        onClick={() => setopen(!open)}
      />
      <img src={vivalimdalogo} alt="logo" className="w-77 h-[170px] md:ml-0 ml-10" />
      <ul
        className={`bg-dimWhite backdrop-blur-lg  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${
          !open ? "right-[-100%] " : "right-0"
        }`}
      >
        <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/"
            className={`cursor-pointer font-bodyfont-700 text-sm inline-block md:py-5 py-3 ${
               activePage === "/" ? "text-background" : "black"
            }`}
            onClick={() => setActivePage("/")}
          >
            Home
          </Link>
        </li>
        <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/about-us"
            className={`cursor-pointer font-bodyfont-700 text-sm inline-block md:py-5 py-3 ${
               activePage === "/about-us" ? "text-background" : "black"
            }`}
            onClick={() => setActivePage("/about-us")}
          >
            About Us
          </Link>
        </li>
        <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/services"
            className={`cursor-pointer font-bodyfont-700 text-sm inline-block md:py-5 py-3 ${
               activePage === "/services" ? "text-background" : "black"
            }`}
            onClick={() => setActivePage("/services")}
          >
            Services
          </Link>
          <ul></ul>
        </li>
        {/* <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
               <Link to="/case-studies" className="cursor-pointer font-Barlow font-bodyfont-700 text-sm inline-block md:py-5 py-3">Case Studies</Link>
            </li> */}
        {/* <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/news"
            className={`cursor-pointer font-bodyfont-700 text-sm inline-block md:py-5 py-3 ${
               activePage === "/news" ? "text-background" : "black"
            }`}
            onClick={() => setActivePage("/news")}
          >
            News
          </Link>
        </li> */}
        <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <button className="w-[150px] py-3 px-3 text-[13px] font-bold text-color0 border-2 border-color0 hover:text-white hover:bg-color0 font-bodyfont-400 ">
            <Link
              to="/contact-us"
              className="cursor-pointer font-Barlow font-bodyfont-700 text-sm inline-block"
            >
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
