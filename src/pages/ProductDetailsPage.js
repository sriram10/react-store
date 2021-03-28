import React from 'react';
import '../App.css'
import { Button } from "react-bootstrap"

class ProductDetailsPage extends React.Component{

    state = {
        product: [
            {
            "id": "1",
            "src": "https://m.media-amazon.com/images/I/91ljGPGHzEL._AC_UL640_FMwebp_QL65_.jpg",
            "title": "Polo",
            "category": "Tshirts",
            "price": 345
            }
        ]
    }
    render() {  
   
        const {product} = this.state;
            // console.log(product);
        return(
            <div className  = "MyApp">
                {
                    product.map(item =>(
                        
                        <div className = "details">
                            <div className = "img-col">
                                <img src = {item.src} alt = "t-shirt" />
                        
                            </div>

                            <div className = "box">
                                Price:<span>${item.price}</span>
                                <div className = "row">
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                            <Button variant="primary" type="submit">
                                Checkout
                             </Button>
                        </div>
                    ))
                }
            </div>
        );
    };
}
export default ProductDetailsPage