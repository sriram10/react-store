import React, { useState } from 'react';
import { Menus } from "../assets/Menus";
import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import RouterContainer from "./RouterContainer";

const Footer = () => {
    let menuData = Menus.data;
    return(
        <>
            <Container className="footer-section">
                <Row>
                    <Col xs={6} md={2}>
                        <BrowserRouter>
                            <ul>
                                {menuData.map((menu) =>
                                    <li><Link to={menu.url}>{menu.name}</Link></li>
                                )}                    
                            </ul>                            
                        </BrowserRouter>        
                    </Col>
                    <Col xs={6} md={10}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                </Row>                
            </Container>
        </>
    )
}

export default Footer;