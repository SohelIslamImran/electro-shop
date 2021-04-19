import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiCopyright } from "react-icons/bi";
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container className="mt-5">
            <footer className="section-footer border-top">
                <Container>
                    <Row className="footer-top mt-5 mb-5">
                        <Col as={"aside"}>
                            <h6 className="title">Brands</h6>
                            <ul className="list-unstyled">
                                <li> <a href="#">Samsung</a></li>
                                <li> <a href="#">Microsoft</a></li>
                                <li> <a href="#">Reebok</a></li>
                                <li> <a href="#">Alibaba</a></li>
                            </ul>
                        </Col>
                        <Col as={"aside"}>
                            <h6 className="title">Company</h6>
                            <ul className="list-unstyled">
                                <li> <a href="#">About us</a></li>
                                <li> <a href="#">Career</a></li>
                                <li> <a href="#">Find a store</a></li>
                                <li> <a href="#">Rules and terms</a></li>
                                <li> <a href="#">Sitemap</a></li>
                            </ul>
                        </Col>
                        <Col as={"aside"}>
                            <h6 className="title">Help</h6>
                            <ul className="list-unstyled">
                                <li> <a href="#">Contact us</a></li>
                                <li> <a href="#">Money refund</a></li>
                                <li> <a href="#">Order status</a></li>
                                <li> <a href="#">Shipping info</a></li>
                                <li> <a href="#">Open dispute</a></li>
                            </ul>
                        </Col>
                        <Col as={"aside"}>
                            <h6 className="title">Account</h6>
                            <ul className="list-unstyled">
                                <li> <a href="#"> User Login </a></li>
                                <li> <a href="#"> User register </a></li>
                                <li> <a href="#"> Account Setting </a></li>
                                <li> <a href="#"> My Orders </a></li>
                            </ul>
                        </Col>
                        <Col as={"aside"}>
                            <h6 className="title">Social</h6>
                            <ul className="list-unstyled">
                                <li><a href="#"> <FaFacebook /> Facebook </a></li>
                                <li><a href="#"> <FaTwitter /> Twitter </a></li>
                                <li><a href="#"> <FaInstagram /> Instagram </a></li>
                                <li><a href="#"> <FaYoutube /> YouTube </a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="footer-bottom border-top">
                        <Col md={2}>
                            <p className="text-muted"><BiCopyright /> {new Date().getFullYear()} Electro.</p>
                        </Col>
                        <Col md={8} className="text-md-center">
                            <span className="px-2">New Elephant Road, Dhaka-1205, Bangladesh.</span>
                        </Col>
                        <Col md={2} className="text-md-right text-muted">
                            <FaCcVisa className="mr-2" style={{ fontSize: "2rem" }} />
                            <FaCcPaypal className="mr-2" style={{ fontSize: "2rem" }} />
                            <FaCcMastercard className="mr-2" style={{ fontSize: "2rem" }} />
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Container>
    );
};

export default Footer;