import React from "react";
import portfolio_bg from "../assets/portfolio_bg.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Main() {
  return (
    <div id="home">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={portfolio_bg}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg: items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Leela Krishna
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a&nbsp;
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000,
                "Coder",
                2000,
                "Tech enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingleft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
