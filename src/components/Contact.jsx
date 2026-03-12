import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="text-gray-600 mt-2">
            If you need video editing services, feel free to contact me.
          </p>
        </div>

        {/* Contact Container */}
        <div className="bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <form className="space-y-4">
            
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Send Message
            </button>

          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center items-center text-center space-y-6">

            <h3 className="text-xl font-semibold">Get in Touch</h3>

            <p className="text-gray-600">
              You can also reach me through social media.
            </p>

            <div className="flex gap-6 text-3xl">

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              > 
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;