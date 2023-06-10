import React from "react";
import ContactForm from "./ContactForm";
import contact from "../assets/contact.png";
import fb from "../assets/icons/fb.png";
import ig from "../assets/icons/ig.png";


const Footer = () => {
  return (
    <div className="bg-blue-950 md:bg-white">
      <h1 className="text-white text-4xl mx-10 pt-14 md:text-blue-950">
        Contact Me.
      </h1>
      <div className="md:flex md:justify-center md:items-center md:p-10">
        <div className="hidden md:flex md:flex-col md:items-center ">
          <img src={contact} alt="" className="w-72" />
          <h1 className="text-2xl mt-5">Social Media</h1>
          <div className="flex gap-3 mt-8">
            <img src={fb} alt="" className="w-20"/>
            <img src={ig} alt="" className="w-20"/>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Footer;
