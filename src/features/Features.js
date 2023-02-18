import React from 'react';
import icon1 from '../image/icon1.svg'
import icon2 from '../image/icon2.svg'
import icon3 from '../image/icon3.svg'
import icon4 from '../image/icon4.svg'
import icon5 from '../image/icon5.svg'
import icon6 from '../image/icon6.svg'
import icon7 from '../image/icon7.svg'
import icon8 from '../image/icon8.svg'
import icon9 from '../image/icon9.svg'
const Features = () => {
    return (
        <div className='mx-20 '>
            <div className='text-center my-12'>
                <h2 className='text-5xl font-bold'>Features</h2>
                <p className='text-xl' >Everything that your organisation will love, & more.</p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='my-4'>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl' >Get started in less than 5 minutes.</h1>
                        <p className='text-xl' >Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.</p>
                    </div>
                </div>
                <div className='my-4'>
                    <div>
                        <img src={icon2} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl'>Multi-level workflows</h1>
                        <p className='text-xl'>To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes.</p>
                    </div>
                </div>
                <div className='my-4'>
                    <div>
                        <img src={icon3} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl'>Dynamic Reciepients</h1>
                        <p className='text-xl'>Approvers can be selected based on the answers to a form response or entered manually by the requestor</p>
                    </div>
                </div>
                <div className='my-4'>
                    <div>
                        <img src={icon4} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl'>Role Based Workflows</h1>
                        <p className='text-xl'>Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only.</p>
                    </div>
                </div>
                <div className='my-4'>
                    <div>
                        <img src={icon5} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl'>Conditional Logic</h1>
                        <p className='text-xl'>To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them.</p>
                    </div>
                </div>
                <div className='my-4'>
                    <div>
                        <img src={icon6} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl'>One-click Approvals</h1>
                        <p className='text-xl'>Notification emails are sent to users and can be approved with a single click.</p>
                    </div>
                </div>
                <div className='my-4'>
                    <div>
                        <img src={icon7} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl'>Responsive design</h1>
                        <p className='text-xl'>It is designed to be mobile-first, and seamlessly works on desktop and tablet as well.</p>
                    </div>
                </div>
                <div className='my-4'>
                    <div>
                        <img src={icon8} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl'>Enterprise grade security</h1>
                        <p className='text-xl'>Majority of data stored in your spreadsheet. This ensures you have the complete control of your data with end to end encryption.</p>
                    </div>
                </div>
                <div className='my-4'>
                    <div>
                        <img src={icon9} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl'>Custom Dashboard</h1>
                        <p className='text-xl'>Track approvals of various forms from a single place! See the approval process for each request in real-time</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;