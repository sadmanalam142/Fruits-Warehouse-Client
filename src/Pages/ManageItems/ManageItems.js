import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCollection from '../../CustomHooks/UseCollections';
import Collection from '../Home/Collection/Collection';

const ManageItems = () => {
    const [collections, setCollections] = useCollection();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/addItems')
    }

    const handleDelete = id => {
        const process = window.confirm('Are you sure?');
        if (process) {
            const url = `http://localhost:5000/fruit/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = collections.filter(collection => collection._id !== id);
                    setCollections(remaining)
                })
        }
    }

    return (
        <div>
            <h1 className='text-center'>Manage Inventory</h1>
            <div className='row container'>
                {
                    collections.map(collection => <Collection
                        key={collection._id}
                        collection={collection}
                    >
                        <div className='d-flex '>
                            <button onClick={() => handleDelete(collection._id)} className='rounded update-btn bg-danger d-block w-50 mx-auto'>Delete</button>
                            <button onClick={handleNavigate} className='rounded update-btn bg-success d-block w-50 mx-auto ms-2'>AddItem</button>
                        </div>
                    </Collection>)
                }
            </div>
        </div>
    );
};

export default ManageItems;