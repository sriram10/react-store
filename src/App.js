import './App.css';
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
      {/* <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to={{
            pathname: "/faq",
            search: "?id=234",
            state: { user: { name: "Test" } }
          }}>FAQ</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
        <GoBackButton />
        <ProductListingPage />
      </div> */}
      <RoutesContainer />
    </BrowserRouter>
  );
}

export default App;

/**
 * Day 4
 * 
 * Redux - Core (redux)
 * Redux with React - react-redux
 * Maintaining a global state in React Apps 
 * Persisting things in Store - redux-persist
 * Authentication flow
 */
