import React from "react";
import styles from "../style";
import { logo, globe, facebook, instagram, twitter, linkedin } from "../assets";
import { Link } from "react-router-dom";
import { footerLinks, socialMedia2 } from "../constants";

const Footer = () => (
  <div className={`sm:px-16 px-6 flex justify-center items-start mt-10`}>
    <div className=" xl:max-w-[1280px] w-full">
      <div class="flex flex-col">
        <img src={logo} alt="atendi" className="w-[77px] h-[81px]" />
      </div>
      <hr class="border-2 border-color1" />
      <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div
          className={`${styles.flexStart} md:flex-row flex-col mb-10 w-full`}
        >
          <div className="flex-[3.0] flex flex-col justify-start mr-[100px] w-full ">
            {/* <img src={logo} alt="logo" className="w-full " /> */}
            <p
              className={` mt-2 max-w-[470px] text-color2 text-[13px] font-bodyfont-700 pt-5 `}
            >
              VIVALIMDA empowers customer engagement through innovative technology
              solutions. Our services optimize operations, enhance data
              insights, and create a seamless customer experience, helping
              businesses of all sizes achieve their goals with ease
            </p>
          </div>
          <div className="mr-6 flex-[2.0] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="text-[12px] text-color1 font-bold font-bodyfont-700">
                {" "}
                COMPANY{" "}
              </h4>
              <div className="list-none mb-4 block ">
                <Link
                  to="/"
                  className={
                    "text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block"
                  }
                >
                  About us{" "}
                </Link>
                <Link
                  to="/about-us"
                  className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
                >
                  Leadership{" "}
                </Link>
                <Link
                  to="/"
                  className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
                >
                  News{" "}
                </Link>
                <Link
                  to="/"
                  className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
                >
                  Case studies{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="mr-6 flex-[2.0] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="text-[12px] text-color1 font-bold font-bodyfont-700">
                {" "}
                SERVICES{" "}
              </h4>
              <ul className="list-none mb-4 block">
                <Link
                  to="/integration"
                  className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
                >
                  Integration{" "}
                </Link>
                <Link
                  to="/knowledge-management"
                  className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
                >
                  Knowledge Management{" "}
                </Link>
                <Link
                  to="/business-Analyst"
                  className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
                >
                  Business Analysis{" "}
                </Link>
                <Link
                  to="/project-management"
                  className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
                >
                  Project Management{" "}
                </Link>
                <Link
                  to="/user-research"
                  className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
                >
                  User Research{" "}
                </Link>
              </ul>
            </div>
          </div>

          <div className="flex-[2.0] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="text-[12px] text-color1 font-bold font-bodyfont-700">
                {" "}
                SUPPORT{" "}
              </h4>
              <ul className="list-none mb-4">
                <Link
                  to="/"
                  className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
                >
                  FAQ{" "}
                </Link>
                <Link
                  to="/"
                  className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
                >
                  Trouble Shooting{" "}
                </Link>
              </ul>
            </div>
          </div>

          <div className="flex-[2.3] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ">
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="text-[12px] text-color1 font-bold font-bodyfont-700">
                {" "}
                CONTACT US{" "}
              </h4>
              <ul className="list-none mb-4">
                <li
                  className={`text-color2 text-[13px] font-bodyfont-700 pt-5 block `}
                >
                  {/* Corporate Headquarters
                  <br />
                  10 Almaden Blvd, Suite 990
                  <br />
                  San Jose, CA 95113 USA  */}
                  Suite 110 <br />
                  150 Midsummer Boulevard<br />
                  Milton Keynes <br />
                  MK9 1FD <br />England.
                </li>
                <li
                  className={`text-color2 text-[13px] font-bodyfont-700 pt-5 block `}
                >
                 +441908103520
                </li>
                <li
                  className={`text-color2 text-[13px] font-bodyfont-700 pt-5 block `}
                >
                  info@atendiconsulting.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-between items-center md:flex-row flex-col pt-6">
        {/* <div className="container mx-auto p-2"> */}
        {/* <div className="flex items-center">
          <img src={globe} alt="globe" className="mr-2" />
          <p className="text-color8 text-[14px] font-semibold font-bodyfont-400">
            Nigerian English | EN
          </p>
        </div> */}

        {/* <div></div> */}

        {/* </div> */}
        <div className="mr-6 flex flex-row md:mt-0 mt-10">
          {socialMedia2.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia2.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
      <hr class="border-1 border-color2 mt-5 mb-4" />

      <div class="flex flex-wrap justify-between items-center mb-10">
        <p class="text-left text-color2 text-[13px] font-bodyfont-700 pt-5">
          &copy; 2022 Attendi Corporation. All rights reserved.
        </p>

        <div class="md:grid grid-cols-3 gap-4 text-right">
          <Link
            to="/"
            className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
          >
            Cookie Settings{" "}
          </Link>
          <Link
            to="/"
            className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
          >
            Legal Information{" "}
          </Link>
          <Link
            to="/"
            className={`text-color2 text-[13px] font-bodyfont-700 hover hover:text-background pt-5 cursor-pointer block`}
          >
            Privacy Policy{" "}
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
