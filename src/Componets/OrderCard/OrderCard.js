import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './OrderCard.css';

const OrderCard = (props) => {
    // console.log(props)
    const{img, name}=props.card;
    
    return (
        <div>
            <div className='order-card-container'>
                <img className='order-card-img' src={img} alt="" />
                <h5>{name}</h5>
                <FontAwesomeIcon className='icon' icon={faTrashCan}></FontAwesomeIcon>
            </div>
           
        </div>
    );
};

export default OrderCard;