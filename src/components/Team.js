import React from "react";
import Profile from "./Profile";

const Team = () => {
  const teamData = [
    {
      id: 1,
      image: "./rixen.jpg",
      name: "Rixen Lama",
      designation: "FOUNDER",
    },
  ];

  return (
    <div className='max-[450px]:w-[100%]  w-[100%] pt-[10rem] pb-[4rem]  bg-cover bg-no-repeat bg-[url("/src/assets/image3.png")]'>
      <div className="bs-container max-[425px]:w-[100%] max-[400px]:w-[100%] max-[450px]:w-[105%] max-[374px]:w-[97%] container mx-auto flex flex-col items-center justify-center xl:space-x-10 md:flex-row">
        <div className="md:w-[45%] grid grid-cols-1 md:grid-cols-2 xl:gap-x-6 gap-y-6 md:ml-[5rem]">
          <div className="flex justify-center items-center shadow-md ">
            <Profile
              key={teamData[0].id}
              image={teamData[0].image}
              name={teamData[0].name}
              designation={teamData[0].designation}
            ></Profile>
          </div>
        </div>

        <div className="max-[400px]:w-[93%] max-[400px]:mx-[15px]  md:w-[40%] p-4">
          <h2 className="min-[2000px]:text-[2rem] text-4xl font-extrabold mb-4 text-[#fc3792]">
            Meet The Crew
          </h2>
          <p className="min-[2000px]:text-[1.5rem] text-[18px] text-gray-100 tracking-wide pb-2 text-left">
            Founded by Rixen Lama who has spend the past 3 years of his life
            coding, and mastering the fundimental skills of web design and
            development.{" "}
          </p>
          <br />
          <p className=" min-[2000px]:text-[1.5rem] text-[18px] text-gray-100 tracking-wide pb-2 text-left">
            With our past experience in the web marketing industry. Lama Media
            provides clients with their own custom handmade website, that goes
            through a rigorous process of discussion with clients inorder to
            meet their expectations.
          </p>
            <div className="" >
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

export default Team;
