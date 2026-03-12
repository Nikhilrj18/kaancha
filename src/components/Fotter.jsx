import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Fotter = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6 mt-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Name */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">
              Kaancha Chandravanshi
            </h2>
            <p className="text-sm text-gray-400">
              Professional Video Editor
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">

            <a
              href="https://instagram.com/kaanchachandravnshi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919251625105"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hover:scale-110 transition duration-300"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-800 pt-4">
          © 2026 All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Fotter;