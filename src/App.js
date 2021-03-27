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
  );
}

export default App;
