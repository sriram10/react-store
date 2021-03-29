import React from "react";
import { Badge } from "react-bootstrap";

class CartBadge extends React.Component {
  render() {
    return <Badge variant="light">{this.props.count}</Badge>;
  }
}

export default CartBadge;