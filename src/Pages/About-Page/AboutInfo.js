import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'


const AboutInfo = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center bg-dark text-light mb-5 info">
            <div className="col-md-5 offset-md-1">
                <h1 className='text-light'>I am a Junior <br/>Full Stack Developer</h1>
                <p className="text-light">
                I am comfortable with react. I builted about 5 medium react applications.Also more than 10 small react applications. I have a good communication skill. I can easily commuinicate with the team member.I did not work as a team member , but I am interested about that.Also i am confident , I will be able to co-operate to my team members. Programming is my passion.I practice about 10 hours a day.I think it will help me to become skilled.Also i will become a profssional web developer in next 3 years.
                </p>
                <Link to ="/appointment"><button className="btn btn-danger my-3 ">Hire Me</button></Link>
            </div>
            <div className="col-md-6">
               <div className='d-flex justify-content-center'> <img src='https://i.ibb.co/6ZtqR8Z/Rzibul.jpg' alt="" className="w-100 rounded"/></div>
            </div>
        </main>
    );
};

export default AboutInfo;