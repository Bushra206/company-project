import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RealEstatePage from "./pages/RealEstatePage";
import AboutUs from "./pages/AboutUs";
import LatestSection from "./pages/LatestSection";
import Footer from "./pages/Footer";
import RacingNewsPage from "./pages/RacingNews";
import NewsArticle from "./pages/NewArticle";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">



      <BrowserRouter>

        <Routes>
          <Route
            path="/"
            element={<HomePage/>}
          />
          <Route
            path="/racing"
            element={
              <>
                <RacingNewsPage />
                {/* <NewsArticle /> */}
              </>
            }
          />


        </Routes>
             <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
