import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class ShopCheckout extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                <Banner title="Checkout" pagename="Checkout" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-t80 p-b50 mobile-page-padding">
                        {/* PRODUCT DETAILS */}
                        <div className="container woo-entry">
                            {/* SECTION CONTENT START */}
                            <div className="section-content">
                                <div className="row">
                                    {/* FROM STYEL 1 WITH ICON */}
                                    <div className="col-md-6 m-b30">
                                        <div className="section-head">
                                            <h4 className="text-uppercase">Your Order</h4>
                                        </div>
                                        <div className="your-order-list p-a30">
                                            <ul>
                                                <li>Happy Ninja<strong className="pull-right">$15.00</strong></li>
                                                <li>Angry Ninja Black<strong className="pull-right">$150.00</strong></li>
                                                <li><b> Cart Subtotal</b><strong className="pull-right">$165.00</strong></li>
                                                <li><b> Shipping</b><strong className="pull-right">$50.00</strong></li>
                                                <li><b> Cart Total</b><strong className="pull-right">$215.00</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* FROM STYEL 1 */}
                                    <div className="col-md-6 m-b30">
                                        <div className="section-head">
                                            <h4 className="text-uppercase">Billing Information</h4>
                                        </div>
                                        <div className="bg-gray p-a30">
                                            <form action="#" method="post">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>First Name</label>
                                                            <input type="text" className="form-control" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Last Name</label>
                                                            <input type="text" className="form-control" placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Company Name</label>
                                                    <input type="text" className="form-control" placeholder="Company Name" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Phone</label>
                                                            <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Email Address</label>
                                                            <input type="email" className="form-control" placeholder="Enter email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Country</label>
                                                            <select className="form-control selectpicker">
                                                                <option>Usa</option>
                                                                <option>China</option>
                                                                <option>india</option>
                                                                <option>australia</option>
                                                                <option>japan</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>State / City</label>
                                                            <select className="form-control selectpicker">
                                                                <option>Los Angeles</option>
                                                                <option>Chicago</option>
                                                                <option>Phoenix</option>
                                                                <option>San Diego</option>
                                                                <option>Dallas</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Town</label>
                                                            <select className="form-control selectpicker">
                                                                <option>Columbia</option>
                                                                <option>Berkeley</option>
                                                                <option>The Woodlands</option>
                                                                <option>Plano</option>
                                                                <option>Boulder</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label>EZIP / Post Code</label>
                                                            <input type="text" className="form-control" placeholder="EZIP / Post Code" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input type="text" className="form-control m-b30" placeholder="Address 1" />
                                                    <input type="text" className="form-control" placeholder="Address 2" />
                                                </div>
                                                <div className="form-group form-inline">
                                                    <div className="radio">
                                                        <input id="checkmeout1" name="Public" defaultValue="checkmeout" type="checkbox" />
                                                        <label htmlFor="checkmeout1">Ship to the same address</label>
                                                    </div>
                                                </div>
                                                <button type="button" value="submit" className="site-cart-btn site-button-secondry">Save and Deliver Here</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* SECTION CONTENT END */}
                        </div>
                        {/* PRODUCT DETAILS */}
                    </div>
                    {/* CONTENT END */}
                    {/* FOOTER START */}
                    <Footer />
                    {/* FOOTER END */}
                </div>
            </>
        );
    };
};

export default ShopCheckout;