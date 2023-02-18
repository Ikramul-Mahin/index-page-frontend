import React from 'react';
import center from '../image/center-logo.svg'
import { BiNotepad } from 'react-icons//bi';

const CenterLogo = () => {
    return (
        <div className='border-2 rounded-md mx-20 '>
            <div className='text-center mt-7'>
                <h1 className='text-4xl font-bold'>Fully Automated Workflows</h1>
                <p className='text-lg'>No more painful manual approval management and wasting countless hours.</p>
            </div>

            <div className='grid grid-cols-3 mt-8 text-center my-10'>
                <div className='bg-gradient-to-r text-slate-300 from-purple-100 to-pink-300 rounded-lg py-8'>
                    <div className='flex align-middle text-gray-600 py-2 border-2 px-16 bg-zinc-100 mx-8 my-4'>
                        <BiNotepad></BiNotepad>
                        <p>Purchase Order</p>
                    </div>
                    <div className='flex align-middle text-gray-600 py-2 border-2 px-16 bg-zinc-100 mx-8 my-4'>
                        <BiNotepad></BiNotepad>
                        <p>Leave Application</p>
                    </div>
                    <div className='flex align-middle text-gray-600 py-2 border-2 px-16 bg-zinc-100 mx-8 my-4'>
                        <BiNotepad></BiNotepad>
                        <p>Fulfilment</p>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <img className='w-32' src={center} alt="" />
                </div>

                <div className='bg-gradient-to-r text-slate-300 from-purple-100 to-gray-300 rounded-lg py-8'>
                    <div className='flex align-middle text-gray-600 py-2 border-2 px-16 bg-zinc-100 mx-8 my-4'>
                        <BiNotepad></BiNotepad>
                        <p>Approved</p>
                    </div>
                    <div className='flex align-middle text-gray-600 py-2 border-2 px-16 bg-zinc-100 mx-8 my-4'>
                        <BiNotepad></BiNotepad>
                        <p>Reject</p>
                    </div>
                    <div className='flex align-middle text-gray-600 py-2 border-2 px-16 bg-zinc-100 mx-8 my-4'>
                        <BiNotepad></BiNotepad>
                        <p>SendPdf</p>
                    </div>
                </div>

            </div>
            <p className='text-xl my-4 text-center'>BoloForms workflows acts as a glue holding together all your approval processes.</p>

        </div>
    );
};

export default CenterLogo;