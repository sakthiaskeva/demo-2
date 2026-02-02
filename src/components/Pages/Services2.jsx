import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Services1 from './../Elements/Services1';
import About3 from './../Elements/About3';
import Statistics1 from './../Elements/Statistics1';
import Testimonials2 from './../Elements/Testimonials2';

var bnrimg = require('./../../images/banner/5.jpg');

class Service2 extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Service Style Two" pagename="Services 2" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    <Services1 />
                    <About3 bgcolor="bg-white"/>
                    <Statistics1 />
                    <Testimonials2 separatoralignment="separator-left" />
                </div>

                <Footer />
            </>
        );
    };
};

export default Service2;