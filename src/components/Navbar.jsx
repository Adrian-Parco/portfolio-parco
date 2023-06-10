import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-12 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start lg:justify-center lg:mt-5">
            <div className="flex-shrink-0 flex items-center">
              {/* Your logo or brand */}
              <span className="text-white text-lg font-semibold">
                <img src={logo} alt="logo" className="w-20 lg:w-28" />
              </span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="mt-6 font-semibold text-lg uppercase md:text-sm md:mt-8 md:ml-5 lg:mt-10">
                <a
                  href="#"
                  className="text-blue-950 hover:bg-blue-950  hover:text-white px-3 py-2 rounded-lg ml-5 lg:text-xl"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-blue-950 hover:bg-blue-950  hover:text-white px-3 py-2 rounded-lg ml-5 lg:text-xl"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-blue-950 hover:bg-blue-950  hover:text-white px-3 py-2 rounded-lg ml-5 lg:text-xl"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="text-blue-950 hover:bg-blue-950  hover:text-white px-3 py-2 rounded-lg ml-5 lg:text-xl"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-blue-950 hover:bg-blue-950  hover:text-white px-3 py-2 rounded-lg ml-5 lg:text-xl"
                >
                  Certifications
                </a>
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile version of navbar links */}
            <a
              href="#"
              className="text-blue-950 hover:bg-blue-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-blue-950 hover:bg-blue-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-blue-950 hover:bg-blue-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
            <a
              href="#"
              className="text-blue-950 hover:bg-blue-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-blue-950 hover:bg-blue-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Certifications
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
