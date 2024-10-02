import React, { useState } from "react";
import { Navbar, Nav, Container, Collapse } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false); // State to control collapse

  return (
    <Navbar variant="dark" className="navbar" expand="lg">
      <Container fluid className="justify-content-between">
        {/* Custom Hamburger Icon */}
        <div
          className={`custom-toggler ${open ? "active" : ""} mt-4`}
          onClick={() => setOpen(!open)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        {/* The Collapse Component is controlled by the `open` state */}
        <Collapse in={open}>
          <div className="w-100"> {/* Added a wrapper div inside Collapse */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="w-100 justify-content-center">
                <div className="nav-center">
                  <Nav.Link className="text-white" href="#our-story">
                    Our Story
                  </Nav.Link>
                  <Nav.Link className="text-white" href="#watchlist">
                    Watchlist
                  </Nav.Link>
                  <Nav.Link className="text-white" href="#what-we-believe">
                    What We Believe
                  </Nav.Link>
                  <Nav.Link className="text-white" href="#our-future">
                    Our Future
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
