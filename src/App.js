import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import ImageCarousel from "./components/Carousel/ImageCarousel.jsx";
import CuriosityBenefits from "./components/CuriosityBenefits/CuriosityBenefits.js";
import WaitlistForm from "./components/WaitlistForm/WaitlistForm.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a resource download or component readiness check
    const loadResources = () => {
      const images = document.querySelectorAll("img");
      let loadedImages = 0;
      
      images.forEach((image) => {
        if (image.complete) {
          loadedImages += 1;
        } else {
          image.onload = () => {
            loadedImages += 1;
            if (loadedImages === images.length) {
              setIsLoading(false); // All images are loaded
            }
          };
        }
      });

      // Fallback in case there are no images or all resources are ready
      if (loadedImages === images.length) {
        setIsLoading(false);
      }
    };

    loadResources();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        {/* You can replace this with any spinner or loading animation */}
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ImageCarousel />
      <CuriosityBenefits />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default App;
