import React from 'react';
import star from '../../image/star.png'
import card1 from '../../image/card1.png'
import card2 from '../../image/card2.png'
import card3 from '../../image/card3.png'
import card4 from '../../image/card4.png'
const Award = () => {
    return (
        <div className='my-12 mx-16'>
            <div className='flex justify-center'>
                <img className='w-64' src={star} alt="" />
            </div>
            <div className='text-center my-4'>
                <h1 className='font-bold text-5xl'>Award-winning support.</h1>
                <p className='text-xl'>Best-in-class support. We’re always here to help – here’s how to connect.</p>
            </div>
            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className="card card-compact w-64 bg-base-100 shadow-xl">
                            <figure><img src={card1} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h1 className='text-xl font-bold'>? Whatsapp chat</h1>
                                <p>Ask a question right now.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn w-full hover:bg-violet-600 hover:text-white bg-white border-2 text-violet-600 border-violet-600">Start A Chat</button>
                                </div>
                            </div>
                        </div>

                        <div className="card card-compact w-64 bg-base-100 shadow-xl">
                            <figure><img src={card2} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h1>? Email</h1>
                                <p>Get in touch by email.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn w-full hover:bg-violet-600 hover:text-white bg-white border-2 text-violet-600 border-violet-600">Send A Email</button>
                                </div>
                            </div>
                        </div>

                        <div className="card card-compact w-64 bg-base-100 shadow-xl">
                            <figure><img src={card3} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h1>? Help center</h1>
                                <p>In Depth Guides.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn w-full hover:bg-violet-600 hover:text-white bg-white border-2 text-violet-600 border-violet-600">Read Articles</button>
                                </div>
                            </div>
                        </div>

                        <div className="card card-compact w-64 bg-base-100 shadow-xl">
                            <figure><img src={card4} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h1>? Google Meet</h1>
                                <p>Guided support and Q&A.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn w-full hover:bg-violet-600 hover:text-white bg-white border-2 text-violet-600 border-violet-600">Book a time</button>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;