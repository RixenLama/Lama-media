import React from "react";
import Profile from "./Profile";

const Team = () => {
  const teamData = [
    {
      id: 1,
      image:
        "	https://images.clickfunnels.com/24/1f8e51a5fc4331bf9b03513b9bb882/Iman-Gadzhi.png",
      name: "Iman Gadzhi",
      designation: "FOUNDER",
    },
    // {
    //   id: 2,
    //   image: 'https://images.clickfunnels.com/f5/9f4cba7d4043d2a25dd9237c9704a0/ciaran.png',
    //   name: 'Ciaran Anderson',
    //   designation: 'COPYWRITER',
    // },
    // {
    //   id: 3,
    //   image: 'https://images.clickfunnels.com/bf/77ef56394c47e7a2661f06d38797f3/large-DSC08508.jpg',
    //   name: 'Dany Benavides',
    //   designation: 'CHIEF MARKETING OFFICER'
    // },
    // {
    //   id: 4,
    //   image:'https://images.clickfunnels.com/80/1b26def3d846919c31fa768696c9b1/6715-quadrado-menor.jpg',
    //   name: 'Luis Berger',
    //   designation: 'PERFORMANCE MARKETER'
    // }
  ];

  return (
    <div className='max-[450px]:w-[100%]  w-[100%] pt-[10rem] pb-[4rem]  bg-cover bg-no-repeat bg-[url("/src/assets/image3.png")]'>
      <div className="bs-container max-[425px]:w-[100%] max-[400px]:w-[100%] max-[450px]:w-[105%] max-[374px]:w-[97%] container mx-auto flex flex-col items-center justify-center xl:space-x-10 md:flex-row">
        <div className="md:w-[45%] grid grid-cols-1 md:grid-cols-2 xl:gap-x-6 gap-y-6 md:ml-[5rem]">
          <div className="flex justify-center items-center h-full shadow-md">
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
          <div className="   ml-10 md:mx-auto mt-1">
            {/* <a
            href="/#call"
            className="  text-white w-full ml-[1.5rem] md:ml-auto mt-3 "
          >
       <button className="bg-[#b90edf] text-white py-4 px-8 rounded-full">
          <div className="block w-max" >
          <span className="font-bold text-[20px] md:text-[24px] text-gray-100">Speak to our team today</span>
          <span className="block text-sm text-gray-300">Schedule your free audio call now</span>
          </div>
        </button>
          </a> */}

            <div className="     " >
              <a
                href="/#call"
                className="  text-white  md:ml-auto mt-4 flex items-center justify-center lg:justify-start"
              >
               <button className="bg-[#b90edf] mainBtn mr-[1rem]  text-white   px-3 py-[10px] sm:py-[14px] px-10  rounded-full">
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
    </div>
  );
};

export default Team;
