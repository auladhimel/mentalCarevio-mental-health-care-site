import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeadSideVirus, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


const elementHeadSideVirus = <FontAwesomeIcon icon={faHeadSideVirus} />
const elementfaPhoneAlt = <FontAwesomeIcon icon={faPhoneAlt} />
const Header = () => {
    return (
        <div className="header">
            <div><Link to="/home"><h2>{elementHeadSideVirus} Mental Carevio</h2></Link></div>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            <div className="phone">
                <h5><span className="phone-icon">{elementfaPhoneAlt} </span>
                    +1 (202) 588-6500</h5>
            </div>
        </div>
    );
};

export default Header;