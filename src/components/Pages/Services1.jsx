import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import WhatWeDo6 from './../Elements/WhatWeDo6';
import Services6 from './../Elements/Services6';
import Services7 from './../Elements/Services7';
import ClientsLogo2 from './../Elements/ClientsLogo2';

var bnrimg = require('./../../images/banner/6.jpg');

class Service1 extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Service Style One" pagename="Services 1" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    <WhatWeDo6 />
                    <Services6 />
                    <Services7 />
                    <ClientsLogo2 bgcolor="bg-gray" />
                </div>
                <Footer />
            </>
        );
    };
};

export default Service1;