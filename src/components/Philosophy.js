import React from "react";
import PhilosophyCard from "./PhilosophyCard";

const Philosophy = () => {
  return (
    <div
      className="max-[450px]:w-[100%]  w-[100%] text-white py-16 pt-1 md:pt-1 md:py-16"
      id="about"
    >
      <div className="bs-container max-[425px]:w-[100%] max-[400px]:w-[100%] max-[450px]:w-[105%] max-[374px]:w-[97%] container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className=" max-[400px]:px-[2rem] w-[100%] max-[400px]:w-[100%] md:w-[90%] md:mx-auto">
          {/* <img
            src="https://images.clickfunnels.com/87/19aca7c1eb43e9bf2ef112a8c1c348/stats-v2.png"
            alt="coding illustration"
            className="w-[100%] md:mx-auto"
          /> */}
          <div className="max-[400px]:mx-auto max-[400px]:w-[100%] w-[100%] md:mx-auto">
            <PhilosophyCard></PhilosophyCard>
          </div>
        </div>
        <div className="max-400:flex max-400:items-center max-400:justify-center flex-col max-[400px]:ml-[2rem]  max-[400px]:w-[80%] w-[100%] md:w-[110%] lg:w-[90%]  md:mx-auto md:mt-[7rem] xl:mt-[5rem] ">
          <div className="">
            <h3 className=" min-[2000px]:text-[3rem] md:text-3xl text-2xl text-black font-extrabold my-4 md:mb-1 md:my-0 pb-2">
              Our Philosophy
            </h3>

            <p className=" min-[2000px]:text-[1.5rem] pb-3 text-[18px] tracking-wide text-gray-500 text-left">
              Here at IAG Media, we've worked with the best in the industry to
              produce millions of dollars in return on ad spend. We do away with
              the the inefficiencies & formalities that plague most agencies.
            </p>
            <p className="  min-[2000px]:text-[1.5rem] pb-3 text-[18px] tracking-wide text-gray-500">
              Our client case studies have become myth, our waiting list is
              longer than your complaints with your current agency and we look
              for a very specific kind of client.
            </p>

            <p className="  min-[2000px]:text-[1.5rem] text-[18px] tracking-wide text-black font-bold mb-5">
              Maybe that’s you: it would be our honour to find out. Schedule
              your FREE discovery call below.
            </p>
          </div>

          {/* <a
            href="/#call"
            className="  text-white w-full ml-[1.5rem] md:ml-auto mt-3 "
          >
        <button className="bg-[#b90edf]    mx-auto text-white py-[6px] px-10  rounded-full">
          <div className="block w-max" >
          <span className="font-extrabold [20px] md:text-[24px] text-gray-100">Speak to our team today</span>
          <span className="block text-md text-gray-300">Schedule your free audio call now</span>
          </div>
        </button>
          </a> */}

          <div className="     ">
            <a
              href="/#call"
              className="  text-white  md:ml-auto mt-4 flex items-center justify-center lg:justify-start"
            >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
