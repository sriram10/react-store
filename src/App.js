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
import Slider from './components/Slider';


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
      <Slider>
        <div><h2>Slide1</h2>Slide 1 is plain</div>
        <div><h2>Slide2</h2>Slide 2 is plain</div>
        <div><h2>Slide3</h2>Slide 3 is plain</div>
        <div><h2>Slide4</h2>Slide 4 is plain</div>
      </Slider>
      <RoutesContainer />
    </BrowserRouter>
  );
}

export default App;
