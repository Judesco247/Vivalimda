import React from "react";
import styles from "../style";
import { research3, research4 } from "../assets";

const ResearchService = () => (
  <div className={`bg-color7 lg:${styles.paddingX} ${styles.flexStart}`}>
    <div className="mt-10 lg:w-[1280px] md:w-[680px] w-[428px] lg:h-[550px] md:h-[980px] h-[722px] md:mb-20">
      <h5 className="mt-10 mb-10 text-center text-color1 text-[25px] font-bold font-bodyfont-700">
        Our User Research Services
      </h5>
      <div class="md:grid lg:grid-cols-3 md:grid-cols-2 mt-5 items-center">
        <div class="container mx-auto md:w-[310px] w-[330px] h-[395px]">
          <img
            src={research3}
            alt="bluetick"
            className="md:w-[310px] w-[379px] md:h-[130px] brightness-75"
          />
          <p className="ml-3 mb-4 w-[200px] font-bodyfont-400 absolute text-[20px] text-white mt-[-48px]">
            Quantitative Research
          </p>
          <p className="text-color2 text-[13px] font-bodyfont-400 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            vehicula dui sit amet ligula cursus. dolor sit amet dolor
            adipiscing. Lorem ipsum dolor
          </p>
          <ul className="list-inside list-disc text-color2 text-[13px] font-bodyfont-400 pt-5 ml-3">
            <li className="mb-3">Surveys</li>
            <li className="mb-3">Tree tests</li>
            <li className="mb-3">First click tests</li>
            <li className="mb-3">A/B test</li>
            <li className="mb-3">Eye tracking</li>
            <li className="mb-3">Heat mapping</li>
            <li className="mb-3">Web analytics</li>
          </ul>
        </div>

        <div class="hidden md:block container mx-auto w-[310px] h-[395px]">
          <img
            src={research4}
            alt="bluetick"
            className="w-[310px] h-[130px] brightness-75"
          />
          <p className="ml-3 mb-4 w-[200px] font-bodyfont-400 absolute text-[20px] text-white mt-[-48px]">
            Quantitative Research
          </p>
          <p className="text-color2 text-[13px] font-bodyfont-400 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            vehicula dui sit amet ligula cursus. dolor sit amet dolor
            adipiscing.
          </p>
          <ul className="list-inside list-disc text-color2 text-[13px] font-bodyfont-400 pt-5 ml-3">
            <li className="mb-3">Interviews</li>
            <li className="mb-3">Focus groups</li>
            <li className="mb-3">Field studies</li>
            <li className="mb-3">Guerilla testing</li>
            <li className="mb-3">In-lab testing</li>
            <li className="mb-3">Card sorting</li>
          </ul>
        </div>

        <div class="hidden md:block container mx-auto w-[310px] h-[395px] lg:mt-0 md:mt-20">
          <img
            src={research3}
            alt="bluetick"
            className="w-[310px] h-[130px] brightness-75"
          />
          <p className="ml-3 mb-4 w-[180px] font-bodyfont-400 absolute text-[18px] text-white mt-[-56px]">
            Attitudinal & Behavioral Research
          </p>
          <p className="text-color2 text-[13px] font-bodyfont-400 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            vehicula dui sit amet ligula cursus. dolor sit amet dolor
            adipiscing. Lorem ipsum dolor
          </p>
          <ul className="list-inside list-disc text-color2 text-[13px] font-bodyfont-400 pt-5 ml-3">
            <li className="mb-3">Preference test</li>
            <li className="mb-3">Task analysis</li>
            <li className="mb-3">Stakeholder interview</li>
            <li className="mb-3">In-depth interview</li>
            <li className="mb-3">Focus group</li>
            <li className="mb-3">Diary Studies</li>
            <li className="mb-3">Ethnographic field studies</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ResearchService;
