import React from "react";
import { iamawizard, image } from "../assets";

const Hero = () => {
  return (
    <div className="  max-[450px]:w-[100%] w-[100%] bg-cover bg-no-repeat bg-white bg-[url('/src/assets/image.png')]">
      <div className="bs-container max-[425px]:w-[100%] max-[400px]:w-[100%] max-[450px]:w-[100%] max-[374px]:w-[97%]  pt-[20px]  2xl:pt-[200px] lg:pb-[1rem]  max-[1500px]:pb-auto pb-auto outline-none flex items-center justify-center">
        {/* <div className="flex mb-4 md:mb-0">
          <img  className="w-[150px] m-10" src="https://images.clickfunnels.com/ed/749dda621d4e25ac4bcf44c4095edb/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
        </div> */}
        <div className="  container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="max-[389px]:w-[100vw] md:mt-[15rem] xl:mt-[5rem] max-[360px]:w-[100%] max-[400px]:w-[90%] max-[400px]:mx-[5px] flex-1 w-full flex md:p-10 min-[1600px]:pt-10 mt-[5rem]  ">
            <div className="  md:mr-[-7rem] md:ml-[1rem] md:flex-1 md:mt-[-6rem] min-[1250px]:mr-[-14rem] min-[1550px]:mt-[-14rem]  xl:mt-[-5rem]">
              <h1 className="text-white mb-1 md:mb-4 font-bold uppercase text-xl md:text-1xl text-left tracking-widest xl:text-2xl">
                Current Era Magic
              </h1>
              <h2 className="uppercase leading-9 mb-1 md:mb-4 text-left text-[#FC3792] font-extrabold  text-xl md:text-2xl text-left tracking-widest xl:text-4xl">
                We help startups and new businesses enter the online market via
                websites.
              </h2>
              {/* <h1 className="uppercase mb-2 md:mb-4 text-left text-[#FC3792] font-extrabold text-lg xl:text-2xl md:text-lg tracking-[1] md:leading-[0.4] xl:text-3xl">
                We help startups and new businesses enter the online market via
                websites.
              </h1> */}
              <p className="md:py-auto text-lg md:text-lg tracking-wide text-left text-gray-200 xl:text-xl">
                Expand your market and meet new clients and customers.
              </p>
              <br />
              <p className="md:pt-[0.5rem] text-lg md:text-lg tracking-wide text-left text-gray-200 xl:text-xl">
                It's time to increase your revenue and scale your business.
              </p>
              <div className="     ">
                <a
                  href="/#call"
                  className=" text-white   md:ml-auto mt-5 flex items-center justify-center md:justify-start "
                >
                  <button className="bg-[#b90edf] mainBtn mr-[1rem] md:mx-0 text-white   px-3 sm:py-[13px] sm:px-8 md:px-10  rounded-full">
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
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-center md:pt-16 xl:pt-20 xl:ml-28 flex-1 w-full md:w-[100%]  xl:mb-[5rem]  min-[1600px]:mt-[-2rem]  md:mt-[-10rem]  min-[2000px]:mt-[1rem] px-10">
            <div className=" md:mt-[10rem]  2xl:mt-[5rem] 2xl:mt-[-3rem]">
              <img
                className=" w-[100%] h-full md:w-[100%] md:pl-4"
                src={iamawizard}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
