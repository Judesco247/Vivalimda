import React from "react";
import { Analyst1, line } from "../assets";

const BusAnalysis = () => (
  <div className="mt-[-60px] items-center md:mb-0 mb-36">
    <div class="flex">
      <img
        src={Analyst1}
        alt="Image"
        className="hidden lg:block mt-[-86px] w-[650px] h-[450px]"
      />
      <div className="flex-1 md:w-[554px] h-[429px] mt-[-32px] lg:ml-0 md:ml-[150px]">
        <h2 className="text-[25px] text-color1 font-bold font-bodyfont-400 md:w-[440px] w-[350px] mb-5">
          <span>
            <img src={line} alt="bluetick" className="mr-2 mb-2" />
          </span>
          Business Analysis Drives Predictable Results in IT Projects
        </h2>
        <p className="text-color2 text-[13px] font-bodyfont-400 md:w-[440px] w-[350px]">
          Many businesses invest a small fortune in innovations and new
          technological products, but only the least of these solutions will
          thrive in real market conditions. Others might create technological
          perfection that unfortunately fails to meet a product-market fit.
          Business analysis is a foundation that makes a difference by
          developing a clear vision of software products, setting sustainable
          product growth vectors from the very beginning, and sticking to a
          roadmap to their success in the industry. Business analysis (BA)
          leverages industry-specific methodologies to identify underserved
          market segments, reveal opportunities for business, and bridge gaps
          between stakeholders and the development team by setting clear goals
          and identifying requirements for software solutions. Acting as agents
          of change, BA experts facilitate the evolution of software products
          and optimize the development processes to maximize the value delivered
          to their stakeholders. As a result, both end-users and stakeholders
          obtain a desirable product.
        </p>
      </div>
    </div>
  </div>
);

export default BusAnalysis;
