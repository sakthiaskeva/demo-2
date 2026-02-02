import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider4 from './../Elements/Slider4';
import About1 from './../Elements/About1';
import WhatWeDo1 from './../Elements/WhatWeDo1';
import Testimonials1 from './../Elements/Testimonials1';
import Services1 from './../Elements/Services1';
import Projects1 from './../Elements/Projects1';
import ClientsLogo1 from './../Elements/ClientsLogo1';
import Team1 from './../Elements/Team1';

class Home4 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* SLIDER START */}
                    <Slider4 />
                    <About1 />
                    <WhatWeDo1 />
                    <Testimonials1 />
                    <Services1 />
                    <Projects1 />
                    <ClientsLogo1 />
                    <Team1 />
                </div>

                <Footer />
            </>
        );
    };
};

export default Home4;