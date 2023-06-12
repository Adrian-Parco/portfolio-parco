import React from "react";
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
            <img src={html} alt="" className="rounded-full w-14 lg:w-16" />
            <img src={css} alt="" className="rounded-full w-14 lg:w-16" />
            <img src={js} alt="" className="rounded-full w-14 lg:w-16" />
            <img src={java} alt="" className="rounded-full w-14 lg:w-16" />
            <img src={python} alt="" className="rounded-full w-14 lg:w-16" />
            <img src={cplus} alt="" className="rounded-full w-14 lg:w-16" />
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h1 className="text-white underline md:text-xl md:text-blue-950 md:ml-10 md:mt-20 lg:mt-0">
            Frameworks & Databases
          </h1>
          <div className="flex flex-wrap gap-6 mt-10 justify-center items-center md:px-44 lg:gap-8 lg:px-10">
            <img src={react} alt="" className="w-14" />
            <img src={mysql} alt="" className="w-14" />
            <img src={mongodb} alt="" className="w-14" />
            <img src={firebase} alt="" className="w-14" />
            <img src={nodejs} alt="" className="w-14" />
            <img src={tailwind} alt="" className="w-14" />
            <img src={bootstrap} alt="" className="w-14" />
            <img src={sass} alt="" className="w-14" />
            <img src={pandas} alt="" className="w-20" />
            <img src={matplotlib} alt="" className="w-14" />
            <img src={kotlin} alt="" className="w-14" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
