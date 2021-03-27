import React from 'react';
import { Container, Form, ListGroup } from 'react-bootstrap';

const CategoryFilter = ({ data, selectedCategories=[], onChange }) => {
  return (
    <Container>
      <h4>Category</h4>
      <ListGroup>
      {
        Array.isArray(data) && data.map((item) => (
          <ListGroup.Item key={item} onClick={() => onChange(item)}>
            <Form.Check name="category" label={item} checked={selectedCategories.includes(item)} />
          </ListGroup.Item>
        ))
      }
      </ListGroup>
    </Container>
  )
}

export default CategoryFilter;