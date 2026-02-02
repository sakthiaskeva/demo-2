import React from 'react';
import { NavLink } from 'react-router-dom';

var bgimg1 = require('./../../images/background/bg5.jpg');

class About2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b80 bg-gray">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-12 ">
                                        <div className="home-2-about bg-bottom-left bg-no-repeat bg-cover" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-12">
                                        <div className="about-home-2">
                                            <h3 className="m-t0 sx-tilte">Our floors are designed to last a lifetime</h3>
                                            <p>Since 1999, we have been providing great flooring solutions and customer service for homeowners and commercial clients.
                                                among flooring materials, none is more elegant and luxurious than natural stone.</p>
                                            <div className="text-left">
                                            <NavLink to={"/about-2"} className="site-button-link">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default About2;