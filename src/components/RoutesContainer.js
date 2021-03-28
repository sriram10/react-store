import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import FaqPage from '../pages/FaqPage';
import ProductListingPage from '../pages/ProductListingPage';
import PageTitle from './PageTitle';
import Login from '../components/Login';
import HomePage from '../pages/HomePage';
import About from '../pages/AboutPage';



const RoutesContainer = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/products" component={ProductListingPage} />
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