import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import ProductListingPage from '../pages/ProductListingPage';

const RoutesContainer = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route exact path="/about" render={() => <h1>About</h1>} />
      <Route exact path="/faq" render={() => <h1>Faq</h1>} />
      <Route exact path="/listing" component={ProductListingPage} />
      <Route exact path="/listing/mobile" render={() => <h1>Mobile Listing</h1>} />
      <Route path="*" render={() => <h1>404 - Not Found</h1>} />
    </Switch>
  )
}

export default RoutesContainer