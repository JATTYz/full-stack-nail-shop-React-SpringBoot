import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'

const Navbar1 = () => {
    return (
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">1989 NailShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Product</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#deets">About Us</Nav.Link> 
            </Nav>
            <Nav>
             
              <Nav.Link eventKey={2} href="#memes">
                THE ENTREPRENEUR LIEF CHOSE ME 
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
}

export default Navbar1

