import React from 'react';

const Loading = () => {
    return (
        <div style={{marginTop: '200px'}} className='d-flex justify-content-center'>
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;