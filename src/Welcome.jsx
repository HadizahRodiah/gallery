import React from 'react';
import back from './assets/back.jpg';
import back1 from './assets/back1.jpg';

const Welcome = () => {
  return (
    <div className="welcome bg-slate-100 min-h-screen" id="home">
      {/* Navigation */}
      <nav className="flex justify-between items-center text-black font-bold px-8 md:px-16 lg:px-24 py-6">
        <div className="text-4xl font-bolder hidden md:block">A-F</div>
        <div className="space-x-6 lg:space-x-12 flex items-center">
          <a href="#home" className="text-xl lg:text-2xl hover:underline">Home</a>
          <a href="#about" className="text-xl lg:text-2xl hover:underline">About</a>
          <a href="#gallery" className="text-xl lg:text-2xl hover:underline">Gallery</a>
          <a href="#display" className="text-xl lg:text-2xl hover:underline">Display</a>
          <a href="#contact" className="text-xl lg:text-2xl hover:underline">Contact</a>
          <a
            href="#gallery"
            className="font-bold bg-gradient-to-r from-stone-200 to-stone-500 text-black hidden md:inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Explore
          </a>
        </div>
      </nav>

      {/* Welcome Text */}
      <div className="text-center py-10 lg:py-20">
        <h4 className="text-lg lg:text-2xl font-semibold mb-4">WELCOME</h4>
        <h1 className="text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-blue-500 font-bold">
          EXPLORE
        </h1>
        <a
          href="#contact"
          className="mt-8 inline-block font-bold bg-gradient-to-r from-stone-500 to-stone-50 text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </a>
      </div>

      {/* Images Section */}
      <div className="flex justify-center space-x-4 mt-10">
        <img src={back} alt="Background 1" className="w-1/2 h-auto object-cover rounded-lg shadow-md" />
        <img src={back1} alt="Background 2" className="w-1/2 h-auto object-cover rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Welcome;
