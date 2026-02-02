import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        title: 'Smartly Execute',
        flaticon: 'flaticon-sketch',
        image: require('./../../images/services/service-projects/1.jpg'),
        description: 'Our team also provides consultations on all architectural issues, even if you need.'
    },
    {
        count: '02',
        title: 'Perfect Design',
        flaticon: 'flaticon-stairs',
        image: require('./../../images/services/service-projects/2.jpg'),
        description: 'We combine Interior and Exterior Design services and often provide them as a single solution.'
    },
    {
        count: '03',
        title: 'Carefully planned',
        flaticon: 'flaticon-window',
        image: require('./../../images/services/service-projects/3.jpg'),
        description: 'Landscape plans for drainage problems may also entail planting beds away'
    }
]

class Services7 extends React.Component {
    render() {

        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b50 bg-white">
                    <div className="container">
                        <div className="row">
                            {services.map((item, index) => (
                                <div className="col-lg-4 col-md-12 m-b30" key={index}>
                                    <div className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                        <div className="overlay-main bg-black opacity-05" />
                                        <div className="bg-content-mid-outer">
                                            <div className="bg-content-mid">
                                                <div className="sx-icon-box-wraper center   text-white">
                                                    <div className="icon-lg m-b15">
                                                        <span className="icon-cell"><i className={item.flaticon} /></span>
                                                    </div>
                                                    <div className="icon-content m-b30">
                                                        <h4 className="sx-tilte"> <NavLink to={"/services-detail"}  className="sx-text-white">{item.title}</NavLink></h4>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                                <span className="bgcall-block-number">{item.count}</span>
                                                <div className="bg-overlay" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services7;