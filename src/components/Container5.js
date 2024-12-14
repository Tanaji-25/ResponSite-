import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    text: "This platform has changed the way I work. The tools are easy to use and incredibly powerful!",
    role: 'Software Engineer',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    text: "I love how responsive and intuitive the interface is. It saves me so much time!",
    role: 'Product Manager',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    text: "Amazing experience. It’s everything I need in one place. Highly recommend it!",
    role: 'UX Designer',
  },
];

const Container5 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === 0 ? testimonials.length - 1 : prevTestimonial - 1
    );
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg shadow-xl mb-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-semibold text-white mb-4">Unlock New Possibilities</h2>
      <p className="text-white mb-6">
        Get started today and explore powerful tools and resources designed to elevate your experience. Choose your next step below!
      </p>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0">
        <button className="px-8 py-4 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 w-full md:w-auto">
          Discover More
        </button>
        <button className="px-8 py-4 bg-black text-white rounded-lg shadow-lg hover:bg-gray-600 hover:scale-105 transition-all duration-300 w-full md:w-auto">
          Join Now
        </button>
      </div>

      {/* Compact Testimonial Section with Further Reduced Height */}
      <div className="mt-6 bg-white text-blue-600 rounded-lg shadow-lg p-3 w-full md:w-3/4 mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-2">What Our Users Say</p>
          <div className="text-center">
            <p className="italic mb-2 text-xs">{testimonials[currentTestimonial].text}</p>
            <p className="font-bold text-sm">{testimonials[currentTestimonial].name}</p>
            <p className="text-xs">{testimonials[currentTestimonial].role}</p>
          </div>

          <div className="mt-3 flex space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-all duration-300"
            >
              ❮
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-all duration-300"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container5;
