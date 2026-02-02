import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

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
        description: 'We combine Interior and Exterior Design services and often provide...',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/square/pic9.jpg'),
        title: 'Modern Bathroom',
        description: 'Landscape plans for drainage problems may also entail planting.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/square/pic10.jpg'),
        title: 'Dream House',
        description: 'We provide a range of architectural 3D modeling services to our customers...',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/portrait/pic6.jpg'),
        title: 'Vilters',
        description: 'Landscape plans for drainage problems may also entail planting beds away ...',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/projects/square/pic7.jpg'),
        title: 'Bellevue Projects',
        description: 'Project management is the process by which our team plans and executes...',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/projects/square/pic8.jpg'),
        title: 'Modish Interior',
        description: 'Our team also provides consultations on all architectural issues, even if you need...',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/projects/portrait/pic9.jpg'),
        title: 'Living Room',
        description: 'Landscape plans for drainage problems may also entail planting beds...',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/square/pic2.jpg'),
        title: 'Wall Interior',
        description: 'We combine Interior and Exterior Design services and often provide...',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/pic2.jpg'),
        title: 'Dream Home',
        description: 'We combine Interior and Exterior Design services and often provide...',
        filter: 'cat-3'
    },

    {
        image: require('./../../images/projects/portrait/pic3.jpg'),
        title: 'Queens Museum',
        description: 'We combine Interior and Exterior Design services and often provide...',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/square/pic1.jpg'),
        title: 'Life style building',
        description: 'Project management is the process by which our team plans and executes...',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/square/pic3.jpg'),
        title: 'Hotel Shears',
        description: 'Landscape plans for drainage problems may also entail planting beds...',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/pic4.jpg'),
        title: 'Modern Bathroom',
        description: 'We combine Interior and Exterior Design services and often provide...',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/square/pic9.jpg'),
        title: 'Dream House',
        description: 'Landscape plans for drainage problems may also entail planting beds...',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/square/pic10.jpg'),
        title: 'Life style building',
        description: 'Project management is the process by which our team plans and executes...',
        filter: 'cat-3'
    }
]

var bnrimg = require('./../../images/banner/8.jpg');
var bgimg1 = require('./../../images/background/cross-line.png');

class ProjectMasonaryNoGap3 extends React.Component {
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
                    <Banner title="Masonry 5 Columns" pagename="Project with Masonry 5 Columns" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                        {/* GALLERY CONTENT START */}
                        <div className="container">
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
                            <ul id="load-more-item-5" className="masonry-outer mfp-gallery work-grid clearfix list-unstyled no-col-gap m-b60">
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item col-lg-4 col-md-4 col-sm-6`}>
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
                                                <p>{item.description}</p>
                                                <NavLink to={"#"}><i className="link-plus bg-primary" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                            {/* GALLERY CONTENT END */}
                            <div className="text-center load-more-btn-outer" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                <button id="loadMorebtn-5" className="site-button-secondry btn-half"><span>Load More</span></button>
                            </div>
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ProjectMasonaryNoGap3;