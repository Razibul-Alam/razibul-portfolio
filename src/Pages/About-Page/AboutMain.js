import React from 'react';
import AboutAccordion from './AboutAccordion';
import AboutInfo from './AboutInfo';

const AboutMain = () => {
    return (
        <div className='bg-dark'>
        <div className='row'>  
            <AboutInfo/>   
        <AboutAccordion/>    
        </div>
        </div>
    );
};

export default AboutMain;