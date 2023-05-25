import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <>
    <header className="flex justify-center md:justify-between px-5 md:mx-auto  bg-primary absolute w-full">
      <Link to="/" className="   ">
        <div>
        <h2 className="mt-6 ml-0 md:ml-10 text-[#ffff] text-26px md:text-[30px]"><b>LAMA</b>-Media</h2>
          </div>
        {/* <img
        className="w-[150px] mt-10 mx-10"
        src="https://images.clickfunnels.com/ed/749dda621d4e25ac4bcf44c4095edb/logo.png" alt="logo"/>
        </div> */}
      </Link>
    </header>

</>
  );
};

export default Header;
