import './App.css';
import ProductListingPage from './pages/ProductListingPage';
<<<<<<< HEAD
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>        
      </Container>
      <Container>
        <Row>
          <Col><Footer /></Col>
        </Row>        
      </Container>
    </div>
=======
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RoutesContainer from './components/RoutesContainer';
import PageTitle from './components/PageTitle';
import GoBackButton from './components/GoBackButton';


function App() {
  return (
    <BrowserRouter>
      <PageTitle name="Store" />
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
        <GoBackButton />
        {/* <ProductListingPage /> */}
      </div>
      <RoutesContainer />
    </BrowserRouter>
>>>>>>> a04b5427da7d12f3f72445a9ebda4db20ba0704c
  );
}

export default App;
