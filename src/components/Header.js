import React, { useEffect, useState } from "react";
import "./component.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    setUserInfo(localStorage.getItem("userInfo"));
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>Weather Master</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Link to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Container className="signin">
                  <Nav.Link>
                    <Link to="/login">
                      <i className="fas fa-user"></i>Sign In
                    </Link>
                  </Nav.Link>
                </Container>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
