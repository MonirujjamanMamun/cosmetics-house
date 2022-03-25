import React from 'react';
import './SingleProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const SingleProduct = (props) => {
    console.log(props.product);
    const{name, img, balance} = props.product;
    return (
        <div className='produc-container'>
            <img src={img} alt="product-img" />
            <h4>Name : {name} </h4>
            <p>Price : {balance}</p>
            <button className='card-btn'>
                <p className='btn-text'>Add to card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default SingleProduct;