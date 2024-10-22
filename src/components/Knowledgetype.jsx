import React from "react";
import { explicit, knowledge, tacit } from "../assets";

const Knowledgetype = () => (
  <div className="mt-10 md:w-[800px] w-[428px] md:h-[395px] h-[722px] md:mb-20">
    <h5 className="mt-10 mb-10 text-center text-color1 text-[25px] font-bold font-bodyfont-700">
      Types of Knowledge
    </h5>
    <div class="md:grid md:grid-cols-3 mt-10 items-center">
      <div class="container mx-auto md:w-[250px] w-[379px] h-[200px] bg-white border-t-4 border-background">
        <h5 className="ml-3 text-color6 text-[15px] font-bold font-bodyfont-400 mt-5">
          <span>
            <img src={explicit} alt="bluetick" className="" />
          </span>
          Explicit knowledge
        </h5>
        <p className="ml-3 text-color2 text-[13px] font-bodyfont-400 pt-5">
          Explicit knowledge is knowledge and information that can be easily
          codified and taught, such as how to change the toner in a printer and
          mathematical equations.
        </p>
      </div>

      <div class="container mx-auto md:w-[250px] w-[379px] h-[200px] bg-white border-t-4 border-background">
        <h5 className="ml-3 text-color6 text-[15px] font-bold font-bodyfont-400 mt-5">
          <span>
            <img src={knowledge} alt="bluetick" className="" />
          </span>
          Implicit knowledge
        </h5>
        <p className="ml-3 text-color2 text-[13px] font-bodyfont-400 pt-5">
          Explicit knowledge is knowledge and information that can be easily
          codified and taught, such as how to change the toner in a printer and
          mathematical equations.
        </p>
      </div>

      <div class="container mx-auto md:w-[250px] w-[379px] h-[200px] bg-white border-t-4 border-background">
        <h5 className="ml-3 text-color6 text-[15px] font-bold font-bodyfont-400 mt-5">
          <span>
            <img src={tacit} alt="bluetick" className="" />
          </span>
          Tacit knowledge
        </h5>
        <p className="ml-3 text-color2 text-[13px] font-bodyfont-400 pt-5">
          Explicit knowledge is knowledge and information that can be easily
          codified and taught, such as how to change the toner in a printer and
          mathematical equations.
        </p>
      </div>
    </div>
  </div>
);

export default Knowledgetype;
