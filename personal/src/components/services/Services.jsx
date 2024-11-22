import React from 'react';

function Services() {
  return (
    <div className="mt-20 px-16">
    
      <div className="text-center mb-8">
        <h1 className="text-4xl font-primary font-bold">Services</h1>
      </div>

   
      <div className="text-center mb-12">
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus<br /> netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

 
      <div className="container mx-auto px-4 flex flex-wrap justify-center ">

        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border rounded-lg shadow-lg p-6 bg-gray-100">
            <div className="flex justify-start mb-4">
              <img src="./Icons/Ui.png" alt="UI/UX" className="w-10 h-12" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-left">UI/UX</h2>
            <p className="text-base text-gray-600 text-left">Creating intuitive and engaging user experiences and interfaces.</p>
          </div>
        </div>

     
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border rounded-lg shadow-lg p-6 bg-gray-100">
            <div className="flex justify-start mb-4">
              <img src="./Icons/web.png" alt="Web Design" className="w-10 h-12" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-left">Web Design</h2>
            <p className="text-base text-gray-600 text-left">Building responsive and visually appealing websites for any device.</p>
          </div>
        </div>

       
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border rounded-lg shadow-lg p-6 bg-gray-100">
            <div className="flex justify-start mb-4">
              <img src="./Icons/App.png" alt="App Design" className="w-8 h-12" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-left">App Design</h2>
            <p className="text-base text-gray-600 text-left">Designing mobile apps with a focus on usability and modern aesthetics.</p>
          </div>
        </div>

      
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="border rounded-lg shadow-lg p-6 bg-gray-100">
            <div className="flex justify-start mb-4">
              <img src="./Icons/graphic.png" alt="Graphic Design" className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-left">Graphic Design</h2>
            <p className="text-base text-gray-600 text-left">Creating stunning graphics to support your branding and marketing efforts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
