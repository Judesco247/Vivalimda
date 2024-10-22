import React from "react";
import { researchimg } from "../assets";
import { Link } from "react-router-dom";

const Integrationbanner = () => (
  <div>
    <div className="hidden md:block">
      <img
        className="lg:w-[1600px] lg:h-[400px] md:w-full md:h-[380px]"
        src={researchimg}
        alt="banner"
      />
      <div className="ml-16 flex-[1.5] lg:max-w-full h-[650px] md:w-full justify-start item-start rounded-lg p-8 mt-[-440px]">
        <h4 className="ml-3 text-background text-[14]  font-secondaryfont mt-20">
          SERVICES
        </h4>
        <h1 className="ml-3 text-white text-[50px] font-semibold mb-4 font-bodyfont-400">
          Integration
        </h1>
        <p className="ml-3 w-[550px] text-[15px] mb-4 font-bodyfont-400 absolute text-white">
          We provide integration services to help businesses connect and
          streamline their systems and processes, improving efficiency and
          reducing errors.
        </p>
        <div className="mt-32">
          <Link to="/contact-us">
            <button className="ml-3 w-[200px] py-3 px-3 bg-background text-white absolute font-bodyfont">
              Speak to a Consultant
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>

    <div className="block md:hidden w-[428px] h-[404px] bg-color0 mb-40 mt-4">
      <div className="ml-3 w-[380px] h-[483.97px]">
        <h4 className="ml-6 text-background text-[14]  font-secondaryfont mb-4 mt-10 absolute">
          SERVICES
        </h4>
        <h1 className="ml-6 w-[364px] h-[123px] text-[33px] text-white font-bold font-bodyfont-700 mb-4 mt-20 absolute">
          Integration
        </h1>
        <p className="ml-6 w-[363px] h-[120px] text-[15px] mb-4 font-bodyfont-400 absolute text-color3 mt-40">
          We provide integration services to help businesses connect and
          streamline their systems and processes, improving efficiency and
          reducing errors.
        </p>
        <br />
        <Link to="/contact-us">
          <button className="ml-6 w-[350px] h-[56px] py-3 px-3 bg-background text-white absolute mt-72 font-bodyfont">
            Speak to a Consultant
          </button>
        </Link>{" "}
      </div>
    </div>
  </div>
);

export default Integrationbanner;
