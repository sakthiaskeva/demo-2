import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/1.jpg');

class TeamDetail extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Single Team Detail" pagename="Team Detail" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />
                    {/* ABOUT TEAM MEMBER SECTION START */}
                    <div className="section-full p-tb80 bg-white mobile-page-padding">
                        <div className="container">
                            <div className="section-content ">
                                <div className="about-team-member text-black">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-5 col-sm-12">
                                            <div className="about-single-team-info-left p-a30 sx-bg-secondry">
                                                <div className="profile-image">
                                                    <img src={require('./../../images/our-team5/1.jpg')} alt="" />
                                                </div>
                                                <div className="text-black bg-white p-a30">
                                                    <h4 className="m-t0">Johnny Smith</h4>
                                                    <h5 className="m-b0">Architect</h5>
                                                </div>
                                                <div className="team-single-social m-t30 text-white">
                                                    <ul className="m-b0 list-unstyled">
                                                        <li><span><i className="fa fa-envelope" /></span><span>7xteam@gmail.com</span></li>
                                                        <li><span><i className="fa fa-phone" /></span><span>(+298) 012-3456-789</span></li>
                                                        <li><span><i className="fa fa-map-marker" /></span><span>756 Livingston Street, Brooklyn, NY 11201, US</span></li>
                                                        <li><span><i className="fa fa-globe" /></span><span>www.7xtheme-site.com</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-7 col-sm-12">
                                            <div className="about-single-team-info">
                                                <div className="our-exp p-b30">
                                                    <div className="sx-box">
                                                        <h3 className="m-t0 m-b30">We Have<span className="sx-text-primary"> 15 Years</span> Experience in Architecture &amp; Interior Design.</h3>
                                                    </div>
                                                    <span className="progressText "><b>Architecher</b></span>
                                                    <div className="progress m-b30 m-t10">
                                                        <div className="progress-bar sx-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>95%</div>
                                                    </div>
                                                    <span className="progressText "><b>Construction</b></span>
                                                    <div className="progress m-b30 m-t10">
                                                        <div className="progress-bar sx-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                                                    </div>
                                                    <span className="progressText "><b>Interior</b></span>
                                                    <div className="progress m-b30 m-t10">
                                                        <div className="progress-bar sx-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65%</div>
                                                    </div>
                                                </div>
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="sx-separator-outer separator-left">
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                                            <h3 className="sep-line-one">Our Experience</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="experience">
                                                    <div className="sx-box our-story">
                                                        <div className="mt-media our-story-info d-flex justify-content-start">
                                                            <div className="our-story-time"><span className="date">01</span><span className="month">Jan</span></div>
                                                            <h4 className="text-uppercase our-story-year">2019</h4>
                                                        </div>
                                                        <div className="our-story-detail">
                                                            <h4 className="m-b20">Global Kitchen and Bath</h4>
                                                            <p>A multitask profession which creates any land in beautiful creation</p>
                                                        </div>
                                                    </div>
                                                    <div className="sx-box our-story">
                                                        <div className="mt-media our-story-info d-flex justify-content-start">
                                                            <div className="our-story-time"><span className="date">20</span><span className="month">Nov</span></div>
                                                            <h4 className="text-uppercase our-story-year">2017</h4>
                                                        </div>
                                                        <div className="our-story-detail">
                                                            <h4 className="m-b20"> Kitchen &amp; Bath Gallery</h4>
                                                            <p>Give your consent, we design a perfect bend choose the style.</p>
                                                        </div>
                                                    </div>
                                                    <div className="sx-box our-story">
                                                        <div className="mt-media our-story-info d-flex justify-content-start">
                                                            <div className="our-story-time"><span className="date">28</span><span className="month">Dec</span></div>
                                                            <h4 className="text-uppercase our-story-year">2016</h4>
                                                        </div>
                                                        <div className="our-story-detail">
                                                            <h4 className="m-b20">International Fine Art</h4>
                                                            <p>Every work has its professional which can perform their task with all the best.</p>
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
                    {/* ABOUT TEAM MEMBER SECTION END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default TeamDetail;