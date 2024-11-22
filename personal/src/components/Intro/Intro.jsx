import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Intro() {
  return (
    <div className="mt-36">
      <div className="container mx-auto px-16 flex flex-wrap items-start md:gap-12">
        
        <div className="w-full md:w-[60%] flex flex-col p-4">
          <h5 className="font-semibold text-left">Hi I am</h5>
          <h4 className="text-orange-500 font-semibold text-lg text-left">
            Muhammad Umair
          </h4>
          <h1 className="text-6xl font-primary font-bold text-left">
            UI & UX
          </h1>
          <h1 className="text-6xl font-primary font-bold mb-6 text-left pl-36">
            Designer
          </h1>
          <p className="text-base font-normal text-black text-left mb-6">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed <br />
            massa nibh lectus netus in. Aliquet donec morbi convallis<br />
            pretium. Turpis tempus pharetra
          </p>
          <div className="flex justify-start">
            <button className="text-sm font-normal bg-orange-500 text-white px-8 py-1 rounded">
              Hire Me
            </button>
          </div>
        </div>

       
        <div className="w-full md:w-[405px] flex justify-center items-center p-4 flex-col">
          <img src="./Images/profile.png" alt="Profile" className="mb-4" />
       
          <div className="flex space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-gray-700 hover:text-orange-500 transition-colors" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-700 hover:text-orange-500 transition-colors" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-gray-700 hover:text-orange-500 transition-colors" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-gray-700 hover:text-orange-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
