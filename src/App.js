import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import ImageCarousel from "./components/Carousel/ImageCarousel.jsx";
import CuriosityBenefits from "./components/CuriosityBenefits/CuriosityBenefits.js";
import WaitlistForm from "./components/WaitlistForm/WaitlistForm.js";
import Footer from "./components/Footer/Footer.js";

import "./App.css";

const App = () => {
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
