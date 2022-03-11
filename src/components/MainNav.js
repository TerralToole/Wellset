import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {
  Link,
  useLocation
} from "react-router-dom";


function MainNav() {
  let location = useLocation();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>Beerscapade</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="top-global-nav"/>
          <Navbar.Collapse id="top-global-nav">
            <Nav className="me-auto">
              <Nav.Link href="feed" active={location.pathname.startsWith('/Feed')}>Feed</Nav.Link>
              <Nav.Link href="article" active={location.pathname.startsWith('/Article')}>Articles</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="top-global-nav">
            <Nav className="me-auto">
              <Nav.Link href="LogIn" active={location.pathname.startsWith('./components/LogIn')}>Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNav;
