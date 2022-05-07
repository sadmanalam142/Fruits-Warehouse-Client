import React from 'react';
import './Collection.css'

const Collection = (props) => {
    const { name, img, description, price, quantity, supplierName } = props.collection;

    return (
        <div className='col-12 col-lg-4 text-center rounded fruits-detail'>
            <img className='fruits-img' height={300} src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity} pieces</p>
            <p>{description}</p>
            <h6>Seller: {supplierName}</h6>
            {props.children}
        </div>
    );
};

export default Collection;