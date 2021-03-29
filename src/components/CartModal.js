import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import { TYPE_REMOVE_ITEM } from '../store/actionTypes';

const {
  Header: ModalHeader, Body: ModalBody, Footer: ModalFooter
} = Modal;

const CartModal = (props) => {
  const {
    className,
    cartItems,
    isOpen,
    toggleModal,
  } = props;
  return (
    <div className="cart-modal">
      <Modal.Dialog show={isOpen} onHide={toggleModal}>
        <ModalHeader toggle={toggleModal}>Your Shopping Cart</ModalHeader>
        <ModalBody>
          <Table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.map(product => (
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.price ? product.price : product.variants?.[0].price}</td>
                    <td>{product.count}</td>
                    <td>{product.count * (product.price ? product.price : product.variants?.[0].price)}</td>
                    <td><Button variant="danger" onClick={() => { props.removeItem(product.id)  }}>REMOVE</Button></td>
                  </tr>
                ))
              }
            </tbody>
          </Table>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal.Dialog>
    </div>
  );
}

const mapStateToProps = ({ cartItems }) => {
  return { cartItems }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch({ type: TYPE_REMOVE_ITEM, data: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);