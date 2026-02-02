import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

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
        image: require('./../../images/our-team5/5.jpg'),
        membername: 'Johnny Jackman',
        position: 'Architect'
    },
    {
        image: require('./../../images/our-team5/6.jpg'),
        membername: 'Daniel Rickman',
        position: 'Architect'
    },
    {
        image: require('./../../images/our-team5/7.jpg'),
        membername: 'Mark Norwich',
        position: 'Finances'
    },
]

var bnrimg = require('./../../images/banner/2.jpg');

class Team2 extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Our Experts 2" pagename="Team Style 2" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />
                    {/* OUR EXPERTS SECTION START */}
                    <div className="section-full p-t80 p-b50 mobile-page-padding">
                        <div className="container">
                            {/* IMAGE CAROUSEL START */}
                            <div className="section-content">
                                <div className="row">
                                    {teamMembers.map((item, index) => (
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                            <div className="our-team-3">
                                                <div className="our-team-info ">
                                                    <img src={item.image} alt="" />
                                                    <div className="our-team-content">
                                                        <h4 className="sx-team-name"><NavLink to={"/team-single"} className="sx-text-white">{item.membername}</NavLink></h4>
                                                        <span className="sx-team-position text-white">{item.position}</span>
                                                        <p>
                                                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true" /><span className="sr-only">Facebook</span></a>
                                                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true" /><span className="sr-only">Twitter</span></a>
                                                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true" /><span className="sr-only">Instagram</span></a>
                                                        <a href="https://in.linkedin.com" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true" /><span className="sr-only">LinkedIn</span></a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* OUR EXPERTS SECTION END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default Team2;