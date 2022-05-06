import React, { useEffect, useState } from 'react';
import useCollection from '../../../CustomHooks/UseCollections';
import Collection from '../Collection/Collection';

const Collections = () => {
    const [collections, setCollections] = useCollection();
    return (
        <div id='collection' className='container'>
            <h1 style={{color: 'tomato'}} className='text-center mt-3'>Fruits Collection</h1>
            <div className='row container'>
                {
                    collections.slice(0, 6).map(collection => <Collection
                        key={collection._id}
                        collection={collection}
                    ></Collection>)
                }
            </div>
        </div>
    );
};

export default Collections;