import React from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

class Header3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { logo: require('./../../images/logo-1.png') };
    }

    state = { isSearchActive: false };

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });
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

        return (
            <>
                <header className="site-header header-style-3 nav-wide header-fixed mobile-sider-drawer-menu">
                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar bg-white">
                            <div className="container-fluid clearfix">
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
                                        <ul className="list-unstyled social-bx text-black d-flex flex-wrap align-content-center">
                                            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true" /><span className="sr-only">Facebook</span></a></li>
                                            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true" /><span className="sr-only">Instagram</span></a></li>
                                            <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true" /><span className="sr-only">Twitter</span></a></li>
                                            <li><a href="https://www.google.com" target="_blank" rel="noreferrer"><i className="fa fa-google" aria-hidden="true" /><span className="sr-only">Google</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* EXTRA Nav */}
                                {/* MAIN NAVIGATION */}
                                <div className="header-nav navbar-collapse collapse justify-content-center collapse">
                                    <Navigation />
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

export default Header3;

