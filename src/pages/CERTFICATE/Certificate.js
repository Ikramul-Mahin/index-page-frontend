import React from 'react';
import certi from '../../image/silgala.png'
import sign from '../../image/sign.png'
const Certificate = () => {
    return (
        <div className='mx-20 rounded-md shadow-md my-8 bg-slate-50 p-6'>
            <div className='flex'>
                <div>
                    <img className='w-56' src={certi} alt="" />
                </div>
                <div className='text-lg font-medium mx-10'>
                    <h2>MY 100% NO-RISK DOUBLE-GUARANTEE</h2>

                    <br />
                    <h3 className='font-bold'>If you don’t like BoloForms over the next 30 days, I will happily refund 100% of your purchase. No questions asked.</h3>
                    <br />

                    <h4>Here's why I'm offering this -</h4>
                    <br />

                    <p>
                        I have seen the power of automating your business workflows. Take some time out of your busy schedule today and see what all things can be automated in your workflows.
                    </p>
                    <br />

                    <p>
                        You will find that most of your time is going in doing things that could be done better by automating. You just have to give it a shot!
                    </p>

                    <br />
                    <p>
                        Start with automating small workflow and then gradually you will love it!!
                    </p>

                    <br />

                    <p>Thank you, and I hope we'll get the opportunity to be a part of your growth journey soon!</p>

                    <br />
                    <div>
                        <img className='w-52' src={sign} alt="" />
                    </div>

                    <br />
                    <p>Paresh Deshmukh</p>
                    <p>Co-Founder BoloForms</p>
                </div>
            </div>

        </div>
    );
};

export default Certificate;