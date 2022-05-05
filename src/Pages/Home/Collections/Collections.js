import React, { useEffect, useState } from 'react';

const Collections = () => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetch('collection.json')
        .then(res => res.json())
        .then(data => setCollections(data))
    }, [])
    return (
        <div id='collection'>
            <h1 className='text-center mt-5'>Fruits Collection</h1>
        </div>
    );
};

export default Collections;