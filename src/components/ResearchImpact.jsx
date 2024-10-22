import React from "react";
import styles from "../style";
import { arrow_logo } from "../assets";

const ResearchImpact = () => (
  <div className={`${styles.paddingX} ${styles.flexStart}`}>
    <div className="mt-10 md:w-[1280px] w-[428px] md:mb-20">
      <h5 className="mt-10 mb-4 text-center text-color1 text-[25px] font-bold font-bodyfont-700">
        How User Research Impacts Your Business
      </h5>
      <p className="mb-20 text-color2 text-[14px] font-bodyfont-400 text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
        vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing.
      </p>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-12 items-center">
        <div class="p-4 w-[300px] ">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-24 items-center mb-3"
          />
          <h5 className="text-center text-color6 text-[15px] font-bold font-bodyfont-400 mb-3">
            Enhanced User Experience
          </h5>
          <p className="text-color2 text-[14px] font-bodyfont-400 w-[300px] text-center ">
            cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            vehicula dui sit amet ligula cursus. dolor sit amet dolor
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-24 items-center mb-3"
          />
          <h5 className="text-center text-color6 text-[15px] font-bold font-bodyfont-400 mb-3">
            Informed Decision Making
          </h5>
          <p className="text-color2 text-[14px] font-bodyfont-400 w-[300px] text-center">
            cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            vehicula dui sit amet ligula cursus. dolor sit amet dolor
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-24 items-center mb-3"
          />
          <h5 className="text-center text-color6 text-[15px] font-bold font-bodyfont-400 mb-3">
            Reduced Risk and Cost
          </h5>
          <p className="text-color2 text-[14px] font-bodyfont-400 w-[300px] text-center">
            cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            vehicula dui sit amet ligula cursus. dolor sit amet dolor
          </p>
        </div>
        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-24 items-center mb-3"
          />
          <h5 className="text-center text-color6 text-[15px] font-bold font-bodyfont-400 mb-3">
            Competitive Advantage
          </h5>
          <p className="text-color2 text-[14px] font-bodyfont-400 w-[300px] text-center ">
            cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            vehicula dui sit amet ligula cursus. dolor sit amet dolor
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-24 items-center mb-3"
          />
          <h5 className="text-center text-color6 text-[15px] font-bold font-bodyfont-400 mb-3">
            Increased Customer Loyalty
          </h5>
          <p className="text-color2 text-[14px] font-bodyfont-400 w-[300px] text-center">
            cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            vehicula dui sit amet ligula cursus. dolor sit amet dolor
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-24 items-center mb-3"
          />
          <h5 className="text-center text-color6 text-[15px] font-bold font-bodyfont-400 mb-3">
            Iterative Improvement
          </h5>
          <p className="text-color2 text-[14px] font-bodyfont-400 w-[300px] text-center">
            cursus. dolor sit amet dolor adipiscing. Lorem ipsum dolor sit amet,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            vehicula dui sit amet ligula cursus. dolor sit amet dolor
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ResearchImpact;
