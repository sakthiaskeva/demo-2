import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        count: '01',
        title: 'Plans and Projects',
        flaticon: 'flaticon-sketch',
        image: require('./../../images/services/service-projects/1.jpg'),
    },
    {
        count: '02',
        title: 'Interior',
        flaticon: 'flaticon-stairs',
        image: require('./../../images/services/service-projects/2.jpg'),
    },
    {
        count: '03',
        title: 'Exterior',
        flaticon: 'flaticon-window',
        image: require('./../../images/services/service-projects/3.jpg'),
    },
    {
        count: '04',
        title: 'Architecture',
        flaticon: 'flaticon-skyline',
        image: require('./../../images/services/service-projects/4.jpg'),
    },
    {
        count: '05',
        title: 'Furniture',
        flaticon: 'flaticon-bed',
        image: require('./../../images/services/service-projects/5.jpg'),
    },
    {
        count: '06',
        title: 'Decoration',
        flaticon: 'flaticon-door',
        image: require('./../../images/services/service-projects/7.jpg'),
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Services3 extends React.Component {
    render() {
        const options = {
            loop:true,
            autoplay:false,
            center: false,
            margin:0,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                640:{
                    items:2
                },			
                768:{
                    items:2
                },			
                991:{
                    items:3
                },
                1200:{
                    items:5
                }	
            }
        };
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 bg-white bg-change-section">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">Services</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                        </div>
                        <OwlCarousel className="owl-carousel service-slider-two owl-btn-vertical-center" {...options}>
                        {services.map((item, index) => (
                            <div className="item" key={index}>
                            <div className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                    <div className="overlay-main bg-black opacity-05" />
                                    <div className="bg-content-mid-outer">
                                        <div className="bg-content-mid">
                                            <div className="sx-icon-box-wraper center text-white">
                                                <div className="icon-lg m-b15">
                                                    <span className="icon-cell"><i className={item.flaticon} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="sx-tilte"> <NavLink to={"/services-detail"}  className="sx-text-white"> {item.title}</NavLink></h4>
                                                </div>
                                            </div>
                                            <span className="bgcall-block-number">{item.count}</span>
                                            <div className="bg-overlay" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                    </div>
            </>
        );
    }
};

export default Services3;