import React from 'react';
import depak from '../../image/depak.jpeg'

const Review3 = () => {
    return (
        <div className='bg-slate-50 mx-24 mt-10'>
            <div className='flex drop-shadow-xl bg-white p-10'  >
                <div className='mr-8'  >
                    <img className='rounded-full w-80 h-32' src={depak} alt="" />
                </div>
                <div>
                    <i></i>
                    <p className='text-lg' >"Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!"</p>
                    <h1 className='font-bold text-xl'>Alaa Khaled</h1>
                </div>
            </div>

        </div>
    );
};

export default Review3;