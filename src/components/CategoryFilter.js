import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';

const CategoryFilter = ({ data, selectedCategories=[], onChange }) => {
  return (
    <div>
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
    </div>
  )
}

export default CategoryFilter;