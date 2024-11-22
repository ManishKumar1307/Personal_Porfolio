import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; 
import '@fontsource/poppins';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [rotateIcon, setRotateIcon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateIcon((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-transparent text-white font-poppins">
      <div className="container mx-auto py-4 px-16">
        <div className="flex items-center justify-between">
         
          <div className={`${isOpen ? 'hidden' : 'flex'} items-center`}>
            <a href="/" className="text-3xl font-bold font-sans text-indigo-900">
              <img src="./Images/logo.png" alt="Company Logo" className="h-12 w-auto" />
            </a>
          </div>

   
          <div className="hidden md:flex space-x-10">
            <Link to="home" smooth={true} className="text-black hover:text-gray-400">Home</Link>
            <Link to="aboutme" smooth={true} className="text-black hover:text-gray-400">About Me</Link>
            <Link to="services" smooth={true} className="text-black hover:text-gray-400">Services</Link>
            <Link to="projects" smooth={true} className="text-black hover:text-gray-400">Projects</Link>
            <Link to="testimonials" smooth={true} className="text-black hover:text-gray-400">Testimonials</Link>
            <Link to="contact" smooth={true} className="text-black hover:text-gray-400">Contact</Link>
            <button className='bg-orange-500 px-4 py-2 border rounded-md'>
              <a href="./Documents/cv.pdf" download>Download CV</a>
            </button>
          </div>

  
          <div className="md:hidden">
            <button
              aria-label="Toggle mobile menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 border-none focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

   
      <div
        className={`md:hidden fixed inset-0 bg-transparent text-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: '9999' }}
      >
        <div className="flex justify-between items-center p-4">
          <button
            aria-label="Close mobile menu"
            onClick={() => setIsOpen(false)}
            className="text-gray-500 flex items-center border-none"
          >
            <svg
              className={`h-6 w-6 mr-2 transition-transform duration-500 ${rotateIcon ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="text-gray-500">Close</span>
          </button>
        </div>
        <div className="px-4 pt-4 space-y-4 h-screen bg-white">
          <Link to="home" smooth={true} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="aboutme" smooth={true} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-black" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link to="services" smooth={true} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-black" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="projects" smooth={true} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-black" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="testimonials" smooth={true} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-black" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link to="contact" smooth={true} className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-black" onClick={() => setIsOpen(false)}>Contact</Link>

          <button className="bg-orange-500 px-4 py-2 border rounded-md">
            <a href="./Documents/cv.pdf" download>Download CV</a>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
