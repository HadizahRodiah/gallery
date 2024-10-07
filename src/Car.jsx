import React from 'react';
import Ima from './assets/Ima.jpg';
import Imb from './assets/Imb.jpg';
import Imc from './assets/Imc.jpg';
import Imf from './assets/Imf.jpg';
import Img from './assets/Img.jpg';
import Imh from './assets/Imh.jpg';

const Car = () => {
  return (
    <div className="bg-gray-100 py-10" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* First Column */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg relative h-64">
            <img src={Ima} alt="Slide 1" className="object-cover w-full h-full absolute inset-0 z-0" />
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
              <h1 className="text-white text-4xl font-bold">ALMAS FASHION WORLD</h1>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-semibold mb-2">FASHION</h1>
            <p className="text-gray-600">
              Modeling in the blood, fashion world is getting bigger. Do not take anything
              seriously—just some random words. Almas is into tech, not fashion.
            </p>
          </div>
        </div>
        
        {/* Second Column */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-semibold mb-2">FASHION</h1>
            <p className="text-gray-600">
              Modeling in the blood, fashion world is getting bigger. Do not take anything
              seriously—just some random words. Almas is into tech, not fashion.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg relative h-64">
            <img src={Imf} alt="Slide 4" className="object-cover w-full h-full absolute inset-0 z-0" />
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
              <h1 className="text-white text-4xl font-bold">ALMAS FASHION WORLD</h1>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Car;
