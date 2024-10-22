import React from "react";
import { line } from "../assets";

const Philosophy = () => (
  <div class="md:container mx-auto mt-10">
    <div class="">
      <h1 class="text-center text-color1 text-[25px] font-bold font-bodyfont-700 mt-4">
        Our Philosophy
      </h1>
      <p class="text-center text-color2 text-[13px] font-bodyfont-700 mt-5">
        As a technology-led company, information is at our core. We are
        continually thinking about solutions that positively <br /> impact customer
        relationships of ours and clients for an advanced world.
      </p>

      <div className="lg:ml-28 ml-6 container mx-auto md:grid grid-cols-3 gap-5 md:mt-10 mt-5 ">
        <div className="container mx-auto md:mb-20 mb-10">
          <h5 className="text-[20px] text-color1 font-bold font-bodyfont-400">
            <span>
              <img src={line} alt="bluetick" className="mr-2 mb-2" />
            </span>
            Our Vision
          </h5>
          <p className="text-color2 text-[13px] font-bodyfont-400 pt-5">
            To lead in the customer engagement <br />
            solutions provider industry
          </p>
        </div>
        <div className="container mx-auto md:mb-20 mb-10">
          <h5 className="text-[20px] text-color1 font-bold font-bodyfont-400">
            <span>
              <img src={line} alt="bluetick" className="mr-2 mb-2" />
            </span>
            Our Mission
          </h5>
          <p className="text-color2 text-[13px] font-bodyfont-400 pt-5">
            To enhance the communication process
            <br />
            of customer engagement through
            <br /> technological resources
          </p>
        </div>
        <div className="container mx-auto md:mb-20 mb-10">
          <h5 className="text-[20px] text-color1 font-bold font-bodyfont-400">
            <span>
              <img src={line} alt="bluetick" className="mr-2 mb-2" />
            </span>
            Our Goal
          </h5>
          <p className="text-color2 text-[13px] font-bodyfont-400 pt-5">
            Create stellar reputation, set and
            <br />
            achieve business milestones
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Philosophy;
