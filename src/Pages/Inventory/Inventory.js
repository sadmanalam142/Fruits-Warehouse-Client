import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const quantityRef = useRef();
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        const url = `https://protected-forest-05796.herokuapp.com/fruit/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFruits(data))
    }, [id]);

    const handleDeliver = () => {
        const quantity = fruits.quantity - 1;

        const updatedQuantity = { quantity };
        const url = `http://localhost:5000/fruit/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Item Delivered");
            })
    }

    const handleAddQuantity = () => {
        const quantity = parseInt(fruits.quantity) + parseInt(quantityRef.current.value);

        const updatedQuantity = { quantity };
        const url = `https://protected-forest-05796.herokuapp.com/fruit/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Quantity  Added');
                quantityRef.current.value = '';
            })
    }

    return (
        <div className='text-center mt-5'>
            <img height={300} src={fruits.img} alt="" />
            <h3>{fruits.name}</h3>
            <p>Price: ${fruits.price}</p>
            <p>Quantity: {fruits.quantity} pieces</p>
            <p>{fruits.description}</p>
            <h6>Seller: {fruits.supplierName}</h6>

            <button onClick={handleDeliver} className='bg-success rounded'>Delevired</button>

            <div className='my-3'>
                <input ref={quantityRef} type="text" name="number" id="" />
                <br />
                <button onClick={handleAddQuantity} className='bg-success rounded'>Add quantity</button>
            </div>

            <button className='bg-warning rounded d-block w-25 mx-auto'><Link className='text-decoration-none text-black' to="/manage">Manage Inventories</Link></button>
        </div>
    );
};

export default Inventory;