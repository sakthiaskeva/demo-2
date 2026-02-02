import React from 'react';
import Header3 from './../Common/Header3';
import Footer3 from './../Common/Footer3';
import Slider3 from './../Elements/Slider3';
import About3 from './../Elements/About3';
import Achievements1 from './../Elements/Achievements1';
import WhatWeDo3 from './../Elements/WhatWeDo3';
import Projects3 from './../Elements/Projects3';
import Blog2 from './../Elements/Blog2';
import Services3 from './../Elements/Services3';
import Plans1 from './../Elements/Plans1';
import ContactUs1 from './../Elements/ContactUs1';
import ClientsLogo2 from './../Elements/ClientsLogo2';

class Home3 extends React.Component {
    render() {
        return (
            <>
                <Header3 />
                <div className="page-content">
                    <Slider3 />
                    <About3 bgcolor="bg-gray" />
                    <Achievements1 />
                    <WhatWeDo3 />
                    <Projects3 alignment="separator-center" title="Similar Project" bgcolor="bg-white" />
                    <Blog2 />
                    <Services3 />
                    <Plans1 />
                    <ContactUs1 />
                    <ClientsLogo2 bgcolor="bg-white" />
                </div>

                <Footer3 />
            </>
        );
    };
};

export default Home3;