import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

import logo from "./Assets/logo.png";
import scroll_message from "./Assets/Frame 1171275578.png";
import todo from "./Assets/To Do.png";
import card from "./Assets/Card.png";
import Reservation from "./Assets/Reservation.png";
import Event from "./Assets/Event.png";
import newEventCard from "./Assets/new tickets card.png";
import Tab from "./Assets/Tab (3).png";
import Tab2 from "./Assets/Tab (2).png";

import { Button, Image } from "react-bootstrap";


const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [logoSticky, setLogoSticky] = useState(true); // State to track sticky behavior
  const mottoRef = useRef(null); // Reference to the motto

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);

    // Calculate when the motto reaches the logo
    if (mottoRef.current) {
        const mottoTop = mottoRef.current.getBoundingClientRect().top + scrollY;
        const stopStickyAt = mottoTop - 290;
  
        // Only apply sticky behavior for larger screens
        if (window.innerWidth > 768 && scrollY > stopStickyAt) {
          setLogoSticky(false);
        } else {
          setLogoSticky(true);
        }
      }
    };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxLogoSize = window.innerWidth <= 768 ? 400 : 600; 
  const logoSize = Math.max(150, maxLogoSize - scrollPosition * 2);
  const scrollThreshold = window.innerWidth <= 768 ? 100 : 200;

  return (
      <div className="container ">
  

        {/* Logo */}
        <div
          className={`logo-container ${logoSticky ? "sticky" : ""}`}
          style={{
            width: `${logoSize}px`,
            transition: "width 0.3s ease-out", 
            position: logoSticky ? "sticky" : "relative",
          }}
        >
          <Image src={logo} alt="Logo" className="logo" />
        </div>

        {/* Motto */}
        <h1 ref={mottoRef} className={`motto ${scrollPosition > scrollThreshold ? "show" : ""}`}>

          Unlock Seamless <br /> Efficiency
        </h1>

        {/* Sliding Text */}

        <img
          src={todo}
          alt="todo"
          className={`slide-right ${
            scrollPosition > scrollThreshold ? "show-right" : ""
          } todo-rt`}
        ></img>
        <img
          src={todo}
          alt="todo"
          className={`slide-left ${
            scrollPosition > scrollThreshold ? "show-left" : ""
          } todo-lt`}
        ></img>
        <img
          src={card}
          alt="card"
          className={`slide-left ${
            scrollPosition > scrollThreshold ? "show-left" : ""
          } card-lt`}
        ></img>

        <img
          src={Reservation}
          alt="event"
          className={`slide-right ${
            scrollPosition > scrollThreshold ? "show-right" : ""
          } reservation-rb`}
        ></img>
        <img
          src={Event}
          alt="Reservation"
          className={`slide-left ${
            scrollPosition > scrollThreshold ? "show-left" : ""
          } event-lt`}
        ></img>
        <img
          src={Event}
          alt="Reservation"
          className={`slide-right ${
            scrollPosition > scrollThreshold ? "show-right" : ""
          } event-rt`}
        ></img>
        <img
          src={newEventCard}
          alt="NewEventCard"
          className={`slide-left ${
            scrollPosition > scrollThreshold ? "show-left" : ""
          } new-event-lt`}
        ></img>
        <img
          src={Tab}
          alt="NewEventCard"
          className={`slide-right ${
            scrollPosition > scrollThreshold ? "show-right" : ""
          } tab-rb`}
        ></img>
        <p
          className={`slide-right ${
            scrollPosition > 100 ? "show-right" : ""
          } tab1-rb`}
        >
          Trip Ideas
        </p>
        <img
          src={Tab2}
          alt="NewEventCard"
          className={`slide-left ${
            scrollPosition > 200 ? "show-left" : ""
          } tab2-lb`}
        ></img>
        {/* Join Waitlist Button */}
        <Button
   
          className={`join-btn ${scrollPosition > scrollThreshold ? "show" : ""} bg-white rounded rounded-5 border-0`}
        >
          Join Waitlist
        </Button>

        <div className="content">
  {scrollPosition > (window.innerWidth <= 768 ? 70 : 200) ? null : (
    <img style={{ marginTop: '150px' }} className="p-5" src={scroll_message} alt="scroll" />
  )}
</div>
        <div className={"blur"}></div>
      </div>
  );
};

export default Hero;
