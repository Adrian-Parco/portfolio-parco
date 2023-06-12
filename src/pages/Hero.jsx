import React from "react";
import Aos from "../components/Aos";
import pic from "../assets/my-pic.png";
import linkedIn from "../assets/icons/linkedIn.png";
import github from "../assets/icons/github.png";

const Hero = () => {
  return (
    <div
      className="h-screen mt-14 pt-10 md:h-full md:pt-20 md:flex md:items-center md:justify-center md:mt-5 lg:mt-0 lg:h-screen lg:px-24"
      id="hero"
    >
      <div className="m-10 lg:m-0">
        <Aos threshold={0.5} duration={0.5} easing="easeInOut" direction="fromLeft">
          <h1 className="text-2xl underline lg:text-3xl ">Hey There,</h1>
        </Aos>
        <Aos threshold={0.5} duration={1} easing="easeInOut" direction="fromLeft">
          <h2 className="text-4xl lg:text-5xl">
            I'm <span className="text-blue-950 font-semibold">Adrian</span>
          </h2>
        </Aos>
        <Aos threshold={0.5} duration={1.5} easing="easeInOut" direction="fromLeft">
          <p className="text-xs mt-4 pr-20 md:p-0 lg:text-lg">
            Tech enthusiast — always looking for ways to simplify my work.
          </p>
        </Aos>
        <div className="hidden mt-5 gap-3 md:flex md:justify-end md:items-center">
          <a
            href="https://www.linkedin.com/in/adrian-parco-04b91a249/"
            className="transition duration-300 delay-150 hover:delay-300"
          >
            <img
              src={linkedIn}
              alt=""
              className="w-8 lg:w-12 hover:scale-125 transition duration-300 delay-50"
            />
          </a>
          <a href="https://github.com/Adrian-Parco">
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
