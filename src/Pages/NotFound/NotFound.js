import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <h1 style={{color: 'tomato'}} className='w-100'>This page is not available</h1>
            <p className='text-danger fw-bolder'>404 NOT FOUND</p>
        </div>
    );
};

export default NotFound;