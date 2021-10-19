import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideVirus, faPhoneAlt, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


const elementHeadSideVirus = <FontAwesomeIcon icon={faHeadSideVirus} />
const elementfaPhoneAlt = <FontAwesomeIcon icon={faPhoneAlt} />
const elementfaArrowCircleRight = <FontAwesomeIcon icon={faArrowCircleRight} />
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col><div className="about-footer">
                        <div>
                            <h4 className="mental-carevio">{elementHeadSideVirus} Mental Carevio</h4>
                            <p>Waters divided said aims kind seicond winged form it tree after female the deep at itself creepeth land bring place day sea dont caus may thing open who their midst to seas</p>
                        </div>
                        <div>
                            <h4>Follow Us</h4>
                            <Link to="facebook.com"></Link>
                            <Link to="instagram.com"></Link>
                            <Link to="twitter.com"></Link>
                            <Link to="linkedin.com"></Link>
                        </div>
                    </div></Col>
                    <Col>
                        <div className="footer-services">
                            <h4>Services</h4>
                            <ul>
                                <li>-Business Frustation</li>
                                <li>-Anxiety Dosorder</li>
                                <li>-Personal Meeting</li>
                                <li>-Couple Therapy</li>
                                <li>-Family Counselling</li>
                                <li>-Relationship Problem</li>
                                <li>-Depression Problem</li>
                                <li>-Mental Problem</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <h4>Contact Info</h4>
                        <div className="address">
                            <address>House no 35, Palmall street, London, England</address>
                            <p>Email: info@mentalcarevio.com</p>
                            <p>Support: +1 325 562 3265</p>
                            <p>Website: www.mentalcarevio.com</p>
                        </div>
                    </Col>
                    <Col className="subscribe">
                        <h4>Stay In Touch</h4>
                        <input className="input" type="email" placeholder="Email Address" />
                        <button>Subscribe Now</button>
                    </Col>
                </Row>
                <hr />
                <p>Copyright © 2020 Basictheme. All Rights Reserved.</p>
            </Container>
        </div>

    );
};

export default Footer;
