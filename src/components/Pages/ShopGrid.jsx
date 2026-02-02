import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from '../Common/Header4';
import Footer from '../Common/Footer';
import Banner from '../Elements/Banner';
import ShopSidebar from '../Elements/ShopSidebar';

const products = [
    {
        image: require('./../../images/products/pic-1.jpg'),
        title: 'Happy Ninja',
        sale: 'no',
        cutprice: '',
        price: '36.00'
    },
    {
        image: require('./../../images/products/pic-2.jpg'),
        title: 'Flying Ninja',
        sale: 'yes',
        cutprice: '45.00',
        price: '36.00'
    },
    {
        image: require('./../../images/products/pic-3.jpg'),
        title: 'Half White',
        sale: 'no',
        cutprice: '',
        price: '29.00'
    },
    {
        image: require('./../../images/products/pic-4.jpg'),
        title: 'Woo Ninja',
        sale: 'no',
        cutprice: '',
        price: '59.00'
    },
    {
        image: require('./../../images/products/pic-5.jpg'),
        title: 'Woo logo',
        sale: 'yes',
        cutprice: '45.00',
        price: '36.00'
    },
    {
        image: require('./../../images/products/pic-6.jpg'),
        title: 'Happy Ninja',
        sale: 'no',
        cutprice: '',
        price: '99.00'
    },
    {
        image: require('./../../images/products/pic-7.jpg'),
        title: 'Woo Ninja',
        sale: 'no',
        cutprice: '',
        price: '45.00'
    },
    {
        image: require('./../../images/products/pic-8.jpg'),
        title: 'Danger black',
        cutprice: '',
        price: '29.00'
    },
    {
        image: require('./../../images/products/pic-1.jpg'),
        title: 'Happy Ninja',
        sale: 'no',
        cutprice: '',
        price: '59.00'
    },
    {
        image: require('./../../images/products/pic-2.jpg'),
        title: 'Flying Ninja',
        sale: 'no',
        cutprice: '',
        price: '45.00'
    }
]

var bnrimg = require('./../../images/banner/4.jpg');

class ShopGrid extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Shop Page" pagename="Shop" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />
                    {/* SHOP SECTION START */}
                    <div className="section-full p-t120 p-b90 bg-white mobile-page-padding">
                        <div className="container">
                            <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
                                <div className="list-grid-control">
                                <NavLink to={"/shop-grid"} className="active"><i className="fa fa-th" /></NavLink>
                                <NavLink to={"/shop-list"}><i className="fa fa-th-list" /></NavLink>
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
                                    <div className="row">
                                        {products.map((item, index) => (
                                            <div key={index} className="col-lg-6 col-md-6 m-b30">
                                                <div className="sx-box sx-product-box overflow-hide">
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
                                                    <div className="sx-info p-t20 text-center">
                                                        <h5 className="sx-title">
                                                        <NavLink to={"/shop-detail"}>{item.title}</NavLink>
                                                        </h5>
                                                        <span className="price">
                                                            {(`${item.sale}` === 'yes') ? <del><span><span className="Price-currencySymbol">$ </span>{item.cutprice}</span></del> : ''}
                                                            <ins>
                                                                <span><span className="Price-currencySymbol">$ </span>{item.price}</span>
                                                            </ins>
                                                        </span>
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

export default ShopGrid;