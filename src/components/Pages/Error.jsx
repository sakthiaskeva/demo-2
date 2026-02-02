import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/8.jpg');

class Error extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Error 404" pagename="Error" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full mobile-page-padding p-tb150 bg-bottom-left bg-no-repeat" style={{ backgroundImage: 'url(images/background/bg-4.png)' }}>
                        <div className="container">
                            <div className="section-content">
                                <div className="page-notfound row">
                                    <div className="col-md-7">
                                        <img src={require('./../../images/error-404.png')} alt="" />
                                    </div>
                                    <div className="col-md-5">
                                        <strong>Page Not Found</strong>
                                        <span className="title">Error 404</span>
                                        <p>The Page Requested Could not be foundwe're working on it</p>
                                        <NavLink to={"/"} title="Back to home" className="site-button btn-half"><span> Back to home</span></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default Error;