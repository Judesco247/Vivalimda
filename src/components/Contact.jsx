import React, { useState } from "react";
import { line } from "../assets";
import { footerLinks, socialMedia2 } from "../constants";
import styles from "../style";
import axios from "axios";

const Contact = () => {
  const [emailData, setEmailData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    service: "",
    company: "",
    message: "",
    file: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailData);

    const { fname, lname, email, phone, service, message, company } = emailData;

    const data = {
      firstName: fname,
      lastName: lname,
      subject: service,
      email: email,
      phoneNo: phone,
      message: message,
      company: company,
    };
    console.log(data);

    try {
      const response = await axios.post(
        "https://atendi-backend.onrender.com/api/mail",
        data
      );
      console.log("Email sent successfully", response.data);
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  return (
    <div className={`bg-color0 ${styles.paddingX} ${styles.flexStart}`}>
      {/* <div className={`${styles.boxWidth}`}> */}
      <div class="hidden md:flex mb-20 lg:w-[1200px] md:w-[400px] lg:mr-0 md:mr-[350px]">
        <div class="ml-3 p-4 w-1/2">
          <h1 class="text-[30px] text-white font-bold font-bodyfont-700 mb-4">
            We’d love to hear from you
          </h1>
          <p className="text-white text-[13px] font-bodyfont-700 pb-6">
            We're here to answer any questions you have about our services.
            Let's start a conversation and explore how VIVALIMDA can help your
            business thrive through innovative technology solutions.
          </p>
          <div className="container mx-auto p-2">
            <h5 className="text-[20px] text-white font-bold font-bodyfont-400">
              <span>
                <img src={line} alt="bluetick" className="mr-2 mb-2" />
              </span>
              Our Location
            </h5>
            <p className="text-white text-[13px] font-bodyfont-400 pt-5">
              Suite 110 <br />
              150 Midsummer Boulevard
              <br />
              Milton Keynes <br />
              MK9 1FD <br />
              England.
            </p>
            <p className="text-white text-[13px] font-bodyfont-400 pt-5">
              <span className="text-white">Email:</span> info@atendiconsulting.com
            </p>
            <p className="text-white text-[13px] font-bodyfont-400 pt-2">
              <span className="text-white">Phone Number:</span> +441908103520
            </p>
          </div>
          <div className="container mx-auto p-2 mt-4">
            <div class="w-full flex justify-between md:flex-row-2 flex-col pt-6">
              <div class="flex items-center mb-5">
                <h5 className="text-[20px] text-white font-bold font-bodyfont-400">
                  <span>
                    <img src={line} alt="bluetick" className="mr-2 mb-2" />
                  </span>
                  Follow Us
                </h5>
              </div>
              <div className="mr-6 flex flex-row md:mt-0 mt-10">
                {socialMedia2.map((social, index) => (
                  <img
                    key={social.id}
                    src={social.icon}
                    alt={social.id}
                    className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                      index !== socialMedia2.length - 1 ? "mr-6" : "mr-0"
                    }`}
                    onClick={() => window.open(social.link)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div class="mb-4">
                <label
                  class="block text-white font-bold mb-2 font-bodyfont-400"
                  for="fname"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={emailData.fname}
                  onChange={handleChange}
                  class="w-[270px] border border-gray-400 p-2"
                  placeholder="Enter your First Name"
                />
              </div>
              <div class="mb-4 ml-3">
                <label
                  class="block text-white font-bold mb-2 font-bodyfont-400"
                  for="lname"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={emailData.lname}
                  onChange={handleChange}
                  class="w-[270px] border border-gray-400 p-2"
                  placeholder="Enter your Last Name"
                />
              </div>
            </div>

            <div className="flex">
              <div class="mb-4">
                <label
                  class="block text-white font-bold mb-2 font-bodyfont-400"
                  for="phone"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={emailData.phone}
                  onChange={handleChange}
                  class="w-[270px] border border-gray-400 p-2"
                  placeholder="Enter your Phone Number"
                />
              </div>
              <div class="mb-4 ml-3">
                <label
                  class="block text-white font-bold mb-2 font-bodyfont-400"
                  for="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={emailData.email}
                  onChange={handleChange}
                  class="w-[270px] border border-gray-400 p-2"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex">
              <div class="mb-4">
                <label
                  class="block text-white font-bold mb-2 font-bodyfont-400"
                  for="service"
                >
                  Services
                </label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  value={emailData.service}
                  onChange={handleChange}
                  class="w-[270px] border border-gray-400 p-2"
                  placeholder="Enter your Subject"
                />
              </div>
              <div class="mb-4 ml-3">
                <label
                  class="block text-white font-bold mb-2 font-bodyfont-400"
                  for="company"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={emailData.company}
                  onChange={handleChange}
                  class="w-[270px] border border-gray-400 p-2"
                  placeholder="Enter your Company's Name"
                />
              </div>
            </div>

            <div class="mb-4">
              <label
                class="block text-white font-bold mb-2 font-bodyfont-400"
                for="message"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                value={emailData.message}
                onChange={handleChange}
                class="w-[550px] border border-gray-400 p-2 rounded"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div class="flex flex-col justify-center">
              <p className="text-white">
                Drag and Drop or{" "}
                <label for="fileInput" class="text-background cursor-pointer">
                  Browse Files
                </label>{" "}
                (up to 5 files of 20MB overall)
              </p>
              <input
                id="fileInput"
                type="file"
                class="hidden"
                name="file"
                value={emailData.file}
                onChange={handleChange}
                multiple
                accept=".jpg, .png"
                max="5"
                max-size="20000"
              />
              <p id="fileCount" class="mt-2 text-gray-500"></p>
            </div>
            <br />
            <br />

            <button
              type="submit"
              className="w-[150px] py-3 px-3 text-[13px] font-bold bg-background text-white font-bodyfont-400"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>

      <div className="block md:hidden w-[428px] h-[1680px] mt-4">
        <h1 class="text-[24px] w-[365px] h-[31px] text-white font-semibold font-bodyfont-700 mt-8 mb-4">
          We’d love to hear from you
        </h1>
        <p className="text-white text-[16px] w-[365px] h-[127px] items-center font-bodyfont-700 mt-8">
          We're here to answer any questions you have about our services. Let's
          start a conversation and explore how VIVALIMDA can help your business
          thrive through innovative technology solutions.
        </p>

        <form className="mt-14" onSubmit={handleSubmit}>
          <div class="mb-4">
            <label class="block text-white mb-2 font-bodyfont-400" for="fname">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              onChange={handleChange}
              class="w-[355px] h-[50px] border border-gray-400 p-2"
              placeholder="Enter your First Name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-white mb-2 font-bodyfont-400" for="lname">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              onChange={handleChange}
              class="w-[355px] h-[50px] border border-gray-400 p-2"
              placeholder="Enter your Last Name"
            />
          </div>

          <div class="mb-4">
            <label class="block text-white mb-2 font-bodyfont-400" for="phone">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              onChange={handleChange}
              class="w-[355px] h-[50px] border border-gray-400 p-2"
              placeholder="Enter your Phone Number"
            />
          </div>
          <div class="mb-4">
            <label class="block text-white mb-2 font-bodyfont-400" for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              class="w-[355px] h-[50px] border border-gray-400 p-2"
              placeholder="Enter your email"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-white mb-2 font-bodyfont-400"
              for="service"
            >
              Services
            </label>
            <input
              type="text"
              id="service"
              name="service"
              onChange={handleChange}
              class="w-[355px] h-[50px] border border-gray-400 p-2"
              placeholder="Enter your Subject"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-white mb-2 font-bodyfont-400"
              for="company"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              onChange={handleChange}
              class="w-[355px] h-[50px] border border-gray-400 p-2"
              placeholder="Enter your Company's Name"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-white mb-2 font-bodyfont-400"
              for="message"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              class="w-[355px] h-[163px] border border-gray-400 p-2 rounded"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div class="flex flex-col justify-center mb-10">
            <p className="w-[355px] h-[20px] text-white">
              Drag and Drop or{" "}
              <label for="fileInput" class="text-background cursor-pointer">
                Browse Files
              </label>
            </p>
            <input
              id="fileInput"
              type="file"
              onChange={handleChange}
              class="hidden"
              multiple
              accept=".jpg, .png"
              max="5"
              max-size="20000"
            />
            <p id="fileCount" class="mt-2 text-gray-500"></p>
          </div>

          <button className="w-[355px] h-[50px] text-[13px] bg-background text-white font-semibold font-bodyfont-400">
            Send Request
          </button>
        </form>

        <div className="container mx-auto mt-16">
          <h5 className="text-[20px] text-white font-bold font-bodyfont-400">
            <span>
              <img src={line} alt="bluetick" className="mr-2 mb-2" />
            </span>
            Our Location
          </h5>
          <p className="text-white text-[13px] font-bodyfont-400 pt-5">
            Suite 110 <br />
            150 Midsummer Boulevard
            <br />
            Milton Keynes <br />
            MK9 1FD <br />
            England.
          </p>
          <p className="text-white text-[13px] font-bodyfont-400 pt-5">
            Email:info@atendiconsulting.com
          </p>
          <p className="text-white text-[13px] font-bodyfont-400 pt-2">
            Phone Number:+441908103520
          </p>
        </div>

        <div className="container mx-auto p-2 mt-4">
          <div class="w-full flex justify-between md:flex-row-2 flex-col pt-6">
            <div class="flex items-center mb-5">
              <h5 className="text-[20px] text-white font-bold font-bodyfont-400">
                <span>
                  <img src={line} alt="bluetick" className="mr-2 mb-2" />
                </span>
                Follow Us
              </h5>
            </div>
            <div className="mr-6 flex flex-row mt-5">
              {socialMedia2.map((social, index) => (
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                    index !== socialMedia2.length - 1 ? "mr-6" : "mr-0"
                  }`}
                  onClick={() => window.open(social.link)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Contact;
