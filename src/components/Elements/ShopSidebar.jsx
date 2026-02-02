import React from 'react';
import { NavLink } from 'react-router-dom';

class ShopSidebar extends React.Component {
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
                <div className="side-bar p-a30 bg-gray">
                    {/* SEARCH */}
                    <div className="widget">
                        <h4 className="widget-title ">Search</h4>
                        <div className="search-bx p-a10 bg-white">
                            <form action="#" role="search" method="post">
                                <div className="input-group">
                                    <input name="news-letter" type="text" className="form-control bg-gray" placeholder="Write your text" />
                                    <span className="input-group-btn bg-gray">
                                        <button type="button" className="btn"><i className="fa fa-search" /></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/*PRICE RANGE SLIDER*/}
                    <div className="widget product-range-slider1">
                        <div className="m-b30">
                            <h4 className="widget-title">Price Range</h4>
                        </div>
                        <div className="shop-item-price-slider">
                            <b>$ 10</b>
                            <input id="ex2" type="text" className="span2" defaultValue="" data-slider-min={10} data-slider-max={100} data-slider-step={5} data-slider-value="[20,80]" />
                            <b>$ 100</b>
                        </div>
                    </div>
                    {/* Categories  */}
                    <div className="widget widget_services ">
                        <h4 className="widget-title">Categories</h4>
                        <ul className="p-a10 bg-white">
                            <li><NavLink to={"/shop-detail"}>Home<span> (28)</span></NavLink></li>
                            <li><NavLink to={"/shop-detail"}>Hotel<span> (05)</span></NavLink></li>
                            <li><NavLink to={"/shop-detail"}>Rooms<span> (24)</span></NavLink></li>
                            <li><NavLink to={"/shop-detail"}>Lawn<span> (15)</span></NavLink></li>
                            <li><NavLink to={"/shop-detail"}>Appartment<span> (20)</span></NavLink></li>
                            <li><NavLink to={"/shop-detail"}>Bathroom<span> (90)</span></NavLink></li>
                        </ul>
                    </div>
                    {/* NEWSLETTER */}
                    <div className="widget widget_newsletter-2">
                        <h4 className="widget-title  ">Newsletter</h4>
                        <div className="newsletter-bx p-a10 bg-white">
                            <div className="newsletter-content">
                                <p>Subscribe to our mailing list to get the update to your email.</p>
                            </div>
                            <div className="m-t20">
                                <form action="#" role="search" method="post">
                                    <div className="input-group">
                                        <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                        <span className="input-group-btn">
                                            <button type="button" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* OUR archive  */}
                    <div className="widget widget_archives">
                        <div className="m-b30">
                            <h4 className="widget-title">Archives</h4>
                        </div>
                        <ul className="p-a10 bg-white">
                            <li><NavLink to={"/shop-detail"}>January 2022</NavLink></li>
                            <li><NavLink to={"/shop-detail"}>February 2022</NavLink></li>
                            <li><NavLink to={"/shop-detail"}>March 2022</NavLink></li>
                            <li><NavLink to={"/shop-detail"}>April 2022</NavLink></li>
                            <li><NavLink to={"/shop-detail"}>May 2022</NavLink></li>
                            <li><NavLink to={"/shop-detail"}>June 2022</NavLink></li>
                        </ul>
                    </div>
                    {/* TAGS */}
                    <div className="widget widget_tag_cloud">
                        <h4 className="widget-title">Tag Cloud</h4>
                        <div className="tagcloud p-a10 bg-white">
                            <NavLink to={"/shop-detail"}>Kitchen</NavLink>
                            <NavLink to={"/shop-detail"}>Food</NavLink>
                            <NavLink to={"/shop-detail"}>Planining</NavLink>
                            <NavLink to={"/shop-detail"}>Between </NavLink>
                            <NavLink to={"/shop-detail"}>Chairs</NavLink>
                            <NavLink to={"/shop-detail"}>Lawn</NavLink>
                            <NavLink to={"/shop-detail"}>Table</NavLink>
                            <NavLink to={"/shop-detail"}>Mantinance</NavLink>
                            <NavLink to={"/shop-detail"}>Room</NavLink>
                            <NavLink to={"/shop-detail"}>Landscape </NavLink>
                            <NavLink to={"/shop-detail"}>Bedroom </NavLink>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ShopSidebar;