import React from "react";

function About() {
  return (
    <div className=" mt-12">
      <div className="container mx-auto px-16 flex flex-wrap items-start md:gap-12">
     
        <div className="w-full md:w-[405px] flex justify-center items-center p-4">
          <img src="./Images/image.png" alt="Profile" className="w-full h-auto" />
        </div>

   
        <div className="w-full md:w-[60%] flex flex-col p-4">
          <h1 className="text-4xl font-primary font-bold mb-4 text-left">About Me</h1>
          <p className="text-base font-normal text-black mb-6 text-left">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
          </p>

          <div className="space-y-4">
       
            <div className="relative">
              <h2 className="font-semibold text-base text-left mb-2">UX</h2>
              <div className="w-full bg-gray-200 h-2 mb-4 rounded-full relative">
                <div className="w-[90%] bg-orange-500 h-2 rounded-full"></div>
             
                <div className="absolute top-[-5px] left-[90%] w-4 h-4  bg-gray-200  border border-orange-500 rounded-full transform -translate-x-1/2"></div>
              </div>
            </div>

          
            <div className="relative">
              <h2 className="font-semibold text-base text-left mb-2">Website Design</h2>
              <div className="w-full bg-gray-200 h-2 mb-4 rounded-full relative">
                <div className="w-[80%] bg-orange-500 h-2 rounded-full"></div>
             
                <div className="absolute top-[-5px] left-[80%] w-4 h-4 bg-gray-200  border border-orange-500 rounded-full transform -translate-x-1/2"></div>
              </div>
            </div>

            
            <div className="relative">
              <h2 className="font-semibold text-base text-left mb-2">App Design</h2>
              <div className="w-full bg-gray-200 h-2 mb-4 rounded-full relative">
                <div className="w-[90%] bg-orange-500 h-2 rounded-full"></div>
          
                <div className="absolute top-[-5px] left-[90%] w-4 h-4  bg-gray-200  border border-orange-500 rounded-full transform -translate-x-1/2"></div>
              </div>
            </div>

           
            <div className="relative">
              <h2 className="font-semibold text-base text-left mb-2">Graphic Design</h2>
              <div className="w-full bg-gray-200 h-2 mb-4 rounded-full relative">
                <div className="w-[85%] bg-orange-500 h-2 rounded-full"></div>
              
                <div className="absolute top-[-5px] left-[85%] w-4 h-4 bg-gray-200  border border-orange-500 rounded-full transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
