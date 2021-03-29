import React from 'react'
import Image from 'react-bootstrap/Image'
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { productList } from '../assets/productsList';
import ProductCategoryList from '../components/ProductCategoryList';

class HomePage extends React.Component{
    state = {
        data: []
      }
      componentDidMount() {
        this.setState({
          data: productList.data,
        })
      }
      onProductClick = (product = {}) => {
        const { history} = this.props;
        history.push(`/products/${product.name}/${product.id}`)
      }
    
      onAdd2Cart = (product = {}) => {
        alert(product?.id)
      }
    render(){
        return(
        <>
            <Image src="./banner.jpeg" alt="Image" fluid />
           
            <Container>
            <h2>FEATURED</h2>
             <Row>
                {
                    this.state.data
                    .slice(3,6)
                    .map((product) => {
                    return (
                        <Col key={product.id}>
                        <ProductCard
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            price={product.price ? product.price : product.variants?.[0].price}
                            onClick={(e) => {
                            this.onProductClick(product)
                            }}
                            onAdd2Cart={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            this.onAdd2Cart(product)
                            }}
                        />
                        </Col>
                    )
                    })
                }
             </Row>
            </Container>
            <ProductCategoryList />
        </>
        )
    }
}
export default HomePage;