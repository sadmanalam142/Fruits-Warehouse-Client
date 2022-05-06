import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Collection.css'

const Collection = (props) => {
    const {_id, name, img, description, price, quantity, supplierName} = props.collection;
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='col-12 col-lg-4 text-center rounded fruits-detail'>
            <img className='fruits-img' height={300} src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity} pieces</p>
            <p>{description}</p>
            <h6>Seller: {supplierName}</h6>
            <button onClick={() => handleNavigate(_id)} className='rounded update-btn bg-warning d-block w-50 mx-auto'>Update</button>
        </div>
    );
};

export default Collection;