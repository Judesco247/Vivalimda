import React from "react";
import {
  Component,
  telecom,
  retail,
  manufacture,
  hospitality,
  health,
  government,
  education,
  banking,
  logo,
} from "../assets";
import "../App.css";
import styles from "../style";

const Industries = () => (
  <div className={`flex items-center justify-center`}>
    <div className={``}>
      <div className="hidden md:block">
        <div class="flex items-center justify-center">
          <h1 className="text-center mb-4 mt-20 text-color1 text-[25px] font-bold font-bodyfont-400">
            Our Industries
          </h1>
        </div>
        <div class="flex items-center justify-center p-4">
          <p className="lg:w-[600px] md:w-[500px] text-color2 text-center text-[13px] font-bodyfont-700 pb-6">
            VIVALIMDA provides cutting-edge technology solutions that are tailored
            to meet the unique needs of various industries, including
            healthcare, finance, and retail.
          </p>
        </div>

        <div className="industries lg:right-[220px] right-[260px] justify-center flex relative mt-[-90px]">
          <div className="w-150 h-150 left-[256px] top-[131px] absolute rounded-full border-2 border-neutral-200" />
          <div className="w-80 h-80 left-[420px] top-[256px] absolute">
            <div className="w-60 h-60 left-0 top-0 absolute rounded-full border-2 border-neutral-200" />
            <div className="w-40 h-40 left-[40px] top-[40px] absolute rounded-full border-2 border-neutral-200" />
            <div className="w-52 h-52 left-[16px] top-[16px] absolute rounded-full border-2 border-background" />
            <div className="w-32 h-32 left-[55px] top-[58px] absolute rounded-full border-2 border-background" />
            <img
              className="w-20 h-20 left-[80px] top-[78px] absolute"
              src={logo}
              alt="industries"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="w-28 h-28 left-[260px] top-[345px] absolute">
            <div className="w-20 h-20 left-[40px] top-0 absolute bg-neutral-100 rounded-full border-4 border-neutral-200" />
            <div className="w-12 h-12 left-[55px] top-[15px] absolute rounded-full border border-neutral-200" />
            <div className="w-8 h-8 left-[65px] top-[20px] absolute">
              <img
                src={manufacture}
                alt="ind"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="w-28 h-28 left-[500px] top-[120px] absolute">
            <div className="w-20 h-20 left-0 top-[30px] absolute bg-neutral-100 rounded-full border-4 border-neutral-200" />
            <div className="w-12 h-12 left-[15px] top-[45px] absolute rounded-full border border-neutral-200" />
            <div className="w-8 h-8 left-[25px] top-[48px] absolute">
              <img
                src={telecom}
                alt="ind"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="w-28 h-28 left-[690px] top-[206px] absolute">
            <div className="w-20 h-20 left-[-40px] top-0 absolute bg-neutral-100 rounded-full border-4 border-neutral-200" />
            <div className="w-12 h-12 left-[-25px] top-[15px] absolute rounded-full border border-neutral-200" />
            <div className="w-10 h-8 left-[-20px] top-[25px] absolute">
              <img
                src={education}
                alt="ind"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="w-28 h-28 left-[510px] top-[580px] absolute">
            <div className="w-20 h-20 left-0 top-[-60px] absolute bg-neutral-100 rounded-full border-4 border-neutral-200" />
            <div className="w-12 h-12 left-[15px] top-[-43px] absolute rounded-full border border-neutral-200" />
            <div className="w-8 h-8 left-[25px] top-[-40px] absolute">
              <img
                src={hospitality}
                alt="ind"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="w-28 h-28 left-[320px] top-[480px] absolute">
            <div className="w-20 h-20 left-[40px] top-0 absolute bg-neutral-100 rounded-full border-4 border-neutral-200" />
            <div className="w-12 h-12 left-[55px] top-[15px] absolute rounded-full border border-neutral-200" />
            <div className="w-8 h-8 left-[63px] top-[25px] absolute">
              <img
                src={banking}
                alt="ind"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="w-28 h-28 left-[300px] top-[206px] absolute">
            <div className="w-20 h-20 left-[40px] top-0 absolute bg-neutral-100 rounded-full border-4 border-neutral-200" />
            <div className="w-12 h-12 left-[55px] top-[15px] absolute rounded-full border border-neutral-200" />
            <div className="w-8 h-8 left-[63px] top-[20px] absolute">
              <img
                src={government}
                alt="ind"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="w-28 h-28 left-[740px] top-[345px] absolute">
            <div className="w-20 h-20 left-[-40px] top-0 absolute bg-neutral-100 rounded-full border-4 border-neutral-200" />
            <div className="w-12 h-12 left-[-25px] top-[15px] absolute rounded-full border border-neutral-200" />
            <div className="w-8 h-8 left-[-18px] top-[25px] absolute">
              <img
                src={health}
                alt="ind"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="w-28 h-28 left-[700px] top-[480px] absolute">
            <div className="w-20 h-20 left-[-40px] top-0 absolute bg-neutral-100 rounded-full border-4 border-neutral-200" />
            <div className="w-12 h-12 left-[-25px] top-[15px] absolute rounded-full border border-neutral-200" />
            <div className="w-8 h-8 left-[-16px] top-[23px] absolute">
              <img
                src={retail}
                alt="ind"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="left-[230px] top-[230px] absolute text-color1 text-[14px] font-bold font-bodyfont-400 leading-loose tracking-tight">
            GOVERNMENT
          </div>
          <div className="left-[740px] top-[230px] absolute text-color1 text-[14px] font-bold font-bodyfont-400 leading-loose tracking-tight">
            EDUCATION
          </div>
          <div className="left-[170px] top-[370px] absolute text-color1 text-[14px] font-bold font-bodyfont-400 leading-loose tracking-tight">
            MANUFACTURING
          </div>
          <div className="left-[790px] top-[370px] absolute text-color1 text-[14px] font-bold font-bodyfont-400 leading-loose tracking-tight">
            HEALTHCARE
          </div>
          <div className="left-[200px] top-[510px] absolute text-color1 text-[14px] font-bold font-bodyfont-400 leading-loose tracking-tight">
            BANKING & FINANCE
          </div>
          <div className="left-[750px] top-[510px] absolute text-color1 text-[14px] font-bold font-bodyfont-400 leading-loose tracking-tight">
            RETAIL & E-COMMERCE
          </div>
          <div className="lg:left-[470px] left-[510px] top-[610px] absolute text-color1 text-[14px] font-bold font-bodyfont-400 leading-loose tracking-tight">
            HOSPITALITY & TOURISM
          </div>
          <div className="left-[460px] top-[110px] absolute text-color1 text-[14px] font-bold font-bodyfont-400 leading-loose tracking-tight">
            TELECOMMUNICATION
          </div>
        </div>
      </div>

      <div className="block md:hidden w-[428px] mt-10">
        <div class="flex items-center justify-center">
          <h1 className="mr-4 mb-4 text-color1 text-[25px] font-bold font-bodyfont-400">
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

export default Industries;
