// Container3.js (Interactive Element with Carousel)
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@shadcn/ui'; // Adjust the import path based on your setup

const Container3 = () => {
  return (
    <div className="p-6 bg-blue-200 rounded-lg shadow-md mb-6 flex-grow h-full flex flex-col items-center">
      <div className="w-full max-w-4xl">
        {/* Carousel Component */}
        <Carousel>
          <CarouselContent className="flex justify-center">
            <CarouselItem>
              <img
                src="https://via.placeholder.com/800x400"
                alt="Slide 1"
                className="w-full rounded-lg shadow-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://via.placeholder.com/800x400"
                alt="Slide 2"
                className="w-full rounded-lg shadow-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://via.placeholder.com/800x400"
                alt="Slide 3"
                className="w-full rounded-lg shadow-lg"
              />
            </CarouselItem>
          </CarouselContent>

          {/* Carousel Navigation Arrows */}
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white p-2 bg-blue-600 rounded-full cursor-pointer">
            <FaArrowLeft size={24} />
          </CarouselPrevious>
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 bg-blue-600 rounded-full cursor-pointer">
            <FaArrowRight size={24} />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default Container3;
