import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { FaCopyright, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYelp } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <Container fluid style={{ backgroundColor: '#242526' }}>
      <Row style={{ backgroundColor: '#006a4e' }}>
        <Col className='text-center' md={{ span: 4, offset: 4 }}>
          <div className='socials mb-2'>
            <a className='footerLink' target="_blank" rel="noopener noreferrer" href='https://www.yelp.com/biz/one-shot-pocha-houston' ><FaYelp size={'2em'} style={{ marginTop: '2vh' }} /></a>
            <a className='footerLink' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/oneshot.htx/?hl=en'><FaInstagram size={'2em'} style={{ marginTop: '2vh' }} /></a>
            <a className='footerLink' target="_blank" rel="noopener noreferrer" href='google.com'><FaFacebook size={'2em'} style={{ marginTop: '2vh' }} /></a>
            <a className='footerLink' target="_blank" rel="noopener noreferrer" href='google.com'><FaTwitter size={'2em'} style={{ marginTop: '2vh' }} /></a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 3 }} className='text-center mt-5'>
          <img
            className='img-fluid footerFoodImg removeImage'
            src={require('../assets/chickenflag.jpg')}
            alt="chicken with korean flag" />
        </Col>
        <Col md={{ span: 3 }} className='text-center mt-5'>
          <h4 className='footerText'>Navigation</h4>
          <ul className="navbar-nav">
            <li><Nav.Link className='footerLink navlink' as={Link} to="/">Home</Nav.Link></li>
            <li><Nav.Link className='footerLink navlink' as={Link} to="/Menu">Menu</Nav.Link></li>
            <li><Nav.Link className='footerLink navlink' as={Link} to="/Gallery">Gallery</Nav.Link></li>
            <li><Nav.Link className='footerLink navlink' as={Link} to="/Reservation">Reservations</Nav.Link></li>
            <li><Nav.Link className='footerLink navlink' as={Link} to="/AboutUs">About Us</Nav.Link></li>
          </ul>
          <h4 className='footerText' style={{ marginTop: '5vh' }}>Operation Hours</h4>
          <p className='footerText'>Everyday<br />
            5pm - 2am
          </p>
        </Col>
        <Col md={{ span: 3 }} className='text-center mt-5' >
          <h4 className='footerText'>Location</h4>
          <img src={require('../assets/logo.png')} alt="logo" className='footerLogo' />
          <p className='footerLink mt-3'>
            <a className='footerLink' href='https://goo.gl/maps/pd3CCTGdsXHf5i9r9' target="_blank" rel="noopener noreferrer" >
              9501 Long Point Rd <br />
              Houston, TX 77055<br />
              Spring Branch
            </a>
          </p>
          <p className='footerLink'><a className='footerLink' href="tel::+7134678877"><FaPhone /> 713 467-8877</a></p>
        </Col>
        <Col md={{ span: 3 }} className='text-center mt-5' >
          <h4 className='footerText'>Contact Us</h4>
          <Col md={{ span: 6, offset: 3 }}>
            <p className='footerText'>We welcome all feedback and would love to chat with you! If you have any questions, please feel free to send us an email!</p>
          </Col>
          <a href="mailto: ontshot.htx@gmail.com"><button className='footerButton'>Email Us</button></a>
        </Col>
      </Row>
      <Row className='text-center'>
        <p style={{ color: 'grey' }}><FaCopyright /> All rights currently owned by John Nam</p>
      </Row>
    </Container >
  )
}


export default Footer

