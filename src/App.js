// import logo from './logo.svg';
import './App.css';  
import RouteContainer from './components/RouteContainer';
import { BrowserRouter, Link } from 'react-router-dom';
import PageTitle from './components/PageTitle';

function App() {
  return (
    <BrowserRouter>
    <PageTitle name = "Home" />
      <div className = "hamburger">
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/login">Login</Link></li>
          <li><Link to = "/about">About</Link></li>
          <li><Link to = "/faq">FAQ</Link></li>
          <li><Link to = "/product">Products</Link></li>
          <li><Link to = "/footer">Footer</Link></li>
          <li><Link to = "/slider">carousel</Link></li>
          <li><Link to = "/productpage">Product Page</Link></li>
        </ul>
      </div>
      <RouteContainer />
    </BrowserRouter>
  );
}

export default App;
