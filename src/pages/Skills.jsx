import React from "react";
import Aos from "../components/Aos";
import cplus from "../assets/icons/c++.png";
import js from "../assets/icons/js.png";
import java from "../assets/icons/java.png";
import python from "../assets/icons/python.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import mongodb from "../assets/icons/mongodb.png";
import mysql from "../assets/icons/mysql.png";
import nodejs from "../assets/icons/nodejs.png";
import tailwind from "../assets/icons/tailwind.png";
import bootstrap from "../assets/icons/bootstrap.png";
import pandas from "../assets/icons/pandas.png";
import matplotlib from "../assets/icons/matplotlib.png";
import kotlin from "../assets/icons/kotlin.png";
import firebase from "../assets/icons/firebase.png";
import react from "../assets/icons/react.png";
import sass from "../assets/icons/sass.png";

const Skills = () => {
  return (
    <div
      className="mt-5 p-10 bg-blue-900 md:bg-white md:mt-16 pt-20  lg:px-20 lg:pt-36"
      id="skills"
    >
      <h1 className="text-center text-6xl text-white md:text-blue-950">
        <span className="text-black">{"<"}</span>Skills
        <span className="text-black">{"/>"}</span>
      </h1>
      <div className="lg:flex lg:justify-center lg:mt-20">
        <div className="lg:w-1/2 lg:h-80 lg:bg-blue-950 lg:flex lg:flex-col lg:items-center lg:rounded-lg">
          <h2 className="mt-10  text-white underline md:text-xl md:text-blue-950 md:ml-10 lg:mt-1 lg:text-white lg:text-2xl">
            Languages
          </h2>
          <div className="flex flex-wrap gap-10 mt-10 justify-center items-center md:px-56 lg:gap-5 lg:px-8">
            <Aos
              threshold={0.5}
              duration={0.5}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={html} alt="" className="rounded-full w-14 lg:w-16" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={0.7}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={css} alt="" className="rounded-full w-14 lg:w-16" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={0.9}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={js} alt="" className="rounded-full w-14 lg:w-16" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={1.1}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={java} alt="" className="rounded-full w-14 lg:w-16" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={1.3}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={python} alt="" className="rounded-full w-14 lg:w-16" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={1.5}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={cplus} alt="" className="rounded-full w-14 lg:w-16" />
            </Aos>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h1 className="text-white underline md:text-xl md:text-blue-950 md:ml-10 md:mt-20 lg:mt-0">
            Frameworks & Databases
          </h1>
          <div className="flex flex-wrap gap-6 mt-10 justify-center items-center md:px-44 lg:gap-8 lg:px-10">
            <Aos
              threshold={0.5}
              duration={0.5}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={react} alt="" className="w-14" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={0.7}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={mysql} alt="" className="w-14" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={0.9}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={mongodb} alt="" className="w-14" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={1.1}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={firebase} alt="" className="w-14" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={1.3}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={nodejs} alt="" className="w-14" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={1.5}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={tailwind} alt="" className="w-14" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={1.7}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={bootstrap} alt="" className="w-14" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={1.9}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={sass} alt="" className="w-14" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={2.1}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={pandas} alt="" className="w-14" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={2.3}
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={matplotlib} alt="" className="w-14" />
            </Aos>
            <Aos
              threshold={0.5}
              duration={2.5}  
              easing="easeInOut"
              direction="fromBottom"
            >
              <img src={kotlin} alt="" className="w-14" />
            </Aos>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
