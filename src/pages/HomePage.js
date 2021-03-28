import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerSlider from '../components/BannerSlider';


class HomePage extends Component {

render(){

   return(
    <Container>
    <BannerSlider/>
    </Container>


   );
}
}

export default HomePage;