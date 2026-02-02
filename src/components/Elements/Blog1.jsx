import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        image: require('./../../images/blog/blog-grid/pic4.jpg'),
        title: 'We’ll nail your next project, because nobody wants...',
        author: 'John',
        date: '5',
        month: 'SEP',
        comments: '5 Comment'
    },
    {
        image: require('./../../images/blog/blog-grid/pic2.jpg'),
        title: 'Flooring Pro\'s Secrets That Can Raise Your Home Value...',
        author: 'John',
        date: '25',
        month: 'SEP',
        comments: '5 Comment'
    },
    {
        image: require('./../../images/blog/blog-grid/pic3.jpg'),
        title: 'Best Laminate & Hardwood Flooring Trends For 2019...',
        author: 'John',
        date: '5',
        month: 'SEP',
        comments: '5 Comment'
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Blog1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding bg-white p-t80 p-b50 mobile-page-padding">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">Blog</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* IMAGE CAROUSEL START */}
                            <div className="section-content">
                                <div className="row justify-content-center">
                                {blogs.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                            <div className="sx-post-media sx-img-effect img-reflection">
                                                <NavLink to={"/blog-single"}><img src={item.image} alt="" /></NavLink>
                                            </div>
                                            <div className="sx-post-info p-t30">
                                                <div className="sx-post-meta ">
                                                    <ul>
                                                        <li className="post-date"><strong>{item.date}</strong> <span>{item.month}</span> </li>
                                                        <li className="post-author"><NavLink to={"/blog-single"}>By <span>{item.author}</span></NavLink> </li>
                                                        <li className="post-comment"> <NavLink to={"/blog-single"}>{item.comments}</NavLink> </li>
                                                    </ul>
                                                </div>
                                                <div className="sx-post-title ">
                                                    <h4 className="post-title"><NavLink to={"/blog-single"}>{item.title}</NavLink></h4>
                                                </div>
                                                <div className="sx-post-readmore">
                                                    <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">View More</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                               </div>
                            </div>
                        </div>
                        <div className="hilite-title text-left p-l50 text-uppercase">
                            <strong>Blog</strong>
                        </div>
                    </div>
            </>
        );
    }
};

export default Blog1;