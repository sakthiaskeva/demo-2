import React from 'react';
import { NavLink } from 'react-router-dom';

var bgimg1 = require('./../../images/background/bg-4.png');
var bgimg2 = require('./../../images/background/cross-line2.png');

class Plans1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full text-center bg-gray bg-no-repeat p-t80 p-b80 bg-top-right mobile-page-padding" tyle={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                        <h3 className="sep-line-one">Our Plans</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="section-content">
                                <div className="pricingtable-row p-t20">
                                    <div className="row no-gutters justify-content-center">
                                        <div className="col-lg-4  col-md-4 col-sm-6  m-b30">
                                            <div className="pricingtable-wrapper pricing-table-style-5 bg-white">
                                                <div className="pricingtable-inner">
                                                    <div className="pricingtable-title">
                                                        <h4>Basic Plan</h4>
                                                    </div>
                                                    <div className="pricingtable-price">
                                                        <span className="pricingtable-bx">$29</span>
                                                        <span className="pricingtable-type">Month</span>
                                                    </div>
                                                    <ul className="pricingtable-features text-black">
                                                        <li>Phone &amp; Email Support</li>
                                                        <li>3 Social Account </li>
                                                        <li>Branded Reports</li>
                                                    </ul>
                                                    <div className="pricingtable-footer">
                                                        <NavLink to="/about" className="site-button-link white">Purchase</NavLink>
                                                    </div>
                                                    <div className="overlay-main bg-white opacity-07" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4  col-sm-6 m-b30">
                                            <div className="pricingtable-wrapper  pricing-table-style-5 bg-white">
                                                <div className="pricingtable-inner pricingtable-highlight shadow-lg">
                                                    <div className="pricingtable-title">
                                                        <h4>Pro Plan</h4>
                                                    </div>
                                                    <div className="pricingtable-price">
                                                        <span className="pricingtable-bx">$39</span>
                                                        <span className="pricingtable-type">Month</span>
                                                    </div>
                                                    <ul className="pricingtable-features text-black">
                                                        <li>Phone &amp; Email Support</li>
                                                        <li>3 Social Account </li>
                                                        <li>Branded Reports</li>
                                                    </ul>
                                                    <div className="pricingtable-footer">
                                                        <NavLink to="/about" className="site-button-link white">Purchase</NavLink>
                                                    </div>
                                                    <div className="overlay-main bg-white opacity-07" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4  col-sm-6 m-b30">
                                            <div className="pricingtable-wrapper  pricing-table-style-5 bg-white">
                                                <div className="pricingtable-inner">
                                                    <div className="pricingtable-title">
                                                        <h4>Premium Plan</h4>
                                                    </div>
                                                    <div className="pricingtable-price">
                                                        <span className="pricingtable-bx">$49</span>
                                                        <span className="pricingtable-type">Month</span>
                                                    </div>
                                                    <ul className="pricingtable-features text-black">
                                                        <li>Phone &amp; Email Support</li>
                                                        <li>3 Social Account </li>
                                                        <li>Branded Reports</li>
                                                    </ul>
                                                    <div className="pricingtable-footer">
                                                        <NavLink to="/about" className="site-button-link white">Purchase</NavLink>
                                                    </div>
                                                    <div className="overlay-main bg-white opacity-07" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default Plans1;