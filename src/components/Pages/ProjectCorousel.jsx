import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Projects3 from './../Elements/Projects3';
import Projects4 from '../Elements/Projects4';
import SimilarProjects from './../Elements/SimilarProjects';

var bnrimg = require('./../../images/banner/3.jpg');

class ProjectCorousel extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Carousel All Type" pagename="Project Carousel" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    
                    <Projects3 alignment="separator-left" title="Carousel style 1" bgcolor="bg-gray" />
                    <Projects4 />
                    <SimilarProjects alignment="separator-left" title="Carousel style 3" />
                    
                </div>

                <Footer />
            </>
        );
    };
};

export default ProjectCorousel;