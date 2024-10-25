import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen   p-24">
      <div className="max-w-6xl mx-auto w-[90%] border-t-2">
        {/* Title */}
        <h1 className="text-4xl font-light text-white my-6">About Us</h1>

        {/* Main Grid Container */}
        <div className="grid grid-cols-12 gap-4">
          {/* Large Profile Image */}
          <div className="col-span-5">
            <img
              src="public\images\235780e876325014a987c52bb5e90cca.jpeg"
              alt="Profile"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-span-7">
            {/* Landscape Design Title */}
            <h2 className="text-white text-xl mb-4">Landscape Design</h2>

            {/* Image Grid */}
            <div className="grid grid-cols-6 gap-4 mb-6">
              {/* Top Row */}
              <div className="col-span-3">
                <img
                  src="public\images\140caef7c966ff4556c120a52828db65.jpeg"
                  alt="Design 1"
                  className="w-full h-32 object-cover rounded-2xl"
                />
              </div>
              <div className="col-span-3">
                <img
                  src="public\images\799149c163aadcba7d7cfc3f40c208c7.jpeg"
                  alt="Design 2"
                  className="w-full h-32 object-cover rounded-2xl"
                />
              </div>

              {/* Bottom Row */}
              <div className="col-span-4">
                <img
                  src="public\images\079e1d7c632e9a8a4aadd25aa85f6d69.jpeg"
                  alt="Design 3"
                  className="w-full h-32 object-cover rounded-2xl"
                />
              </div>
              <div className="col-span-2">
                <img
                  src="public\images\19073a4798dd82f060a9a054a6ab6e2a.jpeg"
                  alt="Design 4"
                  className="w-full h-32 object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Description Text */}
            <p className="text-black text-sm leading-relaxed">
              UX / UI design has become more "trendy" as more and more things move online. Now, with the
              "internet of things," nearly everything needs some sort of attention to the user experience. UX
              design focuses on the interaction that a human user has with each products and services.
              Therefore, UX UI is the team using these products and services, both digital or physical,
              easy, logical, and fun.
            </p>

            {/* Explore All Button */}
            <div className='flex justify-end items-center'>
            <button className="mt-6  bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-400 transition-colors">
              Explore All
            </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;