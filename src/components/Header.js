import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
    
            <Navbar bg="dark" variant="dark" style={{justifyContent:'space-between'}}>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
      React Store
    </Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

            

        )
    }
}

export default Header;