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
import { Container } from 'react-bootstrap';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <PageTitle name="Store" />
      <Container>
        <Header />
        <GoBackButton />
        {/* <ProductListingPage /> */}
      </Container>
      <RoutesContainer />
    </BrowserRouter>
  );
}

export default App;
