import React from "react";
import styles from "../style";

const Billings = () => (
  <div className={`bg-color7 ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <div class="md:grid lg:grid-cols-4 md:grid-cols-2 md:grid-rows-2 gap-8 mt-20">
        <div className="md:w-[250px] w-[357px]">
          <div className="flex items-center">
            <span className="text-color5 text-[36px] font-bold font-bodyfont-700">
              01
            </span>
            <h5 className="ml-3 text-color6 text-[15px] font-bold font-bodyfont-400">
              Analysis
            </h5>
          </div>
          <p className="ml-12 md:w-[230px] w-[300px] text-color2 text-[13px] font-bodyfont-400">
            Our thorough analysis uncovers insights that drive informed
            decisions, optimising your operations and strategies for enhanced
            performance and growth.
          </p>
        </div>
        <div className="md:w-[250px] w-[357px]">
          <div className="flex items-center">
            <span className="text-color5 text-[36px] font-bold font-bodyfont-700">
              02
            </span>
            <h5 className="ml-3 text-color6 text-[15px] font-bold font-bodyfont-400">
              Research
            </h5>
          </div>
          <p className="ml-12 md:w-[230px] w-[300px] text-color2 text-[13px] font-bodyfont-400">
            Through in-depth research, we gather valuable data to guide your
            business toward innovative solutions and strategies that deliver
            measurable results.
          </p>
        </div>
        <div className="md:w-[250px] w-[357px]">
          <div className="flex items-center">
            <span className="text-color5 text-[36px] font-bold font-bodyfont-700">
              03
            </span>
            <h5 className="ml-3 text-color6 text-[15px] font-bold font-bodyfont-400">
              Implementation
            </h5>
          </div>
          <p className="ml-12 md:w-[230px] w-[300px] text-color2 text-[13px] font-bodyfont-400">
            From concept to reality, our skilled team translates strategies into
            actionable plans, ensuring seamless implementation that maximises
            efficiency and effectiveness.
          </p>
        </div>
        <div className="md:w-[250px] w-[357px]">
          <div className="flex items-center">
            <span className="text-color5 text-[36px] font-bold font-bodyfont-700">
              04
            </span>
            <h5 className="ml-3 text-color6 text-[15px] font-bold font-bodyfont-400">
              Reporting
            </h5>
          </div>
          <p className="ml-12 md:w-[230px] w-[300px] text-color2 text-[13px] font-bodyfont-400">
            Transparent reporting provides valuable insights into your progress,
            allowing you to measure success, refine strategies, and make
            informed decisions for sustained growth.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Billings;
