import React from 'react';
import soc1 from './assets/soc1.png';
import soc2 from './assets/soc2.png';
import soc3 from './assets/soc3.png';

const Contact = () => {
  return (
    <div className="bg-slate-100 py-10" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-6">Contact</h2>
        
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-center">
            <img src={soc2} alt="Phone" className="mx-auto w-12 h-12 mb-2" />
            <h2 className="text-lg font-bold">+23400000000</h2>
          </a>
          <a href="#" className="text-center">
            <img src={soc1} alt="LinkedIn" className="mx-auto w-12 h-12 mb-2" />
            <h2 className="text-lg font-bold">LinkedIn</h2>
          </a>
          <a href="#" className="text-center">
            <img src={soc3} alt="WhatsApp" className="mx-auto w-12 h-12 mb-2" />
            <h2 className="text-lg font-bold">WhatsApp</h2>
          </a>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form className="font-bold space-y-4">
            <div>
              <label htmlFor="Name" className="block mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:border-green-400"
              />
            </div>

            <div>
              <label htmlFor="Email" className="block mb-2">Email</label>
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:border-green-400"
              />
            </div>

            <div>
              <label htmlFor="Text" className="block mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="font-bold bg-gradient-to-r from-slate-500 to-slate-50 text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
