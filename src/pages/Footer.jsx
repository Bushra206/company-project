import React from 'react';
import {
  Instagram,
  Facebook,
  Linkedin,
  MessageSquare,
  Send
} from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-[#6C7785] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Image Section */}
          <div className="col-span-4">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="images\56af2cb7ddc0432f623c82a1b005aa28.jpeg"
                alt="People smiling"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-span-8 p-4">
            {/* Email Input */}
            <div className="relative mb-12">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-white/30 rounded-full py-3 px-6 focus:outline-none focus:border-white"
              />
              <button className="font-bold absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full flex items-center gap-2">
                Send Now
                {/* <Send size={16} /> */}
              </button>
            </div>

            {/* Navigation Grid */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {/* Menu Section */}
              <div>
                <h3 className="font-semibold mb-4">Menu</h3>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#" className="hover:text-white">Home</a></li>
                  <li><a href="#" className="hover:text-white">Category</a></li>
                  <li><a href="#" className="hover:text-white">Latest</a></li>
                </ul>
              </div>

              {/* About Us Section */}
              <div>
                <h3 className="font-semibold mb-4">About US</h3>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#" className="hover:text-white">Become a partner</a></li>
                  <li><a href="#" className="hover:text-white">Suggestions</a></li>
                </ul>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-white/80">
                  <li>+923011234578</li>
                  <li className="break-all">Malikharoon@gmail.com</li>
                </ul>
                {/* Social Icons */}
                <div className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-pink-400">
                  <img
        src="images\social-icons\85026243e73d85473dc890a375785d94.png"
        alt=""
        className="w-[20px] h-[20px]"
      />
                  </a>
                  <a href="#" className="hover:text-green-400">
                  <img
        src="images\social-icons\e6836e3df7d1daa9d465a87c38778760.png"
        alt=""
        className="w-[20px] h-[20px]"
      />
                  </a>
                  <a href="#" className="hover:text-blue-400">
                  <img
        src="images\social-icons\609e912d8c063849a841389eacadb617.png"
        alt=""
        className="w-[20px] h-[20px]"
      />
                  </a>
                  <a href="#" className="hover:text-blue-600">
                  <img
        src="images\social-icons\43dc7547c0fab0a5c105151070486e23.png"
        alt=""
        className="w-[20px] h-[20px]"
      />
                  </a>
                </div>
              </div>
            </div>
            {/* Bottom Footer */}
        <div className="border-t-[1px] border-white mt-8 pt-4">
          <div className="flex justify-between text-sm text-white/60">
            <span>Copyright</span>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
              <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;