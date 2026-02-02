import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original: require('./../../images/products/pic-1.jpg'),
        thumbnail: require('./../../images/products/thumb/pic-1.jpg'),
    },
    {
        original: require('./../../images/products/pic-2.jpg'),
        thumbnail: require('./../../images/products/thumb/pic-2.jpg'),
    },
    {
        original: require('./../../images/products/pic-3.jpg'),
        thumbnail: require('./../../images/products/thumb/pic-3.jpg'),
    },
    {
        original: require('./../../images/products/pic-4.jpg'),
        thumbnail: require('./../../images/products/thumb/pic-4.jpg'),
    },
    {
        original: require('./../../images/products/pic-5.jpg'),
        thumbnail: require('./../../images/products/thumb/pic-5.jpg'),
    }
];

var bnrimg = require('./../../images/banner/5.jpg');

class ShopDetail extends React.Component {
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
                    <Banner title="Shop Detail" pagename="Shop Detail" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />
                    {/* SHOP DETAIL SECTION START */}
                    <div className="section-full p-t80 p-b50 mobile-page-padding">
                        <div className="container woo-entry">
                            <div className="row m-b30">
                                <div className="col-md-4 col-sm-12  m-b30">
                                    <div className="sx-box sx-product-gallery on-show-slider">
                                    <ImageGallery renderLeftNav={this.renderLeftNav} renderRightNav={this.renderRightNav} items={images} showPlayButton={false} />
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <div className="product-detail-info">
                                        <div className="product-single-rating">
                                            <span className="rating-bx site-text-primary">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-o" />
                                            </span>
                                            <span className="font-weight-600 text-black">(4 customer reviews)</span>
                                        </div>
                                        <div className="single-product-title ">
                                            <h3 className="post-title"><NavLink to={"#"}>Happy Ninja</NavLink></h3>
                                        </div>
                                        <div className="product-single-price">
                                            <span className="p-single-old-price">$45</span>
                                            <span className="p-single-new-price">$36</span>
                                        </div>
                                        <div className="wt-product-text">
                                            <p>
                                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                                            </p>
                                            <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                        </div>
                                        <form method="post" className="cart clearfix ">
                                            <div className="quantity btn-quantity m-b20">
                                                <input id="demo_vertical2" type="text" defaultValue={1} name="demo_vertical2" />
                                            </div>
                                            <button type="button" className="site-cart-btn site-button"><i className="fa fa-shopping-cart" />Add to Cart</button>
                                        </form>
                                        <div className="product_meta">
                                            <div className="sku_wrapper">SKU:
                                                <span className="sku">05</span>
                                            </div>
                                            <div className="posted_in">Categories:
                                            <NavLink to={"#"} rel="tag">Constrction Tools</NavLink>
                                            </div>
                                        </div>
                                        <div className="product-single-availability">
                                            Availability: <span>500 In Stock</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TABS CONTENT START */}
                            <div className="product-full-detail m-b30">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sx-tabs tabs-default">
                                            <ul className="nav nav-tabs">
                                                <li><a data-toggle="tab" href="#web-design-19" className="active">Description</a></li>
                                                <li><a data-toggle="tab" href="#developement-19">Review</a></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div id="web-design-19" className="tab-pane active">
                                                    <table className="table m-b0 no-border">
                                                        <tbody><tr>
                                                            <td><b>Size</b></td>
                                                            <td>Small, Medium, Large &amp; Extra Large</td>
                                                        </tr>
                                                            <tr>
                                                                <td><b>Color</b></td>
                                                                <td>Read, Blue, Green &amp; Black</td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Length</b></td>
                                                                <td>35 cm</td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Fabric</b></td>
                                                                <td>Cotton, Silk &amp; Synthetic</td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Warranty</b></td>
                                                                <td>6 Months</td>
                                                            </tr>
                                                        </tbody></table>
                                                </div>
                                                <div id="developement-19" className="tab-pane">
                                                    <div className="clear" id="comment-list">
                                                        <div className="comments-area" id="comments">
                                                            <h3 className="comments-title m-t0">3 Comments</h3>
                                                            <div>
                                                                {/* COMMENT LIST START */}
                                                                <ol className="comment-list">
                                                                    <li className="comment">
                                                                        {/* COMMENT BLOCK */}
                                                                        <div className="comment-body">
                                                                            <div className="comment-meta">
                                                                                <NavLink to={"#"}>06 August 2022</NavLink>
                                                                            </div>
                                                                            <div className="comment-author vcard">
                                                                                <img className="avatar photo" src={require('./../../images/testimonials/pic4.jpg')} alt=""/>
                                                                                <cite className="fn"> Schiocchet </cite>
                                                                                <span className="says">says:</span>
                                                                            </div>
                                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                                                            <div className="reply">
                                                                                <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                                                            </div>
                                                                        </div>
                                                                        {/* SUB COMMENT BLOCK */}
                                                                        <ol className="children">
                                                                            <li className="comment odd parent">
                                                                                <div className="comment-body">
                                                                                    <div className="comment-meta">
                                                                                        <NavLink to={"#"}>05 August 2022</NavLink>
                                                                                    </div>
                                                                                    <div className="comment-author vcard">
                                                                                        <img className="avatar photo" src={require('./../../images/testimonials/pic3.jpg')} alt=""/>
                                                                                        <cite className="fn">Brayden</cite>
                                                                                        <span className="says">says:</span>
                                                                                    </div>
                                                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words. </p>
                                                                                    <div className="reply">
                                                                                        <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                                                                    </div>
                                                                                </div>
                                                                                <ol className="children">
                                                                                    <li className="comment odd parent">
                                                                                        <div className="comment-body">
                                                                                            <div className="comment-meta">
                                                                                                <NavLink to={"#"}>02 August 2022</NavLink>
                                                                                            </div>
                                                                                            <div className="comment-author vcard">
                                                                                                <img className="avatar photo" src={require('./../../images/testimonials/pic2.jpg')} alt=""/>
                                                                                                <cite className="fn">Diego</cite>
                                                                                                <span className="says">says:</span>
                                                                                            </div>
                                                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                                            <div className="reply">
                                                                                                <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ol>
                                                                            </li>
                                                                        </ol>
                                                                    </li>
                                                                </ol>
                                                                {/* COMMENT LIST END */}
                                                                {/* LEAVE A REPLY START */}
                                                                <div className="comment-respond m-t30" id="respond">
                                                                    <h2 className="comment-reply-title" id="reply-title">Leave a Comments
                                                                        <small>
                                                                        <NavLink to={"#"} style={{ display: 'none' }} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</NavLink>
                                                                        </small>
                                                                    </h2>
                                                                    <form className="comment-form bdr-1 bdr-solid bdr-gray p-tb15" id="commentform" method="post">
                                                                        <p className="comment-form-author">
                                                                            <label htmlFor="author">Name <span className="required">*</span></label>
                                                                            <input className="form-control" type="text" defaultValue name="user-comment" placeholder="Author" id="author" />
                                                                        </p>
                                                                        <p className="comment-form-email">
                                                                            <label htmlFor="email">Email <span className="required">*</span></label>
                                                                            <input className="form-control" type="text" defaultValue name="email" placeholder="Email" id="email" />
                                                                        </p>
                                                                        <p className="comment-form-url">
                                                                            <label htmlFor="url">Website</label>
                                                                            <input className="form-control" type="text" defaultValue name="url" placeholder="Website" id="url" />
                                                                        </p>
                                                                        <p className="comment-form-comment">
                                                                            <label htmlFor="comment">Comment</label>
                                                                            <textarea className="form-control" rows={8} name="comment" placeholder="Comment" id="comment" defaultValue={""} />
                                                                        </p>
                                                                        <p className="form-submit">
                                                                            <button className="site-button btn-half" type="button"><span> Submit</span></button>
                                                                        </p>
                                                                    </form>
                                                                </div>
                                                                {/* LEAVE A REPLY END */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TABS CONTENT START */}
                            {/* TITLE START */}
                            <div className="section-head  text-center">
                                <h2 data-title="Product">Related products</h2>
                                <div className="sx-separator-outer  m-b30">
                                    <div className="sx-separator bg-primary" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                {/* Block 1 */}
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                                    <div className="sx-box sx-product-box   overflow-hide">
                                        <div className="sx-thum-bx sx-img-overlay1">
                                            <img src={require('./../../images/products/pic-1.jpg')} alt=""/>
                                            <div className="item-cart-view">
                                                <div className="item-cart-btn">
                                                    <NavLink to={"#"}>
                                                        <i className="fa fa-cart-plus" />
                                                    </NavLink>
                                                </div>
                                                <div className="item-cart-btn">
                                                    <NavLink to={"#"}>
                                                        <i className="fa fa-heart" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sx-info p-t20 text-center">
                                            <h5 className="sx-title">
                                            <NavLink to={"/shop-list"}>Happy Ninja</NavLink>
                                            </h5>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>36.00</span>
                                                </ins>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Block 2 */}
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                                    <div className="sx-box sx-product-box   overflow-hide">
                                        <div className="shop-pro-sale-bnr">Sale!</div>
                                        <div className="sx-thum-bx sx-img-overlay1">
                                            <img src={require('./../../images/products/pic-2.jpg')} alt=""/>
                                            <div className="item-cart-view">
                                                <div className="item-cart-btn">
                                                    <NavLink to={"#"}>
                                                        <i className="fa fa-cart-plus" />
                                                    </NavLink>
                                                </div>
                                                <div className="item-cart-btn">
                                                    <NavLink to={"#"}>
                                                        <i className="fa fa-heart" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sx-info p-t20 text-center">
                                            <h5 className="sx-title">
                                                <NavLink to={"/shop-list"}>Flying Ninja</NavLink>
                                            </h5>
                                            <span className="price">
                                                <del><span><span className="Price-currencySymbol">$ </span>45.00</span></del>
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>36.00</span>
                                                </ins>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Block 3 */}
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                                    <div className="sx-box sx-product-box   overflow-hide">
                                        <div className="sx-thum-bx sx-img-overlay1">
                                            <img src={require('./../../images/products/pic-3.jpg')} alt=""/>
                                            <div className="item-cart-view">
                                                <div className="item-cart-btn">
                                                    <NavLink to={"#"}>
                                                        <i className="fa fa-cart-plus" />
                                                    </NavLink>
                                                </div>
                                                <div className="item-cart-btn">
                                                    <NavLink to={"#"}>
                                                        <i className="fa fa-heart" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sx-info p-t20 text-center">
                                            <h5 className="sx-title">
                                                <NavLink to={"/shop-list"}>Half White</NavLink>
                                            </h5>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>29.00</span>
                                                </ins>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Block 4 */}
                                <div className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-b30">
                                    <div className="sx-box sx-product-box   overflow-hide">
                                        <div className="sx-thum-bx sx-img-overlay1">
                                            <img src={require('./../../images/products/pic-4.jpg')} alt="" />
                                            <div className="item-cart-view">
                                                <div className="item-cart-btn">
                                                    <NavLink to={"#"}>
                                                        <i className="fa fa-cart-plus" />
                                                    </NavLink>
                                                </div>
                                                <div className="item-cart-btn">
                                                    <NavLink to={"#"}>
                                                        <i className="fa fa-heart" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sx-info p-t20 text-center">
                                            <h5 className="sx-title">
                                                <NavLink to={"/shop-list"}>Woo Ninja</NavLink>
                                            </h5>
                                            <span className="price">
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>59.00</span>
                                                </ins>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SHOP DETAIL SECTION END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ShopDetail;