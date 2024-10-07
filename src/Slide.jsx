import React from 'react';
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';
import slide4 from './assets/slide4.jpg';

export const Slide = () => {
  return (
    <div className="bg-gray-100 py-10" id="display">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          
          {/* Text Section */}
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              Modeling in the blood, fashion world is getting bigger. Do not take anything serious, just some random words. All is just dummy. Almas is into tech, not fashion.
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-4">FASHION</h1>
          </div>

          {/* Image Carousel Section */}
          <div className="relative overflow-hidden md:w-1/2">
            <figure className="grid grid-cols-2 gap-4">
              <div className="item">
                <img src={slide1} alt="Slide 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
              <div className="item">
                <img src={slide2} alt="Slide 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
              <div className="item">
                <img src={slide3} alt="Slide 3" className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
              <div className="item">
                <img src={slide4} alt="Slide 4" className="w-full h-64 object-cover rounded-lg shadow-md" />
              </div>
            </figure>
          </div>
        </div>
        
        {/* Second Text Section */}
        <div className="mt-12 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">FASHION</h1>
          <p className="text-lg text-gray-700">
            Modeling in the blood, fashion world is getting bigger. Do not take anything serious, just some random words. All is just dummy. Almas is into tech, not fashion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
