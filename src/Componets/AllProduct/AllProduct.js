import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProduct.css';

const AllProduct = () => {
    const [products, setProducts] = useState([])

    useEffect( () =>{
        fetch('fackData.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    } ,[])
    return (
        <div className='products-container'>
            <div className='products-section'>
                {
                    products.map(product => <SingleProduct key={product.id} product ={product} ></SingleProduct> )
                }
            </div>
            <div className="order-section">
                <h1>Order Section</h1>
            </div>
        </div>
    );
};

export default AllProduct;