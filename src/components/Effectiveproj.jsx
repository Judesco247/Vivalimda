import React from "react";
import { effective, line } from "../assets";

const Effectiveproj = () => (
  <div className="md:mt-[-60px] mb-20 items-center">
    <div class="flex">
      <img
        src={effective}
        alt="Image"
        className="hidden lg:block mt-[-86px] w-[600px] h-[450px]"
      />
      <div className="flex-1 md:w-[554px] h-[429px] mt-[-90px] lg:ml-0 md:ml-[150px]">
        <h2 className="text-[25px] text-color1 font-bold font-bodyfont-400 md:w-[400px] w-[350px] mb-5">
          <span>
            <img src={line} alt="bluetick" className="mr-2 mb-2" />
          </span>
          Effective Project Management: Delivering Results on Time and Within
          Budget
        </h2>
        <p className="text-color2 text-[13px] font-bodyfont-400 md:w-[450px] w-[350px]">
          Successful projects require effective Project Management, and that's
          precisely what we excel at. At Vivalimda Consulting, our experienced
          project managers bring proven methodologies and insights to ensure
          your initiatives are delivered on time, within budget, and meet the
          defined objectives. We take a holistic approach, overseeing every
          aspect of the project from initiation to closure, while collaborating
          with your teams to align the project's goals with your organization's
          strategic vision. Our project management expertise extends across
          various industries and domains, allowing us to adapt and tailor our
          approach to suit your specific needs. We emphasize proactive risk
          management, identifying potential obstacles and devising contingency
          plans to mitigate any challenges that may arise. With a focus on clear
          communication and stakeholder engagement, we keep you involved
          throughout the process, empowering you with the knowledge to make
          informed decisions and achieve project success.
        </p>
      </div>
    </div>
  </div>
);

export default Effectiveproj;
