import React from 'react';
import hover1 from '../../image/hover1.svg'
import hover2 from '../../image/hover2.svg'
import hover3 from '../../image/hover3.svg'
const Hover = () => {
    return (
        <div className='my-20 container mx-auto text-center'>
            <div className='text-center'>
                <h1 className='font=bold text-4xl'>How does BoloForms work?</h1>
                <p className='mt-2'>Set up your first workflow in just 3 easy steps.</p>
            </div>
            <div className='flex justify-between mt-6' >
                <div>
                    <img className='hover:-translate-y-6 ease-out duration-300' src={hover1} alt="" />
                    <h2 className='font-bold text-4xl mt-4' >Step 1:</h2>
                    <p className='mt-1' >Choose a template or add questions to create your Google Form</p>
                </div>
                <div>
                    <img className='hover:-translate-y-6 ease-out duration-300' src={hover2} alt="" />
                    <h2 className='font-bold text-4xl mt-4' >Step 1:</h2>
                    <p className='mt-1'>Choose a template or add questions to create your Google Form</p>
                </div>
                <div>
                    <img className='hover:-translate-y-6 ease-out duration-300' src={hover3} alt="" />
                    <h2 className='font-bold text-4xl mt-4' >Step 1:</h2>
                    <p className='mt-1'>Choose a template or add questions to create your Google Form</p>
                </div>
            </div>
        </div>
    );
};

export default Hover;