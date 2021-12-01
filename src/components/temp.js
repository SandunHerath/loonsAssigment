import React, { useEffect, useState } from "react";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    setUserInfo(localStorage.getItem("userInfo"));
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Nav to="/">
            <Navbar.Brand>Weather Master</Navbar.Brand>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Nav to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Nav>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
