import React, { useState } from 'react';

function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const reviews = [
    {
      image: './Reviews/person1.png',
      text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
      name: 'John Doe',
    },
    {
      image: './Reviews/person2.png',
      text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
      name: 'Jane Smith',
    },
    {
      image: './Reviews/review3.png',
      text: 'Professional and creative! I was impressed with the results.',
      name: 'Alex Brown',
    },
    {
      image: './Reviews/review4.png',
      text: 'The team is very cooperative and dedicated. Loved the experience.',
      name: 'Emily White',
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-20">
      
      <div className="text-center mb-6">
        <h1 className="text-4xl font-primary font-bold">Testimonials</h1>
      </div>

    
      <div className="text-center mb-8 px-4">
        <p className="text-lg text-gray-700">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus<br/> netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

     
      <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-md mb-8">
        <div className="flex flex-wrap justify-center items-center">
          
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img
              src={reviews[currentSlide].image}
              alt={`Review ${currentSlide + 1}`}
              className="w-48 h-48 object-contain rounded-full shadow-lg" 
            />
          </div>

         
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg text-gray-700 mb-4">
              {reviews[currentSlide].text}
            </p>
            <h2 className='font-medium'>Name</h2>
            <h2 className="text-sm font-normal">{reviews[currentSlide].name}</h2>
          </div>
        </div>
      </div>

    
      <div className="flex justify-center space-x-2 mt-10">
        {reviews.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-7 h-2 rounded-full cursor-pointer ${
              currentSlide === index
                ? 'bg-orange-500'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
