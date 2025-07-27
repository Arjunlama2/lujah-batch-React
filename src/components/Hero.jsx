import React from "react";
import banner from "../assets/banner.png";
function Hero() {
  return (
    <div className=" px-16  lg:flex justify-between mt-18 ">
      <div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-5xl leading-16 pr-1">Want anything to be easy with <span className="font-bold">LaslesVPN</span> .</p>
          <p>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting fheatures from us.
          </p>
        </div>
        <button className="mt-[50px] bg-[#F54747] px-8 py-2 rounded-2xl text-white  cursor-pointer hover:bg-red-600">Get Started</button>
      </div>
      <img src={banner} alt="" />
    </div>
  );
}

export default Hero;
