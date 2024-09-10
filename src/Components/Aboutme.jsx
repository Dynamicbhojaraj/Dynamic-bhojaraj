import React from 'react';

const AboutMe = () => {
  return (
    <div className="relative w-full max-w-none md:max-w-[1200px] mx-auto bg-white rounded-lg p-4 border-2 border-green-500 hover:shadow-lg transition duration-500 ease-in-out">

      {/* About Me Section */}
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg border-2 border-green-500">
        <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
        <div className="space-y-4">
          {/* Personal Details */}
          <div className="text-left">
            <p><strong>Name:</strong> Bhojaraj Jayapuria</p>
            <p><strong>Phone No.:</strong> +91 9337162388</p>
            <p><strong>Email:</strong> bhojarajjayapuria4@gmail.com</p>
            <p><strong>DoB:</strong> 25 November 2005</p>
            <p><strong>Nationality:</strong> Indian</p>
            <p><strong>Marital Status:</strong> Single</p>
            <p><strong>Address:</strong> Jharsuguda, jharsuguda, Odisha, 768213</p>
          </div>

          {/* Hobbies */}
          <div>
            <h2 className="font-semibold text-lg">Hobbies</h2>
            <ul className="flex space-x-6">
              <li>Coding</li>
              <li>Research</li>
              <li>Study</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="font-semibold text-lg">Languages</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Odia</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>

              <div className="flex justify-between">
                <span>English</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>

              <div className="flex justify-between">
                <span>Hindi</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
