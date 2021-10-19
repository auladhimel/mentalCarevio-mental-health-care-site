import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const [detail, setDetail] = useState({});

    console.log(service);
    console.log(serviceId);
    const { id, name } = service;

    useEffect(() => {
        const url = `/data.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    useEffect(() => {
        const singleService = service.find(service => service.id === serviceId)
        setDetail(service);
        console.log(singleService);
    }, [service])

    return (
        <div className="service-details">
            <h1>Service detail comming {serviceId}</h1>
            <p></p>
        </div>
    );
};

export default ServiceDetail;