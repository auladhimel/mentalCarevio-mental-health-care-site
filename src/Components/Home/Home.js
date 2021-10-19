import React from 'react';
import Banner from '../Banner/Banner';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';
import Speciality from '../Speciality/Speciality';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurTeam></OurTeam>
            <Speciality></Speciality>
        </div>
    );
};

export default Home;