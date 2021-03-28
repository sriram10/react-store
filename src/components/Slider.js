import React from 'react';
import './Slider.css';
import image1 from '../assets/sales1.jpg';
import image2 from '../assets/sales2.jpg';
import image3 from '../assets/sales3.jpg';
import image4 from '../assets/sales4.jpg';

class Slider extends React.Component {
    state = { index: 0 };
  
    dotClicked = e => {
      this.setState({ index: parseInt(e.target.dataset.index, 10) });
    };
  
    render() {
      return (
        <div className="slider-container">
          <div
            className="slider-innerContainer"
            style={{ left: -100 * this.state.index + "%" }}>
            {this.props.children.map((child, index) =>
              <div key={index}>{child}</div>)}
          </div>
          <div className="slider-dots">
            {this.props.children.map((child, index) =>
              <div key={index} data-index={index} onClick={this.dotClicked}>
                {index === this.state.index ? "◉" : "◌"}
              </div>
            )}
          </div>
        </div>
      );
    }
  }

  class Slide extends React.Component {
    render() {
      return (
        <div>
          <h1>Simple slider react</h1>
          <Slider>
            <div><img src={image1} alt="Slide1" /></div>
            <div><img src={image2} alt="Slide2" /></div>
            <div><img src={image3} alt="Slide3" /></div>
            <div><img src={image4} alt="Slide4" /></div>
          </Slider>
        </div>
      );
    }
  }

export default Slide;
