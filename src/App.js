import './App.css';

import {
  BrowserRouter,
  Link
} from "react-router-dom";
import RoutesContainer from './components/RoutesContainer';
import PageTitle from './components/PageTitle';
import GoBackButton from './components/GoBackButton';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
    <GoBackButton />
      <PageTitle name="Store" />
      <div class="nav-bar"> 
        <ul className="navigation-bar">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>    
        <ul className="navigation-bar2">
          <li><Link to="/contact-us">contact-us</Link></li>
          <li><Link to="/login">Sign in</Link></li>
          <li><Link to="/register">Sign up</Link></li>
        </ul>

        </div>
      <RoutesContainer />
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;
