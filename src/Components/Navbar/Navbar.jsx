import React, { useState } from "react";
import navLogo from "../../assets/logo.png";
import navCoin from "../../assets/coin.png";

const Navbar = ({availableBL}) => {
  
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl">
            <img src={navLogo} alt="" />
          </a>
        </div>
        <div>
          <button className="flex items-center btn bg-transparent border-transparent">
            <span>{availableBL}</span>
            <span className="flex items-center"> Coin </span>
            <img className="w-[20px] h-[20px]" src={navCoin} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
