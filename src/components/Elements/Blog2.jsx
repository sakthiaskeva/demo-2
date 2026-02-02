import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactPlayer from 'react-player';

var bgimg1 = require('./../../images/background/cross-line2.png');

class Blog2 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            margin: 30,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items: 1,
            dots: false,
            animateOut: 'fadeOut',
        };
        return (
            <>
                <div className="section-full mobile-page-padding bg-gray p-t80 p-b50">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-center">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                    <h3 className="sep-line-one">Blog</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    {/* COLUMNS 2 */}
                                    <div className="blog-post blog-lg date-style-3 block-shadow">
                                        <div className="sx-post-media sx-img-effect zoom-slow">
                                            <div className="sx-thum-bx sx-img-overlay1 sx-img-effect yt-thum-box">
                                                <img src="https://img.youtube.com/vi/Oy2QIiSQT2U/0.jpg" alt="" />
                                                <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal2">
                                                    <i className="icon fa fa-play" />
                                                    <span className="ripple" />
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="sx-post-info  bg-white">
                                            <div className="sx-post-meta ">
                                                <ul>
                                                    <li className="post-date"> <strong>20 </strong> <span>Sep 2022</span> </li>
                                                    <li className="post-author"><NavLink to={"/blog-single"}>By <span>John</span></NavLink> </li>
                                                    <li className="post-comment"><NavLink to={"/blog-single"}>0 Comments</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={"/blog-single"}>You don’t get framed by the Decor.</NavLink></h4>
                                            </div>
                                            <div className="sx-post-text">
                                                <p>Asperiores, tenetur, blanditiis, quaerat pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis</p>
                                            </div>
                                            <div className="clearfix">
                                                <div className="sx-post-readmore pull-left">
                                                    <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                                </div>
                                                <div className="widget_social_inks pull-right">
                                                    <ul className="social-icons social-square social-dark m-b0">
                                                        <li><a href="https://www.facebook.com" target="_blank" className="fa fa-facebook" /></li>
                                                        <li><a href="https://twitter.com" target="_blank" className="fa fa-twitter" /></li>
                                                        <li><a href="https://rss.com" target="_blank" className="fa fa-rss" /></li>
                                                        <li><a href="https://www.youtube.com" target="_blank" className="fa fa-youtube" /></li>
                                                        <li><a href="https://www.instagram.com" target="_blank" className="fa fa-instagram" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    {/* COLUMNS 3 */}
                                    <div className="blog-post blog-lg date-style-3 block-shadow">
                                        <div className="sx-post-media">
                                            {/*Fade slider*/}
                                            <OwlCarousel className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right" {...options}>
                                                <div className="item">
                                                    <div className="aon-thum-bx">
                                                        <img src={require('./../../images/blog/default/thum1.jpg')} alt="" />
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="aon-thum-bx">
                                                        <img src={require('./../../images/blog/default/thum2.jpg')} alt="" />
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="aon-thum-bx">
                                                        <img src={require('./../../images/blog/default/thum3.jpg')} alt="" />
                                                    </div>
                                                </div>

                                            </OwlCarousel>
                                            {/*fade slider END*/}
                                        </div>
                                        <div className="sx-post-info  bg-white">
                                            <div className="sx-post-meta ">
                                                <ul>
                                                    <li className="post-date"> <strong>20 </strong> <span>Sep 2022</span> </li>
                                                    <li className="post-author"><NavLink to={"/blog-single"}>By <span>John</span></NavLink> </li>
                                                    <li className="post-comment"><NavLink to={"/blog-single"}>0 Comments</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={"/blog-single"}>When it comes to your house</NavLink></h4>
                                            </div>
                                            <div className="sx-post-text">
                                                <p>Asperiores, tenetur, blanditiis, quaerat pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis</p>
                                            </div>
                                            <div className="clearfix">
                                                <div className="sx-post-readmore pull-left">
                                                    <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                                </div>
                                                <div className="widget_social_inks pull-right">
                                                    <ul className="social-icons social-square social-dark m-b0">
                                                        <li><NavLink to={{ pathname: "https://www.facebook.com" }} target="_blank" className="fa fa-facebook" /></li>
                                                        <li><NavLink to={{ pathname: "https://twitter.com" }} target="_blank" className="fa fa-twitter" /></li>
                                                        <li><NavLink to={{ pathname: "https://rss.com" }} target="_blank" className="fa fa-rss" /></li>
                                                        <li><NavLink to={{ pathname: "https://www.youtube.com" }} target="_blank" className="fa fa-youtube" /></li>
                                                        <li><NavLink to={{ pathname: "https://www.instagram.com" }} target="_blank" className="fa fa-instagram" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        <strong>Blog</strong>
                    </div>
                </div>
                <div className="modal fade" id="myModal2" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://www.youtube.com/watch?v=Oy2QIiSQT2U' />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Blog2;