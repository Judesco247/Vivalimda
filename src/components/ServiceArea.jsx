import React from "react";
import { Frame } from "../assets";

const ServiceArea = () => (
  <div className="mt-10 md:w-[800px] w-[428px] md:h-[700px] h-[722px] md:mb-20">
    <h5 className="mb-5 text-center text-color1 text-[25px] font-bold font-bodyfont-700">
      Our Service Area
    </h5>
    <p className="mb-10 text-center text-color2 text-[13px] font-bodyfont-400">
      With our project management teams, you can trust that your projects are in
      capable hands. Our teams are well-versed in both agile and waterfall
      methodologies, allowing us to offer a comprehensive range of services that
      cover every stage of the project life cycle.
    </p>
    <div class="md:grid grid-cols-2 items-center">
      <div className="flex-1 w-[418px] h-[429px]">
        <ul className="list-inside list-disc text-color2 text-[13px] font-bodyfont-400 pt-5 ml-3">
          <li className="mb-3">
            <span className="text-color1 font-bold">
              IT Project Management:
            </span>{" "}
            IT projects can often be difficult to manage due to the sheer amount
            of resources involved. Between software and hardware tools, data
            management and programming, numerous factors affect the success of
            an IT project. Momentum can provide support during IT project
            development, offering technical expertise and management,
            requirements gathering, third-party testing and implementation
            support.
          </li>
          <li className="mb-3">
            <span className="text-color1 font-bold">
              IT Project Management:
            </span>{" "}
            IT projects can often be difficult to manage due to the sheer amount
            of resources involved. Between software and hardware tools, data
            management and programming, numerous factors affect the success of
            an IT project. Momentum can provide support during IT project
            development, offering technical expertise and management,
            requirements gathering, third-party testing and implementation
            support.
          </li>
        </ul>
      </div>
      <img
        src={Frame}
        alt="Image"
        className=" w-[450px] h-[300px] ml-10 mt-[-110px]"
      />
    </div>

    <ul className="list-inside list-disc text-color2 text-[13px] font-bodyfont-400 pt-5 ml-4 mt-[-110px] w-[820px]">
      <li className="mb-3">
        <span className="text-color1 font-bold">IT Project Management:</span> IT
        projects can often be difficult to manage due to the sheer amount of
        resources involved. Between software and hardware tools, data management
        and programming, numerous factors affect the success of an IT project.
        Momentum can provide support during IT project development, offering
        technical expertise and management, requirements gathering, third-party
        testing and implementation support.
      </li>
      <li className="mb-3">
        <span className="text-color1 font-bold">IT Project Management:</span> IT
        projects can often be difficult to manage due to the sheer amount of
        resources involved. Between software and hardware tools, data management
        and programming, numerous factors affect the success of an IT project.
        Momentum can provide support during IT project development, offering
        technical expertise and management, requirements gathering, third-party
        testing and implementation support.
      </li>
    </ul>
  </div>
);

export default ServiceArea;
