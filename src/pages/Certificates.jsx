import React from "react";
import cert from "../assets/Certifications.png";

const Certificates = () => {
  return (
    <div
      className="md:flex md:justify-center md:items-center md:mt-20 sm:pt-10"
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
      <a href="https://drive.google.com/drive/u/0/folders/10xFa18cpFDY_xjJdietnkZg1WlrmStIm">
        <img
          src={cert}
          alt=""
          className="-mt-20 drop-shadow-lg md:mt-0 lg:hover:scale-125 transition duration-300 delay-50"
        />
      </a>
    </div>
  );
};

export default Certificates;
