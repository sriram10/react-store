import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productList } from '../assets/productsList';
import CategoryFilter from '../components/CategoryFilter';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { TYPE_ADD_ITEM, TYPE_PRODUCTS } from '../store/actionTypes';

/**
 * Page contains
 *  - ProductCard
 *  - Filter (Category, Price)
 * 
 * Purpose
 *  - get all the pro
 */

class ProductListingPage extends Component {
  state = {
    selectedCategories: []
  }

  componentDidMount() {
    this.props.initProducts(productList.data)
    // this.setState({
    //   data: productList.data,
    //   selectedCategories: [],
    // })
  }

  onProductClick = (product = {}) => {
    const { history, match, location } = this.props;
    history.push(`/products/${product.name}/${product.id}`)
  }

  onAdd2Cart = (product = {}) => {
    this.props.addItem2Cart(product)
  }

  getCategoriesList = () => {
    const result = [];
    this.props.products.forEach(item => {
      if(!result.includes(item.category))
        result.push(item.category)
    })

    return result;
  }

  onCategoryClick = (category) => {
    this.setState(prevState => {
      const isPresent = prevState.selectedCategories.includes(category);
      let result = [];
      if(isPresent) {
        result = prevState.selectedCategories.filter(item => item !== category);
      } else {
        result = prevState.selectedCategories.concat(category)
      }

      return {
        selectedCategories: result
      }
    })
  }

  render() {
    
    return (
      <Layout title="Products">
        <Container>
          <Row>
            <Col>
              <CategoryFilter
                data={this.getCategoriesList()}
                selectedCategories={this.state.selectedCategories}
                onChange={this.onCategoryClick}
                />
            </Col>
          </Row>
          <Row>
            {
              Array.isArray(this.props.products) &&
              this.props.products
                .filter(product => this.state.selectedCategories.length ? this.state.selectedCategories.includes(product.category) : true)
                .map(product => {
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
      </Layout>
    )
  }
}

const mapStateToProps = ({ products }) => {
  return {
    products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem2Cart: (prod) => {
      dispatch({ type: TYPE_ADD_ITEM, data: prod })
    },
    initProducts: (prodList) => {
      dispatch({ type: TYPE_PRODUCTS, data: prodList })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingPage)