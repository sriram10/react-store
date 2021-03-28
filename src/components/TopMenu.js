import React, { useState } from "react";
import { Menus } from "../assets/Menus";
import { Navbar, Nav } from 'react-bootstrap';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import RouterContainer from "./RouterContainer";


const TopMenu = () => {
    let menuData = Menus.data;    
    return (
        <BrowserRouter>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <ul>
                            {menuData.map((menu) =>
                                <li><Link to={menu.url}>{menu.name}</Link></li>
                            )}                    
                        </ul>                        
                    </Nav>
                </Navbar.Collapse>                
            </Navbar>
            <RouterContainer/>
        </BrowserRouter>        
    )
}

export default TopMenu;

