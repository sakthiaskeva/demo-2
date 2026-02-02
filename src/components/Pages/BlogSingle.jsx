import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/10.jpg');
var bgimg1 = require('./../../images/background/cross-line2.png');

class BlogSingle extends React.Component {
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
                <div className="page-content ">
                    <Banner title="Blog Single Style" pagename="Blog Single" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-t80 p-b50 inner-page-padding">
                        <div className="container">
                            <div className="blog-single-space max-w900 ml-auto mr-auto">
                                {/* BLOG START */}
                                <div className="blog-post blog-detail text-black">
                                    <div className="sx-post-media">
                                        <div className="portfolio-item">
                                            <img className="img-responsive" src={require('./../../images/blog/default/thum1.jpg')} alt=""/>
                                        </div>
                                    </div>
                                    <div className="sx-post-meta  m-t20">
                                        <ul>
                                            <li className="post-date"><strong>20 </strong> <span>Septembar 2022</span> </li>
                                            <li className="post-author"><NavLink to={"#"}>By <span>Admin</span></NavLink> </li>
                                            <li className="post-category"><NavLink to={"#"}><span>Architecture</span></NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h3 className="post-title">Blog post with image slider there are many variations of passages.</h3>
                                    </div>
                                    <div className="sx-post-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>
                                        <p>
                                        </p><blockquote className="bdr-1 bdr-solid bdr-gray author-quote">
                                            <h4 className="m-b0">We let our quality work and commitment to customer satisfaction be our slogan. quality you deserve and dependability you can count on.<i className="fa fa-quote-left" /> </h4>
                                            <div className="p-t15">
                                                <strong>Jessica Mcdade</strong>
                                                <span>Interior Designer</span>
                                            </div>
                                        </blockquote>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img src={require('./../../images/blog/default/thum1.jpg')} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="sx-box m-b30">
                                                    <div className="sx-media">
                                                        <img src={require('./../../images/blog/default/thum2.jpg')} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with the . Proin tincidunt tellus ac porta volutpat. Cras mattis congue lacus id bibendum. Mauris ut sodales libero. Maecenas feugiat sit amet enim in accumsan. Here, then, is what I wanted to tell you of my architecture. I created it with courage and idealism, but also with an awareness of the fact that what is important is life, friends, and attempting to make this unjust world a better place in which to live.</p>
                                    </div>
                                    <div className="autor-post-tag-share p-a30 bg-gray">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="widget_tag_cloud m-b15">
                                                    <h5 className="tagcloud">Tags</h5>
                                                    <div className="tagcloud">
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
                                            <div className="col-md-12">
                                                <div className="clearfix single-post-share">
                                                    <h5>Share this Post:</h5>
                                                    <div className="widget_social_inks">
                                                        <ul className="social-icons social-md social-square social-dark m-b0">
                                                            <li><a href="https://www.facebook.com" target="_blank"  rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i><span className="sr-only">Facebook</span></a></li>
                                                            <li><a href="https://www.twitter.com" target="_blank"  rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a></li>
                                                            <li><a href="https://rss.com" target="_blank"  rel="noreferrer"><i className="fa fa-rss" aria-hidden="true"></i><span className="sr-only">RSS</span></a></li>
                                                            <li><a href="https://www.youtube.com" target="_blank"  rel="noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i><span className="sr-only">YouTube</span></a></li>
                                                            <li><a href="https://www.instagram.com" target="_blank"  rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-controls p-t30">
                                        <div className="d-flex justify-content-between">
                                            <div className="prev-post"><NavLink to={"#"}>Prev Article</NavLink></div>
                                            <div className="next-post"><NavLink to={"#"}>Next Article</NavLink></div>
                                        </div>
                                    </div>
                                </div>
                                {/* OUR BLOG START */}
                                {/* TITLE START */}
                                <div className="section-head">
                                    <div className="sx-separator-outer separator-left">
                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                            <h3 className="sep-line-one">Blog</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* TITLE END */}
                                {/* IMAGE CAROUSEL START */}
                                <div className="section-content">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12">
                                            <div className="blog-post blog-grid date-style-2">
                                                <div className="sx-post-media sx-img-effect img-reflection">
                                                    <NavLink to={"/blog-masonry"}><img src={require('./../../images/blog/blog-grid/pic1.jpg')} alt=""/></NavLink>
                                                </div>
                                                <div className="sx-post-info p-t30">
                                                    <div className="sx-post-meta ">
                                                        <ul>
                                                            <li className="post-date"><strong>05</strong> <span>Sep</span> </li>
                                                            <li className="post-author"><NavLink to={"/blog-masonry"}>By <span>John</span></NavLink> </li>
                                                            <li className="post-comment"> <NavLink to={"/blog-masonry"}>5 Comments</NavLink> </li>
                                                        </ul>
                                                    </div>
                                                    <div className="sx-post-title ">
                                                        <h4 className="post-title"><NavLink to={"/blog-masonry"}>We’ll nail your next project, because...</NavLink></h4>
                                                    </div>
                                                    <div className="sx-post-readmore">
                                                        <NavLink to={"/blog-masonry"} title="READ MORE" rel="bookmark" className="site-button-link">View More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="blog-post blog-grid date-style-2">
                                                <div className="sx-post-media sx-img-effect img-reflection">
                                                    <NavLink to={"/blog-masonry"}><img src={require('./../../images/blog/blog-grid/pic2.jpg')} alt=""/></NavLink>
                                                </div>
                                                <div className="sx-post-info p-t30">
                                                    <div className="sx-post-meta ">
                                                        <ul>
                                                            <li className="post-date"><strong>25</strong> <span>Sep</span> </li>
                                                            <li className="post-author"><NavLink to={"/blog-masonry"}>By <span>John</span></NavLink> </li>
                                                            <li className="post-comment"> <NavLink to={"/blog-masonry"}>5 Comments</NavLink> </li>
                                                        </ul>
                                                    </div>
                                                    <div className="sx-post-title ">
                                                        <h4 className="post-title"><NavLink to={"/blog-masonry"}>Helping you and your house become...</NavLink></h4>
                                                    </div>
                                                    <div className="sx-post-readmore">
                                                        <NavLink to={"/blog-masonry"} title="READ MORE" rel="bookmark" className="site-button-link">View More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="blog-post blog-grid date-style-2">
                                                <div className="sx-post-media sx-img-effect img-reflection">
                                                    <NavLink to={"/blog-masonry"}><img src={require('./../../images/blog/blog-grid/pic3.jpg')} alt=""/></NavLink>
                                                </div>
                                                <div className="sx-post-info p-t30">
                                                    <div className="sx-post-meta ">
                                                        <ul>
                                                            <li className="post-date"><strong>05</strong> <span>Sep</span> </li>
                                                            <li className="post-author"><NavLink to={"/blog-masonry"}>By <span>John</span></NavLink> </li>
                                                            <li className="post-comment"> <NavLink to={"/blog-masonry"}>5 Comments</NavLink> </li>
                                                        </ul>
                                                    </div>
                                                    <div className="sx-post-title ">
                                                        <h4 className="post-title"><NavLink to={"/blog-masonry"}>Creating quality urban lifestyles, building...</NavLink></h4>
                                                    </div>
                                                    <div className="sx-post-readmore">
                                                        <NavLink to={"/blog-masonry"} title="READ MORE" rel="bookmark" className="site-button-link">View More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* OUR BLOG END */}
                                <div className="clear" id="comment-list">
                                    <div className="comments-area" id="comments">
                                        <h2 className="comments-title">3 Comments</h2>
                                        <div className="comments-outer p-tb30">
                                            {/* COMMENT LIST START */}
                                            <ol className="comment-list">
                                                <li className="comment">
                                                    {/* COMMENT BLOCK */}
                                                    <div className="comment-body">
                                                        <div className="comment-meta">
                                                            <NavLink to={"#"}>20 Sep 2022</NavLink>
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
                                                                    <NavLink to={"#"}>22 Sep 2022</NavLink>
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
                                                                            <NavLink to={"#"}>24 Oct 2019</NavLink>
                                                                        </div>
                                                                        <div className="comment-author vcard">
                                                                            <img className="avatar photo" src={require('./../../images/testimonials/pic2.jpg')} alt="" />
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
                                                        <input defaultValue="" className="form-control" type="text" name="user-comment" placeholder="Author" id="author" />
                                                    </p>
                                                    <p className="comment-form-email">
                                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                                        <input defaultValue="" className="form-control" type="text" name="email" placeholder="Email" id="email" />
                                                    </p>
                                                    <p className="comment-form-url">
                                                        <label htmlFor="url">Website</label>
                                                        <input defaultValue="" className="form-control" type="text" name="url" placeholder="Website" id="url" />
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
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default BlogSingle;