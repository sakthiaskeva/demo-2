import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import GoogleMapReact from 'google-map-react';

var bnrimg = require('./../../images/banner/9.jpg');

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUs extends React.Component {
    render() {
        const defaultProps = {
            center: {
              lat: 34.073280,
              lng: -118.251410
            },
            zoom: 12
        };
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Contact Us Form" pagename="Contact us" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <form className="contact-form cons-contact-form bg-gray p-a30" method="post" action="#">
                                            <div className="contact-one">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="sx-separator-outer separator-left">
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                                            <h3 className="sep-line-one">Form</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="form-group">
                                                    <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" rows={4} className="form-control " required placeholder="Message" defaultValue={""} />
                                                </div>
                                                <div className="text-right">
                                                    <button name="submit" type="button" value="Submit" className="site-button btn-half"><span> submit</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="contact-info block-shadow bg-white bg-center p-a40" style={{ backgroundImage: 'url(images/background/bg-map.png)' }}>
                                            <div>
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="sx-separator-outer separator-left">
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                                            <h3 className="sep-line-one">Info</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="sx-icon-box-wraper left p-b30">
                                                    <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Phone number</h5>
                                                        <p>(123) 456-78910</p>
                                                    </div>
                                                </div>
                                                <div className="sx-icon-box-wraper left p-b30">
                                                    <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Email address</h5>
                                                        <p>7xthemehelp@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="sx-icon-box-wraper left">
                                                    <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Address info</h5>
                                                        <p>09, Martin Street B190 Polo Alto, San Francisco</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gmap-outline">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                            >
                            <AnyReactComponent lat={34.073280} lng={-118.251410} text={<i className="fa fa-map-marker" />}                                        />
                        </GoogleMapReact>                        
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ContactUs;