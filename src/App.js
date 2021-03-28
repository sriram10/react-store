import './App.css';
import ProductListingPage from './pages/ProductListingPage';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RoutesContainer from './components/RoutesContainer';


function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/listing">Products</Link></li>
          <li><Link to="/listing/mobile">Mobile</Link></li>
          <li><Link to="/sign-up">Register</Link></li>
        </ul>
        {/* <ProductListingPage /> */}
      </div>
      <RoutesContainer />
    </BrowserRouter>
  );
}

export default App;
