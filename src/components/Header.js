import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import CartModal from './CartModal';

class Header extends React.Component {

  state = {
    showCartModal: false
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showCartModal: !prevState.showCartModal
    }))
  }

  render() {
    return (
      <header>
        <Container style={{padding: '10px 0'}}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/#home">React Store</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/faq">FAQs</Link>
              <Link to="/products">Products</Link>
              <Link to="/products/category/mobile">Mobile</Link>
            </Nav>
            <Form inline style={{paddingRight: '40px'}}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
            <Button variant="outline-info" onClick={this.toggleModal}>View Cart {this.props.totalItems}</Button>
          </Navbar>
          <CartModal isOpen={this.state.showCartModal} toggleModal={this.toggleModal} />
        </Container>
      </header>
    )
  }
}

const mapStateToProps = stateFromStore => {
  return {
    totalItems: stateFromStore.totalItems
  }
}

export default connect(mapStateToProps)(Header);