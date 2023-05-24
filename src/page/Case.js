import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Header from "../components/Header";

const Case = () => {
  return (
    <>
      <Header />
      <section className=" max-[500px]:w-[120%] bg-cover bg-no-repeat bg bg-transparent bg-[url('https://images.clickfunnels.com/3b/091f96e56447aa94781f17f7dc039b/Background-Header.png')]">
        <div className=" container md:mx-auto py-[5rem] flex flex-1 flex-col items-center justify-center mx-auto">
          <div className=" bg-black p-10 flex flex-1 item-center flex-col justify-center m-20 ">
            <div className="md:w-[100%]  text-center">
              <h1 className="md:text-[22px] tracking-[3px] font-semibold text-[#fc3792] mb-4">
                FREE CASE STUDY VIDEO
              </h1>
              <div className=" w-full md:w-[100%] mx-auto">
                <p className="md:text-4xl text-3xl text-center mb-4 text-gray-100">
                  "How My Agency Has Consistently Generated Spine-Chilling ROI
                  For Our Info Product & Ecommerce Clients"
                </p>
              </div>
            </div>
            <div className=" flex flex-col md:flex-row items-center md:items-start">
              <div className="md:px-0 w-full md:w-1/2 py-[1rem] pl-[2rem]  pr-[2rem] md:pl-0 md:pr-0 md:p-[4.5rem] xl:p-[3rem]">
                <img
                  src="https://images.clickfunnels.com/da/752794b0404e09a117408855a0b1e7/ezgif.com-video-to-gif-4-.gif"
                  alt="Case Study GIF"
                  className="w-full mb-4"
                />
              </div>
              <div className="md:w-1/2 flex flex-col items-center md:items-start">
                <div className=" pt-[1rem] w-full px-[1rem] md:pt-[3rem] md:w-[30vw]">
                  <div className=" pl-[1rem] md:pl-[2rem] md:px-auto md:w-[145%] xl:w-[125%]">
                    <div className=" flex flex-row space-x-4">
                      <BsCheckCircle className="" color="#b90edf" size={28} />{" "}
                      <p className="  tracking-[0.05em] mb-8 text-[20px] text-left text-gray-200 leading-[1.4]">
                        {" "}
                        How we consistently generate spine chilling ROI for our
                        clients.
                      </p>
                    </div>
                    <div className=" flex flex-row space-x-4">
                      <BsCheckCircle className="" color="#b90edf" size={30} />{" "}
                      <p className="tracking-[0.05em] mb-6 text-[20px] text-left text-gray-200 leading-[1.4]">
                        {" "}
                        How to achieve 'god like' omni-presence & dominate your
                        competition.
                      </p>
                    </div>
                    <div className=" flex flex-row space-x-4">
                      <BsCheckCircle className="" color="#b90edf" size={34} />{" "}
                      <p className=" tracking-[0.05em] text-[20px] text-left text-gray-200 leading-[1.4]">
                        {" "}
                        Why you need to 'plug the holes' in your sales process
                        before you can drive traffic.
                      </p>
                    </div>
                  </div>
                  <div class=" md:ml-3 xl:ml-5">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border py-3.5 px-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[140%] xl:w-[112%] md:ml-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-100 outline-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your Email Address Here..."
                      required
                    />
                  </div>
                  <div className="w-full md:ml-10 md:pl-1 xl:pl-auto md:w-[116%] xl:ml-6 xl:w-[107%]">
                    <a
                      href="/#projects"
                      className="  text-white  md:ml-auto mt-4 flex items-center justify-center "
                    >
                      <button className="bg-[#b90edf] px-12 md:w-[120%] xl:w-[110%] text-white py-[10px] lg:px-16 md:px-12  rounded-md">
                        <div className="block w-max ">
                          <span className="font-extrabold text-[22px] text-gray-100">
                            Speak to our team today
                          </span>
                          <span className="block text-md text-gray-300">
                            Schedule your free audio call now
                          </span>
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Case;
