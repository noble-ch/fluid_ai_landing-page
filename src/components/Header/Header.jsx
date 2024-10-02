import React, { useState } from "react";
import { Navbar, Nav, Container, Collapse } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Navbar variant="dark" className="navbar" expand="md">
      {" "}
      {/* Expand for md and larger */}
      <Container fluid className="justify-content-between">
        {/* Hamburger Menu for small devices */}
        <div className="d-md-none">
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
            <div className="w-100">
              {" "}
              {/* Added a wrapper div inside Collapse */}
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
            </div>
          </Collapse>
        </div>

        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-md-flex">
          <Nav className=" w-100 justify-content-center">
            <div className="normal-nav">
              <Nav className="">
                <Nav.Link className="text-white mx-4" href="#our-story">
                  Our Story
                </Nav.Link>
                <Nav.Link className="text-white mx-4" href="#watchlist">
                  Watchlist
                </Nav.Link>
              </Nav>
              <Nav>
                {" "}
                <Nav.Link className="text-white mx-4" href="#what-we-believe">
                  What We Believe
                </Nav.Link>
                <Nav.Link className="text-white mx-4 " href="#our-future">
                  Our Future
                </Nav.Link>
              </Nav>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
