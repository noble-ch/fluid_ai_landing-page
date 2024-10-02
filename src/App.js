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
    // Set the spinner to hide after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader /> // Show preloader when the page is loading
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
