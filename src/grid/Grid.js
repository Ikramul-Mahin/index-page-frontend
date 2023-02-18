import React from 'react';
import { BsCheck } from "react-icons/bs";
const Grid = () => {
    return (
        <div className='grid grid-cols-2 gap-8 mt-20 mx-20'>
            <div className=''>
                <div className='flex'>
                    <div className=' bg-gradient-to-r py-2 px-20 from-white to-amber-100 mx-6 rounded-md' >

                    </div>
                    <div className='flex justify-center align-middle  bg-gradient-to-r py-2 px-16 text-pink-600 from-purple-100 to-pink-200 rounded-md'>

                        <p>
                            <BsCheck></BsCheck>
                        </p>
                        <p>Approval Management</p>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className=' bg-gradient-to-r py-2 px-14 from-white to-green-200 mx-6 rounded-md' >

                    </div>
                    <div className='flex justify-center align-middle bg-gradient-to-r py-2 px-16 text-blue-600 from-purple-100 to-blue-100 rounded-md'>
                        <BsCheck></BsCheck>
                        <p>Sales Quotation Apporval</p>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className=' bg-gradient-to-r py-2 px-20 from-white to-violet-200 mx-6 rounded-md' >

                    </div>
                    <div className='flex justify-center align-middle bg-gradient-to-r py-2 px-16 text-orange-400 from-purple-100 to-amber-50 rounded-md'>
                        <BsCheck></BsCheck>
                        <p>Registration Management</p>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className=' bg-gradient-to-r py-2 px-20 from-white to-red-100 mx-6 rounded-md' >

                    </div>
                    <div className='flex justify-center align-middle bg-gradient-to-r py-2 px-16 text-green-500 from-white to-green-300 rounded-md'>
                        <BsCheck></BsCheck>
                        <p>Performance Appraisal Request</p>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className=' bg-gradient-to-r py-2 px-10 from-white to-red-100 mx-6 rounded-md' >

                    </div>

                    <div className='flex justify-center align-middle bg-gradient-to-r py-2 px-16 text-pink-700 from-pink-400 to-green-200 rounded-md'>
                        <BsCheck></BsCheck>
                        <p>Expense Approval</p>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className=' bg-gradient-to-r py-2 px-12 from-white to-blue-100 mx-6 rounded-md' >

                    </div>
                    <div className='flex justify-center align-middle bg-gradient-to-r py-2 px-16 text-orange-600 from-orange-100 to-orange-200 rounded-md'>
                        <BsCheck></BsCheck>
                        <p>Customer Request Approval</p>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className=' bg-gradient-to-r py-2 px-8 from-white to-red-100 mx-6 rounded-md' >

                    </div>
                    <div className='flex justify-center align-middle bg-gradient-to-r py-2 px-16 text-amber-500 from-amber-100 to-amber-300 rounded-md'>
                        <BsCheck></BsCheck>
                        <p>Performance Appraisal Request</p>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className=' bg-gradient-to-r py-2 px-20 from-white to-red-300 mx-6 rounded-md' >

                    </div>
                    <div className='flex justify-center align-middle bg-gradient-to-r py-2 px-16 text-cyan-700 from-cyan-100 to-cyan-300 rounded-md'>
                        <BsCheck></BsCheck>
                        <p>IT Change Management</p>
                    </div>
                </div>

            </div>

            <div className='text-left mt-10'>
                <h1 className='text-4xl my-3 font-bold'>
                    An End-To-End Workflow Platform For All Your Business Needs
                </h1>
                <p className='text-lg'>1000+ companies-from Startups to Fortune 500s use BoloForms Approvals to build and manage business processes across departments.</p>
                <button class="my-16 py-3 text-white font-bold px-8 text-xl rounded-md bg-violet-500 ">BoloForms Premium</button>

            </div>
        </div >
    );
};

export default Grid;