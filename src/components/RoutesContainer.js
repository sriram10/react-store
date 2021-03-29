import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Carouselpage from '../pages/Carouselpage';
import FaqPage from '../pages/FaqPage';
import FormValidation from '../pages/FormValidation';
import Login from '../pages/LoginForm';
import ProductListingPage from '../pages/ProductListingPage';
import TabbedProduct from '../pages/TabbedProduct';
import PageTitle from './PageTitle';


const RoutesContainer = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route exact path="/about" render={() => <h1>About</h1>} />
      <Route exact path="/faq" component={FaqPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/FormValidation" component={FormValidation} />
      <Route exact path="/Carouselpage" component={Carouselpage} />
      <Route exact path="/TabbedProduct" component={TabbedProduct} />
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