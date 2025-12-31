
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-kenya-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-kenya-red to-kenya-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold"></span>
              </div>
              <h3 className="text-xl font-bold">Islamic Companion</h3>
            </div>
            <p className="text-gray-300">
              Your spiritual journey, beautifully guided.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacts</h4>
            <div className="space-y-2 text-gray-300">
              <p>Islamic Companion</p>
              <a href="mailto: recoverykenyaid@gmail.com" ><i className='bx bxs-envelope'></i>issanyale446@gmail.com</a>
              <p>Nairobi/Mombasa, Kenya</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Islamic Companion. All rights reserved.</p>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <a target="_blank" rel="noreferrer" href="https://issa-s-tech-hub.vercel.app/">
              Built by Issa Changawa ( 0759515450).
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
