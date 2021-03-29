import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import FaqPage from '../pages/FaqPage';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import Contact from './Contact';
import Login from './Login';
import PageTitle from './PageTitle';
import Banner from './Banner';
import Register from './Register'


const RoutesContainer = () => {
  return (
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/about" component={Banner} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/products" component={ProductListingPage} />
      <Route exact path="/contact-us" component={ContactPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
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