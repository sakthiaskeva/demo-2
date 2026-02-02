import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Projects7 from './../Elements/Projects7';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/1.jpg');

class ProjectDetail2 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Project Details" pagename="Project Detail" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />

                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding stick_in_parent">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="project-detail-outer row">
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic8.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic9.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic10.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic7.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic2.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic3.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="sx-box">
                                                <div className="sx-thum-bx sx-img-overlay1 sx-img-effect yt-thum-box">
                                                    <img src="https://img.youtube.com/vi/Oy2QIiSQT2U/0.jpg" alt="" />
                                                    <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12  sticky_column">
                                    <div className="project-detail-containt-2">
                                        <div className="bg-white text-black p-a20 shadow">
                                            <div className="product-block bg-gray p-a30 m-b30">
                                                <ul>
                                                    <li>
                                                        <h4 className="sx-title">Date</h4>
                                                        <p>September 10, 2022</p>
                                                    </li>
                                                    <li>
                                                        <h4 className="sx-title">Client</h4>
                                                        <p>Studio Massimo, Italy</p>
                                                    </li>
                                                    <li>
                                                        <h4 className="sx-title">Project type</h4>
                                                        <p>Contruction, Brading</p>
                                                    </li>
                                                    <li>
                                                        <h4 className="sx-title">Location</h4>
                                                        <p>Mountain View CA 94043</p>
                                                    </li>
                                                    <li>
                                                        <h4 className="sx-title">Year</h4>
                                                        <p>2022</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h4>Landscape plans for drainage problems may also entail planting beds away from the home’s foundation.</h4>
                                            <p> Designers think everything done by someone else is awful, and that they could do it better themselves, which explains why I designed my own living room carpet, I suppose. the architect represents neither a Dionysian nor an Apollinian condition: here it is the mighty act of will, the will which moves mountains, the intoxication of the strong will, which demands artistic expression.</p> <p>The most powerful men have always inspired the architects; the architect has always been influenced by power.</p>
                                            <div className="m-b0">
                                                <div className="sx-divider divider-1px  bg-black"><i className="icon-dot c-square" /></div>
                                            </div>
                                            <ul className="social-icons social-square social-darkest m-b0">
                                                <li><a href="https://www.facebook.com" target="_blank"  rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i><span className="sr-only">Facebook</span></a></li>
                                                <li><a href="https://twitter.com" target="_blank"  rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a></li>
                                                <li><a href="https://in.linkedin.com" target="_blank"  rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i><span className="sr-only">LinkedIn</span></a></li>
                                                <li><a href="https://rss.com" target="_blank"  rel="noreferrer"><i className="fa fa-rss" aria-hidden="true"></i><span className="sr-only">RSS</span></a></li>
                                                <li><a href="https://www.youtube.com" target="_blank"  rel="noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i><span className="sr-only">YouTube</span></a></li>
                                                <li><a href="https://www.instagram.com" target="_blank"  rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                    <Projects7 />
                </div>

                <div className="modal fade" id="myModal2" role="dialog">
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

export default ProjectDetail2;