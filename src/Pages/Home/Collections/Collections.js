import React, { useEffect, useState } from 'react';
import Collection from '../Collection/Collection';

const Collections = () => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/fruits`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const sixItems = data.slice(0, 6)
                setCollections(sixItems)
            })
    }, [])
    return (
        <div id='collection'>
            <h1 className='text-center mt-3'>Fruits Collection</h1>
            <div className='row container'>
                {
                    collections.map(collection => <Collection
                        key={collection._id}
                        collection={collection}
                    ></Collection>)
                }
            </div>
        </div>
    );
};

export default Collections;