import React, {useState} from 'react';
import { Card, CardColumns, Button, Container, Row, Col } from 'react-bootstrap';
import { productList } from '../assets/productsList';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FeatureProducts = () => {

    const [data, setData] = useState(productList.data);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <Container className="feature-prod-section">
                <Row>
                    <Col>
                        <h2 className="text-center">Feature Products</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        >
                        {data.filter(data => data.isFeature == "1").map((item,i) => 
                            <div key={item.id}>
                                <Card>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>{item.shortDesc}</Card.Text>
                                        <Card.Text>{item.price}</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )}         
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FeatureProducts;