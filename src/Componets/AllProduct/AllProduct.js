import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProduct.css';

const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard]= useState([]);

    
    const addToCard = (produc)=>{
        const newCard = [...card, produc]
        setCard(newCard);
    }

    useEffect( () =>{
        fetch('fackData.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    } ,[])

    return (
        <div className='products-container'>
            <div className='products-section'>
                {
                    products.map(product => <SingleProduct key={product.id} product ={product} addToCard={addToCard} ></SingleProduct> )
                }
            </div>
            <div className="order-section">
                <h1>Order Section : {setCard.length}</h1>
            </div>
        </div>
    );
};

export default AllProduct;