import React from 'react';
import {serviceData} from './ServiceData';
import {Row} from 'react-bootstrap'
import SingleService from './SingleService';
console.log(serviceData)

const Services = () => {
    return (
        <>
        <div className='my-5' id='service'>
        <h2 className='text-center text-light'>What I Provide</h2>
        <hr className='m-auto text-light w-25'/>
        </div>
        <div className='row g-4 bg-transparent'>
            {serviceData.map(service=><SingleService service={service}/>)}
            </div>
            </>
    );
};

export default Services;