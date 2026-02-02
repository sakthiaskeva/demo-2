import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const logos = [
    { image: require('./../../images/client-logo/1.png') },
    { image: require('./../../images/client-logo/2.png') },
    { image: require('./../../images/client-logo/3.png') },
    { image: require('./../../images/client-logo/4.png') },
    { image: require('./../../images/client-logo/5.png') },
    { image: require('./../../images/client-logo/6.png') }
]

class ClientsLogo2 extends React.Component {
    render() {
        const options = {
            loop: true,
            margin: 30,
            autoplay: true,
            nav: false,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                767: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        };
        return (
            <>
                <div className={`${this.props.bgcolor} section-full`}>
                    <div className="container">
                        <div className="section-content p-tb10 owl-btn-vertical-center">
                            <OwlCarousel className="owl-carousel home-client-carousel-2" {...options}>
                                {logos.map((item, index) => (
                                    <div className="item" key={index}>
                                        <NavLink to={"/about-2"} className="client-logo-pic">
                                            <img src={item.image} alt="" />
                                            <div>
                                                <span>View More</span>
                                            </div>
                                        </NavLink>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ClientsLogo2;