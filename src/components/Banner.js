import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default class Banner extends Component {
    render() {
        return (
            <div className="carousel1">
                <Carousel>
                    <Carousel.Item>
                        <img
                            src="iPhone6.jpg"
                            alt="First slide"
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="MacBookAir.jpg"
                            alt="Second slide"
                        />

                        
                    </Carousel.Item>
                
                </Carousel><br></br>
            </div>
        )
    }
}
