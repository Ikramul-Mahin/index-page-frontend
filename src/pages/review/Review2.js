import React from 'react';
import alea from '../../image/alea.jpeg'

const Review2 = () => {
    return (
        <div className='bg-slate-50 mx-24 mt-10'>
            <div className='flex drop-shadow-xl bg-white p-10'  >
                <div className='mr-8'  >
                    <img className='rounded-full w-80 h-32' src={alea} alt="" />
                </div>
                <div>
                    <i></i>
                    <p className='text-lg' >"Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!"</p>
                    <h1 className='font-bold text-xl'>Alaa Khaled</h1>
                </div>
            </div>
            <div className='text-center '>
                <div className='mt-20 mb-8' >
                    <button class=" py-3 text-white font-bold px-8 text-xl rounded-md bg-violet-500 ">Install For Free</button>
                    <button class="py-2 font-bold px-8 text-xl rounded-md border-4 border-violet-500 text-violet-500 ml-4">BolorForms Premium</button>
                </div>
                <div className='flex justify-between ' >
                    <div>
                        <i></i>
                        <p>Trusted by 50000+ Businesses</p>
                    </div>
                    <div>
                        <i></i>
                        <p>30 Days Money Back Guarantee</p>
                    </div>
                    <div>
                        <i></i>
                        <p>1-1 Zoom & WhatsApp Onboarding</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review2;