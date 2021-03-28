import React from 'react';
import { Navbar, Form, Col,InputGroup  } from 'react-bootstrap';
import TopMenu from '../components/TopMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/fontawesome-free-solid";

const Header = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src="./logo.png" width="100" height="100"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="top-search-bar">
                <Form.Group>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Search here.."
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={Icons.faSearch} />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                </Form.Group>
            </Navbar.Collapse>
        </Navbar>
        <TopMenu />
        </>
    )
}

export default Header;