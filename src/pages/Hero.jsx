import React from "react";
import pic from "../assets/my-pic.png";
import linkedIn from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";

const Hero = () => {
  return (
    <div className="h-full mt-14 md:flex md:items-center md:justify-center md:mt-5 lg:mt-0 lg:h-screen">
      <div className="m-10 lg:m-0">
        <h1 className="text-2xl underline lg:text-4xl">Hey There,</h1>
        <h2 className="text-4xl lg:text-6xl">
          I'm <span className="text-blue-950 font-semibold">Adrian</span>
        </h2>
        <p className="text-xs mt-4 pr-20 md:p-0 lg:text-lg">
          Tech lover, always seeking ways to simplify my work.
        </p>
        <div className="hidden mt-5 gap-3 md:flex md:justify-end md:items-center">
          <a
            href=""
            className="transition duration-300 delay-150 hover:delay-300"
          >
            <img
              src={linkedIn}
              alt=""
              className="w-8 lg:w-12 hover:scale-125 transition duration-300 delay-50"
            />
          </a>
          <a href="">
            <img
              src={github}
              alt=""
              className="w-8 lg:w-12 hover:scale-125 transition duration-300 delay-50"
            />
          </a>
        </div>
      </div>
      <div>
        <img src={pic} alt="" className="w-96" />
      </div>
    </div>
  );
};

export default Hero;
