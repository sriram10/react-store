import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import RoutesContainer from './components/RoutesContainer';
import PageTitle from './components/PageTitle';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <PageTitle name="Store" />
      <Header />
      <Container className="top-margin">
        <RoutesContainer />
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
