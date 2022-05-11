import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCollection from '../../CustomHooks/UseCollections';
import Collection from '../Home/Collection/Collection';

const ManageItems = () => {
    const [collections, setCollections] = useCollection();
    const navigate = useNavigate();

    const handleAddNavigate = () => {
        navigate('/addItems')
    }

    const handleUpdateNavigate = (id) => {
        navigate(`/inventory/${id}`)
    }

    const handleDelete = id => {
        const process = window.confirm('Are you sure?');
        if (process) {
            const url = `https://protected-forest-05796.herokuapp.com/fruit/${id}`;
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
                            <button style={{ height: '30px' }} onClick={() => handleDelete(collection._id)} className='rounded update-btn bg-danger d-block w-25 mx-auto'>Delete</button>

                            <button style={{ height: '30px' }} onClick={() => handleUpdateNavigate(collection._id)} className='rounded update-btn bg-warning d-block w-25 mx-auto ms-2 me-2'>Update</button>

                            <button style={{ height: '30px' }} onClick={handleAddNavigate} className='rounded update-btn bg-success d-block w-50 mx-auto'>Add New Item</button>
                        </div>
                    </Collection>)
                }
            </div>
        </div>
    );
};

export default ManageItems;