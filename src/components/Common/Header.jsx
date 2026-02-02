import React from 'react';
import Navigation from '../Common/Navigation';
import { NavLink } from 'react-router-dom';

var bnr = require('./../../images/background/bg-map.png');

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { logo: require('./../../images/logo-1.png') };
    }

    state = { isSearchActive: false, isQuoteActive: false };

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });
    };

    handleQuoteToggle = () => {
        this.setState({ isQuoteActive: !this.state.isQuoteActive });
    };

    componentDidMount() {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {
            this.setState({ logo: logopath });
        };
    }

    render() {

        const isSearchActive = this.state.isSearchActive;
        const isQuoteActive = this.state.isQuoteActive;

        return (
            <>
                <header className="site-header header-style-1 nav-wide mobile-sider-drawer-menu">
                    <div className="top-bar bg-gray">
                        <div className="container">
                            <div className="d-flex justify-content-end">
                                <ul className="list-unstyled e-p-bx">
                                    <li><span>Mail us:</span> 7xthemehelp@gmail.com</li>
                                    <li><span>Call us:</span>(075) 123-7654</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar header-left-gray-block bg-white">
                            <div className="container clearfix">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"./"}>
                                            <img src={this.state.logo} alt="Inteshape" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />
                                </button>
                                {/* EXTRA NAV */}
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <NavLink to={"#"} onClick={this.handleSearchToggle}>
                                            <i className="fa fa-search" />
                                        </NavLink>
                                    </div>
                                    <div className="extra-cell">

                                        <div className="contact-slide-show">
                                            <NavLink to={"#"} className="get-in-touch-btn from-top" onClick={this.handleQuoteToggle}>
                                                Get in touch</NavLink></div>
                                    </div>
                                </div>
                                {/* EXTRA Nav */}
                                {/* MAIN NAVIGATION */}
                                <div className="header-nav nav-dark navbar-collapse collapse justify-content-start collapse">
                                    <Navigation />
                                </div>
                                {/* CONTACT */}
                                <div className="contact-slide-hide" style={{ backgroundImage: 'url(' + bnr + ')', right: isQuoteActive ? '0px' : '100%' }}>
                                    <div className="contact-nav">
                                        <NavLink to={"#"} className="contact_close" onClick={this.handleQuoteToggle}>×</NavLink>
                                        <div className="contact-nav-form">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12">
                                                    <div className=" contact-nav-info">
                                                        <div className="sx-icon-box-wraper left p-b30">
                                                            <div className="icon-xs inline-icon m-b20 scale-in-center"><i className="fa fa-phone" /></div>
                                                            <div className="icon-content">
                                                                <h6 className="m-t0">Phone number</h6>
                                                                <p>(075) 123-7654</p>
                                                            </div>
                                                        </div>
                                                        <div className="sx-icon-box-wraper left p-b30">
                                                            <div className="icon-xs inline-icon m-b20 scale-in-center"><i className="fa fa-envelope" /></div>
                                                            <div className="icon-content">
                                                                <h6 className="m-t0">Email address</h6>
                                                                <p>7xthemehelp@gmail.com</p>
                                                            </div>
                                                        </div>
                                                        <div className="sx-icon-box-wraper left p-b30">
                                                            <div className="icon-xs inline-icon m-b20 scale-in-center"><i className="fa fa-map-marker" /></div>
                                                            <div className="icon-content">
                                                                <h6 className="m-t0">Address info</h6>
                                                                <p>201 Liverpool Street, Suite 721, London</p>
                                                            </div>
                                                        </div>
                                                        <div className="full-social-bg">
                                                            <ul>
                                                                <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true" /><span className="sr-only">Facebook</span></a></li>
                                                                <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true" /><span className="sr-only">Instagram</span></a></li>
                                                                <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true" /><span className="sr-only">Twitter</span></a></li>
                                                                <li><a href="https://www.google.com" target="_blank" rel="noreferrer"><i className="fa fa-google" aria-hidden="true" /><span className="sr-only">Google</span></a></li>
                                                                <li><a href="https://www.tumblr.com" target="_blank" rel="noreferrer" className="tumblr"><i className="fa fa-tumblr" aria-hidden="true" /><span className="sr-only">Tumblr</span></a></li>
                                                                <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="youtube"><i className="fa fa-youtube" aria-hidden="true" /><span className="sr-only">YouTube</span></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-12 ">
                                                    <div className="contact-nav-field shadow-lg p-a30 bg-white" style={{ backgroundImage: "url(" + bnr + ")" }}>
                                                        <form className="cons-contact-form2 form-transparent" method="post" action="#">
                                                            <div className="input input-animate">
                                                                <label htmlFor="name">Name</label>
                                                                <input defaultValue="" type="text" name="username" id="name" required />
                                                                <span className="spin" />
                                                            </div>
                                                            <div className="input input-animate">
                                                                <label htmlFor="email">Email</label>
                                                                <input type="email" defaultValue="" name="email" id="email" required />
                                                                <span className="spin" />
                                                            </div>
                                                            <div className="input input-animate">
                                                                <label htmlFor="Phone">Phone</label>
                                                                <input type="text" name="phone" defaultValue="" id="Phone" required />
                                                                <span className="spin" />
                                                            </div>
                                                            <div className="input input-animate">
                                                                <label htmlFor="message">Textarea</label>
                                                                <textarea name="message" id="message" required defaultValue={""} />
                                                                <span className="spin" />
                                                            </div>
                                                            <div className="text-left p-t10">
                                                                <button type="button" className="site-button-secondry btn-half ">
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
                                {/* SITE SEARCH */}
                                <div id="search" className={isSearchActive ? "open" : null}>
                                    <span className="close" onClick={this.handleSearchToggle} />
                                    <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                        <div className="input-group">
                                            <input defaultValue="" name="q" type="search" placeholder="Type to search" />
                                            <span className="input-group-btn"><button type="button" className="search-btn"><i className="fa fa-search arrow-animation" /></button></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    };
};

export default Header;

