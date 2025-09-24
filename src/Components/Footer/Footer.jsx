import React from "react";
import logo from "../../assets/logo-footer.png";
import subscribe from "../../assets/Frame 11.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="bg-black pt-40 px-32">
        <img src={logo} alt="" className="mx-auto" />

        <div className="parent-div flex justify-between p-8 mt-5">
          <div className="left">
            <h2>About Us</h2>
            <p>
              We are a passionate team <br /> dedicated to providing the best
              <br />
               services to our customers.
            </p>
          </div>
          <div className="middle">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="right">
            <h2>Subscribe</h2>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="flex items-center mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white m-2 border-1 border-gray-500 rounded-lg w-80 p-3"
              />{" "}
              <button className="">
                <img className="h-12" src={subscribe} alt="" />
              </button>
            </div>
          </div>
        </div>
        
      </div>
      <div className="text-center border-t-1 border-gray-500 bg-black"><p className=" py-8 ">@2024 Your Company All Rights Reserved.</p></div>
    </div>
  );
};

export default Footer;
