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
import Header from './components/Header';
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
    

      <TopMenu />
      
      <RoutesContainer />
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
