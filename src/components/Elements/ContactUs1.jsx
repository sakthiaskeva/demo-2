import React from 'react';

var bgimg1 = require('./../../images/background/bg-form.jpg');
var bgimg2 = require('./../../images/background/cross-line2.png');
var bgimg3 = require('./../../images/background/bg-map.png');

class ContactUs1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-tb80 mobile-page-padding bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                        <div className="section-content">
                            <div className="container get-in-touch-form">
                                {/* TITLE START */}
                                <div className="section-head">
                                    <div className="sx-separator-outer separator-left">
                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                            <h3 className="sep-line-one">Contact Us</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* TITLE END */}
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="contact-home1-left contact-home1-left-v2 shadow-lg bg-white p-a30" style={{ backgroundImage: 'url(' + bgimg3 + ')' }}>
                                            <form className="cons-contact-form2 form-transparent" method="post" action="form-handler.php">
                                                <div className="input input-animate">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" name="username" id="name" required />
                                                    <span className="spin" />
                                                </div>
                                                <div className="input input-animate">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" name="email" id="email" required />
                                                    <span className="spin" />
                                                </div>
                                                <div className="input input-animate">
                                                    <label htmlFor="Phone">Phone</label>
                                                    <input type="text" name="phone" id="Phone" required />
                                                    <span className="spin" />
                                                </div>
                                                <div className="input input-animate">
                                                    <label htmlFor="message">Textarea</label>
                                                    <textarea name="message" id="message" required defaultValue={""} />
                                                    <span className="spin" />
                                                </div>
                                                <div className="text-left p-t10">
                                                    <button type="submit" className="site-button-secondry btn-half ">
                                                        <span>  Submit Now</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default ContactUs1;