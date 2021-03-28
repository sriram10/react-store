import React, { Component } from 'react'
import {FormControl} from 'react-bootstrap'
import {Container,Row,Col} from 'react-bootstrap'
export default class PriceFilter extends Component {
    render() {
        return (

        <Container>
            <Row>
            <Col>
            <label>MIN PRICE</label>
            <FormControl placeholder="Min Price"
                                      aria-label="Recipient's username"
                                      aria-describedby="basic-addon2"
            />
            </Col>
            <Col>
             <label>MAX PRICE</label>                      
            <FormControl placeholder="Max Price"
                                      aria-label="Recipient's username"
                                      aria-describedby="basic-addon2"
            />
            </Col>
            </Row>
        </Container>
        )
    }
}
