import React from 'react';
import ReactDOM from 'react-dom';
import PageTitle from '../components/PageTitle';
import BannerSlider from '../components/BannerSlider';
class HomePage extends React.Component  {
    render() {
      return (
        <div>
          <h2>Home</h2>
          <BannerSlider/>
        </div>
      );
    }
  }
   
  export default HomePage;