import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import GoBackButton from './GoBackButton';
class Header extends React.Component {
  render() {
    return (
      <header>
          <Navbar bg="dark" style={{justifyContent:'space-between'}}>
            <Navbar.Brand className="text-white" href="/#home">
            <img 
            height="30"
            width="30"
            src="/logo192.png"></img>
            React Store
            </Navbar.Brand>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="ml-sm-5" />
              <Button variant="outline-info">Search</Button>
              <div className="ml-sm-5 float-right">
              <GoBackButton/>
              </div>
            </Form>
          </Navbar>
      </header>
    )
  }
}

export default Header;