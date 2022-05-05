import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../../Banner/Banner';
import Collections from '../Collections/Collections';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collections></Collections>
            <Footer></Footer>
        </div>
    );
};

export default Home;