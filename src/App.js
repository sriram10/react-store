import './App.css';
import ProductListingPage from './pages/ProductListingPage';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RoutesContainer from './components/RoutesContainer';
import PageTitle from './components/PageTitle';
import GoBackButton from './components/GoBackButton';
import Header from  './components/Header'
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <PageTitle name="Store" />
      <div className="topnav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/ContactPage">Contact Us</Link></li>
          <li><Link to="./login"><img src="./user.svg"  width="20px" height="20px" style={{ marginLeft: '540px'}}/></Link></li>
          <li><Link><img src="./magnifying-glass.svg"  width="20px" height="20px"/></Link></li>
        </ul>
        <Breadcrumbs/>
        {/* <ProductListingPage /> */}
      </div>
      <RoutesContainer />
      <GoBackButton />
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
