import React from "react";
import { intscreen, line } from "../assets";

const Integrationscreen = () => (
  <div className="mt-[-60px] mb-10 items-center">
    <div class="flex">
      <img
        src={intscreen}
        alt="Image"
        className="hidden lg:block mt-[-86px] w-[650px] h-[450px]"
      />
      <div className="flex-1 md:w-[554px] h-[429px] mt-[-32px] lg:ml-0 md:ml-[150px]">
        <h2 className="text-[25px] text-color1 font-bold font-bodyfont-400 md:w-[400px] w-[350px] mb-5">
          <span>
            <img src={line} alt="bluetick" className="mr-2 mb-2" />
          </span>
          Seamless Integration Solutions for Business Efficiency
        </h2>
        <p className="text-color2 text-[13px] font-bodyfont-400 md:w-[450px] w-[350px]">
          Integration is a fundamental aspect of modern business operations, and
          at VIVALIMDA, we excel in providing integration services that propel
          businesses to new levels of efficiency and effectiveness. Our deep
          understanding of integration technologies enables us to seamlessly
          connect disparate systems, whether it's combining your CRM with your
          marketing automation platform or linking your e-commerce website to
          your inventory management. The result is a harmonious flow of data and
          processes throughout your organization, leading to improved
          operational efficiency and a significant reduction in errors. By
          streamlining workflows and enhancing data accuracy, we empower
          businesses to respond faster to customer needs, reduce costs, and
          achieve a competitive edge in their respective industries. Our
          integration solutions are designed to make your business processes
          smoother, more agile, and better equipped to meet the challenges of
          the modern business landscape.
        </p>
      </div>
    </div>
  </div>
);

export default Integrationscreen;
