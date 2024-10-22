import React from "react";
import styles from "../style";
import { arrow_logo } from "../assets";

const AnalysisServices = () => (
  <div className={`hidden md:block ${styles.paddingX} ${styles.flexStart}`}>
    <div className="mr-10 mt-10 md:w-full w-[428px] md:mb-20">
      <h5 className="mt-10 mb-4 text-center text-color1 text-[25px] font-bold font-bodyfont-700">
        Benefits Of Business Analysis Services
      </h5>
      <p className="text-color2 text-[13px] text-center font-bodyfont-400 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
        vehicula dui sit amet ligula cursus. dolor sit amet dolor adipiscing.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Duis sit vehicula dui sit
        amet ligula cursus. dolor sit amet dolor adipiscing.
      </p>
      <div class="ml-20 grid lg:grid-cols-4 grid-cols-2 gap-8 items-center">
        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-12 items-center mb-3"
          />
          <p className="text-center text-color6 text-[15px] w-[180px] font-bold font-bodyfont-400 mb-3">
            Unclear Or Conflicting Stakeholder Expectations
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-12 items-center mb-3"
          />
          <p className="text-center text-color6 text-[15px] w-[150px] font-bold font-bodyfont-400 mb-3">
            Inadequate Resources
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-12 items-center mb-3"
          />
          <p className="text-center text-color6 text-[15px] w-[150px] font-bold font-bodyfont-400 mb-3">
            Poor Communication
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-12 items-center mb-3"
          />
          <p className="text-center text-color6 text-[15px] w-[150px] font-bold font-bodyfont-400 mb-3">
            Unclear Or Changing Requirements
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-12 items-center mb-3"
          />
          <p className="text-center text-color6 text-[15px] w-[150px] font-bold font-bodyfont-400 mb-3">
            Lack Of Governance
          </p>
        </div>
        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-12 items-center mb-3"
          />
          <p className="text-center text-color6 text-[15px] w-[150px] font-bold font-bodyfont-400 mb-3">
            Lack Of Engagement From Stakeholder
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-12 items-center mb-3"
          />
          <p className="text-center text-color6 text-[15px] w-[180px] font-bold font-bodyfont-400 mb-3">
            Lack Of Understanding Of User Needs
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-12 items-center mb-3"
          />
          <p className="text-center text-color6 text-[15px] w-[150px] font-bold font-bodyfont-400 mb-3">
            Ineffective Or Missing Processes
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-12 items-center mb-3"
          />
          <p className="text-center text-color6 text-[15px] w-[180px] font-bold font-bodyfont-400 mb-3">
            Lack Of Understanding Of Business Goals
          </p>
        </div>

        <div class="p-4 w-[300px]">
          <img
            src={arrow_logo}
            alt="bluetick"
            className="ml-12 items-center mb-3"
          />
          <p className="text-center text-color6 text-[15px] w-[150px] font-bold font-bodyfont-400 mb-3">
            Change Fatigue
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AnalysisServices;
