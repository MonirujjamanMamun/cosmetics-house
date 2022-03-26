import React, { useEffect, useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProduct.css';



const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const [cards, setCard]= useState([]);
    const [showProduct, setShowProduct] = useState('');
    const[show, setShow]= useState({display:'none'});
  
    // add to card handelar 
    const addToCard = (product)=>{
        if(cards.length < 4 ){
            const chakeProduct = cards.find(pd=>pd.id===product.id);
            if(!chakeProduct){
                const newCard = [...cards, product]
                setCard(newCard)
            }else{
                alert('This item added already.')
            }
        }else{
            alert('You Select 4 product already.')
        }        
    }

    // rest all all data handelar 
    const resetAll = ()=>{
        setCard([]);
        setShow({display:'none'})
    }

    const oneProduct = () =>{
        const getOneProduct = Math.floor(Math.random()* cards.length);
        const selectedProduct=cards[getOneProduct];
        setShowProduct(selectedProduct);
        setShow({display:'block'});    
    }

    useEffect( () =>{
        fetch('fackData.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    } ,[])

    return (
        <div className='products-container'>
            {/* all product section  */}
            <div className='products-section'>
                {
                    products.map(product => <SingleProduct key={product.id} product ={product} addToCard={addToCard} ></SingleProduct> )
                }
            </div>

            {/* order section  */}
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

                {/* display one product to click one product handerlar */}
                <div style={show}>
                    <div className='one-product-section'>
                        <img src={showProduct?.img} alt="" />
                        <h4>{showProduct?.name}</h4>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AllProduct;