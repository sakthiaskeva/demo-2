import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        image: require('./../../images/gallery/pic1.jpg'),
        title: 'Interior Work Avroko',
        description: 'Many of our projects cannot be featured in this section due to the Security levels of the space.'
    },
    {
        image: require('./../../images/gallery/pic2.jpg'),
        title: 'Interior Work Avroko',
        description: 'Many of our projects cannot be featured in this section due to the Security levels of the space.'
    },
    {
        image: require('./../../images/gallery/pic3.jpg'),
        title: 'Interior Work Avroko',
        description: 'Many of our projects cannot be featured in this section due to the Security levels of the space.'
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class SimilarProjects extends React.Component {
    render() {
        const options = {
            loop:true,
            autoplay:false,
            center: false,
            items:3,
            margin:40,
            nav:true,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:1
                },			
                991:{
                    items:1
                }
            
                
            }
        };
        return (
            <>
                <div className="section-full p-tb80 bg-gray inner-page-padding">
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className={`${this.props.alignment} sx-separator-outer`}>
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">{this.props.title}</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="work-carousel-outer">
                                <OwlCarousel className="owl-carousel mfp-gallery project-carousel project-carousel1 owl-btn-vertical-center" {...options}>
                                    {services.map((item, index) => (
                                        <div key={index} className="item">
                                            <div className="sx-box   image-single-carousel bg-cover" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                                <div className="sx-info  p-t20 text-white">
                                                    <h4 className="sx-tilte m-t0"><NavLink to={"/project-detail1"}>{item.title}</NavLink></h4>
                                                    <p>{item.description}</p>
                                                    <NavLink to={"/project-detail1"} className="site-button btn-half button-sm"><span>View All</span></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default SimilarProjects;