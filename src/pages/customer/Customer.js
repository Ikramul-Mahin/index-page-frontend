import React from 'react';
import customer from '../../image/cover.svg'
const Customer = () => {
    return (
        <div className='my-6' >
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Customers Who Are Trusting Us!</h1>
                <p className='text-xl'>Customers’ Testimonials</p>
            </div>
            <div>
                <img src={customer} alt="" />
            </div>

        </div>
    );
};

export default Customer;