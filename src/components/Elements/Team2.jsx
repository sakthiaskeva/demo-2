import React from 'react';
import { NavLink } from 'react-router-dom';

const teamMembers = [
    {
        image: require('./../../images/our-team5/1.jpg'),
        membername: 'Johnny Jackman',
        position: 'Architect'
    },
    {
        image: require('./../../images/our-team5/2.jpg'),
        membername: 'Daniel Rickman',
        position: 'Architect'
    },
    {
        image: require('./../../images/our-team5/3.jpg'),
        membername: 'Mark Norwich',
        position: 'Architect'
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Team2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-gray mobile-page-padding">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-center">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                    <h3 className="sep-line-one">Our Experts</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row justify-content-center">
                                {teamMembers.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <div className="our-team-3">
                                            <div className="our-team-info ">
                                                <img src={item.image} alt="" />
                                                <div className="our-team-content">
                                                    <h4 className="sx-team-name"><a href="team-single.html">{item.membername}</a></h4>
                                                    <span className="sx-team-position text-white">{item.position}</span>
                                                    <p>
                                                        <a href="https://www.facebook.com" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true" /><span className="sr-only">Facebook</span></a>
                                                        <a href="https://www.twitter.com" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true" /><span className="sr-only">Twitter</span></a>
                                                        <a href="https://www.instagram.com" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true" /><span className="sr-only">Instagram</span></a>
                                                        <a href="https://in.linkedin.com" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true" /><span className="sr-only">LinkedIn</span></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        <strong>Experts</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Team2;