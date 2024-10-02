import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import ImageCarousel from "./components/Carousel/ImageCarousel.jsx";
import CuriosityBenefits from "./components/CuriosityBenefits/CuriosityBenefits.js";
import WaitlistForm from "./components/WaitlistForm/WaitlistForm.js";
import Footer from "./components/Footer/Footer.js";
import Preloader from "./components/Preloader/Preloader"; // Import Preloader
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets or check when the page is fully loaded
    window.addEventListener("load", () => {
      setIsLoading(false); // When everything is loaded, hide the preloader
    });

    return () => {
      window.removeEventListener("load", () => setIsLoading(false));
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader /> 
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <ImageCarousel />
          <CuriosityBenefits />
          <WaitlistForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
