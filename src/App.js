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
import {Navbar, Nav} from 'react-bootstrap';
import CartBadge from './components/Badge';


function App() {
  return (
    <BrowserRouter>
      <PageTitle name="Store" />
      <div>
        <Navbar bg="primary" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/faq">FAQ</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
      <CartBadge count={localStorage.getItem('cartCount')}/> 
    </Nav>
  </Navbar>
        <GoBackButton />
        {/* <ProductListingPage /> */}
      </div>
      <RoutesContainer />
    </BrowserRouter>
  );
}

export default App;
