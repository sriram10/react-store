import React from 'react'

const Banner = (props) => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>IMAX</h1>
                <h2>Experience the Difference</h2>
            </div>
            <img src={props.img} alt={props.alt} />
        </div>
    );
}

export default Banner;