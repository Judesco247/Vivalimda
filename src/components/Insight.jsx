import React from "react";
import { research1, research2, line } from "../assets";

const Insight = () => (
  <div className="mt-[-60px] items-center">
    <div class="flex">
      <img
        src={research1}
        alt="Image"
        className="hidden lg:block mt-[-86px] w-[650px] h-[450px]"
      />
      <div className="flex-1 md:w-[554px] h-[429px] mt-[-32px] lg:ml-0 md:ml-[150px]">
        <h2 className="text-[25px] text-color1 font-bold font-bodyfont-400 md:w-[400px] w-[350px] mb-5">
          <span>
            <img src={line} alt="bluetick" className="mr-2 mb-2" />
          </span>
          User-Centric Insights: Understanding Your Audience for Success
        </h2>
        <p className="text-color2 text-[13px] font-bodyfont-400 md:w-[450px] w-[350px]">
          To build products and services that truly resonate with your
          customers, understanding their needs and preferences is paramount. Our
          User Experience Research services are designed to provide you with
          valuable insights into your target audience's behaviours,
          expectations, and pain points. By combining qualitative and
          quantitative research methods, we uncover deep user insights that fuel
          innovation and drive customer satisfaction. Our team of skilled
          researchers utilizes a range of tools and techniques to gather data,
          such as user interviews, surveys, usability testing, and customer
          journey mapping. We go beyond simple observations to gain a holistic
          understanding of user interactions with your products and services.
          Armed with these user-centric insights, you can make informed design
          decisions and deliver exceptional user experiences that foster loyalty
          and drive business growth.
        </p>
      </div>
    </div>
  </div>
);

export default Insight;
