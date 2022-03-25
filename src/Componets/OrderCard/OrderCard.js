import React from 'react';
import './OrderCard.css';

const OrderCard = (props) => {
    console.log(props)
    const{img, name, id}=props.card;
    
    return (
        <div>
            <div className='order-card-container'>
                <img className='order-card-img' src={img} alt="" />
                <h5>{name}</h5>
            </div>
           
        </div>
    );
};

export default OrderCard;