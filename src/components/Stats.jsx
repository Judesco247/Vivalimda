import React from "react";
import { check1, about } from "../assets";
import styles from "../style";
// import { Link } from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link"

const Stats = () => (
  <div className={`bg-dimWhite inset-0 flex items-center justify-center`}>
    <div className="lg:mb-[-290px]">
      <div className="flex md:flex-row flex-cols-2 sm:py-16 py-6">
        <div className="mt-[-20px]lg:w-[600px]">
          <p className="md:ml-12 md:w-[450px] w-[328px] text-background text-[15px] font-bold mb-4 font-bodyfont-400">
            Our Journey as a Technology Consulting Company
          </p>
          <h1 className="md:ml-12 md:w-[600px] w-[328px] text-color1 text-[25px] font-bold mb-4 font-bodyfont-400">
            Enhancing Customer Engagement Through Technology
          </h1>
          <p className="md:ml-12 md:w-[617px] w-[360px] text-color2 md:text-[13px] text-[10px] font-bodyfont-400">
            Welcome to VIVALIMDA, a leading customer engagement solutions provider.
            Our mission is to enhance the communication process of customer
            engagement through technological resources. We believe in advancing
            with people, which is why we're dedicated to creating a
            people-oriented, team-oriented, innovative, and outcome- oriented
            company culture. Our vision is to lead in the customer engagement
            solutions provider industry by creating a stellar reputation and
            setting and achieving business milestones
          </p>
          <br />
          <Link to="#service">
          <button className="md:ml-12 py-2 px-6 border-2 border-background text-background text-[12px] font-bold font-bodyfont">
            Learn More
          </button>
          </Link>

          <div className="container mx-auto md:flex flex-cols-4 gap-4 mt-[80px]">
            <div className="w-[346px] mb-6">
              <div className="md:ml-12 flex items-center">
                <img src={check1} alt="bluetick" className="mr-2" />
                <h5 className="text-color1 text-[15px] font-bold font-bodyfont-400">
                  CUSTOMER FOCUS
                </h5>
              </div>
              <p className="md:ml-12 md:w-[300px] w-[365px] text-color2 text-[13px] font-bodyfont-400">
                We put the customer at the heart of everything we do. By
                listening to their needs and understanding their goals, we
                create solutions that empower their success
              </p>
            </div>
            <div className="w-[346px] mb-6">
              <div className="flex items-center">
                <img src={check1} alt="bluetick" className="mr-2" />
                <h5 className="text-color1 text-[15px] font-bold font-bodyfont-400">
                  TECHNOLOGY-LED
                </h5>
              </div>
              <p className="md:w-[300px] w-[365px] text-color2 text-[13px] font-bodyfont-400">
                Our commitment to innovation drives us to use the latest
                technology and techniques to deliver cutting-edge solutions that
                meet the evolving needs of our clients
              </p>
            </div>
          </div>

          <div className="container mx-auto md:flex flex-cols-4 gap-4">
            <div className="w-[346px] mb-12">
              <div className="md:ml-12 flex items-center">
                <img src={check1} alt="bluetick" className="mr-2" />
                <h5 className="text-color1 text-[15px] font-bold font-bodyfont-400">
                  PARTNERSHIP
                </h5>
              </div>
              <p className="md:ml-12 md:w-[300px] w-[365px] text-color2 text-[13px] font-bodyfont-400">
                We work closely with our clients, building strong partnerships
                based on trust, open communication, and a shared commitment to
                achieving their goals
              </p>
            </div>
            <div className="w-[346px] mb-12">
              <div className="flex items-center">
                <img src={check1} alt="bluetick" className="mr-2" />
                <h5 className="text-color1 text-[15px] font-bold font-bodyfont-400">
                  ADAPTABILITY
                </h5>
              </div>
              <p className="md:w-[300px] w-[365px] text-color2 text-[13px] font-bodyfont-400">
                Our agile approach allows us to quickly adapt to changes in our
                clients' needs, ensuring we always deliver effective solutions
                that make a meaningful impact
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-[424px] h-[911px] float-right">
          <img src={about} alt="Image" className="w-full h-[580px]" />
        </div>
      </div>
    </div>
  </div>
);

export default Stats;
