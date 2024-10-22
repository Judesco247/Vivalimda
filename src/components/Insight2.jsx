import React from "react";
import { research2 } from "../assets";
import { Link } from "react-router-dom";

const Insight2 = () => (
  <div className="mt-20 mb-20 md:ml-20 items-center">
    <div class="flex">
      <div className="w-[554px] h-[429px] lg:ml-0 md:ml-[50px]">
        <h2 className="text-[25px] text-color1 font-bold font-bodyfont-400 md:w-[400px] w-[350px] mb-5">
          {/* <span>
            <img src={line} alt="bluetick" className="mr-2 mb-2" />
          </span> */}
          How We can Help as a User Researcher
        </h2>
        <p className="text-color2 text-[13px] font-bodyfont-400 md:w-[450px] w-[350px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
          vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit
          amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis sit vehicula dui sit amet ligula
          cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
          vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis sit vehicula
        </p>
        <div className="mt-4">
          <Link to="/">
            <button className="w-[200px] py-3 px-3 bg-background text-white px-4 py-2 absolute font-bodyfont">
              Get Free Quotation
            </button>
          </Link>{" "}
        </div>
      </div>
      <img
        src={research2}
        alt="Image"
        className="w-[400px] h-[400px] hidden lg:block"
      />
    </div>
  </div>
);

export default Insight2;
