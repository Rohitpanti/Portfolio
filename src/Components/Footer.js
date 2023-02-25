import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../Assets/Images/Logo.png';
import LinkedinImg from '../Assets/Images/Linkedin.svg';
import GithubImg from '../Assets/Images/GitHub.svg';

const Footer = () => {
return (
    <>
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
            <Col sm={6}>
                <img src={logo} className='footerImg' alt="logo" width='40rem' />
            </Col>
            <Col sm={6} className='text-center text-sm-end'>
                <div className='socialIcon'>
                <a href="https://www.linkedin.com/in/rohit-b-854268219/" target="__blank"><img src={LinkedinImg} alt="linkedin" /></a>
                <a href="https://github.com/Rohitpanti" target="__blank"><img src={GithubImg} alt="Github"  /></a>
                </div>
            </Col>
                <p className='text-center'>Copyright @2023.All Rights Reserved</p>
            </Row>
        </Container>
    </footer>
    </>
)
}

export default Footer;