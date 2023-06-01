/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const TrustCompanies = ({ images, ref }) => {
  return (
    <div className="max-[450px]:w-[100%] w-[100%] md:p-10 bg-transparent bg-[url('https://images.clickfunnels.com/6f/85bb14a81948d0a9b07fe12c516247/geometry.png')]">
      <div className="bs-container max-[425px]:w-[100%] max-[400px]:w-[100%] max-[450px]:w-[105%] max-[374px]:w-[97%] container mx-auto">
        <div className="mb-10 md:pr-[1.5rem] text-center">
          <h1 className="text-[24px] md:text-[48px] text-[#201652] font-extrabold text-center">
            Companies That Trust Us
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <div key={index} className=" self-center rounded-lg p-4">
              <a href={image.ref} target="_blank">
                <img
                  src={image.img}
                  alt={`img ${index + 1}`}
                  className=" cursor-pointer mx-auto bg-transparent md:bg-cove md:filter md:grayscale md:contrast-200 md:hover:filter-none"
                  style={{ maxWidth: "150px" }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustCompanies;
