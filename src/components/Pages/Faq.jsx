import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/7.jpg');

class Faq extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Frequently Asked Questions" pagename="Faq" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-t80 p-b80 inner-page-padding">
                        <div className="container">
                            <div className="faq-1">
                                {/* TITLE START */}
                                <div className="section-head">
                                    <div className="sx-separator-outer separator-left">
                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                            <h3 className="sep-line-one">FAQ</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* TITLE END */}
                                <div className="row">
                                    <div className="col-md-6 faq-list">
                                        {/* Accordian */}
                                        <div>
                                            <h4>How do we work?</h4>
                                            <p>Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities..</p>
                                        </div>
                                        <div>
                                            <h4>How long will it take to build my project?</h4>
                                            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popular ised sheets containing Lorem Ipsum passagese.</p>
                                        </div>
                                        <div>
                                            <h4>What services do we offer?</h4>
                                            <p>Graphic design lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        {/* Accordian */}
                                        <div className="sx-accordion acc-bg-gray" id="accordion5">
                                            <div className="panel sx-panel">
                                                <div className="acod-head acc-actives">
                                                    <h4 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                            How do we work?
                                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne5" className="acod-body collapse show">
                                                    <div className="acod-content p-a15">
                                                        <p>Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel sx-panel">
                                                <div className="acod-head">
                                                    <h4 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                            What services do we offer?
                                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseTwo5" className="acod-body collapse">
                                                    <div className="acod-content p-a15"><p>Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities.</p></div>
                                                </div>
                                            </div>
                                            <div className="panel sx-panel">
                                                <div className="acod-head">
                                                    <h4 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                           Do you have a purchasing fee on the product?
                                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseThree5" className="acod-body collapse">
                                                    <div className="acod-content p-a15"><p>Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities.</p></div>
                                                </div>
                                            </div>
                                            <div className="panel sx-panel">
                                                <div className="acod-head">
                                                    <h4 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseFour5" className="collapsed" data-parent="#accordion5">
                                                            How long will it take to to design and build my project?
                                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseFour5" className="acod-body collapse">
                                                    <div className="acod-content p-a15"><p>Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities..</p></div>
                                                </div>
                                            </div>
                                            <div className="panel sx-panel">
                                                <div className="acod-head">
                                                    <h4 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseFive5" className="collapsed" data-parent="#accordion5">
                                                            What should I have at our first meeting for my project?
                                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseFive5" className="acod-body collapse">
                                                    <div className="acod-content p-a15">
                                                    <p>Progressively generate synergistic total linkage through cross media are intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client cent outsourcing with excellent communities.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default Faq;