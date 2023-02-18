import React from 'react';
import { AiFillStar } from 'react-icons/ai'
import naym from '../../image/naym.jpeg'
const Review5 = () => {
    return (
        <div className='text-center bg-violet-600 container mx-auto py-52 my-10'>
            <p className='text-white text-xl font-bold'>“ Boloforms has completely revolutionized our form approval process. It is incredibly easy to use and simple to set up, saving us countless hours of work. We can now easily manage all of our form approvals, assign tasks to different team members and track progress all in one place. Boloforms is a must-have for any business looking for an efficient Form Approval Workflow Software! "</p>
            <div className='flex justify-center text-2xl  text-yellow-500 my-4'>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
            </div>
            <div className='flex justify-center align-baseline'>
                <div>
                    <img className='rounded-full w-20 h-20 border-2 border-white' src={naym} alt="" />
                </div>
                <div className='text-white mt-3 mx-2'>
                    <h1 className='font-bold'>Patrick Nyama,</h1>
                    <p>Edmonton CA</p>
                </div>
            </div>
        </div>
    );
};

export default Review5;