import React from 'react';
import Header4 from './../Common/Header4';
import Footer2 from './../Common/Footer2';
import Slider5 from './../Elements/Slider5';
import About4 from './../Elements/About4';

class Home5 extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Slider5 />
                    <About4 />
                </div>
                <Footer2 />
            </>
        );
    };
};

export default Home5;