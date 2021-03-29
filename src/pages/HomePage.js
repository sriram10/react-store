import React, { Component } from 'react';
import BannerImg from '../assets/banner1.png';
import Banner from '../components/Banner';
import BannerSlider from '../components/BannerSlider';
import image1 from '../assets/banner2.png';
import image2 from '../assets/banner3.png';
import image3 from '../assets/banner1.png';

class HomePage extends Component {
    render() {
        return(
            <div className="homepage">
                <Banner img={BannerImg} alt="Banner Image" />
                <BannerSlider image3 = {image2} image2 = {image1} image1 = {image3} />
            </div>
        );
    }
}

export default HomePage;