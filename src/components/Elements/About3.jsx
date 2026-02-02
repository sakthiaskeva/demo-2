import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';

var bgimg1 = require('./../../images/video-bg.jpg');

class About3 extends React.Component {
    render() {
        return (
            <>
                <div className={`${this.props.bgcolor} section-full mobile-page-padding p-t80 p-b50`}>
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about-home-3 m-b30 bg-white">
                                        <h3 className="m-t0 m-b20 sx-tilte">A small efficient interior design team.</h3>
                                        <p>Inteshape is a team of highly talented, experienced, and award-winning architects and designers. Our company has been the leading provider of architecture services to clients throughout the USA since 1999. We pay attention to every demand...</p>
                                        <ul className="list-angle-right anchor-line">
                                            <li><NavLink to="/about-1">We provide a architectural 3D modeling services.</NavLink></li>
                                            <li><NavLink to="/about-1">Our specialists are ready to consult you on any topic.</NavLink></li>
                                            <li><NavLink to="/about-1">We develop and implement better interior design.</NavLink></li>
                                            <li><NavLink to="/about-1">We provide high-quality interior services for clients.</NavLink></li>
                                        </ul>
                                        <div className="text-left">
                                            <NavLink to="/about-1" className="site-button btn-half"><span>Read More</span></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="video-section-full-v2">
                                        <div className="video-section-full bg-no-repeat bg-cover bg-center overlay-wraper m-b30" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                            <div className="overlay-main bg-black opacity-04" />
                                            <div className="video-section-inner">
                                                <div className="video-section-content">
                                                    <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink>

                                                    <div className="video-section-bottom">
                                                        <h3 className="sx-title text-white">25 Years<br />Experience</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://vimeo.com/34741214' />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About3;