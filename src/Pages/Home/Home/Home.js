import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../../Banner/Banner';
import Collections from '../Collections/Collections';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collections></Collections>
            <button className='bg-warning rounded d-block w-25 mx-auto'><Link className='text-decoration-none text-black' to="/manage">Manage Inventories</Link></button>
            <Footer></Footer>
        </div>
    );
};

export default Home;