import React from "react";
import styles from "../style";
import {
  banking,
  education,
  government,
  health,
  hospitality,
  manufacture,
  retail,
  telecom,
} from "../assets";
import "../App.css";

const Industries2 = () => (
  <div className="">
    <div className={`inset-0 flex items-center justify-center`}>
      <div className=" mt-20 hidden md:block">
        <div class="flex items-center justify-center">
          <h1 className="ml-3 mb-4 text-color1 text-[25px] font-bold font-bodyfont-400">
            Our Industries
          </h1>
        </div>
        <div class="flex items-center justify-center p-4">
          <p className="text-color2 text-center text-[13px] font-bodyfont-700 pb-6">
            VIVALIMDA provides cutting-edge technology solutions that are tailored
            to meet the unique needs of various industries, including
            healthcare,
            <br /> finance, and retail.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 mt-10 mb-28">
          <div className="flex mx-auto p-2 ml-12 bg-color7 w-[300px] h-[70px]">
            <img src={telecom} alt="bluetick" className=" w-12 h-12" />
            <div className="ml-6 items-center">
              <h5 className="text-color6 text-[14px] font-bold font-bodyfont-400 mt-4">
                TELECOMMUNICATION
              </h5>
            </div>
          </div>

          <div className="flex mx-auto p-2 ml-12 bg-color7 w-[300px] h-[70px]">
            <img src={education} alt="bluetick" className="w-12 h-12" />
            <div className="ml-6 items-center">
              <h5 className="text-color6 text-[14px] font-bold font-bodyfont-400 mt-4">
                EDUCATION
              </h5>
            </div>
          </div>

          <div className="flex container mx-auto p-2 ml-12 bg-color7 w-[300px] h-[70px]">
            <img src={manufacture} alt="bluetick" className="w-12 h-12" />
            <div className="ml-6 items-center">
              <h5 className="text-color6 text-[14px] font-bold font-bodyfont-400 mt-4">
                MANUFACTURING
              </h5>
            </div>
          </div>

          <div className="flex container mx-auto p-2 ml-12 bg-color7 w-[300px] h-[70px]">
            <img src={health} alt="bluetick" className="w-12 h-12" />
            <div className="ml-6 items-center">
              <h5 className="text-color6 text-[14px] font-bold font-bodyfont-400 mt-4">
                HEALTHCARE
              </h5>
            </div>
          </div>

          <div className="flex container mx-auto p-2 ml-12 bg-color7 w-[300px] h-[70px]">
            <img src={banking} alt="bluetick" className="w-12 h-12" />
            <div className="ml-6 items-center">
              <h5 className="text-color6 text-[14px] font-bold font-bodyfont-400 mt-4">
                BANKING & FINANCE
              </h5>
            </div>
          </div>

          <div className="flex container mx-auto p-2 ml-12 bg-color7 w-[300px] h-[70px]">
            <img src={retail} alt="bluetick" className="w-12 h-12" />
            <div className="ml-6 items-center">
              <h5 className="text-color6 text-[14px] font-bold font-bodyfont-400 mt-4">
                RETAIL & E-COMMERCE
              </h5>
            </div>
          </div>

          <div className="flex container mx-auto p-2 ml-12 bg-color7 w-[300px] h-[70px]">
            <img src={education} alt="bluetick" className="w-12 h-12" />
            <div className="ml-6 items-center">
              <h5 className="text-color6 text-[14px] font-bold font-bodyfont-400 mt-4">
                HOSPITALITY & TOURISM
              </h5>
            </div>
          </div>

          <div className="flex container mx-auto p-2 ml-12 bg-color7 w-[300px] h-[70px]">
            <img src={education} alt="bluetick" className="w-12 h-12" />
            <div className="ml-6 items-center">
              <h5 className="text-color6 text-[14px] font-bold font-bodyfont-400 mt-4">
                GOVERNMENT
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-[428px] mt-10">
        <div class="flex items-center justify-center">
          <h1 className="mb-4 text-color1 text-[25px] font-bold font-bodyfont-400">
            Our Industries
          </h1>
        </div>
        <div class="items-center justify-center">
          <p className="ml-3 text-color2 w-[350px] text-center text-[13px] font-bodyfont-700">
            VIVALIMDA provides cutting-edge technology solutions that are tailored
            to meet the unique needs of various industries, including
            healthcare, finance, and retail.
          </p>
        </div>

        <div class="ml-3 grid grid-cols-2 gap-4 mt-5 mb-20 ">
          <div class="">
            <div className="ml-12">
              <img src={telecom} alt="bluetick" className="" />
            </div>
            <h5 className="ml-3 text-color6 text-[14px] font-bold font-bodyfont-400">
              TELECOMMUNICATION
            </h5>
          </div>

          <div class="">
            <div className="ml-6">
              <img src={education} alt="bluetick" className="" />
            </div>
            <h5 className="ml-5 text-color6 text-[14px] font-bold font-bodyfont-400">
              EDUCATION
            </h5>
          </div>

          <div class="">
            <div className="ml-12">
              <img src={manufacture} alt="bluetick" className="" />
            </div>
            <h5 className="ml-6 text-color6 text-[14px] font-bold font-bodyfont-400">
              MANUFACTURING
            </h5>
          </div>

          <div class="">
            <div className="ml-6">
              <img src={health} alt="bluetick" className="" />
            </div>
            <h5 className="ml-5 text-color6 text-[14px] font-bold font-bodyfont-400">
              HEALTHCARE
            </h5>
          </div>

          <div class="">
            <div className="ml-12">
              <img src={banking} alt="bluetick" className="" />
            </div>
            <h5 className="ml-3 text-color6 text-[14px] font-bold font-bodyfont-400">
              BANKING & FINANCE
            </h5>
          </div>

          <div class="">
            <div className="ml-6">
              <img src={retail} alt="bluetick" className="" />
            </div>
            <h5 className="mr-6 text-color6 text-[14px] font-bold font-bodyfont-400">
              RETAIL & E-COMMERCE
            </h5>
          </div>

          <div class="">
            <div className="ml-12">
              <img src={hospitality} alt="bluetick" className="" />
            </div>
            <h5 className="ml-3 text-color6 text-[14px] font-bold font-bodyfont-400">
              HOSPITALITY & TOURISM
            </h5>
          </div>

          <div class="">
            <div className="ml-6">
              <img src={government} alt="bluetick" className="" />
            </div>
            <h5 className="ml-5 text-color6 text-[14px] font-bold font-bodyfont-400">
              GOVERNMENT
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Industries2;
