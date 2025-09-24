import React from "react";
import bannerBG from "../../assets/bg-shadow.png";
import bannerPng from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center rounded-xl  bg-black my-5"
      style={{ backgroundImage: `url(${bannerBG})` }}
    >
      <div className="flex flex-col justify-center items-center space-y-4 p-10">
        <img src={bannerPng} alt="" />
        <h2 className="md:text-3xl font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-gray-300">Beyond Boundaries Beyond Limits</p>
        <div className="p-1.5 border-1 border-[#E7FE29] rounded-2xl">
          <button className="btn bg-[#E7FE29] rounded-xl ">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
