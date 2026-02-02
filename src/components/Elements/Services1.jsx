import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        title: 'Plans and Projects',
        flaticon: 'flaticon-sketch',
        description: 'We provide a range of architectural 3D modeling services to our customers to aid the design, planning and...',
    },
    {
        count: '02',
        title: 'Interior',
        flaticon: 'flaticon-stairs',
        description: 'Analysis and planning services that help both the client and architects to work out the forthcoming project...',
    },
    {
        count: '03',
        title: 'Exterior',
        flaticon: 'flaticon-window',
        description: 'We offer comprehensive Architectural Engineering Services including Interior design, Master planning, 3D modeling...',
    },
    {
        count: '04',
        title: 'Architecture',
        flaticon: 'flaticon-skyline',
        description: 'Project management is the process by which our team plans and executes your project. We will develop it...',
    },
    {
        count: '05',
        title: 'Furniture',
        flaticon: 'flaticon-bed',
        description: 'Our team also provides consultations on all architectural issues, even if you need specific info about working...',
    },
    {
        count: '06',
        title: 'Decoration',
        flaticon: 'flaticon-door',
        description: 'We combine Interior and Exterior Design services and often provide them as a single solution. It helps us...',
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Services1 extends React.Component {
    render() {

        return (
            <>
                <div className="section-full mobile-page-padding p-t80  p-b50 bg-gray">
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-left">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one ">All Services</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                {services.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <div className="sx-icon-box-wraper  icon-count-2-outer">
                                            <div className="icon-count-2 bg-white">
                                                <span className="icon-count-number">{item.count}</span>
                                                <div className="icon-xl inline-icon m-b5 scale-in-center">
                                                    <span className="icon-cell"><i className={item.flaticon} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="sx-tilte">{item.title}</h4>
                                                    <p>{item.description}</p>
                                                    <div className="text-left">
                                                        <NavLink to={"/services-detail"} className="site-button-link">Read More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        <strong>Services</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Services1;