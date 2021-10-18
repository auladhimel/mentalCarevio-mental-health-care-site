import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services">
            <p>Services</p>
            <h1>Learn new skills</h1>
            <div className="Service-container">
                {
                    // looping for getting single course component 
                    services.slice(0, 6).map(service => <Service service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;