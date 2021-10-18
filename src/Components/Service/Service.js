import React from 'react';

const Service = (props) => {
    console.log('this is props', props);
    const { name, description, image } = props.service;

    return (
        < div className="single-service" >
            <h2>this is service</h2>
            <h1></h1>
            <div className="image">
                <img src={image} alt="" />
            </div>
            {/* single service text  */}
            <div className="information">
                <h3 className="prices">{name}</h3>
                <p className="description">{description}</p>
                <button className="button">Read More</button>
            </div>
        </div >
    );
};

export default Service;