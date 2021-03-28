import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { productList } from '../assets/productsList';
import { Link, Route, useRouteMatch } from "react-router-dom";
class ProductDetailsPage extends Component {
    state = {
        data: [],
        variantsPrice: '',
      }
      componentDidMount() {
        this.setState({
          data: productList.data,
          variantsPrice: '',
        })
      }

      onProductVariant = (productVar = {}) => {
          console.log(productVar);
          this.setState({
            variantsPrice:productVar
          })
      }
render(){
    const productId  = this.props.match.params;
    console.log(productId);
    var result = this.state.data.filter(user => user.id === productId.product);
    console.log(this.state.data);

    this.state.data.forEach(item => {

        if(item.id == productId.id ){
          result.push(item);
        }
    })
  
  return(
   <Container>
      <div className="app">
        {
          
          result.map(opt =>(
  
            <div className="details" key={opt.id}>
              <div className="big-img">
              <img src={opt.image} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{opt.name}</h2>

                  <span>${this.state.variantsPrice ? this.state.variantsPrice : opt.variants?.[0].price}</span>
                </div>

{opt.variants.map((item,index )=> {

console.log(item);
 return (
     <div className="variant">

 <button className="cart size" onClick={(e) => {this.onProductVariant(item.price)  }}>{item.size?item.size:item.storage}</button>
</div>
 )
})}
                <p>{opt.description}</p>
                <p>{opt.content}</p>

                {/* <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} /> */}
                <button className="cart" >Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>

   </Container>
  );
}
}   
export default ProductDetailsPage;