import React from 'react';
import AboutAccordion from './AboutAccordion';
import AboutInfo from './AboutInfo';

const AboutMain = () => {
    return (
        <div className='container'>
        <div className='row my-5'>  
            <AboutInfo/>   
        <AboutAccordion/>    
        </div>
        </div>
    );
};

export default AboutMain;