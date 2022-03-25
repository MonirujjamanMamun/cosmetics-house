import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {
    console.log(props.product);
    const{name, img, balance} = props.product;
    return (
        <div className='produc-container'>
            <img src={img} alt="product-img" />
            <h4>Name : {name} </h4>
            <p>Price : {balance}</p>
            <button className='card-btn'>
                <p>Add to card</p>
            </button>
        </div>
    );
};

export default SingleProduct;