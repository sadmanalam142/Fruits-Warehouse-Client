import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCollection from '../../../CustomHooks/UseCollections';
import Collection from '../Collection/Collection';

const Collections = () => {
    const [collections, setCollections] = useCollection();
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div id='collection' className='container'>
            <h1 style={{ color: 'tomato' }} className='text-center mt-3'>Fruits Collection</h1>
            <div className='row container'>
                {
                    collections.slice(0, 6).map(collection => <Collection
                        key={collection._id}
                        collection={collection}
                    >
                        <button onClick={() => handleNavigate(collection._id)} className='rounded update-btn bg-warning d-block w-50 mx-auto'>Update</button>
                    </Collection>)
                }
            </div>
        </div>
    );
};

export default Collections;