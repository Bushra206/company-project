import React from 'react'

function Header() {
  return (
    <div>
           {/* Header */}
           <header className="flex justify-between items-center mb-0">
              <h1 className="text-[48px] font-normal font-italiana text-white">
                Name
              </h1>
              <div className="flex space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    className="bg-[#EBDBDB4D] rounded-full px-44 py-2 pr-8 "
                    placeholder=""
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-2xl bg-[#0000004F] text-gray-300">
                    Search
                  </button>
                </div>
              </div>
              <button className="bg-[#536568B2] text-white px-4 py-1 rounded-3xl">
                About Us
              </button>
            </header>
    </div>
  )
}

export default Header
