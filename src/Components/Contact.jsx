import React from 'react';

const Contact = () => {
  return (
    <section name="Contact"
    className="bg-white py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>
      <div className="max-w-4xl mx-auto px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59243.20426258429!2d83.97684088776161!3d21.86909423582395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20e41df3d3ce1f%3A0x1d0ba6a51cb673ed!2sJharsuguda%2C%20Odisha!5e0!3m2!1sen!2sin!4v1725880875502!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg mb-8"
        ></iframe>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-3 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            className="border border-gray-300 p-3 rounded-lg shadow-md w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
