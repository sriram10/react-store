import logo from './logo.svg';
import './App.css';
import ProductListingPage from './pages/ProductListingPage';
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>        
      </Container>
      <Container>
        <Row>
          <Col><Footer /></Col>
        </Row>        
      </Container>
    </div>
  );
}

export default App;
