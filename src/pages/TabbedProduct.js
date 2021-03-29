import { useState } from "react";
import tshirt from './tshirt.png';
import shirt from './shirt.jpg';
import sports from './sports.webp';

function TabbedProduct() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <h2 className="recomend">Recommended Brands</h2>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            T-Shirt
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Shirts
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Sports Wear
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}>
            <img className="shirtimg" src={tshirt} alt="tshirt"></img>
            <p><strong>Description</strong><br/>
            A classic tee for a timeless look, at a great price.
            Feel like a million bucks without breaking the bank.<br/><br/>
            <strong>Attributes</strong><br/>
            Material: Cotton
            </p>
          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}>
            <img className="shirtimg" src={shirt} alt="tshirt"></img>
            <p><strong>Description</strong><br/>
            Crocodile Garments originally sold dress shirts before expanding
            to become the largest chain garment store in Hong Kong.<br/><br/>
            <strong>Attributes</strong><br/>
            Material: Cotton
            </p>
          </div>

          <div
            className={toggleState === 3 ? "content  active-content" : "content"}>
            <img className="shirtimg" src={sports} alt="tshirt"></img>
            <p><strong>Description</strong><br/>
            Sportswear based in Richmond, California that manufactures and distributes apparel,
            accessories and equipment primarily for the high performance<br/><br/>
            <strong>Attributes</strong><br/>
            Material: Cotton
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabbedProduct;
