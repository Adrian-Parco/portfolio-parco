import React from "react";
import neu from "../assets/newEra.png";
import sti from "../assets/sti.png";
import kodeGo from "../assets/kodeGo.png";
import aboutme from "../assets/aboutme.png";
import graduation from "../assets/graduation.png";

const About = () => {
  return (
    <div>
      <div className="mt-10 md:flex md:justify-center md:items-center">
        <div className="lg:w-1/2">
          <h1 className="text-3xl mx-10 underline lg:text-4xl">Who Am I?</h1>
          <h2 className="mt-4 p-10 text-sm text-justify indent-5 lg:text-lg lg:p-12">
            I am a skilled website developer hailing from the Philippines,
            specializing in Frontend Development. I possess a deep passion for
            acquiring new experiences and consistently seek opportunities for
            growth within my professional environment. I am dedicated to
            continuous learning and actively draw inspiration from my
            surroundings to enhance my skill set.
          </h2>
        </div>
        <img src={aboutme} alt="" className="hidden md:block w-96" />
      </div>
      <div className="md:flex md:mt-10 lg:justify-center">
        <div className="md:flex md:flex-col">
          <h1 className="text-2xl mx-10 text-blue-950 font-semibold lg:text-4xl">
            Education
          </h1>
          <div className="bg-gray-400 p-5 mt-10 flex items-center justify-center md:mt-5 sm:bg-white">
            <div className="flex flex-col mt-2 md:mt-0">
              <h2 className="mt-5 mx-5 text-blue-950 font-semibold text-lg lg:text-2xl">
                New Era University
              </h2>
              <h2 className="mx-5 lg:text-xl">Computer Science</h2>
              <h2 className="mx-5 lg:text-xl">2019 - July 7, 2023</h2>
            </div>
            <img src={neu} alt="neu" className="w-14 mt-5 lg:w-20" />
          </div>
          <div className="p-5 px-8 flex items-center justify-center">
            <div className="flex flex-col mt-2">
              <h2 className="mt-5 mx-5 text-blue-950 font-semibold text-lg lg:text-2xl">
                STI College Calamba
              </h2>
              <h2 className="mx-5 lg:text-xl">Information Technology</h2>
              <h2 className="mx-5 lg:text-xl">2017 - 2019</h2>
            </div>
            <img src={sti} alt="neu" className="w-14 mt-5 lg:w-20" />
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <h1 className="mx-10 text-2xl text-blue-950 font-semibold lg:text-4xl">
            Bootcamp
          </h1>
          <div className="p-5 px-8 mt-2 flex items-center justify-center">
            <div className="flex flex-col mt-2">
              <h2 className="mt-5 mx-5 text-blue-950 font-semibold text-lg lg:text-2xl">
                KodeGo
              </h2>
              <h2 className="mx-5 lg:text-xl">Full Stack Web Development</h2>
              <h2 className="mx-5 lg:text-xl">2022 - 2023</h2>
            </div>
            <img src={kodeGo} alt="neu" className="w-14 mt-5 lg:w-20" />
          </div>
          <img src={graduation} alt="" className="hidden md:block md:w-80  lg:w-96" />
        </div>
      </div>
    </div>
  );
};

export default About;
