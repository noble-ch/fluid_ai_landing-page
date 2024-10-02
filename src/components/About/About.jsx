import React, { useEffect, useRef } from 'react';
import './About.css';
import iphone from './iphones/iPhone 14 Plus.png';
import iphone1 from './iphones/iPhone 14 Plus (1).png';
import iphone2 from './iphones/iPhone 14 Plus (2).png';
import iphone3 from './iphones/iPhone 14 Plus (3).png'; 

const FluidAI = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.3, 
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="fluid-ai-container">
                   <p className='description'> Our Feature</p>

        <h1 className="title-main color text-center">Fluid AI was born out of a  <br/> desire to simplify and  <br/> streamline modern life</h1>

      <section className="fluid-section " ref={(el) => sectionsRef.current.push(el)}>
      <div className="text-left absolute">
      <h1 className="title"> Fluid AI: Simplify, Organize,  <br />and Achieve More</h1>
          <p className="description">
            In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.         
             </p>
             <p className='description'> 1/4</p>
        </div>
        <div className="image-container">
          <img src={iphone} alt="Fluid AI Feature 1" />
        </div>
        
        
      </section>

      <section className="fluid-section" ref={(el) => sectionsRef.current.push(el)}>
        <div className="text-right absolute">
        <h1 className="title"> Fluid AI: Simplify, Organize,  <br />and Achieve More</h1>
          <p className="description">
            In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.         
             </p>
             <p className='description'> 2/4</p>

        </div>
        <div className="image-container">
          <img src={iphone1} alt="Fluid AI Feature 2" />
        </div>
      </section>

      <section className="fluid-section" ref={(el) => sectionsRef.current.push(el)}>
      
        <div className="text-left absolute">
        <h1 className="title"> Fluid AI: Simplify, Organize,  <br />and Achieve More</h1>
          <p className="description">
            In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.         
             </p>
             <p className='description'> 3/4</p>

        </div>
        <div className="image-container">
          <img src={iphone2} alt="Fluid AI Feature 3" />
        </div>
      </section>

      <section className="fluid-section" ref={(el) => sectionsRef.current.push(el)}>
        <div className="text-right absolute">
        <h1 className="title"> Fluid AI: Simplify, Organize,  <br />and Achieve More</h1>
          <p className="description">
            In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.         
             </p>
             <p className='description'> 4/4</p>

        </div>
        <div className="image-container">
          <img src={iphone3} alt="Fluid AI Feature 4" />
        </div>
      </section>
    </div>
  );
};

export default FluidAI;
