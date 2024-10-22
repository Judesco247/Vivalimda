import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";

const Testimonials = () => (
  <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexStart}`}>
    <div class="md:ml-26 md:w-[850px] w-[380px] md:h-[110px] h-[186px] item-center mb-20">
      <div class="md:flex flex-cols-2 justify-between bg-color0 mt-[70px] py-3 px-3">
        <div class="">
          <p class="p-3 text-white md:text-[20px] text-[22px] text-center font-semibold font-bodyfont-400">
            Talk to an Expert About Your Project
          </p>
        </div>
        <div class="">
        <Link to="/contact-us">
          <button className="md:ml-6 md:w-[206px] w-[350px] md:h-[46px] h-[56px] py-3 px-3 bg-background text-white px-4 py-2 font-bodyfont">
            Book Consultation
          </button>
        </Link>{" "}
          {/* <button className="md:p-3 md:mr-30 bg-background md:w-[206px] w-[350px] md:h-[46px] h-[56px]">
            <Link
              to="/contact-us"
              className="ml-20 flex cursor-pointer text-center text-background font-bodyfont-400 text-white text-[13px] font-semibold"
            >
              Book Consultation
            </Link>
          </button> */}
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
