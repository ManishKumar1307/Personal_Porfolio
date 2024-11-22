import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="text-center bg-gray-50 w-full py-4">

            <div className="mb-6">
                <img
                    src="./Images/logo.png"
                    alt="Logo"
                    className="mx-auto w-40"
                />
            </div>


            <div className="mb-4">
                <ul className="flex flex-wrap justify-center space-x-6 text-sm uppercase tracking-wide">
                    <li><a href="#home" className="hover:text-black">Home</a></li>
                    <li><a href="#about" className="hover:text-black">About</a></li>
                    <li><a href="#services" className="hover:text-black">Services</a></li>
                    <li><a href="#projects" className="hover:text-black">Projects</a></li>
                    <li><a href="#testimonials" className="hover:text-black">Testimonials</a></li>
                    <li><a href="#contact" className="hover:text-black">Contact</a></li>
                </ul>
            </div>


            <div className="flex justify-center space-x-4 mb-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <FaFacebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <FaTwitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <FaLinkedin size={20} />
                </a>
            </div>


            <div className="text-sm text-white py-4 bg-gray-600">
            © 2023 <span className="text-orange-500 font-semibold"> Mumair</span>. All Rights Reserved, Inc.
            </div>

        </div>
    );
}

export default Footer;
