import React from "react";
import NewsArticle from "./NewArticle";
import { Home, Grid, Zap, Phone } from "lucide-react";
import Header from "./Header";
const Sidebar = () => (
  <div className="mt-[30px] w-16 h-[500px] px-3 rounded-2xl bg-[#A19C9C] text-white flex flex-col items-center  justify-evenly  space-y-8">
    <div className="flex flex-col items-center">
      <Home className="h-6 w-6 " />
      <span className="text-xs ">Home</span>
    </div>

    <div className="flex flex-col items-center">
      <Grid className="h-6 w-6 " />
      <span className="text-xs ">Category</span>
    </div>

    <div className="flex flex-col items-center">
      <Zap className="h-6 w-6 " />
      <span className="text-xs ">Latest</span>
    </div>

    <div className="flex flex-col items-center">
      <Phone className="h-6 w-6 " />
      <span className="text-xs ">Contact</span>
    </div>
  </div>
);
const RacingNewsPage = () => {
  return (
    <div className="home-css min-h-screen px-4 py-2 ">
        <Header/>

      <div className="grid grid-cols-10">
        <Sidebar/>
        {/* Main Content */}
        <main className="col-span-9">

          <article className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">
              WRC Central Europe: Neuville grabs lead, Mikkelsen crash causes
              red flag
            </h1>

            {/* Featured Image */}
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src="public\images\94c551f2664e27784018cbebfac6adad.jpeg"
                alt="Racing car in action"
                className="w-[90%] h-[500px] object-cover"
              />
            </div>

            {/* Image Caption */}
            <div className="flex flex-col gap-2 text-black">
              <p className="font-medium text-[32px]">
                Brodie Kostecki, Erebus Motorsport Chevrolet Camaro ZL
              </p>
              <p className="text-[20px]">Photo by: Edge Photographics</p>
            </div>
          </article>
          <NewsArticle/>

        </main>
      </div>
    </div>
  );
};

export default RacingNewsPage;
