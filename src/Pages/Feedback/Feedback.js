import React from 'react';
import './Feedback.css';
import {Carousel} from 'react-bootstrap'
const Feedback = () => {
    return (
        <>
      <section className="client-review my-5 p-4 mt-5" data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center ">
                        <h6 className="common-h6">Clients words</h6>
                        <h2 className="common-h2">What my clients say</h2>
                        <p className="common-p">labore et dolore magna aliqua Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Facere praesentium, enim mollitia quis vitae dignissimos.</p>
                    </div>
                </div>
                {/* carousel */}
                <Carousel>
      <Carousel.Item interval={1500}>
      <div className="row">
                    <div className="col-lg-6 mt-4">
                        <div className="client-content">
                            <p className='text-muted fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus possimus harum
                                in ipsum explicabo illo facilis porro rem, labore dolorum hic! Consequuntur amet
                                excepturi, nisi qui magni porro libero vel </p>
                            <h6>R A Raju</h6>
                            <h5>Founder</h5>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="img-fluid">
                            <img className="img-fluid" src="https://templates.envytheme.com/finix/default/assets/img/clients/man.png" alt=""/>
                        </div>
                    </div>
                </div>
        
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <div className="row">
                    <div className="col-lg-6 mt-4">
                        <div className="client-content">
                            <p className='text-muted fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus possimus harum
                                in ipsum explicabo illo facilis porro rem, labore dolorum hic! Consequuntur amet
                                excepturi, nisi qui magni porro libero vel</p>
                            <h6>Mr.XYZ</h6>
                            <h5>Founder</h5>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div className="img-fluid">
                            <img className="img-fluid" src="https://templates.envytheme.com/finix/default/assets/img/clients/man.png" alt=""/>
                        </div>
                    </div>
                </div>
      </Carousel.Item>
    </Carousel>

            </div>

        </section>
        </>
    );
};

export default Feedback;