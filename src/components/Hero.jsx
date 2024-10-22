import styles from "../style";
import {
  discount,
  robot,
  banner,
  amazon,
  chime,
  ebay,
  googles,
  openwave,
  pinterest,
  hubspot,
  salesforce,
  home_banner,
} from "../assets";
import GetStarted from "./GetStarted";
import { Link } from "react-router-dom";

const Hero = () => (
  <div className={``}>
    {/* <div className="hidden md:block bg-cover bg-center bg-hero-bg w-full"> */}
    <div className="hidden md:block">
      <img
        className="lg:w-full lg:h-[650px] md:w-full md:h-full bg-cover"
        src={home_banner}
        alt="banner"
      />
      <div className="flex-[1.5] lg:max-w-full h-[650px] md:w-full justify-start item-start rounded-lg p-8 mb-8 mt-[-650px]">
        <h1 className="ml-3 lg:w-[1151px] h-[154px] md:w-[750px] lg:text-[50px] text-[40px] text-white font-bold font-bodyfont mb-4 lg:mt-10 md:mt-40 absolute">
          Empowering Customer Engagement <br /> Through Technology
        </h1>
        <hr className="ml-3 w-[769px] h-2 border-color4 mb-4 absolute lg:mt-56 md:mt-80" />
        <p className="ml-3 lg:w-[600px] md:w-[550px] text-[15px] mb-4 absolute text-white lg:mt-64 md:mt-[350px] font-bodyfont">
          VIVALIMDA empowers customer engagement through innovative technology
          solutions.
          Our services optimize operations, enhance data insights, and create a
          seamless customer experience, helping businesses of all sizes
          achieve their goals with ease
        </p>
        <Link to="/contact-us">
          <button className="ml-3 w-[200px] py-3 px-3 bg-background text-white  absolute lg:mt-96 md:mt-[450px] font-bodyfont">
          Book Consultation
          </button>
        </Link>{" "}
        {/* <h5 className="ml-96 px-4 py-2 rounded absolute mt-[-350px] text-color4">Trusted by startups and Fortune 500 companies</h5> */}
      </div>

      {/* <div className="ml-12 w-[1150px] flex -mx-4 mb-8 absolute mt-[-300px]">
      <div className="w-1/4 md:w-1/8 lg:w-1/8 px-4 mb-4">
        <img src={salesforce} alt="Client 1" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={ebay} alt="Client 2" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={googles} alt="Client 3" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={pinterest} alt="Client 4" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={chime} alt="Client 5" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={openwave} alt="Client 6" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={amazon} alt="Client 7" />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/8 px-4 mb-4">
        <img src={hubspot} alt="Client 8" />
      </div>
    </div> */}
    </div>

    <div className="block md:hidden w-[428px] h-[564px] bg-color0 mt-4">
      <div className="w-[380px] h-[483.97px]">
        <h1 className="ml-6 w-[364px] h-[123px] text-[33px] text-white font-bold font-bodyfont-700 mb-4 mt-10 absolute">
          Empowering Customer Engagement Through Technology
        </h1>
        <hr className="ml-12 w-[325px] h-2 border-color4 mb-4 absolute mt-56" />
        <p className="ml-6 w-[363px] h-[120px] text-[15px] mb-4 font-bodyfont-400 absolute text-color3 mt-64">
          VIVALIMDA empowers customer engagement through innovative technology
          solutions. Our services optimize operations, enhance data insights,
          and create a seamless customer experience, helping businesses of all
          sizes achieve their goals with ease
        </p>
        <br />
        <Link to="/contact-us">
          <button className="ml-6 w-[350px] h-[56px] py-3 px-3 bg-background text-white absolute mt-96 font-bodyfont">
            Book Consultation
          </button>
        </Link>{" "}
      </div>
    </div>
  </div>
);

export default Hero;
