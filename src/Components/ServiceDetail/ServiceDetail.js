import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState({});
    console.log(serviceId);
    const { id, name } = service;

    useEffect(() => {
        const url = `/data.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(service);
    return (
        <div>
            <h1>Service detail comming {serviceId}</h1>
            <p>{name}</p>
        </div>
    );
};

export default ServiceDetail;