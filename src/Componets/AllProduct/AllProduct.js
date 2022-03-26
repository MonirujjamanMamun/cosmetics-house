import React, { useEffect, useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProduct.css';

const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const [cards, setCard]= useState([]);
    const [showProduct, setShowProduct] = useState([])
  

    
    const addToCard = (produc)=>{
        const newCard = [...cards, produc]
        setCard(newCard);
    }


    const resetAll = ()=>{
        setCard([]);
    }

    
    const oneProduct = () =>{
        const getOneProduct = Math.floor(Math.random()* cards.length);
        setShowProduct(cards[getOneProduct]);
        console.log(showProduct.name)
        alert('Your Product is : ' + showProduct.name)
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
                {
                    cards.map(card =><OrderCard card={card} key={card.id}></OrderCard> )
                }
                <button onClick={oneProduct} className='select-product-btn'>
                     <p>Select One Product</p>
                </button> 
                     <br />
                <button onClick={resetAll} className='rest-btn'>
                    <p>Reset</p>
                </button>
            </div>
        </div>
    );
};

export default AllProduct;