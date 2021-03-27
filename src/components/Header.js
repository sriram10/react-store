import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Container style={{padding: '10px 0'}}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/#home">React Store</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/faq">FAQs</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/products/category/mobile">Mobile</Nav.Link>
            </Nav>
            <Form inline style={{paddingRight: '40px'}}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
            <Button variant="outline-info">View Cart</Button>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header;