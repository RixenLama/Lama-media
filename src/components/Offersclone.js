import React, { useEffect, useState } from "react";
import {FaRegTimesCircle} from "react-icons/fa"

const Offerclone = () => {
  return (

    <div
      className="max-[450px]:w-[100%]  w-[100%] pt-[4rem] pb-[4rem]  bg-cover bg-no-repeat bg-[url('/src/assets/image2.png')]"
      id="call"
    >

      <div className="bs-container max-[425px]:w-[100%] max-[400px]:w-[100%] max-[450px]:w-[105%] max-[375px]:w-[97%] max-[400px]:mx-[5px] xl:w-[100%] max-[1800px]:container  lg:pl-[2rem] xl:pl-[10rem]   ">
        <div className="md:w-[95%] lg:w-[100%] min-[1600px]:w-[100%] xl:max-w-[80%] grid-cols-1 grid lg:grid-cols-2 lg:gap-x-16 px-5 min-[1400px]:m-[5rem]   min-[2100px]:mx-[10rem] ">
          <div className=" min-[780px]:w-[110%] min-[2100px]:ml-[10rem] md:w-[105%] min-[850px]:w-[100%] lg:ml-auto sm:w-[110%] lg:w-[115%] xl:w-[130%]  min-[1000px]:w-[110%]  min-[1400px]:ml-[-5rem] min-[1469px]:mt-[5rem]  mt-[1rem] ">
            <h2 className=" min-[2000px]:text-[2rem] max-[400px]:text-[16px] max-[600px]:mt-16 mt-8 text-[18px] text-white  font-semibold">
            What we offer
            </h2>
            <h1 className=" min-[2000px]:text-[3rem] md:text-4xl  xl:text-4xl text-3xl text-[#fc1892]  font-extrabold mb-4">
            Website Development & Design <br />
            <h3 className=" min-[2000px]:text-[2rem] text-white max-[400px]:text-[16px] text-[20px] font-semibold ">Design, and Development</h3>
            </h1>
            <br />

            <div className=" md:w-[100%]">
            <p className="  min-[2000px]:text-[1.5rem] max-[500px]:text-[18px] mt-1 text-[20px] text-white  tracking-wide pb-2 text-left ">
            We primarily focus on the web. We do it to dominate in one field and give our clients astonishing services. If you are looking for an agency that provides marketing services for everything that won't advance your business further, then we're not for you.            </p>
            <br />
            <p className="  min-[2000px]:text-[1.5rem] max-[500px]:text-[18px] text-[20px] text-white  tracking-wide pb-2 text-left ">
            If you want a simple yet effective agency where, with just a few minutes of your time, all our procedures will be thoroughly explained and simplified, then we're for you.
               </p>
            </div>

               <div className=" ">
         <a
            href="/#call"
            className="  text-white w-full  min-[958px]:ml-auto mt-6 flex items-center justify-center lg:justify-start"
          >
        <button className="bg-[#b90edf]  text-white sm:py-2 lg:py-[20px] sm:px-8 py-1 px-6  rounded-full">
          <div className="block w-max" >
          <span className="  min-[2000px]:text-[2rem] font-extrabold text-[14px] sm:text-[18px] text-gray-100 ">Speak to our team today</span>
          <span className=" min-[2000px]:text-[2rem] block text-[14px] sm:text-[18px] text-gray-300 ">Schedule your free audio call now</span>
          </div>
        </button>
          </a>
         </div>
    </div>


          <div className="xl:mt-[10rem] min-[2000px]:mt[12rem] mt-5 min-[1500px]:mt-[20rem] min-[2100px]:ml-[20rem] lg:mt-[13.5rem] max-[400px]:w-[95%] max-[400px]:mx-[5px] w-[105%] xl:w-[120%] sm:w-[115%] md:w-[100%] md:ml-10 lg:ml-[4rem] xl:ml-36">
            <h1 className=" min-[2000px]:text-[2rem] text-xl leading-[1.6] mb-[1rem] font-extrabold mt-4 text-white ">
            Knowledge requires long-time focus so...
            </h1>
              <div className="  ">
              <h3 className="  min-[2000px]:pr-[10rem] pr-10 min-[2000px]:text-[2rem] text-xl leading-[1.6] mb-[1rem] font-semibold mt-4 text-gray-200 ">
            We don't offer any other marketing services except web design and development.
            </h3>
              </div>
            <ul className=" pb-[6px] list-none mb-[6px]">
              <li className=" flex flex-row text-center">
                <span className="pt-1">
                  <FaRegTimesCircle color="red" size={20} />
                </span>
                <span className="  min-[2000px]:text-[1.5rem] text-[18px] text-white  tracking-wide pb-2 text-left pl-5">
                  Email Marketing
                </span>
              </li>
              <li className=" flex flex-row text-center">
                <span className="pt-1">
                  <FaRegTimesCircle color="red" size={20} />
                </span>
                <span className=" min-[2000px]:text-[1.5rem] text-[18px] text-white  tracking-wide pb-2 text-left pl-5">
                SEO
                </span>
              </li>
              <li className=" flex flex-row text-center">
                <span className="pt-1">
                  <FaRegTimesCircle color="red" size={20} />
                </span>
                <span className="min-[2000px]:text-[1.5rem] text-[18px] text-white  tracking-wide pb-2 text-left pl-5">
                Social Media Management
                </span>
              </li>
              <li className=" flex flex-row text-center">
                <span className="pt-1">
                  <FaRegTimesCircle color="red" size={20} />
                </span>
                <span className=" min-[2000px]:text-[1.5rem] text-[18px] text-white  tracking-wide pb-2 text-left pl-5">
                Paid Advertising
                </span>
              </li>
              <li className=" flex flex-row text-center">
                <span className="pt-1">
                  <FaRegTimesCircle color="red" size={20} />
                </span>
                <span className="min-[2000px]:text-[1.5rem] text-[18px] text-white  tracking-wide pb-2 text-left pl-5">
                ​PR SERVICE
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerclone;
