import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        reviewername: 'Rosalina D. William',
        position: 'Architect',
        review: 'Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support.'
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        reviewername: 'Mitchal Jhon',
        position: 'Architect',
        review: 'Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!'
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        reviewername: 'Barney Smith',
        position: 'Interior designer',
        review: 'Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support.'
    },
    {
        image: require('./../../images/testimonials/pic4.jpg'),
        reviewername: 'Rosalina D. William',
        position: 'Architect',
        review: 'Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!'
    }
]

var bgimg1 = require('./../../images/background/bg6.jpg');
var bgimg2 = require('./../../images/background/cross-line2.png');

class Testimonials2 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        };
        return (
            <>
                <div className="section-full mobile-page-padding bg-repeat p-t80 p-b80" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className={`${this.props.separatoralignment} sx-separator-outer`}>
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                        <h3 className="sep-line-one">Testimonial</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* TESTIMONIAL START */}
                            <OwlCarousel className="owl-carousel testimonial-home-two owl-btn-vertical-center" {...options}>
                                {testimonials.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="testimonial-1 hover-animation-1 bg-gray">
                                            <div className="testimonial-detail clearfix">
                                                <div className="testimonial-pic  scale-in-center"><img src={item.image} alt="" width={100} height={100} /></div>
                                                <span className="testimonial-position">{item.position}</span>
                                                <h4 className="testimonial-name">{item.reviewername}</h4>
                                                <span className="fa fa-quote-right" />
                                            </div>
                                            <div className="testimonial-text">
                                                <p>{item.review}</p>
                                            </div>
                                        </div>
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

export default Testimonials2;