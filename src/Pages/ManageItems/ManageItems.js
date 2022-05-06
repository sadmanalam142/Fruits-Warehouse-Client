import React from 'react';
import useCollection from '../../CustomHooks/UseCollections';
import useItems from '../../CustomHooks/UseItems';
import Collection from '../Home/Collection/Collection';

const ManageItems = () => {
    const [collections] = useCollection();
    return (
        <div>
            <h1 className='text-center'>Manage Inventory</h1>
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

export default ManageItems;