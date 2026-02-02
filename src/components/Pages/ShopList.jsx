import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShopSidebar from '../Elements/ShopSidebar';

const products = [
    {
        image: require('./../../images/products/pic-1.jpg'),
        title: 'Happy Ninja',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
        sale: 'no',
        cutprice: '',
        price: '36.00'
    },
    {
        image: require('./../../images/products/pic-2.jpg'),
        title: 'Flying Ninja',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
        sale: 'yes',
        cutprice: '45.00',
        price: '36.00'
    },
    {
        image: require('./../../images/products/pic-3.jpg'),
        title: 'Half White',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
        sale: 'no',
        cutprice: '',
        price: '29.00'
    },
    {
        image: require('./../../images/products/pic-4.jpg'),
        title: 'Woo Ninja',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
        sale: 'no',
        cutprice: '',
        price: '59.00'
    },
    {
        image: require('./../../images/products/pic-5.jpg'),
        title: 'Woo logo',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
        sale: 'yes',
        cutprice: '45.00',
        price: '36.00'
    },
    {
        image: require('./../../images/products/pic-6.jpg'),
        title: 'Happy Ninja',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
        sale: 'no',
        cutprice: '',
        price: '99.00'
    },
    {
        image: require('./../../images/products/pic-7.jpg'),
        title: 'Woo Ninja',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
        sale: 'no',
        cutprice: '',
        price: '45.00'
    },
    {
        image: require('./../../images/products/pic-8.jpg'),
        title: 'Danger black',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
        cutprice: '',
        price: '29.00'
    },
    {
        image: require('./../../images/products/pic-1.jpg'),
        title: 'Happy Ninja',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
        sale: 'no',
        cutprice: '',
        price: '59.00'
    },
    {
        image: require('./../../images/products/pic-2.jpg'),
        title: 'Flying Ninja',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
        sale: 'no',
        cutprice: '',
        price: '45.00'
    }
]

var bnrimg = require('./../../images/banner/5.jpg');

class ShopList extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                <Banner title="Shop list Style" pagename="Shop List Style" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />
                    {/* SHOP SECTION START */}
                    <div className="section-full p-t120 p-b90 bg-white mobile-page-padding">
                        <div className="container">
                            <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
                                <div className="list-grid-control">
                                <NavLink to={"/shop-grid"}><i className="fa fa-th" /></NavLink>
                                <NavLink to={"/shop-list"} className="active"><i className="fa fa-th-list" /></NavLink>
                                </div>
                                <span className="woocommerce-result-count">Showing 1–10 of 13 results</span>
                                <form className="woocommerce-ordering select-box-border-style1-wrapper" method="get">
                                    <select name="orderby" className="orderby select-box-border-style1" aria-label="Shop order">
                                        <option value="menu_order" selected="selected">Default sorting</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by latest</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>
                                    </select>
                                    <input type="hidden" name="paged" defaultValue={1} />
                                </form>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 m-b30">
                                    <div className="shop-item-list-wrap-outer">
                                        {products.map((item, index) => (
                                            <div key={index} className="shop-item-list-wrap m-b30">
                                                <div className="sx-box sx-product-box   overflow-hide">
                                                {(`${item.sale}` === 'yes') ? <div className="shop-pro-sale-bnr">Sale!</div> : ''}
                                                    <div className="sx-thum-bx sx-img-overlay1">
                                                        <img src={item.image} alt="" />
                                                        <div className="item-cart-view">
                                                            <div className="item-cart-btn">
                                                                <NavLink to={"/shop-detail"}>
                                                                    <i className="fa fa-cart-plus" />
                                                                </NavLink>
                                                            </div>
                                                            <div className="item-cart-btn">
                                                                <NavLink to={"/shop-detail"}>
                                                                    <i className="fa fa-heart" />
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sx-info">
                                                        <h5 className="sx-title">
                                                        <NavLink to={"/shop-detail"}>{item.title}</NavLink>
                                                        </h5>
                                                        <span className="price">
                                                        {(`${item.sale}` === 'yes') ? <del><span><span className="Price-currencySymbol">$ </span>{item.cutprice}</span></del> : ''}
                                                            <ins>
                                                                <span><span className="Price-currencySymbol">$ </span>{item.price}</span>
                                                            </ins>
                                                        </span>
                                                        <p>{item.description}
                                                        </p><div className="shop-pro-size-list">
                                                            <span>Size:</span>
                                                            <ul>
                                                                <li><button type="button">S</button></li>
                                                                <li><button type="button">M</button></li>
                                                                <li><button type="button">L</button></li>
                                                                <li><button type="button">Xl</button></li>
                                                                <li><button type="button">XXl</button></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <ul className="pagination-st-1 m-t30 m-b0">
                                            <li><NavLink to={"#"}><span className="fa fa-chevron-left" /></NavLink></li>
                                            <li><NavLink to={"#"}>1</NavLink></li>
                                            <li className="active"><NavLink to={"#"}>2</NavLink></li>
                                            <li><NavLink to={"#"}>3</NavLink></li>
                                            <li><NavLink to={"#"}><span className="fa fa-chevron-right" /></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* SIDE BAR START */}
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 sticky_column  m-b30">
                                    <ShopSidebar />
                                </div>
                                {/* SIDE BAR END */}
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

export default ShopList;