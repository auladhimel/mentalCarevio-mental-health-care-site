import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import firstBanner from '../../images/banner_1.jpg';
import secondBanner from '../../images/banner_2.jpg';
import thirdBanner from '../../images/banner_3.jpg';
import fourthBanner from '../../images/banner_4.jpg';
import fifthBanner from '../../images/banner_5.jpg';
import sixthBanner from '../../images/banner_6.jpg';

import './Banner.css';

const Banner = () => {
    return (
        <Carousel className="slider">
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={firstBanner}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="caption">
                        <p className="depression-solution fw-bold">EVERY DEPRESSION SOLUTION</p>
                        <h1>Best Psychologist Makes Excellent</h1>
                        <h4>Mental illness is not contagious you won't catch it by being kind</h4>
                        <button className="button"><small>MAKE APPOINMENT</small></button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={secondBanner}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className="caption">
                        <p className="depression-solution fw-bold">EVERY DEPRESSION SOLUTION</p>
                        <h1>Best Psychologist Makes Excellent</h1>
                        <h4>Mental illness is not contagious you won't catch it by being kind</h4>
                        <button className="button"><small>MAKE APPOINMENT</small></button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={thirdBanner}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <div className="caption">
                        <p className="depression-solution fw-bold">EVERY DEPRESSION SOLUTION</p>
                        <h1>Best Psychologist Makes Excellent</h1>
                        <h4>Mental illness is not contagious you won't catch it by being kind</h4>
                        <button className="button"><small>MAKE APPOINMENT</small></button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={fourthBanner}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className="caption">
                        <p className="depression-solution fw-bold">EVERY DEPRESSION SOLUTION</p>
                        <h1>Best Psychologist Makes Excellent</h1>
                        <h4>Mental illness is not contagious you won't catch it by being kind</h4>
                        <button className="button"><small>MAKE APPOINMENT</small></button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={fifthBanner}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className="caption">
                        <p className="depression-solution fw-bold">EVERY DEPRESSION SOLUTION</p>
                        <h1>Best Psychologist Makes Excellent</h1>
                        <h4>Mental illness is not contagious you won't catch it by being kind</h4>
                        <button className="button"><small>MAKE APPOINMENT</small></button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={sixthBanner}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className="caption">
                        <p className="depression-solution fw-bold">EVERY DEPRESSION SOLUTION</p>
                        <h1>Best Psychologist Makes Excellent</h1>
                        <h4>Mental illness is not contagious you won't catch it by being kind</h4>
                        <button className="button"><small>MAKE APPOINMENT</small></button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;