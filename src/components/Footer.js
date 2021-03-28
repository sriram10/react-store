import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer">
             <Container>
        <Row>
          <Col><ul>
              <li>Contact</li>
              <li>Author</li>
              <li>Terms</li>
              <li>Email</li>
          </ul></Col>
          <Col><ul>
              <li>Contact</li>
              <li>Author</li>
              <li>Terms</li>
              <li>Email</li>
          </ul></Col>
        </Row>
      </Container>
        </div>
    );
}

export default Footer;