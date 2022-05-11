import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../Firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `https://protected-forest-05796.herokuapp.com/fruits`;
        fetch (url, {
            method: "POST",
            headers: {
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            alert('Item Added')
        })
    }
    return (
        <div>
            <h1 className='text-center'>Add Item</h1>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-2 rounded' type="email" {...register("email")} placeholder="Your email" value={user?.email} required />

                <input className='my-2 rounded' type="text" {...register("name")} placeholder="Name" required />

                <input className='my-2 rounded' type="number" {...register("price")} placeholder="Price" required />

                <textarea className='my-2 rounded' type="text" {...register("description")} placeholder="Description" required />

                <input className='my-2 rounded' type="number" {...register("quantity")} placeholder="Quantity" required />

                <input className='my-2 rounded' type="text" {...register("supplierName")} placeholder="Supplier Name" required />

                <input className='my-2 rounded' type="text" {...register("img")} placeholder="Photo Url" required />

                <input className='d-block w-50 mx-auto rounded bg-success' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;