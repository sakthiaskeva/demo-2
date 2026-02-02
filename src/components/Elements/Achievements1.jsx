import React from 'react';

const achievements1 = [
    {
        title: 'Global Kitchen and Bath',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '01',
        month: 'Oct',
        year: '2013',
    },
    {
        title: 'Kitchen & Bath Gallery',
        description: 'A multitask profession which creates any land in beautiful creation',
        date: '20',
        month: 'Mar',
        year: '2014',
    },
    {
        title: 'International Fine Art',
        description: 'Don’t know how to go with plan, give everything to interior design with calm.',
        date: '28',
        month: 'Aug',
        year: '2014',
    },
    {
        title: 'Newyork Creative Art',
        description: 'Every work has its professional which can perform their task with all the best standards.',
        date: '20',
        month: 'Oct',
        year: '2015',
    }
]

const achievements2 = [
    {
        title: 'Building Center of UAE',
        description: 'Giving your home a new style every style. good design for good moments.',
        date: '27',
        month: 'Nov',
        year: '2015',
    },
    {
        title: 'Art Contest in USA',
        description: 'Interior design, a fine line with more shine a design gives you, your deam house',
        date: '07',
        month: 'Mar',
        year: '2016',
    },
    {
        title: 'Asia Creative Competition',
        description: 'Give your consent, we design a perfect bend choose the style, we complete with our file',
        date: '19',
        month: 'July',
        year: '2017',
    },
    {
        title: 'Center of Gloucester',
        description: 'Scrambled it to make a type specimen book. remaining essentially. ',
        date: '27',
        month: 'May',
        year: '2018',
    }
]

var bgimg1 = require('./../../images/background/bg-map.png');
var bgimg2 = require('./../../images/background/cross-line2.png');

class Achievements1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 sx-bg-secondry bg-no-repeat bg-bottom-center mobile-page-padding" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-center">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                    <h3 className="sep-line-one">We Achieved</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 m-b30">
                                    {achievements1.map((item, index) => (
                                        <div className="sx-box our-story text-white" key={index}>
                                            <div className="mt-media our-story-info d-flex justify-content-start">
                                                <div className="our-story-time"><span className="date">{item.date}</span><span className="month">{item.month}</span></div>
                                                <h4 className="text-uppercase our-story-year">{item.year}</h4>
                                            </div>
                                            <div className="our-story-detail">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    {achievements2.map((item, index) => (
                                        <div className="sx-box our-story text-white" key={index}>
                                            <div className="mt-media our-story-info d-flex justify-content-start">
                                                <div className="our-story-time"><span className="date">{item.date}</span><span className="month">{item.month}</span></div>
                                                <h4 className="text-uppercase our-story-year">{item.year}</h4>
                                            </div>
                                            <div className="our-story-detail">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Achievements1;