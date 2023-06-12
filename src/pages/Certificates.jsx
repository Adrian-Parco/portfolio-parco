import React from "react";
import cert from "../assets/Certifications.png";
import down from "../assets/icons/down.png";

const Certificates = () => {
  return (
    <div
      className="pt-20 md:flex md:justify-center md:items-center md:mt-20"
      id="certifications"
    >
      <div>
        <h1 className="mx-10 text-4xl mt-20 text-center">Certifications</h1>
        <p className="text-sm p-8 text-center md:text-xl">
          These are the certificates I earned while attending college. I
          participated in numerous webinars and seminars to enhance my knowledge
          and skills.
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <div className="flex gap-2 md:-mb-20"> 
          <h1 className="font-mono">Click Here</h1>
          <img src={down} class="animate-bounce w-6 h-6"></img>
        </div>
        <a href="https://drive.google.com/drive/u/0/folders/10xFa18cpFDY_xjJdietnkZg1WlrmStIm">
          <img
            src={cert}
            alt=""
            className="-mt-20 drop-shadow-lg md:mt-0 lg:hover:scale-125 transition duration-300 delay-50"
          />
        </a>
      </div>
    </div>
  );
};

export default Certificates;
