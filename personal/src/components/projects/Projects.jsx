import React, { useState } from 'react';

function Projects() {

  const [activeCategory, setActiveCategory] = useState('Web Design');


  const projects = {
    all: [
      { id: 1, title: 'AirCalling Landing Page Design', category: 'Web Design', img: './Project/project1.png' },
      { id: 2, title: 'E-commerce Platform Redesign', category: 'UI/UX', img: './Project/project2.png' },
      { id: 3, title: 'Food Delivery App Concept', category: 'App Design', img: './Project/project3.png' }
    ],
    'Web Design': [
      { id: 1, title: 'AirCalling Landing Page Design', category: 'Web Design', img: './Project/project1.png' },
      { id: 2, title: 'E-commerce Platform Redesign', category: 'UI/UX', img: './Project/project2.png' },
      { id: 3, title: 'Food Delivery App Concept', category: 'App Design', img: './Project/project3.png' }
    ],
    'UI/UX': [
      { id: 2, title: 'E-commerce Platform Redesign', category: 'UI/UX', img: './Project/project2.png' }
    ],
    'App Design': [
      { id: 3, title: 'Food Delivery App Concept', category: 'App Design', img: './Project/project3.png' }
    ],
    'Graphic Design': [
      { id: 3, title: 'Food Delivery App Concept', category: 'Graphic Design', img: './Project/project3.png' }
    ]
  };

  
  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="mt-12 px-16">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-primary font-bold">My Projects</h1>
      </div>

      <div className="text-center mb-8 px-4">
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus<br /> lectus. Phasellus consequat urna tellus
        </p>
      </div>

      <div className="flex justify-center mb-8 space-x-4">
      
        {['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'].map((category) => (
          <button
            key={category}
            onClick={() => handleButtonClick(category === 'All' ? 'all' : category)}
            className={`px-4 py-2 border rounded-md transition ${
              activeCategory === category || (category === 'All' && activeCategory === 'all')
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 hover:bg-orange-500 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>


      <div className="container mx-auto px-4 flex flex-wrap justify-center">
        {projects[activeCategory].map((project) => (
          <div key={project.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="border rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h2 className="text-sm font-normal mb-2 text-left text-orange-500">{project.category}</h2>
                <p className="text-base font-bold text-left">{project.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
