import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import lap1 from './lap1.jpg';
import lap2 from './lap2.jpg';
import lap3 from './lap3.jpg';
import phone1 from './phone1.jpg';
import phone2 from './phone2.jpg';
import phone3 from './phone3.jpg';
import buds1 from './buds1.jpg';
import buds2 from './buds2.jpg';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Exclusive Products On Market</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img className="lapimg" src={lap1} alt="lapone" /></Item>
          <Item><img className="lapimg" src={lap2} alt="lapone" /></Item>
          <Item><img className="lapimg" src={lap3} alt="lapone" /></Item>
          <Item><img className="lapimg" src={phone1} alt="lapone" /></Item>
          <Item><img className="lapimg" src={phone2} alt="lapone" /></Item>
          <Item><img className="lapimg" src={phone3} alt="lapone" /></Item>
          <Item><img className="lapimg" src={buds1} alt="lapone" /></Item>
          <Item><img className="lapimg" src={buds2} alt="lapone" /></Item>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
