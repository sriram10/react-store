import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import SearchBar from './SearchBar';

const TopMenu = () => {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Mind of Mine</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item ><Link to="/" >Home</Link></Nav.Item>
          <Nav.Item ><Link to="/About" >About</Link></Nav.Item>
          <Nav.Item ><Link to="/faq" >FAQ</Link></Nav.Item>
          <Nav.Item ><Link to="/products" >Products</Link></Nav.Item>
          <Nav.Item ><Link to="/login" >Login</Link></Nav.Item>
          <Nav.Item ><Link to="/register" >Register</Link></Nav.Item>
        </Nav>
        <SearchBar />
      </Navbar.Collapse>
    </Navbar>
    );
}

export default TopMenu;