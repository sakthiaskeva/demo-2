import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



class ClientsLogo5 extends React.Component {
    render() {
        const options = {
            loop: true,
            nav: false,
            dots: false,
            margin: 30,
            autoplay: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                1000: {
                    items: 4
                }
            }
        };
        return (
            <>
                <div className="section-full mobile-page-padding p-tb30 bg-gray ">
                        <div className="container">
                            <div className="section-content owl-btn-vertical-center">
                                <div className="owl-carousel home-client-carousel-2">
                                    <div className="item">
                                        <a href="javascript:;" className="client-logo-pic">
                                            <img src="images/client-logo/1.png" alt />
                                            <div>
                                                <span>View More</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="javascript:;" className="client-logo-pic">
                                            <img src="images/client-logo/2.png" alt />
                                            <div>
                                                <span>View More</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="javascript:;" className="client-logo-pic">
                                            <img src="images/client-logo/3.png" alt />
                                            <div>
                                                <span>View More</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="javascript:;" className="client-logo-pic">
                                            <img src="images/client-logo/4.png" alt />
                                            <div>
                                                <span>View More</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="javascript:;" className="client-logo-pic">
                                            <img src="images/client-logo/5.png" alt />
                                            <div>
                                                <span>View More</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="javascript:;" className="client-logo-pic">
                                            <img src="images/client-logo/6.png" alt />
                                            <div>
                                                <span>View More</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default ClientsLogo5;