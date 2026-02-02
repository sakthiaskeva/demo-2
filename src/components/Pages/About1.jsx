import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About2 from './../Elements/About2';
import WhatWeDo6 from './../Elements/WhatWeDo6';
import Achievements1 from './../Elements/Achievements1';
import Team2 from './../Elements/Team2';
import Testimonials2 from './../Elements/Testimonials2';

var bnrimg = require('./../../images/banner/5.jpg');

class About1 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="About Company" pagename="About 1" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    <About2 />
                    <WhatWeDo6 />
                    <Achievements1 />
                    <Team2 />
                    <Testimonials2 separatoralignment="separator-center" />
                </div>

                <Footer />
            </>
        );
    };
};

export default About1;