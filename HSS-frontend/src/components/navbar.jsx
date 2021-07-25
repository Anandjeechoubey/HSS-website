import React from "react";
import { Container, Row, Navbar, NavbarBrand, Col, Nav } from "react-bootstrap";
import logo from "assets/images/iitr-logo.png";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid className="nav--container">
        <NavbarBrand className="d-flex align-items-center">
          <img src={logo} />
          <span className="nav--vl" />
          <div className="d-flex flex-column">
            <span className="nav--dept">Department of</span>
            <span className="nav--hss">Humanities and Social Sciences</span>
          </div>
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse className="nav--collapse">
          <Nav>
            <NavLink exact to={"/"} activeClassName="nav--selected">
              Home
            </NavLink>
            <NavLink exact to={"/about"} activeClassName="nav--selected">
              About
            </NavLink>
            <NavLink exact to={"/academics"} activeClassName="nav--selected">
              Academics
            </NavLink>
            <NavLink exact to={"/research"} activeClassName="nav--selected">
              Research
            </NavLink>
            <NavLink exact to={"/facilities"} activeClassName="nav--selected">
              Facilities
            </NavLink>
            <NavLink exact to={"/events"} activeClassName="nav--selected">
              Events
            </NavLink>
            <NavLink exact to={"/people"} activeClassName="nav--selected">
              People
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
