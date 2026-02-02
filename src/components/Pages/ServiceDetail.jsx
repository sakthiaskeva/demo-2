import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/4.jpg');

class ServiceDetail extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                <Banner title="Service Details" pagename="Service Detail" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-t80 p-b50 mobile-page-padding">
                        <div className="container">
                            {/* GALLERY CONTENT START */}
                            <div className="row">
                                <div className="col-lg-4 col-md-12 sticky_column">
                                    <div className="about4-section m-b20 bg-gray p-a20">
                                        <div className="widget widget_services">
                                            <h4 className="widget-title">More Services</h4>
                                            <ul className="bg-white">
                                                <li><NavLink to={"/services-1"}>Architecture</NavLink></li>
                                                <li><NavLink to={"/services-1"}>Interior</NavLink></li>
                                                <li><NavLink to={"/services-1"}>Decoration</NavLink></li>
                                                <li><NavLink to={"/services-1"}>Furniture</NavLink></li>
                                                <li><NavLink to={"/services-1"}>Floor Plan</NavLink></li>
                                                <li><NavLink to={"/services-1"}>Exterior</NavLink></li>
                                            </ul>
                                        </div>
                                        <div className="wt-icon-box-wraper left bg-white p-a15 m-b10">
                                            <NavLink to={"/services-1"} className="btn-block">
                                                <span className="text-black m-r10"><i className="fa fa-file-pdf-o" /></span>
                                                <strong className="text-uppercase text-black">Download .PDF</strong>
                                            </NavLink>
                                        </div>
                                        <div className="wt-icon-box-wraper left bg-white p-a15 m-b10">
                                            <NavLink to={"/services-1"} className="btn-block">
                                                <span className="text-black m-r10"><i className="fa fa-file-word-o" /></span>
                                                <strong className="text-uppercase text-black"> Download .DOC</strong>
                                            </NavLink>
                                        </div>
                                        <div className="wt-icon-box-wraper left bg-white p-a15 m-b10">
                                            <NavLink to={"/services-1"} className="btn-block">
                                                <span className="text-black m-r10"><i className="fa fa-file-powerpoint-o" /></span>
                                                <strong className="text-uppercase text-black">Download .PPT</strong>
                                            </NavLink>
                                        </div>
                                        <div className="about4-content m-t30">
                                            <h4>GET 10% OFF TODAY</h4>
                                            <p>A Completely Safe and Advanced Cleaning Solution for both Petrol and Diesel Engines</p>
                                            <NavLink to={"/services-1"} className="site-button-link">Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <div className="section-content">
                                        <div className="service-single-block m-b30">
                                            <div className="sx-media">
                                                <img src={require('./../../images/gallery/pic5.jpg')} alt="" />
                                            </div>
                                            <h3 className="m-t30 sx-tilte">Interior design, a fine line with more shine a design gives you.</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                                            <h4 className="m-t30 sx-tilte">Professional Interior Design Service</h4>
                                            <div className="single-service-list">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12">
                                                        <ul className="list-angle-right anchor-line">
                                                            <li><NavLink to={"/services-1"}>We provide high quality design services.</NavLink></li>
                                                            <li><NavLink to={"/services-1"}>We are confident about our projects.</NavLink></li>
                                                            <li><NavLink to={"/services-1"}>A good Work Environment For work</NavLink></li>
                                                            <li><NavLink to={"/services-1"}>Communication Skills to getting in touch</NavLink></li>
                                                            <li><NavLink to={"/services-1"}> Renovations Benefit of Service</NavLink></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <ul className="list-angle-right anchor-line">
                                                            <li><NavLink to={"/services-1"}>Sustainability and modern tech.</NavLink></li>
                                                            <li><NavLink to={"/services-1"}>A Career Overview opportunity Available</NavLink></li>
                                                            <li><NavLink to={"/services-1"}>Scientific Skills For getting a better result</NavLink></li>
                                                            <li><NavLink to={"/services-1"}> Historic Renovations and Restorations.</NavLink></li>
                                                            <li><NavLink to={"/services-1"}>Project on time and Latest Design</NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sx-media sx-img-effect zoom-slow">
                                                <div className="sx-thum-bx sx-img-overlay1 sx-img-effect yt-thum-box">
                                                    <img src="https://img.youtube.com/vi/Oy2QIiSQT2U/0.jpg" alt=""/>
                                                    <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal6">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sx-accordion acc-bg-gray m-b30" id="accordion5">
                                            <div className="panel sx-panel">
                                                <div className="acod-head acc-actives">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                            Choose between rates or instant payment
                                                            <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseOne5" className="acod-body collapse show">
                                                    <div className="acod-content p-a15"><p> Motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est.
                                                        Sed nec felis pellentesque.</p></div>
                                                </div>
                                            </div>
                                            <div className="panel sx-panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                            Come to see a live preview
                                                            <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseTwo5" className="acod-body collapse">
                                                    <div className="acod-content p-a15"><p>Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.</p></div>
                                                </div>
                                            </div>
                                            <div className="panel sx-panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                            Choose the correct service
                                                            <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseThree5" className="acod-body collapse">
                                                    <div className="acod-content p-a15"><p>The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 m-b30">
                                                <div className="sx-icon-box-wraper p-a30  center bg-white shadow">
                                                    <div className="sx-icon-box-lg inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                                                        <span className="icon-cell sx-text-primary"><i className="flaticon-door" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="sx-tilte">Decoration</h4>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and setting as Planning.</p>
                                                        <NavLink to={"/services-1"} className="site-button-link">Read More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 m-b30">
                                                <div className="sx-icon-box-wraper p-a30  center bg-white shadow">
                                                    <div className="sx-icon-box-lg inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                                                        <span className="icon-cell sx-text-primary"><i className="flaticon-ruler-1" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="sx-tilte">Solution</h4>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and setting as Planning.</p>
                                                        <NavLink to={"/services-1"} className="site-button-link">Read More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* GALLERY CONTENT END */}
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>
                <div className="modal fade" id="myModal6" role="dialog">
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

export default ServiceDetail;