import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import About from '../pages/AboutPage';
import Contact from '../pages/ContactPage';
import FaqPage from '../pages/FaqPage';
import Home from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import PageTitle from './PageTitle';


const RoutesContainer = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/products" component={ProductListingPage} />
      <Route exact path="/contact" component={Contact} />
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