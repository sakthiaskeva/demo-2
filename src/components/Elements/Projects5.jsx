import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Architecture", filter: ".cat-1" },
    { label: "Decore", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Residential", filter: ".cat-5" }
];

const projects = [
    {
        image: require('./../../images/projects/portrait/pic4.jpg'),
        title: 'Life style building',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/square/pic9.jpg'),
        title: 'Modern Bathroom',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/square/pic10.jpg'),
        title: 'Dream House',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/portrait/pic6.jpg'),
        title: 'Bellevue Projects',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/projects/square/pic7.jpg'),
        title: 'Modish Interior',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/projects/square/pic8.jpg'),
        title: 'Wall Interior',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/projects/portrait/pic9.jpg'),
        title: 'Dream Home',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/square/pic2.jpg'),
        title: 'Vilters',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/pic2.jpg'),
        title: 'Queens Museum',
        filter: 'cat-3'
    },

    {
        image: require('./../../images/projects/portrait/pic3.jpg'),
        title: 'Living Room',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/square/pic1.jpg'),
        title: 'Modern Bathroom',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/square/pic3.jpg'),
        title: 'Life style building',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/pic4.jpg'),
        title: 'Hotel Shears',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/square/pic9.jpg'),
        title: 'Dream House',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/square/pic10.jpg'),
        title: 'Life style building',
        filter: 'cat-3'
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');
var bgimg2 = require('./../../images/background/cross-line.png');

class Projects5 extends React.Component {
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
                <div className="section-full p-tb80 column-grid-4 inner-page-padding">
                        {/* GALLERY CONTENT START */}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">All Projects</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* Filter Nav START */}
                            <div className="filter-wrap p-b30 text-center">
                                <ul className="filter-navigation masonry-filter clearfix">
                                    <li className="active"><NavLink to={"#"} className="btn from-top" data-filter="*" data-hover="All">All</NavLink></li>
                                    {filters.map((item, index) => (
                                        <li key={index}><NavLink to={"#"} className="btn from-top" data-filter={item.filter} >{item.label}</NavLink></li>
                                    ))}
                                </ul>
                            </div>
                            {/* Filter Nav END */}
                            {/* GALLERY CONTENT START */}
                            <ul id="load-more-item-5" className="masonry-outer mfp-gallery work-grid row clearfix list-unstyled grid-5">
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item col-xl-3 col-lg-4  col-md-6 col-sm-12 m-b30`}>
                                        <div className="project-mas hover-shadow">
                                            <div className="image-effect-one">
                                                <img src={item.image} alt="" />
                                                <div className="figcaption">
                                                    <a className="mfp-link" href={item.image}>
                                                        <i className="fa fa-arrows-alt" aria-hidden="true" />
                                                        <span className="sr-only">View image</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="project-info p-a20 bg-gray">
                                                <h4 className="sx-tilte m-tb0"><NavLink to={"/project-detail1"}>{item.title}</NavLink></h4>
                                                <NavLink to={"#"}><i className="link-plus bg-primary" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                            {/* GALLERY CONTENT END */}
                            <div className="text-center load-more-btn-outer" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                <button id="loadMorebtn-5" className="site-button-secondry btn-half"><span>Load More</span></button>
                            </div>
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
            </>
        );
    }
};

export default Projects5;