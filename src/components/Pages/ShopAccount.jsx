import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from '../Common/Header4';
import Footer from '../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class ShopAccount extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="My Account" pagename="My Account" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />
                    {/* SHOP SECTION START */}
                    <div className="section-full p-t120 p-b90 bg-white mobile-page-padding">
                        <div className="container">
                            <div className="sign-in-dialog">
                                <div className="sign-in-dialog-form">
                                    <form action="#">
                                        <div className="wt-tabs tabs-default">
                                            <ul className="nav nav-tabs">
                                                <li><a className="active" data-toggle="tab" href="#login-one">Login </a></li>
                                                <li><a data-toggle="tab" href="#register-one">Register </a></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div id="login-one" className="tab-pane active">
                                                    <div className="form-group">
                                                        <div className="ls-inputicon-box">
                                                            <input className="form-control" name="user_name" type="text" placeholder="Username" />
                                                            <i className="fs-input-icon fa fa-user" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="ls-inputicon-box">
                                                            <input className="form-control" name="password" type="Password" placeholder="Password" />
                                                            <i className="fs-input-icon fa fa-lock" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="login-forgot-password">
                                                        <NavLink to={"#"} className="text-primary">Forgot Password</NavLink>
                                                        </div>
                                                    </div>
                                                    <div className="login-btn-bx text-right">
                                                        <button type="button" className="site-button-secondry site-btn-effect">Login</button>
                                                    </div>
                                                </div>
                                                <div id="register-one" className="tab-pane">
                                                    <div className="guest_form">
                                                        <div className="form-group">
                                                            <div className="ls-inputicon-box">
                                                                <input className="form-control" name="user_name" type="text" placeholder="Username" />
                                                                <i className="fs-input-icon fa fa-user" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="ls-inputicon-box">
                                                                <input className="form-control" name="password" type="Password" placeholder="Password" />
                                                                <i className="fs-input-icon fa fa-lock" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="ls-inputicon-box">
                                                                <input className="form-control" name="First_name" type="text" placeholder="First Name" />
                                                                <i className="fs-input-icon fa fa-pencil" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="ls-inputicon-box">
                                                                <input className="form-control" name="Last_name" type="text" placeholder="Last Name" />
                                                                <i className="fs-input-icon fa fa-pencil" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="ls-inputicon-box">
                                                                <input className="form-control" name="Email_address" type="email" placeholder="Email Address" />
                                                                <i className="fs-input-icon fa fa-envelope" />
                                                            </div>
                                                        </div>
                                                        <div className="login-btn-bx text-right">
                                                            <button type="button" className="site-button-secondry site-btn-effect">Register</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SHOP SECTION END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ShopAccount;