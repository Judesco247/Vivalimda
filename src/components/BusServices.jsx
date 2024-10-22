import React from "react";
import { bus_service1, bus_service2, bus_service3 } from "../assets";

const BusServices = () => (
  <div class="container ml-20 lg:w-full md:w-[780px] w-[428px] lg:h-[680px]">
    <h2 className="lg:mr-0 mr-[200px] text-color1 text-[25px] text-center font-bold font-bodyfont-700">
      How We Provide Business Analysis Services
    </h2>
    <p className="lg:mr-0 mr-[200px] text-color2 text-[14px] text-center font-bodyfont-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit vehicula
      dui sit amet ligula cursus. dolor sit amet dolor adipiscing. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit.
    </p>
    <div class="grid lg:grid-cols-3 grid-cols-2 mt-12 lg:ml-0 md:ml-[-70px]">
      <div class="bg-color0-300 p-4 shadow-lg offset-x-4 offset-y-4 opacity-80 w-[300px] h-[500px] md:ml-0 ml-[-50px]">
        <img src={bus_service1} alt="bluetick" className="items-center mb-5" />
        <h5 className="mb-4 text-color1 text-[15px] font-bold font-bodyfont-400 text-center w-[280px]">
          BA as a part of full-cycle development & Dedicated Team
        </h5>
        <p className="text-color2 text-[14px] font-bodyfont-400 w-[260px] h-[130px] text-center mt-4">
          Having business analysis as the first stage of the development life
          cycle, we determine the most efficient solution for your business
          problems. BA helps us map out the way toward the highest-quality
          product and reduce project costs.
        </p>
      </div>

      <div class="hidden md:block bg-color0-300 p-4 shadow-lg offset-x-4 offset-y-4 opacity-80 w-[300px] h-[500px]">
        <img src={bus_service2} alt="bluetick" className="items-center" />
        <h5 className="mb-4 text-color1 text-[15px] font-bold font-bodyfont-400 text-center w-[280px]">
          BA as a part of end-to-end Product Enginering
        </h5>
        <p className="text-color2 text-[14px] font-bodyfont-400 w-[260px] h-[130px] text-center mt-4">
          Having business analysis as the first stage of the development life
          cycle, we determine the most efficient solution for your business
          problems. BA helps us map out the way toward the highest-quality
          product and reduce project costs.
        </p>
      </div>

      <div class="hidden md:block bg-color0-300 p-4 shadow-lg offset-x-4 offset-y-4 opacity-80 w-[300px] h-[500px]">
        <img src={bus_service3} alt="bluetick" className="items-center" />
        <h5 className="mb-4 text-color1 text-[15px] font-bold font-bodyfont-400 text-center w-[280px]">
          BA as a part of on demand Consulting(BA as a Service)
        </h5>
        <p className="text-color2 text-[14px] font-bodyfont-400 w-[260px] h-[130px] text-center mt-4">
          Having business analysis as the first stage of the development life
          cycle, we determine the most efficient solution for your business
          problems. BA helps us map out the way toward the highest-quality
          product and reduce project costs.
        </p>
      </div>
    </div>
  </div>
);

export default BusServices;
