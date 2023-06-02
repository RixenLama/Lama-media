/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { TbCircleCheckFilled } from "react-icons/tb";

const Call = () => {
  return (
    <div
      className="max-[450px]:w-[100%] w-100%  bs-container md:mt-20 mx-auto flex flex-col md:flex-row"
      id="call"
    >
      <div className=" max-[400px]:w-[95%] max-[400px]:mx-[5px]  md:w-[100%] mx-auto px-auto md:pl-[2rem] xl:pl-[5rem] p-4 flex flex-1 flex-col justify-start">
        <div className="md:max-w-[70%] ">
          <div className=" flex justify-center items-center md:justify-start ">
            <img
              src="./rixen.jpg"
              alt="Profile"
              className="w-[170px]  mb-4 rounded-full border-[5px] border-solid border-[#610a33]"
            />
          </div>
          <div className=" md:w-[130%] min-[2000px]:w-[150%]">
            <h2 className=" min-[2000px]:text-[1.7rem] max-[400px]:text-[16px] text-[20px] text-[#fc1892] font-extrabold">
              Schedule your call with Rixen
            </h2>
            <h1 className=" min-[2000px]:text-[2.2rem] max-[400px]:text-[24px] text-[28px] text-[#202652] font-extrabold mb-4">
              Free 15-Minute Exhibition Call
            </h1>
            <p className=" min-[2000px]:text-[1.5rem] max-[500px]:text-[18px] text-[18px] text-gray-600 tracking-wide pb-2 text-left ">
              You will have a comprehensive grasp of the next steps you can take
              for your company to enter the internet market and increase its
              accessibility, dependability, and notoriety by the end of
              this audit call.
            </p>
            <br />
            <p className=" min-[2000px]:text-[1.5rem] max-[500px]:text-[18px] text-[18px] text-gray-600 tracking-wide pb-2 text-left ">
              We want to chat with you soon; find a time on Rixen's calendar to
              schedule your call right away.
            </p>
          </div>
          <div className=" max-[400px]:w-[95%] max-[400px]:mx-[5px] md:w-[140%]">
            <h1 className="min-[2000px]:text-[1.7rem] text-xl leading-[1.6] mb-[1rem] font-extrabold mt-4 text-[#FC3792]">
              THIS AUDIT CALL IS PERFECT FOR:
            </h1>
            <ul className=" pb-[6px] list-none mb-[6px]">
              <li className=" flex flex-row text-center">
                <span className="pt-1">
                  <TbCircleCheckFilled color="#fc3792" size={20} />
                </span>
                <span className="text-[16px] min-[2000px]:text-[1.7rem] text-gray-600 tracking-wide pb-2 text-left pl-5">
                  Companies looking to create their first&nbsp;
                  <strong className=" text-black font-extrabold">
                    top-notch website.
                  </strong>
                </span>
              </li>
              <li className=" flex flex-row text-center">
                <span className="pt-1">
                  <TbCircleCheckFilled color="#fc3792" size={20} />
                </span>
                <span className=" min-[2000px]:text-[1.7rem] text-[16px] text-gray-600 tracking-wide pb-2 text-left pl-5">
                  Businesses attempting to{" "}
                  <strong className=" text-black font-extrabold">
                    {" "}
                    expand online{" "}
                  </strong>{" "}
                  from their offline operations
                </span>
              </li>
              <li className=" flex flex-row text-center">
                <span className="pt-1">
                  <TbCircleCheckFilled color="#fc3792" size={20} />
                </span>
                <span className=" min-[2000px]:text-[1.7rem] text-[16px] text-gray-600 tracking-wide pb-2 text-left pl-5">
                  Businesses aiming to{" "}
                  <strong className=" text-black font-extrabold">
                    {" "}
                    increase their average order{" "}
                  </strong>{" "}
                  value and conversion rates.
                </span>
              </li>
              <li className=" flex flex-row text-center">
                <span className="pt-1">
                  <TbCircleCheckFilled color="#fc3792" size={20} />
                </span>
                <span className="min-[2000px]:text-[1.7rem] text-[16px] text-gray-600 tracking-wide pb-2 text-left pl-5">
                  Companies seeking for a dependable organization that will put
                  their
                  <strong className=" text-black font-extrabold">
                     business first.
                  </strong>
                </span>
              </li>
              <li className=" flex flex-row text-center">
                <span className="pt-1">
                  <TbCircleCheckFilled color="#fc3792" size={20} />
                </span>
                <span className=" min-[2000px]:text-[1.7rem] text-[16px] text-gray-600 tracking-wide pb-2 text-left pl-5">
                  ​Businesses looking for a reliable agency that can{" "}
                  <strong className=" text-black font-extrabold">
                    make their company a priority.
                  </strong>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <a className=" leading-5 text-[10px] sm:text-[18] md:text-[24px] text-gray-100" href="https://calendly.com/lamamedia">
              <button className="bg-[#b90edf] mainBtn mr-[1rem]  text-white py-[10px] sm:py-[14px] px-10  rounded-full">Book a time</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
