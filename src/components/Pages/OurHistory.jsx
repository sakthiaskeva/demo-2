import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

const locations = [
    {
        image: require('./../../images/our-history/4.jpg'),
        title: 'Strategic Planning and Programming.',
        description: 'I just wanted to say thank you and the team very much for the brilliant service around renovating the floors at our house. You were absolutely brilliant and we can see you’ve gone the extra mile matching the floors between rooms etc. You’ve kept the place really tidy too, cannot ask for more.',
    },
    {
        image: require('./../../images/our-history/1.jpg'),
        title: 'Concept Development.',
        description: 'Fantastic service from start to finish. After our ceiling collapsed we never thought our damaged floor would look so good again. These guys worked in a tight time frame and were very accommodating to the other trades working in the same area to produce brilliant results and restore our badly damaged floor to look like new!',
    },
    {
        image: require('./../../images/our-history/2.jpg'),
        title: 'Design Development.',
        description: 'The floor looks magnificent and the parquet in the hall sets it off beautifully. Your men were excellent, you were delightful and nothing was too much trouble for you. You have very tidy workers, covering everything, and the house was left in a good shape as the condition allowed.',
    },
    {
        image: require('./../../images/our-history/3.jpg'),
        title: 'Construction Documentation.',
        description: 'I just wanted to say thank you and the team very much for the brilliant service around renovating the floors at our house. You were absolutely brilliant and we can see you’ve gone the extra mile matching the floors between rooms etc. You’ve kept the place really tidy too, cannot ask for more.',
    }
]

var bnrimg = require('./../../images/banner/5.jpg');

class OurHistory extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Our History" pagename="Our History" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    {/* ABOUT COMPANY SECTION START */}
                    <div className="section-full p-t80 p-b50	 bg-white inner-page-padding">
                        <div className="container">
                            <div className="section-content ">
                                <div className="our-history text-black">
                                    {locations.map((item, index) => (
                                        <div className="row" key={index}>
                                            <div className="col-12 pic-bg-border">
                                                <div className="our-history-pic bg-no-repeat bg-center bg-cover" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="our-history-content m-b30">
                                                    <div className="large-title">
                                                        <h2 className="m-t0">{item.title}</h2>
                                                    </div>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ABOUT COMPANY SECTION END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default OurHistory;