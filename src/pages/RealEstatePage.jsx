import React, { useState } from "react";
import Catagories from "./Catagories";
import TodayLatest from "./TodayLatest";
import HomePage from "./HomePage";
import {
  Home,
  Phone,
  Zap,
  Facebook,
  Linkedin,
  Instagram,
  Grid,
  Search,
  MessageSquare,
} from "lucide-react";

const PropertyCard = ({ imageSrc }) => (
  <div className="bg-teal-600 rounded-lg px-3 py-6 text-white flex flex-col items-center justify-center gap-[1px]">
    <img src={imageSrc} alt="Property" className="w-[80%] rounded-lg " />

    <p className="text-sm text-center">This house is on rent now</p>
    <p className="text-xs text-center ">
      if you want to buy or take on a rent contact us.
    </p>
    <button className="bg-white text-black text-sm py-1 px-4 rounded-3xl font-semibold mt-3">
      Read More
    </button>
  </div>
);

const Sidebar = (props) =>{
  // const [sidebarstate, setSideBarState] = useState(0);
  return (
  <div className="mt-[30px] w-16 px-3 rounded-2xl bg-[#A19C9C] text-white flex flex-col items-center  justify-evenly  space-y-8">
    <div
      className="flex flex-col items-center"
      onClick={() => props.setSideBarState("home")}
    >
      <Home className="h-6 w-6 " />
      <span className="text-xs ">Home</span>
    </div>

    <div
      className="flex flex-col items-center"
      onClick={() =>  props.setSideBarState("catagory")}
    >
      <Grid className="h-6 w-6 " />
      <span className="text-xs ">Category</span>
    </div>

    <div
      className="flex flex-col items-center"
      onClick={() => props.setSideBarState("latest")}
    >
      <Zap className="h-6 w-6 " />
      <span className="text-xs ">Latest</span>
    </div>

    <div
      className="flex flex-col items-center"
      onClick={() => {
        props.setSideBarState("contact");
        console.log("contact clicked");
      }}
    >
      <Phone className="h-6 w-6 " />
      <span className="text-xs ">Contact</span>
    </div>
  </div>
);
}

const ContactForm = () => (
  <div className="bg-[#191414BF] py-4 px-6 rounded-lg text-white absolute left-24 -bottom-[26px] ">
    <h3 className="mb-3">Contact Us</h3>
    <div className="flex mb-4">
      <div className="relative">
        <input
          type="text"
          className="bg-[#EBDBDB4D] rounded-full px-3 py-1 pr-2 "
          placeholder="Email"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-[2px] rounded-2xl bg-[#0000004F] text-gray-300 text-[12px]">
          Send
        </button>
      </div>
    </div>
    <div className="text-sm mb-2">0112345678</div>
    <div className="flex space-x-3">
      <img
        src="images\social-icons\85026243e73d85473dc890a375785d94.png"
        alt=""
        className="w-[20px] h-[20px]"
      />
      <img
        src="images\social-icons\e6836e3df7d1daa9d465a87c38778760.png"
        alt=""
        className="w-[20px] h-[20px]"
      />
      <img
        src="images\social-icons\609e912d8c063849a841389eacadb617.png"
        alt=""
        className="w-[20px] h-[20px]"
      />
      <img
        src="images\social-icons\43dc7547c0fab0a5c105151070486e23.png"
        alt=""
        className="w-[20px] h-[20px]"
      />
    </div>
  </div>
);

const RealEstatePage = () => {
  const [sidebarstate, setSideBarState] = useState(0);
  return (
    <div className="">
      <div className="flex">
        {/* Main Content */}
        <div className="relative">
          <div className=" px-4 ">


            {/* Main Feature */}
            <div className="grid grid-cols-6 ">
              <Sidebar sidebarstate={sidebarstate} setSideBarState={setSideBarState} />
              <div className="col-span-4 ">
                <div className=" flex flex-col items-center text-white">
                  <p className="text-[80px] font-normal -mb-[45px]">Name</p>
                  <img
                    src="public\images\5bbf7a8bd09904f59f3393be3015c329.png"
                    alt="Main Property"
                    className="w-[85%] rounded-lg "
                  />
                  <div>
                    <h2 className="text-2xl mt-[10px]">
                      The Untitled UIUX Design
                    </h2>
                  </div>
                </div>
              </div>

              {/* Property Cards */}
              <div className="space-y-8">
                <PropertyCard
                  imageSrc={
                    "/images/24bf2ce62112397950410e62d5ca57de.png"
                  }
                />
                <PropertyCard
                  imageSrc={
                    "/images/5bbf7a8bd09904f59f3393be3015c329.png"
                  }
                />
              </div>
            </div>
          </div>
          {sidebarstate === "catagory" ? (
            <Catagories />
          ) : sidebarstate === "latest" ? (
            <TodayLatest/>
          ) : sidebarstate === "contact" ? (
            <ContactForm />
          )
           : null}
        </div>
      </div>
    </div>
  );
};

export default RealEstatePage;
