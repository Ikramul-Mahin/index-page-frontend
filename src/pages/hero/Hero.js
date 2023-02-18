import React from 'react';

const Hero = () => {
    return (
        <div className='flex justify-between align-middle mx-20 my-32'>
            <div className='text-left'>
                <h1 className='text-4xl font-bold'>Transform Google Forms Into
                    <br /> Interactive Workflows</h1>
                <p className='text-xl my-8 w-full'>BoloForms is a Google Forms add on that allows you to <br /> add conditional logic to your forms. With BoloForms, <br /> you can create interactive workflows, approval flows & automate processes.</p>
                <div>
                    <a className="btn-secondary border-none font-bold text-xl rounded bg-violet-600 px-12 py-3 ">Install For Free</a>
                </div>
            </div>
            <div>
                <iframe className='rounded-lg border-4 border-purple-400' width="560" height="315" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Hero;