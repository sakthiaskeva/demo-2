import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

var bnr = require('./../../images/background/f-bg.jpg');

class Footer2 extends React.Component {
    render() {

        return (
            <>
                <footer className="site-footer footer-large footer-dark footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper bg-cover" style={{backgroundImage:"url(" + bnr + ")"}}>
                        <div className="overlay-main sx-bg-secondry opacity-08" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}>
                                                <img src={require('./../../images/logo-light.png')} alt="Inteshape" />
                                            </NavLink>
                                        </div>
                                        <p>7X Theme is a html template for interior and architecture purpose. Today we can tell you, thanks to your passion.</p>
                                        <ul className="social-icons  sx-social-links">
                                            <li><a href="https://www.behance.net/" className="fa fa-behance" target="_blank"></a></li>
                                            <li><a href="https://www.facebook.com" className="fa fa-facebook" target="_blank"></a></li>
                                            <li><a href="https://twitter.com" className="fa fa-twitter" target="_blank"></a></li>
                                            <li><a href="https://www.instagram.com" className="fa fa-instagram" target="_blank"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget recent-posts-entry-date">
                                        <h5 className="widget-title">Resent Post</h5>
                                        <div className="widget-post-bx">
                                            <div className="widget-post clearfix">
                                                <div className="sx-post-date text-center text-uppercase text-white">
                                                    <strong className="p-date">15</strong>
                                                    <span className="p-month">Sep</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="sx-post-info">
                                                    <div className="sx-post-header">
                                                        <h6 className="post-title"><NavLink to={"/blog-single"}>On these beams, we’re.</NavLink></h6>
                                                    </div>
                                                    <div className="sx-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="sx-post-date text-center text-uppercase text-white">
                                                    <strong className="p-date">17</strong>
                                                    <span className="p-month">Sep</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="sx-post-info">
                                                    <div className="sx-post-header">
                                                        <h6 className="post-title"><NavLink to={"/blog-single"}>We’ll be a sensation for</NavLink></h6>
                                                    </div>
                                                    <div className="sx-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 29</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-post clearfix">
                                                <div className="sx-post-date text-center text-uppercase text-white">
                                                    <strong className="p-date">18</strong>
                                                    <span className="p-month">Sep</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="sx-post-info">
                                                    <div className="sx-post-header">
                                                        <h6 className="post-title"><NavLink to={"/blog-single"}>We’ll be a sensation for</NavLink></h6>
                                                    </div>
                                                    <div className="sx-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 29</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">Useful links</h5>
                                        <ul>
                                            <li><NavLink to={"/about-1"}>About</NavLink></li>
                                            <li><NavLink to={"/services-1"}>Services</NavLink></li>
                                            <li><NavLink to={"/project-grid-3-columns"}>Projects</NavLink></li>
                                            <li><NavLink to={"/blog-grid"}>Blog</NavLink></li>
                                            <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* CONTACT US */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h5 className="widget-title">Contact Us</h5>
                                        <ul className="widget_address">
                                            <li>756 Livingston Street, Brooklyn, NY 11201, United State</li>
                                            <li>7xthemedemo@gmail.com</li>
                                            <li>(+298) 012-3456-789</li>
                                            <li>(+298) 146-6543-480</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="call-to-action-wrap">
                                <div className="row">
                                    <div className="col-lg-7 col-md-6">
                                        <div className="call-to-action-left">
                                            <h5 className="text-uppercase m-b10 m-t0">Subscribe to our newsletter!</h5>
                                            <span>Never Miss Anything From 7xtheme By Signing Up To Our Newsletter.</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6">
                                        <div className="call-to-action-right">
                                            <div className="widget_newsletter">
                                                <div className="newsletter-bx">
                                                    <form role="search" method="post" action="">
                                                        <div className="input-group">
                                                            <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                            <span className="input-group-btn">
                                                                <button type="button" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                                            </span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="sx-footer-bot-left">
                                    <span className="copyrights-text">© 2019 Your Company. Designed By 7xtheme.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher />
            </>
        );
    };
};

export default Footer2;