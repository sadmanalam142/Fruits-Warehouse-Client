import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCollection from '../../CustomHooks/UseCollections';
import useItems from '../../CustomHooks/UseItems';
import Collection from '../Home/Collection/Collection';

const ManageItems = () => {
    const [collections] = useCollection();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/addItems')
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
                            <button className='rounded update-btn bg-danger d-block w-50 mx-auto'>Delete</button>
                            <button onClick={handleNavigate} className='rounded update-btn bg-success d-block w-50 mx-auto ms-2'>AddItem</button>
                        </div>
                    </Collection>)
                }
            </div>
        </div>
    );
};

export default ManageItems;