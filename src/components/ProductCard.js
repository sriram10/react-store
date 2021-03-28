import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductCard = (t
//   {
//   id,
//   name,
//   image,
//   price,
//   onClick,
//   onAdd2Cart,
// }
) => {
  return (
    <Card style={{ minWidth: '260px' }} onClick={t.onClick}>
      <Card.Body>
        <div className="product-card-image" style={{ backgroundImage: `url(${t.image})` }} />
        <Card.Title>{t.name}</Card.Title>
        <h4>{t.price}</h4>
        <Button variant="primary" onClick={t.onAdd2Cart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;