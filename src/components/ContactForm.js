import React from "react";
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

function ContactForm() {
  return (
    <div className="max-[370px]:w-[100%] max-[400px]:w-[100%] max-[450px]:w-[100%] bg-cover  bg-no-repeat bg bg-white bg-[url('/src/assets/image5.png')] ">
    <div className="bs-container">
      <div className="mx-auto my-4 py-12 w-full sm:w-4/5 md:w-3/4 lg:w-3/4 xl:w-3/4">
        <h1 className="text-left text-4xl font-bold text-[#fc3792]">
           Contact
        </h1>
        <div className="flex justify-between flex-col md:flex-row py-10">
          <div className="flex pt-2">
          <div className="flex w-12 h-12 mr-4 rounded bg-[#fc3792]">

            <FaPhone color="#ffff" className="m-auto w-7 h-7" />
            </div>
            <div className="flex flex-col text-[#fff] ">
              <span>Phone Number</span>
              <span><a target="_blank" rel="noreferrer" href="tel:+358449874720">+358449874720</a></span>
            </div>
          </div>
          <div className="flex pt-2">
          <div className="flex w-12 h-12 mr-4 rounded bg-[#fc3792]">

            <FaEnvelope color="#ffff" className="m-auto w-7 h-7" />
            </div>
            <div className="flex flex-col text-[#fff] ">
              <span>Email</span>
              <span><a target="_blank" rel="noreferrer" href="mailto:lamamediaop@gmail.com">lamamediaop@gmail.com</a></span>
            </div>
          </div>
          <div className="flex pt-2">
            <div className="flex w-12 h-12 mr-4 rounded bg-[#fc3792]">
            <FaInstagram color="#ffff" className="m-auto w-8 h-8"  />

            </div>
            <div className="flex flex-col text-[#fff] ">
              <span>Instagram</span>
              <span><a target="_blank" rel="noreferrer" href="https://www.instagram.com/lama__media/">@lama-media</a></span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ContactForm;
