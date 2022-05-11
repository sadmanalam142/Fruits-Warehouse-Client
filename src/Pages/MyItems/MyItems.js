import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Collection from '../Home/Collection/Collection';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {

        const getItems = () => {
            const email = user?.email;
            const url = `https://protected-forest-05796.herokuapp.com/fruits?email=${email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setItems(data))
        }
        getItems();
    }, [user])
    return (
        <div>
            <h1 className='text-center'>{items.length > 1 ? 'Your Items' : 'Your Item'}</h1>
            <div className='row'>
                {
                    items.map(collection => <Collection
                        key={collection._id}
                        collection={collection}
                    ></Collection>)
                }
            </div>
        </div>
    );
};

export default MyItems;