import React, { Component } from 'react';
import { Col, Container, Navbar, Row, Nav, Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYelp, FaCopyright } from 'react-icons/fa';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <Container>
        <Row style={{ backgroundColor: '#242526' }}>
          <Row className='mt-5 mb-5'>
            <Col md={{ span: 3 }} className='text-center'>
              <h4 className='footerText'>Socials</h4>
              <div>
                <a className='footerlink' target="_blank" rel="noopener noreferrer" href='https://www.yelp.com/biz/one-shot-pocha-houston' ><FaYelp size={'1.5em'} style={{ marginTop: '2vh' }} /></a><br />
                <a className='footerlink' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/oneshot.htx/?hl=en'><FaInstagram size={'1.5em'} style={{ marginTop: '2vh' }} /></a><br />
                <a className='footerlink' target="_blank" rel="noopener noreferrer" href='google.com'><FaFacebook size={'1.5em'} style={{ marginTop: '2vh' }} /></a><br />
                <a className='footerlink' target="_blank" rel="noopener noreferrer" href='google.com'><FaTwitter size={'1.5em'} style={{ marginTop: '2vh' }} /></a><br />
              </div>
            </Col>
            <Col md={{ span: 3 }} className='text-center mt-5'>
              <h4 className='footerText'>Navigation</h4>
              <ul className="navbar-nav">
                <li><Nav.Link className='footerlink navlink' as={Link} to="/">Home</Nav.Link></li>
                <li><Nav.Link className='footerlink navlink' as={Link} to="/Menu">Menu</Nav.Link></li>
                <li><Nav.Link className='footerlink navlink' as={Link} to="/Reservations">Reservations</Nav.Link></li>
                <li><Nav.Link className='footerlink navlink' as={Link} to="/ArmyCounterPage">Army Counters</Nav.Link></li>
              </ul>
              <h4 className='footerText' style={{ marginTop: '5vh' }}>Operation Hours</h4>
              <p className='footerText'>Everyday<br />
                5pm - 2am
              </p>
            </Col>
            <Col md={{ span: 3 }} className='text-center mt-5' >
              <h4 className='footerText'>Location</h4>
              <img src={require('../assets/logo.png')} alt="logo" className='footerimg' />
              <p className='footerText'>9501 Long Point Rd <br />
                Houston, TX 77055<br />
                Spring Branch<br />
                <a className='footerlink' href="tel::+7134678877"><FaPhone /> 713 467-8877</a></p>
            </Col>
            <Col md={{ span: 3 }} className='text-center mt-5' >
              <h4 className='footerText'>Contact Us</h4>
              <Form>
                <Form.Group className="mb-3 mt-3" controlId="formBasicUserName">
                  <Form.Label className='contactlabel footerinput'>Full Name</Form.Label>
                  <Form.Control
                    required
                    type="name"
                    placeholder="Enter full name"
                  />
                </Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
                <Button
                  className='mb-3'
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Col className='text-center'>
            <p style={{ color: 'grey' }}><FaCopyright /> All rights currently owned by John Nam</p>
          </Col>
        </Row>
      </Container >
    )
  }
}

export default Footer
