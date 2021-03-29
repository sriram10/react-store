import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Footer from '../components/Footer';
  import Login from '../components/Login';
  import BannerSlider from '../components/BannerSlider';
  import FaqPage from '../pages/FaqPage';
  import ProductListingPage from '../pages/ProductListingPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

  const RouteContainer = () => {
      return (
        <Switch>
            <Route exact path = "/" render = {()=> <h1>Home</h1>} />
            <Route exact path = "/About" render = {()=> <h1>About</h1>} />
            <Route exact path = "/product" component = {ProductListingPage} />
            <Route exact path="/faq" component={FaqPage} />
            <Route exact path = "/footer"><Footer /></Route>
            <Route exact path = "/login"><Login /></Route>
            <Route exact path = "/slider"><BannerSlider /></Route>
            <Route exact path = "/productpage" component = {ProductDetailsPage} />
        </Switch>
      )
      }

export default RouteContainer;


  