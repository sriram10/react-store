import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import {FormControl} from 'react-bootstrap'
import {Container,Row,Col} from 'react-bootstrap'
export default class Header extends Component {
    render() {
        return (
            <>
                <div className="firstContainer">
                    <span>&#36;Currency</span>
                    <ul>
                        <li>&#128222;123456789</li>
                        <li>My Account</li>
                        <li>Wish List</li>
                        <li>shopping Cart</li>
                        <li>Check Out</li>
                    </ul>
                </div>
                <div className="secondContainer">
                    
                    <Container>
                        <Row>
                            <Col><h1>Your Store</h1></Col>
                            <Col xs={6}><InputGroup className="mb-3">
                                <FormControl id="search"
                                    placeholder="Search"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2">search</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            </Col>
                            <Col><Button id="button" variant="dark">0 item(s) - 0.00</Button></Col>
                        </Row>
                    </Container>
                    
                    
                </div>
               
            </>
        )
    }
}

// &#9662;
