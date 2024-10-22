import React from "react";
import { help_image, line } from "../assets";
import { Link } from "react-router-dom";

const Help = () => (
  <div>
    <div class="hidden lg:flex md:flex items-center">
      <img
        className="lg:w-1/2 w-[450px] lg:h-[600px] h-[550px]"
        src={help_image}
        alt="Image"
      />
      <div className="lg:w-1/2 w-[500px] lg:h-[600px] h-[550px] p-24 lg:mt-0 mt-[-100px] ">
        <h5 className="text-[25px] text-white font-bold font-bodyfont-400 px-2">
          <span>
            <img
              src={line}
              alt="bluetick"
              className="mr-2 mb-2 w-[120px] h-[3px]"
            />
          </span>
          How We Can Help
        </h5>
        <p className="lg:mr-0 mr-[50px] text-white lg:text-[13px] text-[14px] font-bodyfont-400 pt-5 pb-6">
          Our expertise in knowledge management, business analysis, integration,
          and project management equips us to propel your business forward. We
          tailor innovative solutions to address your unique challenges, driving
          growth and success. By optimizing operations, enhancing customer
          engagement, and providing seamless integration, we empower you to
          navigate the complexities of today's business landscape. Our proven
          track record, customer-centric approach, and commitment to excellence
          set us apart as your trusted partner. Let's collaborate to unlock your
          business's full potential and achieve lasting results.
        </p>

        <div class="md:flex pt-5 lg:mr-0 mr-[30px]">
          <button className="w-[150px] py-3 px-3 text-[13px] font-bold text-white px-4 py-2 border-2 border-background font-bodyfont-400 ">
            <Link
              to="/services"
              className="ml-5 flex cursor-pointer text-center font-bodyfont-400 text-white text-[13px] font-semibold"
            >
              Our Services
            </Link>
          </button>
          <button className="w-[150px] py-3 px-3 text-[13px] font-bold bg-background text-white px-4 py-2 ml-3 font-bodyfont-400">
            <Link
              to="/contact-us"
              className="ml-5 flex cursor-pointer text-center font-bodyfont-400 text-white text-[13px] font-semibold"
            >
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </div>

    <div className="block md:hidden w-[428px] h-[1136px]">
      <img className="w-[428px] h-[375px]" src={help_image} alt="Image" />
      <div className="ml-6 w-[350px] h-[506px] mt-10">
        <h5 className="text-[25px] text-white font-bold font-bodyfont-400 px-2">
          <span>
            <img
              src={line}
              alt="bluetick"
              className="mr-2 mb-2 w-[120px] h-[3px]"
            />
          </span>
          How We Can Help
        </h5>
        <p className="text-white text-[14px] font-bodyfont-400 pt-5 pb-6">
          Our expertise in knowledge management, business analysis, integration,
          and project management equips us to propel your business forward. We
          tailor innovative solutions to address your unique challenges, driving
          growth and success. By optimizing operations, enhancing customer
          engagement, and providing seamless integration, we empower you to
          navigate the complexities of today's business landscape. Our proven
          track record, customer-centric approach, and commitment to excellence
          set us apart as your trusted partner. Let's collaborate to unlock your
          business's full potential and achieve lasting results.
        </p>

        <div class="mt-5">
          <button className="w-[350px] h-[54px] text-[13px] font-bold text-white border-2 border-background font-bodyfont-400 ">
            Our Services
          </button>
        </div>
        <div class="mt-3">
          <button className="w-[350px] h-[54px] text-[13px] font-bold bg-background text-white font-bodyfont-400">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Help;
