import React from "react";
import {
  toolset1,
  toolset10,
  toolset11,
  toolset12,
  toolset13,
  toolset14,
  toolset15,
  toolset2,
  toolset3,
  toolset4,
  toolset5,
  toolset6,
  toolset7,
  toolset8,
  toolset9,
} from "../assets";

const Softwareintegrated = () => (
  <div className=" md:w-[800px] w-[428px] md:h-[414px] h-[722px] md:mb-20 mt-10">
    <h5 className="mt-10 mb-10 text-center text-color1 text-[25px] font-bold font-bodyfont-700">
      Software We Integrate
    </h5>
    <div class="md:ml-16 md:grid grid-cols-5 mt-10 items-center">
      <div class="container mx-auto md:w-[250px] w-[379px] h-[52px]">
        <img
          src={toolset1}
          alt="bluetick"
          className="md:w-[100px] w-[379px] md:h-[35px]"
        />
      </div>

      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset2} alt="bluetick" className="w-[100px] h-[49px]" />
      </div>

      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset3} alt="bluetick" className="w-[100px] h-[30px]" />
      </div>

      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset4} alt="bluetick" className="w-[100px] h-[28px]" />
      </div>
      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset5} alt="bluetick" className="w-[100px] h-[52px]" />
      </div>
    </div>

    <div class="md:ml-16 md:grid grid-cols-5 mt-10 items-center">
      <div class="container mx-auto md:w-[250px] w-[379px] h-[52px]">
        <img
          src={toolset6}
          alt="bluetick"
          className="md:w-[100px] w-[379px] md:h-[52px]"
        />
      </div>

      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset7} alt="bluetick" className="w-[100px] h-[52px]" />
      </div>

      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset8} alt="bluetick" className="w-[100px] h-[45px]" />
      </div>

      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset9} alt="bluetick" className="w-[100px] h-[52px]" />
      </div>
      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset10} alt="bluetick" className="w-[100px] h-[41px]" />
      </div>
    </div>

    <div class="md:ml-16 md:grid grid-cols-5 mt-10 items-center">
      <div class="container mx-auto md:w-[250px] w-[379px] h-[52px]">
        <img
          src={toolset11}
          alt="bluetick"
          className="md:w-[100px] w-[379px] md:h-[52px]"
        />
      </div>

      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset12} alt="bluetick" className="w-[100px] h-[52px]" />
      </div>

      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset13} alt="bluetick" className="w-[100px] h-[45px]" />
      </div>

      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset14} alt="bluetick" className="w-[100px] h-[46px]" />
      </div>
      <div class="hidden md:block container mx-auto w-[250px] h-[52px]">
        <img src={toolset15} alt="bluetick" className="w-[100px] h-[41px]" />
      </div>
    </div>
  </div>
);

export default Softwareintegrated;
