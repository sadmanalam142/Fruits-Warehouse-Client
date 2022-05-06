import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3>Q1. What is the difference between javascript and nodejs?</h3>
            <div className='row container'>
                <div className='col-12 col-lg-6'>
                    <h6 className='text-center'>Javascript</h6>
                    <p>A. Javascript is a programming language that runs in any browser.</p>
                    <p>B. It use on the clint-side</p>
                    <p>C. Javascript is used in frontend development.</p>
                    <p>D. Some of the javascript frameworks are RamdaJS, TypedJS, etc. </p>
                </div>
                <div className='col-12 col-lg-6'>
                    <h6 className='text-center'>Node Js</h6>
                    <p>A. Whereas nodejs is a running environment for JavaScript programming language and it requires a library to run with javascript programming language better.</p>
                    <p>B. It use on the clint-side</p>
                    <p>C. Nodejs is used in server-side development.</p>
                    <p>D. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</p>
                </div>
            </div>
            <h3>Q.2 What is the differences between sql and nosql databases?</h3>
            <div className='container row'>
                <div className='col-12 col-lg-6'>
                    <h6 className='text-center'>SQL</h6>
                    <p>A. SQL is Relational Database Management System (RDBMS).</p>
                    <p>B. These databases have fixed or static or predefined schema.</p>
                    <p>C. These databases are not suited for hierarchical data storage.</p>
                    <p>D. These databases are best suited for complex queries.</p>
                </div>
                <div className='col-12 col-lg-6'>
                    <h6 className='text-center'>NO SQL</h6>
                    <p>A. noSQL is a non-relational or distributed database system.</p>
                    <p>B. They have dynamic schema.</p>
                    <p>C.These databases are best suited for hierarchical data storage.</p>
                    <p>D. These databases are not so good for complex queries.</p>
                </div>
            </div>
            <h3>Q.3  What is the purpose of jwt and how does it work?</h3>
            <p>A. JWT or JSON Web Token, is an open standard which is use to secure data from both clint and server-side. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. A JWT is a string made up of three parts, separated by dots, and serialized using base64. Once decoded, we get two JSON strings these are 1. the header and the payload and 2. the signature. By this we can identify who the user is asking for data. In short, JWTs are used as a secure way to authenticate users and share information.</p>
        </div>
    );
};

export default Blogs;