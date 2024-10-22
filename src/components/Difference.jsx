import React, { useState } from "react";
import { chevronDown, chevronUp, difference_image } from "../assets";
import "../App.css";

function Difference() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div class="md:ml-0 ml-5 md:flex items-start mt-20 mb-[-20px] lg:w-[1280px] md:w-[700px] w-[380px] lg:h-[615px] md:h-[600px] h-[447px] ">
      <div class="hidden md:block md:flex-initial mr-4">
        <img
          src={difference_image}
          alt="Image"
          className="w-[580px] h-[550px]"
        />
      </div>
      <div className="md:flex-grow md:w-[580px] w-[380px] md:h-[600px] h-[447px] mt-20">
        <h1 className="ml-3 mb-4 text-color1 md:text-[25px] text-[20px] font-bold font-bodyfont-400">
          What differentiates Vivalimda from
          <br /> other platforms?
        </h1>

        <div className="md:w-[400px] w-[350px] mt-10">
          {data.map((item, i) => (
            <div className="item">
              <div
                className="title text-[15px] font-bold font-bodyfont-700"
                onClick={() => toggle(i)}
              >
                <h2>{item.difference}</h2>
                <img src={selected == i ? chevronUp : chevronDown} />
              </div>
              <div
                className={`${
                  selected == i ? "content show" : "content"
                } text-[13px] font-bodyfont-700`}
              >
                {item.Answer}
              </div>
              <hr class="border-1 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    difference: "Analysis",
    Answer:
      "Our thorough analysis uncovers insights that drive informed decisions, optimising your operations and strategies for enhanced performance and growth.",
  },
  {
    difference: "Research",
    Answer:
      "Through in-depth research, we gather valuable data to guide your business toward innovative solutions and strategies that deliver measurable results.",
  },
  {
    difference: "Implementation",
    Answer:
      "From concept to reality, our skilled team translates strategies into actionable plans, ensuring seamless implementation that maximises efficiency and effectiveness.",
  },
  {
    difference: "Reporting",
    Answer:
      "Transparent reporting provides valuable insights into your progress, allowing you to measure success, refine strategies, and make informed decisions for sustained growth.",
  },
];

export default Difference;
