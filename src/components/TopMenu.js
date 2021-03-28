import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

class TopMenu extends React.Component {
    render() {
        return (
            

            <Navbar bg="primary" variant="dark" style={{justifyContent:'space-around'}}>

                    <Nav.Link className="text-white" href="/products">Products</Nav.Link>
                    <Nav.Link className="text-white" href="/">Laptops</Nav.Link>
                    <Nav.Link className="text-white" href="/">Fashion</Nav.Link>
                    <Nav.Link className="text-white" href="/">Groceries</Nav.Link>
                    <Nav.Link className="text-white" href="/about">About</Nav.Link>
                    <Nav.Link className="text-white" href="/faq">FAQ</Nav.Link>
                
            </Navbar>
            

        )
    }
}

export default TopMenu;
