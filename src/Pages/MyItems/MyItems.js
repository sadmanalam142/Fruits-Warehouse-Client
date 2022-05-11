import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Collection from '../Home/Collection/Collection';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/fruit?email=${email}`;
            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItems(data);
            }
            catch(error){
                console.log(error);
                if(error.message === "Request failed with status code 403" || error.message === "Request failed with status code 401"){
                    signOut(auth)
                    navigate('/login')
                }
            }
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