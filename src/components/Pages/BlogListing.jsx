import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import BlogSidebar from './../Elements/BlogSidebar';
import ReactPlayer from 'react-player';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

var bnrimg = require('./../../images/banner/8.jpg');

class BlogListing extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 1
                }
            }
        };
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Blog List Style" pagename="Blog Listing" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* GALLERY CONTENT START */}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    <div className="news-listing ">
                                        {/* COLUMNS 1 */}
                                        <div className="blog-post blog-lg date-style-3 block-shadow">
                                            <div className="sx-post-info  bg-white">
                                                <div className="sx-post-meta ">
                                                    <ul>
                                                        <li className="post-date"> <strong>20 </strong> <span>Sep 2022</span> </li>
                                                        <li className="post-author"><NavLink to={"/blog-single"}>By <span>John</span></NavLink> </li>
                                                        <li className="post-comment"><NavLink to={"/blog-single"}>0 Comments</NavLink> </li>
                                                    </ul>
                                                </div>
                                                <div className="sx-post-title ">
                                                    <h4 className="post-title"><NavLink to={"/blog-single"}>Creating quality urban lifestyles, building stronger communities.</NavLink></h4>
                                                </div>
                                                <div className="sx-post-text">
                                                    <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="sx-post-readmore pull-left">
                                                        <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                                    </div>
                                                    <div className="widget_social_inks pull-right">
                                                        <ul className="social-icons social-square social-dark m-b0">
                                                            <li><a href="https://www.facebook.com" target="_blank"  rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i><span className="sr-only">Facebook</span></a></li>
                                                            <li><a href="https://twitter.com" target="_blank"  rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a></li>
                                                            <li><a href="https://rss.com" target="_blank"  rel="noreferrer"><i className="fa fa-rss" aria-hidden="true"></i><span className="sr-only">RSS</span></a></li>
                                                            <li><a href="https://www.youtube.com" target="_blank"  rel="noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i><span className="sr-only">YouTube</span></a></li>
                                                            <li><a href="https://www.instagram.com" target="_blank"  rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* COLUMNS 2 */}
                                        <div className="blog-post blog-lg date-style-3 block-shadow">
                                            <div className="sx-post-media sx-img-effect zoom-slow">
                                                <NavLink to={"/blog-single"}><img src={require('./../../images/blog/default/thum1.jpg')} alt="" /></NavLink>
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
                                                    <h4 className="post-title"><NavLink to={"/blog-single"}>Creating quality urban lifestyles, building stronger communities.</NavLink></h4>
                                                </div>
                                                <div className="sx-post-text">
                                                    <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="sx-post-readmore pull-left">
                                                        <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                                    </div>
                                                    <div className="widget_social_inks pull-right">
                                                        <ul className="social-icons social-square social-dark m-b0">
                                                            <li><a href="https://www.facebook.com" target="_blank"  rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i><span className="sr-only">Facebook</span></a></li>
                                                            <li><a href="https://twitter.com" target="_blank"  rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a></li>
                                                            <li><a href="https://rss.com" target="_blank"  rel="noreferrer"><i className="fa fa-rss" aria-hidden="true"></i><span className="sr-only">RSS</span></a></li>
                                                            <li><a href="https://www.youtube.com" target="_blank"  rel="noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i><span className="sr-only">YouTube</span></a></li>
                                                            <li><a href="https://www.instagram.com" target="_blank"  rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                                    <h4 className="post-title"><NavLink to={"/blog-single"}>When it comes to your house, don’t mess with the trust the best</NavLink></h4>
                                                </div>
                                                <div className="sx-post-text">
                                                    <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="sx-post-readmore pull-left">
                                                        <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                                    </div>
                                                    <div className="widget_social_inks pull-right">
                                                        <ul className="social-icons social-square social-dark m-b0">
                                                            <li><a href="https://www.facebook.com" target="_blank"  rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i><span className="sr-only">Facebook</span></a></li>
                                                            <li><a href="https://twitter.com" target="_blank"  rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a></li>
                                                            <li><a href="https://rss.com" target="_blank"  rel="noreferrer"><i className="fa fa-rss" aria-hidden="true"></i><span className="sr-only">RSS</span></a></li>
                                                            <li><a href="https://www.youtube.com" target="_blank"  rel="noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i><span className="sr-only">YouTube</span></a></li>
                                                            <li><a href="https://www.instagram.com" target="_blank"  rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* COLUMNS 4 */}
                                        <div className="blog-post blog-lg date-style-3 block-shadow">
                                            <div className="sx-post-media sx-img-effect zoom-slow">
                                                <iframe title="Making your vision" width={560} height={315} src="https://www.youtube.com/embed/7n6cpvIFdfY" />
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
                                                    <h4 className="post-title"><NavLink to={"/blog-single"}>Making your vision come true, that is what we do.</NavLink></h4>
                                                </div>
                                                <div className="sx-post-text">
                                                    <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="sx-post-readmore pull-left">
                                                        <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                                    </div>
                                                    <div className="widget_social_inks pull-right">
                                                        <ul className="social-icons social-square social-dark m-b0">
                                                            <li><a href="https://www.facebook.com" target="_blank"  rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i><span className="sr-only">Facebook</span></a></li>
                                                            <li><a href="https://twitter.com" target="_blank"  rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a></li>
                                                            <li><a href="https://rss.com" target="_blank"  rel="noreferrer"><i className="fa fa-rss" aria-hidden="true"></i><span className="sr-only">RSS</span></a></li>
                                                            <li><a href="https://www.youtube.com" target="_blank"  rel="noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i><span className="sr-only">YouTube</span></a></li>
                                                            <li><a href="https://www.instagram.com" target="_blank"  rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* COLUMNS 5 */}
                                        <div className="blog-post blog-lg date-style-3 block-shadow">
                                            <div className="sx-post-media sx-img-effect zoom-slow">
                                                <iframe title="Putting a plan" src="https://player.vimeo.com/video/2215313" width={560} height={315} />
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
                                                    <h4 className="post-title"><NavLink to={"/blog-single"}>Putting a plan to action, to assure your satisfaction!</NavLink></h4>
                                                </div>
                                                <div className="sx-post-text">
                                                    <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="sx-post-readmore pull-left">
                                                        <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                                    </div>
                                                    <div className="widget_social_inks pull-right">
                                                        <ul className="social-icons social-square social-dark m-b0">
                                                            <li><a href="https://www.facebook.com" target="_blank"  rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i><span className="sr-only">Facebook</span></a></li>
                                                            <li><a href="https://twitter.com" target="_blank"  rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a></li>
                                                            <li><a href="https://rss.com" target="_blank"  rel="noreferrer"><i className="fa fa-rss" aria-hidden="true"></i><span className="sr-only">RSS</span></a></li>
                                                            <li><a href="https://www.youtube.com" target="_blank"  rel="noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i><span className="sr-only">YouTube</span></a></li>
                                                            <li><a href="https://www.instagram.com" target="_blank"  rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* COLUMNS 6 */}
                                        <div className="blog-post blog-lg date-style-3 block-shadow">
                                            <div className="sx-post-media sx-img-effect zoom-slow">
                                                <div className="sx-thum-bx sx-img-overlay1 sx-img-effect yt-thum-box">
                                                    <img src="https://img.youtube.com/vi/Oy2QIiSQT2U/0.jpg" alt="" />
                                                    <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal4">
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
                                                    <h4 className="post-title"><NavLink to={"/blog-single"}>You Tube Video don’t get framed by the competition, trust our solid reputation.</NavLink></h4>
                                                </div>
                                                <div className="sx-post-text">
                                                    <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="sx-post-readmore pull-left">
                                                        <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                                    </div>
                                                    <div className="widget_social_inks pull-right">
                                                        <ul className="social-icons social-square social-dark m-b0">
                                                            <li><a href="https://www.facebook.com" target="_blank"  rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i><span className="sr-only">Facebook</span></a></li>
                                                            <li><a href="https://twitter.com" target="_blank"  rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a></li>
                                                            <li><a href="https://rss.com" target="_blank"  rel="noreferrer"><i className="fa fa-rss" aria-hidden="true"></i><span className="sr-only">RSS</span></a></li>
                                                            <li><a href="https://www.youtube.com" target="_blank"  rel="noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i><span className="sr-only">YouTube</span></a></li>
                                                            <li><a href="https://www.instagram.com" target="_blank"  rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* COLUMNS 7 */}
                                        <div className="blog-post blog-lg date-style-3 block-shadow">
                                            <div className="sx-post-media sx-img-effect zoom-slow">
                                                <div className="sx-thum-bx sx-img-overlay1">
                                                    <img src="https://i.vimeocdn.com/video/497807626_590x332.jpg" alt="" />
                                                    <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal3">
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
                                                    <h4 className="post-title"><NavLink to={"/blog-single"}>Vimeo Video don’t get framed by the competition, trust our solid reputation.</NavLink></h4>
                                                </div>
                                                <div className="sx-post-text">
                                                    <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibus dam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="sx-post-readmore pull-left">
                                                        <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink>
                                                    </div>
                                                    <div className="widget_social_inks pull-right">
                                                        <ul className="social-icons social-square social-dark m-b0">
                                                            <li><a href="https://www.facebook.com" target="_blank"  rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i><span className="sr-only">Facebook</span></a></li>
                                                            <li><a href="https://twitter.com" target="_blank"  rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a></li>
                                                            <li><a href="https://rss.com" target="_blank"  rel="noreferrer"><i className="fa fa-rss" aria-hidden="true"></i><span className="sr-only">RSS</span></a></li>
                                                            <li><a href="https://www.youtube.com" target="_blank"  rel="noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i><span className="sr-only">YouTube</span></a></li>
                                                            <li><a href="https://www.instagram.com" target="_blank"  rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="pagination m-b30">
                                        <li><NavLink to={"#"}>«</NavLink></li>
                                        <li className="active"><NavLink to={"#"}>1</NavLink></li>
                                        <li><NavLink to={"#"}>2</NavLink></li>
                                        <li><NavLink to={"#"}>3</NavLink></li>
                                        <li><NavLink to={"#"}>4</NavLink></li>
                                        <li><NavLink to={"#"}>5</NavLink></li>
                                        <li><NavLink to={"#"}>»</NavLink></li>
                                    </ul>
                                </div>
                                {/* SIDE BAR START */}
                                <div className="col-lg-4 col-md-12 col-sm-12 sticky_column">
                                    <BlogSidebar />
                                </div>
                                {/* SIDE BAR END */}
                            </div>
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <div className="modal fade" id="myModal3" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://vimeo.com/112734492' />
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal4" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://www.youtube.com/watch?v=Oy2QIiSQT2U' />
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    };
};

export default BlogListing;