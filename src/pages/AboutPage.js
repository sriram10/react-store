import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image1 from '../assets/load_more_img8.png';
import image2 from '../assets/load_more_img9.png';
import image3 from '../assets/load_more_img10.png';

const AboutPage = () => {
    return(
        <Container className="aboutus">
            <Row>
                <h1>About Us</h1>
                <div className="about-content">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </div>
            </Row>
            <Row>
                <Col>
                <Image src={image1} thumbnail />
                </Col>
                <Col>
                <Image src={image2} thumbnail />
                </Col>
                <Col>
                <Image src={image3} thumbnail />
                </Col>
            </Row>
        </Container>
    );
}

export default AboutPage;