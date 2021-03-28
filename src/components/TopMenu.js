import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class TopMenu extends React.Component {
  render() {
    return (
      <header>
          <Navbar bg="info">
            <Nav className="mr-auto">
              <Nav.Link  className="text-white" href="/">Home</Nav.Link>
              <Nav.Link  className="text-white" href="/about">About</Nav.Link>
              <Nav.Link  className="text-white" href="/faq">FAQs</Nav.Link>
              <Nav.Link  className="text-white" href="/products">Products</Nav.Link>
              <Nav.Link  className="text-white" href="/products/category/mobile">Mobile</Nav.Link>
            </Nav>
          </Navbar>
      </header>
    )
  }
}

export default TopMenu;