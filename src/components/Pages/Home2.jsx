import React from 'react';
import Header2 from '../Common/Header2';
import Footer2 from '../Common/Footer2';
import Slider2 from './../Elements/Slider2';
import About2 from './../Elements/About2';
import WhatWeDo2 from './../Elements/WhatWeDo2';
import Projects2 from './../Elements/Projects2';
import Team2 from './../Elements/Team2';
import Services2 from './../Elements/Services2';
import Blog1 from './../Elements/Blog1';
import Statistics1 from './../Elements/Statistics1';
import Testimonials2 from './../Elements/Testimonials2';

class Home2 extends React.Component {
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
                <Header2 />
                <div className="page-content">
                    <Slider2 />
                    <About2 />
                    <WhatWeDo2 />
                    <Projects2 />
                    <Team2 />
                    <Services2 />
                    <Blog1 />
                    <Statistics1 />
                    <Testimonials2 separatoralignment="separator-center" />
                </div>

                <Footer2 />
            </>
        );
    };
};

export default Home2;