import React from "react";
import ContactForm from "./ContactForm";
import contact from "../assets/contact.png";
import fb from "../assets/icons/fb.png";
import ig from "../assets/icons/ig.png";

const Footer = () => {
  return (
    <div className="bg-blue-950 md:bg-white lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-4">
      <h1 className="text-white text-4xl mx-10 pt-14 md:text-blue-950">
        Contact Me.
      </h1>
      <div className="p-20 md:flex md:justify-center md:items-center md:p-10 lg:gap-5">
        <div className="hidden md:flex md:flex-col md:items-center ">
          <img src={contact} alt="" className="w-72" />
          <div className="flex gap-3 mt-8 lg:gap-5">
            <a href="https://www.facebook.com/adrian.a.parco">
              <img
                src={fb}
                alt=""
                className="w-10 lg:hover:scale-125 transition duration-300 delay-50"
              />
            </a>
            <a href="https://www.instagram.com/drnprcs/">
              <img
                src={ig}
                alt=""
                className="w-10 lg:hover:scale-125 transition duration-300 delay-50"
              />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Footer;
