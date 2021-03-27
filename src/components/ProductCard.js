import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductCard = ({
  id,
  name,
  image,
  price,
  onClick,
  onAdd2Cart,
}) => {
  return (
    <Card style={{ minWidth: '260px' }} onClick={onClick}>
      <Card.Body>
        <div className="product-card-image" style={{ backgroundImage: `url(${image})` }} />
        <Card.Title>{name}</Card.Title>
        <h4>{price}</h4>
        <Button variant="primary" onClick={onAdd2Cart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;