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

import Footer from './components/Footer';

import Header from './components/Header'
import TopMenu from './components/TopMenu';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <TopMenu />
      <RoutesContainer />
      <Footer/>
    </BrowserRouter>
    
    
  );
}

export default App;
