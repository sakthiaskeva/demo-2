import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class ShopCart extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                <Banner title="Shopping Cart" pagename="Shopping Cart" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />
                    {/* OUR BEST SERVICES SECTION  START*/}
                    <div className="section-full  p-t80 p-b50 mobile-page-padding">
                        <div className="container">
                            <div className="section-content">
                                <div id="no-more-tables">
                                    <table className="table-bordered  table-condensed cf wt-responsive-table shopping-table">
                                        <thead className="cf">
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th className="numeric">Unit Price</th>
                                                <th className="numeric">Stock Status</th>
                                                <th className="numeric">Total</th>
                                                <th className="numeric">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-title="Code"><img src={require('./../../images/cart/pic-1.jpg')} alt=""/></td>
                                                <td data-title="Company">DJI Inspire 2</td>
                                                <td data-title="Price" className="numeric">$35.00</td>
                                                <td data-title="Change" className="numeric">In Stock</td>
                                                <td data-title="Change %" className="numeric"><NavLink to={"#"} className="text-black">Add to Cart</NavLink></td>
                                                <td data-title="Open" className="numeric"><NavLink to={"#"}><i className="fa fa-times" /></NavLink></td>
                                            </tr>
                                            <tr>
                                                <td data-title="Code"><img src={require('./../../images/cart/pic-2.jpg')} alt=""/></td>
                                                <td data-title="Company">Mavic Pro Platinum</td>
                                                <td data-title="Price" className="numeric">$15.00</td>
                                                <td data-title="Change" className="numeric">In Stock</td>
                                                <td data-title="Change %" className="numeric"><NavLink to={"#"} className="text-black"> Add to Cart</NavLink></td>
                                                <td data-title="Open" className="numeric"><NavLink to={"#"}><i className="fa fa-times" /></NavLink></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="cart-buttons text-right">
                                        <NavLink to={"#"} className="site-cart-btn m-b15 site-button-secondry m-r15">Update Cart</NavLink>
                                        <NavLink to={"#"} className="site-cart-btn m-b15 site-button">Continue Shopping</NavLink>
                                    </div>
                                    <div className="cart-total-table shopping-cart-total">
                                        <div className="sub_total">
                                            <ul className="top">
                                                <li>Subtotal</li>
                                                <li><span>$50.00</span></li>
                                            </ul>
                                            <div className="shipping">
                                                <ul>
                                                    <li> Free Shiping <span>+ $20.00</span></li>
                                                </ul>
                                            </div>
                                            <div className="total">
                                                <ul>
                                                    <li>Total</li>
                                                    <li><span>$70.00</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="proceed-to-checkout text-right">
                                            <NavLink to={"#"} className="m-t15 site-cart-btn site-button">Proceed to checkout</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* OUR BEST SERVICES SECTION END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ShopCart;