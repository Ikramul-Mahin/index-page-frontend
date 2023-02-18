import React from 'react';
import ramna from '../../image/raman.jpeg'
import jhon from '../../image/jhon.jpeg'
const Review4 = () => {
    return (
        <div className='bg-slate-50 mx-24'>
            <div className='flex drop-shadow-xl bg-white p-10 my-20'  >
                <div className='mr-8'  >
                    <img className='rounded-full w-72 h-20' src={ramna} alt="" />
                </div>
                <div>
                    <i></i>
                    <p className='text-lg' >"I recently started using Boloforms for my Google Forms and it has been an absolute game-changer. The software is intuitive and user friendly, so I was able to set up my forms quickly & easily. It also provides powerful analytics to understand and act on the data collected from my forms in real-time. Overall, it's been a great experience using Boloforms and I highly recommend it!"</p>
                    <h1 className='font-bold text-xl'>Raman</h1>
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


            <div className='flex drop-shadow-xl bg-white p-10 my-20'  >
                <div className='mr-8'  >
                    <img className='rounded-full w-72 h-20' src={jhon} alt="" />
                </div>
                <div>
                    <i></i>
                    <p className='text-lg' >"Customer support is super awesome, Great add on for our team! This helps our task management must easier. I can easily keep track of my member's request and work progress. The approval process is smooth and extremely quick. I highly recommend this addon especially for small business like mine."</p>
                    <h1 className='font-bold text-xl'>Jhon M</h1>
                </div>
            </div>
        </div>
    );
};

export default Review4;