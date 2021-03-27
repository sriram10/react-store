import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

function TopMenu() {
    return (
        
        <Navbar bg="primary" variant="dark" >
            <Nav className="mr-auto">
                <Nav.Link href="#laptops">Laptops</Nav.Link>
                <Nav.Link href="#mobiles">Mobiles</Nav.Link>
                <Nav.Link href="#fashion">Fashion</Nav.Link>
                <Nav.Link href="#earphones">Earphones</Nav.Link>
                <Nav.Link href="#groceries">Groceries</Nav.Link>
                <Nav.Link href="#refrigerators">Refrigerators</Nav.Link>
            </Nav>

        </Navbar>
        
    )
}

export default TopMenu;
