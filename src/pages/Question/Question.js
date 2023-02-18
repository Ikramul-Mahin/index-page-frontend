import React from 'react';

const Question = () => {
    return (
        <div className='mx-20 my-10'>
            <h2 className='text-4xl font-bold text-center my-10'>
                Frequently Asked Questions
            </h2>
            <div className='grid grid-cols-2 gap-6'>
                <div>
                    <div tabIndex={0} className="collapse collapse-arrow border my-2 border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is the difference between email and request?
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What will happen if I run out of email quota?
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What will happen to my data if I cancel my subscription?
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            I receive a permission error when I try to setup the Add-on
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Can I use the addon if my organisation does not use Google accounts?
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How can I contact support?
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How many recipients can I add?
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>

                </div>
                <div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Why does the approval workflow sometimes work smoothly and other times throws errors?
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How to calculate the number of requests based on email quota?
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Why the addon requires access to my Google Drive?                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How does approval workflow feature work?
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Does recipient need Google Account?
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Can Form Respondent or Recipients edit a form submission?
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;