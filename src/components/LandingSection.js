import React, { Component } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';
import { Link } from "react-router-dom";
import koreaNight from '../assets/koreaNight.jpg';
import oneshotbackground from '../assets/oneshotbackground.jpeg';
import RestaurantDark from '../assets/RestaurantDark.jpeg';
import './LandingSection.css';

class LandingPage extends Component {
  render() {
    return (
      <Container fluid className='landingbackground'>
        {/* Welcome Message */}
        <Row className='align-items-center backgroundComputerView backgroundPhoneView'
          style={{
            backgroundImage: `url(${oneshotbackground})`,
          }}>
          <Col>
            <Row style={{ marginTop: '40vh', marginBottom: '10vh' }}>
              <Col md={{ span: 4, offset: 4 }} className='opaicCol text-center'>
                <h1 className='landingH1'>Welcome to <br />One-Shot!</h1>
                <h4 className='welcomeMessage'>
                  Some info here fillerSome info here fillerSome info here fillerSome info here
                </h4>
                <button className='menuButton'><Nav.Link className='navlink' as={Link} to="/Menu">See Menu</Nav.Link></button>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* Socials bar */}
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
        {/* Picture wall */}
        <Row className='align-items-center' style={{ backgroundColor: '#242526' }}>
          <Col className='text-center' md={{ span: 3 }}>
            <img className='landingImage pictureWall removeImage' src={require('../assets/chalkWall.jpg')} alt="chalkWall" />
          </Col>
          <Col className='text-center' md={{ span: 3 }}>
            <img className='landingImage pictureWall removeImage' src={require('../assets/IU.jpg')} alt="IU" />
          </Col>
          <Col className='text-center' md={{ span: 3 }}>
            <img className='landingImage pictureWall removeImage' src={require('../assets/frog.jpg')} alt="frog" />
          </Col>
          <Col className='text-center' md={{ span: 3 }}>
            <img className='landingImage pictureWall removeImage' src={require('../assets/sojulight2.jpg')} alt="sojulight2" />
          </Col>
        </Row>
        {/* Korean Food */}
        <Row className='align-items-center' style={{
          backgroundImage: `url(${RestaurantDark})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '80vh',
        }}>
          <Col className='text-center' md={{ span: 4, offset: 2 }}>
            <h1 className='landingH1'>Try some of our authentic <span className='koreanFood'>Korean Food!</span></h1>
            <button className='menuButton'><Nav.Link className='navlink' as={Link} to="/Menu">See Menu</Nav.Link></button>
          </Col>
          <Col className='text-center' md={{ span: 4 }}>
            <img className='landingImage' src={require('../assets/armysoup.jpg')} alt="armysoup" />
          </Col>

        </Row>
        {/* Karaoke Night */}
        <Row className='align-items-center mb-5 mt-5' style={{ backgroundColor: '#242526' }}>
          <Col className='text-center mb-5' md={{ span: 4, offset: 1 }}>
            <img className='landingImage' src={require('../assets/sojulight.jpg')} alt="sojulight" />
          </Col>
          <Col className='text-center' md={{ span: 5 }}>
            <h1 className='landingH1'>Karaoke all <span className='karaokeNight'>Night!!!</span></h1>
            <button className='infoButton'><Nav.Link className='navlink' as={Link} to="/Reservation">More Info</Nav.Link></button>
          </Col>
        </Row>
        {/* Korea night banner */}
        <Row
          style={{
            backgroundImage: `url(${koreaNight})`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '40vh',
          }}>
        </Row>
      </Container >
    )
  }
}

export default LandingPage