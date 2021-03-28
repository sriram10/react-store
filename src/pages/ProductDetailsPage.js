import React, { Component } from 'react';
import { productList } from '../assets/productsList';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';


export class ProductDetailsPage extends Component {
    state = {
        data: [],
        currentVarinat: productList.data[0].variants[0].price,
        variantToCart: productList.data[0],
        cart: [
            {
                data: []
            }
        ]

      }
      componentDidMount() {
        this.setState({
            data: productList.data
        })
      }
    onSizeChanged = (price) => {
        console.log('price', price)
        this.setState({
            currentVarinat:price
        })
    }
    addToCart = (variantId, productId) => {
        // const product = this.state.data.filter(product => product.id !== productId);
        // console.log(product)
        // product.data.filter()
            // if (product.variants.id === productId) {
            //     console.log(product.id)
            //     const currentValue = product.variants.filter(variant=>variant.id !== variantId);
                
            //         this.setState({ cart : currentValue }) 
            // }
    }
    render() {
        return (
            <Container fluid>{
                this.state.data.map(product => {
                    if (product.id === Number(this.props.match.params.id)) {
                        return (
                            <Row >
                                <Col>
                                    <Image alt={product.name} src={product.image} />
                                </Col>
                                <Col>
                                    <h1 className="product-title">{product.name}</h1>
                                    <p className="category-type">Category: {product.category}</p>
                                    
                                    <p className="variant-type">Type: {product.variantType}</p>
                                    <p className="price">RS: {this.state.currentVarinat}</p>
                                    <Row className="variant-btn-container">
                                        {
                                            product.variants.map(variant => {
                                            return (
                                                <Button className="variant-btn" variant="primary" key={variant.id} onClick={()=> this.onSizeChanged(variant.price)}>
                                                    {variant[product.variantType]}
                                                </Button>
                                            )
                                        })
                                    }</Row>
                                    <p className="description">A remarkable shoe that's naturally soft, cozy all over, and fits your every move.</p>
                        
                                    <Button className="add-to-cart-btn" variant="primary" size="lg" block onClick={() => this.addToCart('1', product.id)}>
                                        Add To Cart
                                    </Button>
                                    <p class="btn-bottom-text"><span>Standard delivery</span> 2-5 working days</p>
                                    <p class="btn-bottom-text"><span>Next day delivery</span> order before 2pm ($5.79)</p>
                                </Col>
                            </Row>
                        )
                    }else{return null}
                })
            }
            </Container >
        )
    }
}

export default ProductDetailsPage;