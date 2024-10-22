import React from "react";
import {
  certification1,
  certification2,
  certification3,
  certification4,
} from "../assets";

const Certification = () => (
  <div className="md:mb-20 mt-32">
    <div className=" md:w-[800px] md:h-[122px] ">
      <div class="md:ml-16 ml-28 md:grid md:grid-cols-4 grid-cols-2 mt-5 items-center">
        <div class="md:w-[250px] h-[100px]">
          <img
            src={certification1}
            alt="bluetick"
            className="md:w-[100px] md:h-[80px]"
          />
        </div>

        <div class="w-[250px] h-[100px]">
          <img
            src={certification2}
            alt="bluetick"
            className="w-[100px] h-[80px]"
          />
        </div>

        <div class="w-[250px] h-[100px]">
          <img
            src={certification3}
            alt="bluetick"
            className="w-[100px] h-[80px]"
          />
        </div>

        <div class="w-[250px] h-[100px]">
          <img
            src={certification4}
            alt="bluetick"
            className="w-[100px] h-[80px]"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Certification;
