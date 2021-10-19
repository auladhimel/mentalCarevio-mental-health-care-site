import React from 'react';
import { Button, Carousel } from 'react-bootstrap';


import './Banner.css';
// banner component 
const Banner = () => {
    return (
        // slider 
        <Carousel className="slider">
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/vqxx5qc/banner-1.jpg"
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
                    src="https://i.ibb.co/rx1XR2r/banner-2.jpg"
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
                    src="https://i.ibb.co/1LkgYNM/banner-3.jpg"
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
                    src="https://i.ibb.co/6HSC8wq/banner-4.jpg"
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
                    src="https://i.ibb.co/XDn5D9c/banner-5.jpg"
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
                    src="https://i.ibb.co/SRD0K7J/banner-6.jpg"
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