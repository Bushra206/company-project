import React from "react";
import one from "/images/one.jpg";
import two from "/images/two.jpg";
import three from "/images/three.jpg";
import four from "/images/four.jpg";
import five from "/images/five.jpg";
import six from "/images/six.jpg";

// const ImageCard = ({ imageSrc, caption, className }) => (
//   <div className={`relative group cursor-pointer overflow-hidden rounded-2xl ${className}`}>
//     <img
//       src={imageSrc}
//       alt={caption}
//       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//     />
//     <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
//       <p className="text-white text-sm font-medium">"{caption}"</p>
//     </div>
//   </div>
// );

const LatestSection = () => {
  // const cards = [
  //   {
  //     id: 1,
  //     caption: "Actions Speak Louder Than Coaches",
  //     image: "public/images/e496c1bf566c3d4dc7fe501055232782.jpeg",
  //     className: "col-span-2 row-span-2"
  //   },
  //   {
  //     id: 2,
  //     caption: "Dunk And Go Nuts",
  //     image: "public/images/e415246a682b40205fb358987cbe2e3a.jpeg",
  //     className: "col-span-2 row-span-3"
  //   },
  //   {
  //     id: 3,
  //     caption: "Small but Mighty",
  //     image: "public/images/8f5209b0c14050501ec172d8a5bb38ce.jpeg",
  //     className: "col-span-2 row-span-1"
  //   },
  //   {
  //     id: 4,
  //     caption: "Where Grace Meets Glory",
  //     image: "public/images/38834d477f7937873ebf023a197cbac5.png",
  //     className: "col-span-2 row-span-2"
  //   },
  //   {
  //     id: 5,
  //     caption: "Pursue Greatness with Style",
  //     image: "public/images/94c551f2664e27784018cbebfac6adad.jpeg",
  //     className: "col-span-2 row-span-2"
  //   },
  //   {
  //     id: 6,
  //     caption: "Born to Play, Born to Win",
  //     image: "public/images/05cfabbb37309073d5f366fd434e984f.jpeg",
  //     className: "col-span-2 row-span-2"
  //   }
  // ];

  return (
    <>
      <div className="liner">
        <p className="text-white font-medium text-3xl md:text-4xl text-center py-[30px]">
          Latest
        </p>
        <div className="h-auto w-[90%] md:w-[75%] m-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative">
              <img
                src={one}
                alt=""
                className="h-[40vh] md:h-[43vh] rounded-3xl"
              />
              <div className="absolute mt-[-64px] left-0 w-full h-[10vh] rounded-b-3xl bg-[#0000004f] ">
                <p className="text-white text-center mt-4">
                  "Actions Speak Louder Than Coaches"
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={two}
                alt=""
                className="h-[55vh] m-auto md:h-[65vh] rounded-3xl"
              />
              <div className="absolute bottom-0 left-9 w-[78%] h-[10vh] rounded-b-3xl bg-[#0000004f] md:w-full md:left-0">
                <p className="text-white text-center mt-4">
                  "Dunk And Go Nuts"
                </p>
              </div>
            </div>

            <div className="relative w-[100%] md:w-[25%]">
              <img
                src={three}
                alt=""
                className="h-[40vh] md:h-[40vh] rounded-3xl w-full"
              />
              <div className="absolute mt-[-64px] left-0 w-full h-[10vh] rounded-b-3xl bg-[#0000004f]">
                <p className="text-white text-center mt-4">
                  "Small But Mighty"
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mt-6">
            <div className="relative md:mt-[-150px]">
              <img
                src={four}
                alt=""
                className="h-[55vh] m-auto md:h-[65vh] rounded-3xl"
              />
              <div className="absolute mt-[-65px] left-12 w-[72%] h-[10vh] rounded-b-3xl bg-[#0000004f] md:w-full md:left-0">
                <p className="text-white text-center mt-4">
                  "Where Drace Meet Glory"
                </p>
              </div>
            </div>

            <div className="relative h-[70vh]">
              <img
                src={five}
                alt=""
                className="h-[40vh] md:h-[40vh] rounded-3xl mt-5 md:mt-0"
              />
              <div className="absolute mt-[-65px] left-0 w-full h-[10vh] rounded-b-3xl bg-[#0000004f]">
                <p className="text-white text-center mt-4">
                  "Pursue Greatness With Style"
                </p>
              </div>
            </div>

            <div className="relative w-[100%] md:w-[35%] mt-[-170px]">
              <img
                src={six}
                alt=""
                className="h-[55vh] w-[80%] md:w-full md:h-[65vh] ms-[30px] rounded-3xl"
              />
              <div className="absolute mt-[-65px] left-8 w-[80%] h-[10vh] rounded-b-3xl bg-[#0000004f] md:w-full">
                <p className="text-white text-center mt-4">
                  "Born To Play, Born To Win"
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2px] w-[80%] bg-white rounded m-auto"></div>
      </div>
    </>
  );
};

export default LatestSection;
