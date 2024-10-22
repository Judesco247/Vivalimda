import React from "react";
import styles from "../style";

const Comments = () => (
  <div className={`mt-5 bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <div class="hidden md:block lg:ml-20 overflow-x-auto lg:w-[1600px] md:w-[800px] h-[680px]">
        <div className="lg:ml-10 md:ml-10 lg:w-[500px] md:w-[400px] mt-20 mb-10">
          <h2 className="text-white text-[25px] font-bold font-bodyfont-700">
            What Our Clients are Saying
          </h2>
          <p className="text-color2 text-[14px] font-bodyfont-400">
            Don't just take our word for it - see what actual users of our
            service have to say about their experience.
          </p>
        </div>
        <div class="lg:ml-0 md:ml-6 flex gap-4 items-center lg:mt-12 md:mt-5">
          <div class="bg-color0-300 p-4 shadow-lg offset-x-4 offset-y-4 opacity-80 w-[300px] h-[379px]">
            <p className="text-white text-[14px] font-bodyfont-400 w-[260px] h-[130px] text-center mt-10">
              “I've been using this web hosting service for over a year and I'm
              really impressed with the uptime and support. The website has
              never gone down and the customer service is always quick to help
              with any issues I have. Highly recommend!”
            </p>
            <h5 className="text-white text-[15px] font-bold font-bodyfont-700 text-center mt-5">
              Jane Smith
            </h5>
            <p className="text-color2 text-[14px] font-bodyfont-400 text-center">
              Chairman
            </p>
            <p className="text-color2 text-[14px] font-bodyfont-400 text-center">
              Dangote Group of Companies
            </p>
          </div>

          <div class="bg-color0-300 p-4 shadow-lg offset-x-4 offset-y-4 opacity-80 w-[300px] h-[379px]">
            <p className="text-white text-[14px] font-bodyfont-400 w-[260px] h-[130px] text-center mt-10">
              “I've been using this web hosting service for a few months now and
              overall it's been fine. The uptime has been good and I haven't had
              any major issues. The pricing is also reasonable. Nothing
              particularly stands out as exceptional, but it gets the job done.”
            </p>
            <h5 className="text-white text-[15px] font-bold font-bodyfont-700 text-center mt-10">
              Tom Williams
            </h5>
            <p className="text-color2 text-[14px] font-bodyfont-400 text-center">
              CEO
            </p>
            <p className="text-color2 text-[14px] font-bodyfont-400 text-center">
              Gartner & CO. Industries
            </p>
          </div>

          <div class="bg-color0-300 p-4 shadow-lg offset-x-4 offset-y-4 opacity-80 w-[300px] h-[379px] hidden lg:block">
            <p className="text-white text-[14px] font-bodyfont-400 w-[260px] h-[130px] text-center mt-10">
              “I've been using this web hosting service for a few months and
              it's been nothing but problems. My website has gone down multiple
              times and the customer service has been unresponsive. I would not
              recommend this company."
            </p>
            <h5 className="text-white text-[15px] font-bold font-bodyfont-700 text-center mt-5">
              Michael Brown
            </h5>
            <p className="text-color2 text-[14px] font-bodyfont-400 text-center">
              Online Entrepreneur
            </p>
            {/* <p className='text-color2 text-[14px] font-bodyfont-400 text-center'>Dangote Group of Companies</p> */}
          </div>
        </div>
      </div>

      <div className="block md:hidden w-[428px] mt-5 mb-10">
        <div className="items-center">
          <h2 className="ml-3 w-[322px] text-white text-[25px] text-center font-semibold font-bodyfont-700">
            What Our Clients are Saying
          </h2>
          <p className="w-[360px] text-color2 text-[15px] text-center font-bodyfont-400 mt-4">
            Don't just take our word for it - see what actual users of our
            service have to say about their experience.
          </p>
        </div>

        <div class="ml-5 bg-color0-300 p-4 shadow-lg offset-x-4 offset-y-4 opacity-80 w-[300px] h-[379px]">
          <p className="text-white text-[14px] font-bodyfont-400 w-[260px] h-[130px] text-center mt-10">
            “I've been using this web hosting service for over a year and I'm
            really impressed with the uptime and support. The website has never
            gone down and the customer service is always quick to help with any
            issues I have. Highly recommend!”
          </p>
          <h5 className="text-white text-[15px] font-bold font-bodyfont-700 text-center mt-5">
            Jane Smith
          </h5>
          <p className="text-color2 text-[14px] font-bodyfont-400 text-center">
            Chairman
          </p>
          <p className="text-color2 text-[14px] font-bodyfont-400 text-center">
            Dangote Group of Companies
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Comments;
