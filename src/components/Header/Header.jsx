import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar variant="dark" className="navbar " expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto w-100 justify-content-between">
            <div className="nav-left">
              <Nav.Link className="text-white" href="#our-story">
                Our Story
              </Nav.Link>
              <Nav.Link className="text-white" href="#watchlist">
                Watchlist
              </Nav.Link>
            </div>

            <div className="nav-right">
              <Nav.Link className="text-white" href="#what-we-believe">
                What We Believe
              </Nav.Link>
              <Nav.Link className="text-white" href="#our-future">
                Our Future
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
