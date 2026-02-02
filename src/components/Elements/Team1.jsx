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
        position: 'Finances'
    },
    {
        image: require('./../../images/our-team5/4.jpg'),
        membername: 'Nich Jonas',
        position: 'Finances'
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Team1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 mobile-page-padding">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                    <h3 className="sep-line-one">Super Team</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row team-item-four">
                                {teamMembers.map((item, index) => (
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30" key={index}>
                                        <div className="our-team-2 ">
                                            <div className="profile-image">
                                                <img src={item.image} alt="" />
                                                <div className="icons">
                                                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true" /><span className="sr-only">Facebook</span></a>
                                                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true" /><span className="sr-only">Twitter</span></a>
                                                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true" /><span className="sr-only">Instagram</span></a>
                                                    <a href="https://in.linkedin.com" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true" /><span className="sr-only">LinkedIn</span></a>
                                                </div>
                                            </div>
                                            <div className="figcaption text-black">
                                                <h4 className="m-t0"><NavLink to={"/team-single"}>{item.membername}</NavLink></h4>
                                                <span className="m-b0">{item.position}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Team1;