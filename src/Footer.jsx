import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white text-center py-16" id="contact">
      <h2 className="text-4xl font-bold mb-8">Footer</h2>
      
      <div className="space-y-4">
        <div>
          <a href="mailto:hadizahrodiah@gmail.com" className="inline-block text-white hover:underline font-bold">
            EMAIL
          </a>
        </div>

        <div>
          <span className="inline-block text-white font-bold">PHONE: +234 915 514 0115</span>
        </div>

        <div>
          <a
            href="https://wa.me/message/OXFRWM6MUANGE1"
            className="inline-block text-white hover:underline font-bold"
          >
            WhatsApp
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/rodiah-hadizah"
            className="inline-block text-white hover:underline font-bold"
          >
            LinkedIn
          </a>
        </div>

        <div>
          <h3 className="font-bold">
            Designed by{" "}
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              ALmasRoyy
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
