import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <p className='text-center'><small>copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> {year}</small></p>
        </div>
    );
};

export default Footer;