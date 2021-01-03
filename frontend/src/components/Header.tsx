import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = props => {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
            TodoList
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar >
    </>
  );
}

export default Header;
