import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        image: require('./../../images/projects/portrait/pic1.jpg'),
        title: 'Chair Furniture',
        address: 'Muscat, Sultanate of Oman',
        filter: 'col-one'
    },
    {
        image: require('./../../images/projects/portrait/pic2.jpg'),
        title: 'Chair Furniture',
        address: 'Muscat, Sultanate of Oman',
        filter: 'col-two'
    },
    {
        image: require('./../../images/projects/portrait/pic3.jpg'),
        title: 'Chair Furniture',
        address: 'Muscat, Sultanate of Oman',
        filter: 'col-three'
    },
    {
        image: require('./../../images/projects/portrait/pic4.jpg'),
        title: 'Chair Furniture',
        address: 'Muscat, Sultanate of Oman',
        filter: 'col-four'
    },
    {
        image: require('./../../images/projects/portrait/pic5.jpg'),
        title: 'Chair Furniture',
        address: 'Muscat, Sultanate of Oman',
        filter: 'col-three'
    },
    {
        image: require('./../../images/projects/portrait/pic6.jpg'),
        title: 'Chair Furniture',
        address: 'Muscat, Sultanate of Oman',
        filter: 'col-two'
    },
    {
        image: require('./../../images/projects/portrait/pic7.jpg'),
        title: 'Chair Furniture',
        address: 'Muscat, Sultanate of Oman',
        filter: 'col-one'
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Projects4 extends React.Component {
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
        const options = {
            loop:true,
            autoplay:false,
            center: false,
            items:3,
            margin:40,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    margin:15
                },
                640:{
                    items:2,
                    margin:15
                },			
                800:{
                    items:3,
                    margin:20,
                },
                1200:{
                    items:4
                }			
                
            }
        };
        return (
            <>
                <div className="section-full p-tb80 bg-white inner-page-padding">
                    <div className="container-fluid">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-left">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">Carousel style 2</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="work-carousel-outer">
                                <OwlCarousel className="owl-carousel mfp-gallery project-carousel project-carousel4 owl-btn-vertical-center" {...options}>
                                    {projects.map((item, index) => (
                                        <div key={index} className={`${item.filter} item fadingcol overflow-hide`}>
                                            <div className="sx-box   image-hover-block">
                                                <div className="sx-thum-bx">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="sx-info  p-t20 text-white">
                                                    <h4 className="sx-tilte"><NavLink to={"/project-detail1"}>{item.title}</NavLink></h4>
                                                    <p className="m-b0">{item.address}</p>
                                                </div>
                                                <a className="mfp-link" href={item.image}>
                                                    <i className="fa fa-arrows-alt" aria-hidden="true" />
                                                    <span className="sr-only">View image</span>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
};

export default Projects4;