import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import FaqPage from '../pages/FaqPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProductListingPage from '../pages/ProductListingPage';
import RegisterPage from '../pages/RegisterPage';
import PageTitle from './PageTitle';


const RoutesContainer = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/products" component={ProductListingPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/products/:product/:id?" render={(props) => {
        const d = props.match.params;
        return (
          <>
            <PageTitle name={d.product} />
          <h1>{d.product} - {d.id || 0} Listing</h1>
          </>
        )
      }} />
      <Route path="*" render={() => <h1>404 - Not Found</h1>} />
    </Switch>
  )
}

export default RoutesContainer