import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItems from '../../CustomHooks/UseItems';

const Inventory = () => {
    const { id } = useParams();
    const [fruits] = useItems(id);

    return (
        <div className='text-center mt-5'>
            <img height={300} src={fruits.img} alt="" />
            <h3>{fruits.name}</h3>
            <p>Price: ${fruits.price}</p>
            <p>Quantity: {fruits.quantity} pieces</p>
            <p>{fruits.description}</p>
            <h6>Seller: {fruits.supplierName}</h6>

            <button className='bg-success rounded'>Delevired</button>

            <div className='my-3'>
                <input type="text" name="number" id="" />
                <br />
                <button className='bg-success rounded'>Add quantity</button>
            </div>

            <button className='bg-warning rounded'><Link className='text-decoration-none text-black' to="/manage">Manage Inventories</Link></button>
        </div>
    );
};

export default Inventory;