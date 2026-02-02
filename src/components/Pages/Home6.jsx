import React from 'react';
import Header4 from './../Common/Header4';
import Footer2 from './../Common/Footer2';
import Slider6 from './../Elements/Slider6';
import WhatWeDo1 from './../Elements/WhatWeDo1';
import Projects5 from './../Elements/Projects5';
import SimilarProjects from './../Elements/SimilarProjects';
import Services3 from './../Elements/Services3';
import ClientsLogo2 from './../Elements/ClientsLogo2';

class Home6 extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Slider6 />
                    <WhatWeDo1 />
                    <Projects5 />
                    <SimilarProjects alignment="separator-center" title="Similar Project" />
                    <Services3 />
                    <ClientsLogo2 bgcolor="bg-white" />
                </div>

                <Footer2 />
            </>
        );
    };
};

export default Home6;