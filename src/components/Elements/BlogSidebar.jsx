import React from 'react';
import { NavLink } from 'react-router-dom';

class BlogSidebar extends React.Component {
    render() {
        return (
            <>
                <div className="side-bar p-a30 bg-gray">
                    {/* SEARCH */}
                    <div className="widget">
                        <h4 className="widget-title ">Search</h4>
                        <div className="search-bx p-a10 bg-white">
                            <form role="search" method="post" action="#">
                                <div className="input-group">
                                    <input name="news-letter" type="text" className="form-control bg-gray" placeholder="Write your text" />
                                    <span className="input-group-btn bg-gray">
                                        <button type="button" className="btn"><i className="fa fa-search" /></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* RECENT POSTS */}
                    <div className="widget  recent-posts-entry">
                        <h4 className="widget-title  ">Recent Posts</h4>
                        <div className="section-content p-a10 bg-white">
                            <div className="widget-post-bx">
                                <div className="widget-post clearfix">
                                    <div className="sx-post-media">
                                        <img src={require('./../../images/blog/recent-blog/pic1.jpg')} alt=""/>
                                    </div>
                                    <div className="sx-post-info">
                                        <div className="sx-post-header">
                                            <h6 className="post-title">Don’t get framed by the competition.</h6>
                                        </div>
                                        <div className="sx-post-meta">
                                            <ul>
                                                <li className="post-author">25 Sep 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-post clearfix">
                                    <div className="sx-post-media">
                                        <img src={require('./../../images/blog/recent-blog/pic2.jpg')} alt=""/>
                                    </div>
                                    <div className="sx-post-info">
                                        <div className="sx-post-header">
                                            <h6 className="post-title">building your dream house shouldn’t</h6>
                                        </div>
                                        <div className="sx-post-meta">
                                            <ul>
                                                <li className="post-author">25 Sep 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-post clearfix">
                                    <div className="sx-post-media">
                                        <img src={require('./../../images/blog/recent-blog/pic3.jpg')} alt="" />
                                    </div>
                                    <div className="sx-post-info">
                                        <div className="sx-post-header">
                                            <h6 className="post-title">Helping you and your house.</h6>
                                        </div>
                                        <div className="sx-post-meta">
                                            <ul>
                                                <li className="post-author">25 Sep 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Categories  */}
                    <div className="widget widget_services ">
                        <h4 className="widget-title">Categories</h4>
                        <ul className="p-a10 bg-white">
                            <li><NavLink to={"/blog-single"}>Home<span> (28)</span></NavLink></li>
                            <li><NavLink to={"/blog-single"}>Hotel<span> (05)</span></NavLink></li>
                            <li><NavLink to={"/blog-single"}>Rooms<span> (24)</span></NavLink></li>
                            <li><NavLink to={"/blog-single"}>Lawn<span> (15)</span></NavLink></li>
                            <li><NavLink to={"/blog-single"}>Appartment<span> (20)</span></NavLink></li>
                            <li><NavLink to={"/blog-single"}>Bathroom<span> (90)</span></NavLink></li>
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
                                <form role="search" method="post" action="#">
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
                    {/* OUR GALLERY  */}
                    <div className="widget widget_gallery mfp-gallery">
                        <h4 className="widget-title  ">Our Gallery</h4>
                        <ul className="p-a10 bg-white clearfix">
                            <li>
                                <div className="sx-post-thum">
                                    <a href={require('./../../images/gallery/pic1.jpg')} className="mfp-link"><img src={require('./../../images/gallery/thumb/pic1.jpg')} alt=""/></a>
                                </div>
                            </li>
                            <li>
                                <div className="sx-post-thum ">
                                    <a href={require('./../../images/gallery/pic2.jpg')} className="mfp-link"><img src={require('./../../images/gallery/thumb/pic2.jpg')} alt=""/></a>
                                </div>
                            </li>
                            <li>
                                <div className="sx-post-thum  ">
                                    <a href={require('./../../images/gallery/pic3.jpg')} className="mfp-link"><img src={require('./../../images/gallery/thumb/pic3.jpg')} alt="" /></a>
                                </div>
                            </li>
                            <li>
                                <div className="sx-post-thum ">
                                    <a href={require('./../../images/gallery/pic4.jpg')}  className="mfp-link"><img src={require('./../../images/gallery/thumb/pic4.jpg')} alt="" /></a>
                                </div>
                            </li>
                            <li>
                                <div className="sx-post-thum ">
                                    <a href={require('./../../images/gallery/pic5.jpg')} className="mfp-link"><img src={require('./../../images/gallery/thumb/pic5.jpg')} alt=""/></a>
                                </div>
                            </li>
                            <li>
                                <div className="sx-post-thum ">
                                    <a href={require('./../../images/gallery/pic6.jpg')} className="mfp-link"><img src={require('./../../images/gallery/thumb/pic6.jpg')} alt="" /></a>
                                </div>
                            </li>
                            <li>
                                <div className="sx-post-thum">
                                    <a href={require('./../../images/gallery/pic7.jpg')} className="mfp-link"><img src={require('./../../images/gallery/thumb/pic7.jpg')} alt="" /></a>
                                </div>
                            </li>
                            <li>
                                <div className="sx-post-thum ">
                                    <a href={require('./../../images/gallery/pic8.jpg')} className="mfp-link"><img src={require('./../../images/gallery/thumb/pic8.jpg')} alt=""/></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* TAGS */}
                    <div className="widget widget_tag_cloud">
                        <h4 className="widget-title">Tag Cloud</h4>
                        <div className="tagcloud p-a10 bg-white">
                            <NavLink to={"/blog-masonry"}>Kitchen</NavLink>
                            <NavLink to={"/blog-masonry"}>Food</NavLink>
                            <NavLink to={"/blog-masonry"}>Planining</NavLink>
                            <NavLink to={"/blog-masonry"}>Between </NavLink>
                            <NavLink to={"/blog-masonry"}>Chairs</NavLink>
                            <NavLink to={"/blog-masonry"}>Lawn</NavLink>
                            <NavLink to={"/blog-masonry"}>Table</NavLink>
                            <NavLink to={"/blog-masonry"}>Mantinance</NavLink>
                            <NavLink to={"/blog-masonry"}>Room</NavLink>
                            <NavLink to={"/blog-masonry"}>Landscape </NavLink>
                            <NavLink to={"/blog-masonry"}>Bedroom </NavLink>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default BlogSidebar;