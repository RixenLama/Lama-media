/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Footer = () => {
  return (
    <><section className="max-[450px]:w-[100%]  w-[100%] bg-cover py-8 bg-no-repeat bg bg-transparent bg-[url('/src/assets/image4.png')]">
      <div className="bs-container pt-[5rem] max-[425px]:w-[100%] max-[400px]:w-[100%] max-[450px]:w-[105%] max-[374px]:w-[97%]  ">
        <div className="container mx-auto text-center md:text-center ">
          <h2 className=" pl-2 text-3xl md:text-3xl tracking-[0.08] md:tracking-[0.01em] leading-[1.3] md:leading-[0.8] md:text-center md:text-[56px] font-extrabold text-[#fc3792] mb-4">
            Have A General Inquiry?
          </h2>
          <div className=" md:w-[50vw] mx-auto">
            <p className="text-gray-200 tracking-[0.05em] leading-[1.4] text-center text-[22px] px-auto mb-4">
              If you have a general inquiry and would like to speak to our
              expert team, you can contact us via email at:
              lamamediaop@gmail.com
            </p>
          </div>
          <a href="/#call">
            <button className="bg-[#b90edf] mainBtn mr-[1rem]  text-white py-[10px] sm:py-[14px] px-10  rounded-full">
              <div className="block w-max">
                <span className="font-extrabold leading-5 text-[14px] sm:text-[18] md:text-[24px] text-gray-100">
                  Speak To Our Team Today
                </span>
                <span className="block text-[14px] leading-5 sm:text-[15px] text-gray-300">
                  Schedule your free audio call now
                </span>
              </div>
            </button>
          </a>

          <div className=" mt-[6rem] mx-auto flex flex-col items-center justify-center">
            <div>
              <h2 className="mb-10  text-[#ffff]  text-26px md:text-[30px]">
                <b>LAMA</b>-Media
              </h2>
            </div>
            <div className=" md:w-[43vw] mx-auto">
              <p className="text-gray-200 font-bold leading-[1.7] md:leading-[0.7] text-center text-[16px] px-auto mb-4">
                LAMA Website Services
              </p>
            </div>
            <div className=" md:w-[43vw] mx-auto">
              <p className="text-gray-200 leading-[1.3] md:leading-[0.7] text-center text-[16px] px-auto mb-4">
                All Rights Reserved | All Wrongs Reversed
              </p>
            </div>
            <div className=" mt-[1rem] md:w-[43vw] mx-auto">
              <p className="text-gray-200 leading-[1.3] md:leading-[0.7] text-center text-[16px] px-auto mb-4">
                Terms & Conditions | Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <div class="trustpilot-widget bg-black p-2" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="64809450bdbee6f2c10258ad" data-style-height="24px" data-style-width="100%" data-theme="dark" data-min-review-count="10" data-without-reviews-preferred-string-id="3" data-style-alignment="center">
        <a href="https://www.trustpilot.com/review/lama-media.org" target="_blank" rel="noopener">Trustpilot</a>
      </div>
    </>
  );
};

export default Footer;
