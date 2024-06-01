import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <div className=" flex  flex-wrap px-[3rem] md:px-[4rem]  justify-between w-full items-center">
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                className=" w-[11rem]  object-cover"
                alt="G Experience"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/Events">
                <Nav.Link>Events</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Gallery">
                <Nav.Link>Gallery</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
