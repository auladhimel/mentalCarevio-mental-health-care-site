import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideVirus, faPhoneAlt, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';


const elementHeadSideVirus = <FontAwesomeIcon icon={faHeadSideVirus} />
const elementfaPhoneAlt = <FontAwesomeIcon icon={faPhoneAlt} />
const elementfaArrowCircleRight = <FontAwesomeIcon icon={faArrowCircleRight} />
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <div><Link to="/home"><h3>{elementHeadSideVirus} Mental Carevio</h3></Link></div>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">Pricing</Link>
                <Link to="/contact">Psychatrits</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                {user?.displayName && <span className="font" style={{ backgroundColor: '#EEA676', color: 'white', padding: '5px', borderRadius: '2px', marginLeft: '50px' }}>{user.displayName} </span>}
                {
                    user?.displayName && <button className="font" onClick={logOut}>Logout {elementfaArrowCircleRight}</button>}
            </div>
            <div className="phone">
                <p><span className="phone-icon">{elementfaPhoneAlt} </span>
                    +1 (202) 588-6500</p>
            </div>
        </div>
    );
};

export default Header;