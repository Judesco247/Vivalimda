import React from "react";
import { knowledge1, line } from "../assets";

const ManageScreen = () => (
  <div className="mt-[-60px] items-center">
    <div class="flex">
      <img
        src={knowledge1}
        alt="Image"
        className="hidden lg:block mt-[-86px] w-[650px] h-[450px]"
      />
      <div className="flex-1 md:w-[554px] h-[429px] mt-[30px] lg:ml-0 md:ml-[150px]">
        <h2 className="text-[25px] text-color1 font-bold font-bodyfont-400 md:w-[400px] w-[350px] mb-5">
          <span>
            <img src={line} alt="bluetick" className="mr-2 mb-2" />
          </span>
          Elevate Your Business with Knowledge Management
        </h2>
        <p className="text-color2 text-[13px] font-bodyfont-400 md:w-[450px] w-[350px]">
          Knowledge Management is the strategic practice of capturing,
          organizing, and sharing internal knowledge. At VIVALIMDA, we make
          knowledge easily accessible, which improves decision-making, fosters
          innovation, enhances performance, and drives productivity. Effective
          knowledge management leads to a competitive edge, satisfied customers,
          and better collaboration within your organization. We customize our
          solutions to suit your unique needs, ensuring your business thrives in
          the information-driven world.
        </p>
      </div>
    </div>
  </div>
);

export default ManageScreen;
