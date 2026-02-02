import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Projects6 from './../Elements/Projects6';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/2.jpg');

class ProjectDetail1 extends React.Component {
    
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
                                <div className="col-lg-7 col-md-7  sticky_column">
                                    <div className="project-detail-containt">
                                        <div className="bg-white text-black">
                                            <h3>A multitask profession which creates any land in beautiful creation </h3>
                                            <p> Designers think everything done by someone else is awful, and that they could do it better themselves, which explains why I designed my own living room carpet, I suppose. the architect represents neither a Dionysian nor an Apollinian condition: here it is the mighty act of will, the will which moves mountains, the intoxication of the strong will, which demands artistic expression. The most powerful men have always inspired the architects; the architect has always been influenced by power.</p>
                                            <div className="product-block">
                                                <ul>
                                                    <li>
                                                        <h4 className="m-b10">Date</h4>
                                                        <p>October 10, 2022</p>
                                                    </li>
                                                    <li>
                                                        <h4 className="m-b10">Client</h4>
                                                        <p>Studio Massimo, Italy</p>
                                                    </li>
                                                    <li>
                                                        <h4 className="m-b10">Project type</h4>
                                                        <p>Contruction, Brading</p>
                                                    </li>
                                                    <li>
                                                        <h4 className="m-b10">Location</h4>
                                                        <p>Mountain View CA 94043</p>
                                                    </li>
                                                    <li>
                                                        <h4 className="m-b10">Year</h4>
                                                        <p>2022</p>
                                                    </li>
                                                </ul>
                                            </div>
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
                                <div className="col-lg-5 col-md-5 ">
                                    <div className="project-detail-outer">
                                        <div className="project-detail-pic m-b30">
                                            <div className="sx-media">
                                                <img src={require('./../../images/projects/portrait/pic7.jpg')} alt="" />
                                            </div>
                                        </div>
                                        <div className="project-detail-pic m-b30">
                                            <div className="sx-media">
                                                <img src={require('./../../images/projects/portrait/pic4.jpg')} alt="" />
                                            </div>
                                        </div>
                                        <div className="project-detail-pic m-b30">
                                            <div className="sx-media">
                                                <img src={require('./../../images/projects/portrait/pic5.jpg')} alt="" />
                                            </div>
                                        </div>
                                        <div className="sx-box">
                                            <div className="sx-thum-bx sx-img-overlay1 sx-img-effect yt-thum-box">
                                                <img src="https://img.youtube.com/vi/Oy2QIiSQT2U/0.jpg" alt="" />
                                                <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal5">
                                                    <i className="icon fa fa-play" />
                                                    <span className="ripple" />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-detail-containt-2 m-t50">
                                <h3>Creating a sustainable future through building preservation, green architecture, and smart design</h3>
                                <p className="m-b0"> Designers think everything done by someone else is awful, and that they could do it better themselves, which explains why I designed my own living room carpet, I suppose. the architect represents neither a Dionysian nor an Apollinian condition: here it is the mighty act of will, the will which moves mountains, the intoxication of the strong will, which demands artistic expression. The most powerful men have always inspired the architects; the architect has always been influenced by power.</p>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                    <Projects6 />
                </div>

                <div className="modal fade" id="myModal5" role="dialog">
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

export default ProjectDetail1;