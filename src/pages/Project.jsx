import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
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

const Project = () => {
  return (
    <div>
      <h1 className="mt-10 text-2xl font-semibold mx-10 text-blue-950 md:text-4xl lg:mx-20 lg:mt-20">
        Projects
      </h1>
      <div className="lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:mt-10">
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <h1 className="mx-10 mt-8 text-lg md:text-2xl md:font-mono lg:text-lg">
            Arm-Ran Technology Enterprises
          </h1>
          <img src={project2} alt="" />
          <div className="flex gap-5 mt-2">
            <img
              src={html}
              alt=""
              className="rounded-full w-6 md:w-14 lg:w-8"
            />
            <img src={css} alt="" className="rounded-full w-6 md:w-14 lg:w-8" />
            <img src={js} alt="" className="rounded-full w-6 md:w-14 lg:w-8" />
            <img
              src={bootstrap}
              alt=""
              className="rounded-full w-6 md:w-14 lg:w-8"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-blue-950 mt-10 text-white lg:w-1/2">
          <h1 className="mx-10 mt-8 text-2xl md:text-4xl md:font-mono lg:text-2xl lg:mt-20">
            Blog App
          </h1>
          <img src={project1} alt="" />
          <div className="flex gap-5 -mt-10 mb-5 md:-mt-20 bg-white p-3 rounded-lg">
            <img
              src={react}
              alt=""
              className="rounded-full w-6 md:w-14 lg:w-8"
            />
            <img
              src={tailwind}
              alt=""
              className="rounded-full w-6 md:w-14 lg:w-8"
            />
            <img
              src={nodejs}
              alt=""
              className="rounded-full w-6 md:w-14 lg:w-8 "
            />
            <img
              src={mysql}
              alt=""
              className="rounded-full w-6 md:w-14 lg:w-8"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <h1 className="mx-10 mt-8 text-lg md:text-2xl md:font-mono lg:text-2xl lg:mt-20">
            Kitchen Recipe Generator
          </h1>
          <img src={project3} alt="" />
          <div className="flex gap-5 -mt-16 md:-mt-20">
            <img
              src={react}
              alt=""
              className="rounded-full w-6 md:w-14 lg:w-8"
            />
            <img
              src={sass}
              alt=""
              className="rounded-full w-6 md:w-14 lg:w-8"
            />
            <img
              src={nodejs}
              alt=""
              className="rounded-full w-6 md:w-14 lg:w-8"
            />
            <img
              src={firebase}
              alt=""
              className="rounded-full w-6 md:w-14 lg:w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
