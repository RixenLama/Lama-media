import React from "react";
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

function ContactForm() {
  return (
    <div className="   bg-[rgb(17,16,17)] p-10 mb-10 text-[#fff] flex justify-center">
     {/* <div className="max-[425px]:w-[100%] max-[400px]:w-[100%] max-[450px]:w-[105%] max-[374px]:w-[97%]"> */}
  <div className="bs-container flex justify-center">
     <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/4 xl:w-3/4">
        <h1 className="text-left text-4xl font-bold text-[#fc3792]">
           Contact
        </h1>
        <div className="flex justify-between flex-col  lg:flex-row py-10">
          <div className="flex pt-2">
          <div className="flex w-12 h-12 mr-4 rounded bg-[#fc3792]">

            <FaPhone color="#ffff" className="m-auto w-7 h-7" />
            </div>
            <div className="flex flex-col text-[#fff] ">
              <span>Phone Number</span>
              <span>+358449874720</span>
            </div>
          </div>
          <div className="flex pt-2">
          <div className="flex w-12 h-12 mr-4 rounded bg-[#fc3792]">

            <FaEnvelope color="#ffff" className="m-auto w-7 h-7" />
            </div>
            <div className="flex flex-col text-[#fff] ">
              <span>Email</span>
              <span>lamamediaop@gmail.com</span>
            </div>
          </div>
          <div className="flex pt-2">
            <div className="flex w-12 h-12 mr-4 rounded bg-[#fc3792]">
            <FaInstagram color="#ffff" className="m-auto w-8 h-8"  />

            </div>
            <div className="flex flex-col text-[#fff] ">
              <span>Instagram</span>
              <span>@lama-media</span>
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input className="py-2 px-4 text-[#000]" type="text" placeholder="Your Name" />
            <input
              className="py-2 px-4 text-[#000]"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <textarea
            rows={5}
            className="py-2 px-4 text-[#000] w-full"
            placeholder="Your Message"
          ></textarea>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy-policy"
              name="privacy-policy"
              className="mr-2"
            />
            <label htmlFor="privacy-policy">I accept the privacy policy</label>
          </div>
          <button className="bg-[#fc3792] rounded text-white py-2 px-4">
            Send Message
          </button>
        </form>
      {/* </div> */}
     </div>
    </div>
    </div>
  );
}

export default ContactForm;
