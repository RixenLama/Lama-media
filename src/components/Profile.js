import React from 'react';

const Profile = ({ image, name, designation }) => {
  return (
    <div className=" flex flex-col items-center justify-center max-w-xs mx-auto bg-transparent rounded-lg overflow-hidden shadow-md">
      <img src={image} alt="Profile" className="w-[140px] h-auto rounded-full border-[5px] border-solid border-[#610a33]" />
      <div className="p-1">
        <h3 className=" text-gray-100 text-xl font-bold text-[22px] text-center">{name}</h3>
        <p className=" text-center text-[#fc3792]">{designation}</p>
      </div>
    </div>
  );
};

export default Profile;