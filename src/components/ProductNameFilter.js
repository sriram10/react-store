import { Container, Form } from "react-bootstrap";

const ProductNameFilter = ({ searchText, onSearchChange }) => (
  <Container>
    <h4>Filter</h4>
    <Form.Group>
      <Form.Control type="text" placeholder="Product name" value={searchText} onChange={onSearchChange} />
    </Form.Group>
  </Container>
);

export default ProductNameFilter;