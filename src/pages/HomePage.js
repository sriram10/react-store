import React, { Component } from 'react';
import BannerImg from '../assets/banner1.png';
import Banner from '../components/Banner';
import BannerSlider from '../components/BannerSlider';
 
class HomePage extends Component {
 render() {
 return(
 <div className="homepage">
 <BannerSlider  />
 </div>
 );
 }
}
export default HomePage;