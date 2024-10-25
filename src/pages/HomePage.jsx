import React from "react";
import RealEstatePage from "./RealEstatePage";
import AboutUs from "./AboutUs";
import LatestSection from "./LatestSection";
import Header from "./Header";

function HomePage() {
  return (
    <div className="home-css">
       <Header/>
      <RealEstatePage />
      <AboutUs />
      <LatestSection />
    </div>
  );
}

export default HomePage;
