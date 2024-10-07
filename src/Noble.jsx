import React from 'react';
import Ima from './assets/Ima.jpg';
import Imb from './assets/Imb.jpg';
import Imc from './assets/Imc.jpg';
import Imf from './assets/Imf.jpg';
import Img from './assets/Img.jpg';
import Imh from './assets/Imh.jpg';

const Noble = () => {
  const galleryItems = [
    {
      id: 1,
      name: "Model A",
      information: "Elegant fashion model showcasing modern design.",
      image: Ima,
    },
    {
      id: 2,
      name: "Model B",
      information: "Traditional attire with a modern twist.",
      image: Imb,
    },
    {
      id: 3,
      name: "Model C",
      information: "Urban streetwear redefined with bold patterns.",
      image: Imc,
    },
    {
      id: 4,
      name: "Model D",
      information: "Casual elegance in a serene environment.",
      image: Imh,
    },
    {
      id: 5,
      name: "Model E",
      information: "High fashion meeting minimalistic design.",
      image: Imf,
    },
    {
      id: 6,
      name: "Model F",
      information: "Avant-garde styles in classic environments.",
      image: Ima,
    },
    {
      id: 7,
      name: "Model G",
      information: "Techwear meets tradition.",
      image: Imb,
    },
    {
      id: 8,
      name: "Model H",
      information: "Bold contrasts with a splash of color.",
      image: Img,
    },
    {
      id: 9,
      name: "Model I",
      information: "Relaxed urban chic for daily wear.",
      image: Imh,
    },
  ];

  return (
    <div className="bg-slate-200 py-10" id="gallery">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
              key={item.id}
            >
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-slate-700 mb-2">
                  {item.id}
                </h1>
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto mb-4 w-48 h-48 rounded-md object-cover"
                />
                <h2 className="text-lg font-bold bg-gradient-to-r from-slate-800 to-slate-500 text-white py-2 rounded-md mb-2">
                  {item.information}
                </h2>
                <h2 className="text-lg font-bold bg-gradient-to-r from-slate-500 to-slate-800 text-white py-2 rounded-md">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Noble;
