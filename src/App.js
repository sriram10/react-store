import './App.css';
import ProductListingPage from './pages/ProductListingPage';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import Banner from './components/Banner'
import RoutesContainer from './components/RoutesContainer';
import Footer from './components/Footer'
import {Container,Row,Col} from 'react-bootstrap'
function App() {
  return (
    <>
    <Header/>
  
    <BrowserRouter>
    
      <div className="thirdHeader">
        <ul>
          <li><Link  to="/"  style={{ textDecoration: 'none' }}>Desktops</Link></li>
          <li><Link  to="/about"  style={{ textDecoration: 'none' }}>Laptops&Notebooks</Link></li>
          <li><Link  to="/faq"  style={{ textDecoration: 'none' }}>Components</Link></li>
          <li><Link  to="/listing"  style={{ textDecoration: 'none' }}>Tablets</Link></li>
          <li><Link to="/listing/mobile"  style={{ textDecoration: 'none' }}>Software</Link></li>
          <li><Link to="/listing/mobile"  style={{ textDecoration: 'none' }}>Phones&PDAs</Link></li>
          <li><Link to="/listing/mobile"  style={{ textDecoration: 'none' }}>Cameras</Link></li>
          <li><Link to="/listing/mobile"  style={{ textDecoration: 'none' }}>Mp3 Players</Link></li>
        </ul>
        <Banner/>
        {/* <ProductListingPage /> */}
      </div>
      
      <RoutesContainer />
    </BrowserRouter>
   
    <Footer/>
    </>
  );
}

export default App;
