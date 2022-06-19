import React from 'react';
import { Accordion } from 'react-bootstrap';
import QuestionAns from './QuestionAns';
const questionAndAns=[
    {
        id:1,question:'Why you chose me?',
        ans:'Programming is my Passion. I can work more than 10 hours a day'
    },
    {
        id:2,question:'Can I solve your problem?',
        ans:'Yes, I have a strong concept react'
    },
    {
        id:3,question:'am I comunicative person?',
        ans:'Yes , I have a good communication skill'
    },
    {
        id:4,question:'Can I work with a team?',
        ans:'I am able to work as a team member'
    },
]

const AboutAccordion = () => {
    return (
        <>
        <h5 className='text-center text-primary mb-3 mt-5'>Ask Something</h5>
        <div className='container mb-3 w-75 shadow'>

            <Accordion defaultActiveKey="0" flush>
            {questionAndAns?.map(faq=><QuestionAns key={faq.id} faq={faq}/>)}
            </Accordion>
        </div>
        </>
    );
};

export default AboutAccordion;