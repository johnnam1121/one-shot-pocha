import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYelp } from 'react-icons/fa';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <Container>
        <Row style={{ backgroundColor: '#242526' }}>
          <Col md={{ span: 3 }} className='text-center mt-5'>
            <h4 className='footerText'>Navigation</h4>
            <ul className="navbar-nav">
              <li><a className='footerlink' href='/Menu'>Menu</a></li>
              <li><a className='footerlink' href='/Reservations'>Reservations</a></li>
              <li><a className='footerlink' href='/Test'>Test</a></li>
            </ul>
            <h4 className='footerText' style={{ marginTop: '5vh' }}>Socials</h4>
            <div>
              <a className='footerlink' target="_blank" rel="noopener noreferrer" href='https://www.yelp.com/biz/one-shot-pocha-houston' ><FaYelp size={'1.5em'} style={{ marginTop: '2vh' }} /></a><br />
              <a className='footerlink' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/oneshot.htx/?hl=en'><FaInstagram size={'1.5em'} style={{ marginTop: '2vh' }} /></a><br />
              <a className='footerlink' target="_blank" rel="noopener noreferrer" href='google.com'><FaFacebook size={'1.5em'} style={{ marginTop: '2vh' }} /></a><br />
              <a className='footerlink' target="_blank" rel="noopener noreferrer" href='google.com'><FaTwitter size={'1.5em'} style={{ marginTop: '2vh' }} /></a><br />
            </div>
          </Col>
          <Col md={{ span: 3 }} className='text-center mt-5'>
            <h4 className='footerText'>Location</h4>
            <img src={require('../assets/logo.jpg')} alt="logo" height={'40%'} />
            <p className='footerText'>9501 Long Point Rd <br />
              Houston, TX 77055<br />
              Spring Branch<br />
              <a className='footerlink' href="tel::+7134678877"><FaPhone /> 713 467-8877</a></p>
          </Col>
          <Col md={{ span: 3 }} className='text-center mt-5'>
            <h4 className='footerText'>Operation Hours</h4>
            <p className='footerText'>Everyday<br />
              5pm - 2am
            </p>
          </Col>
          <Col md={{ span: 3 }} className='text-center mt-5'>
            <h4 className='footerText'>Contact</h4>
            <form>
              <label className='contactLabel'>
                <input type="text" placeholder='Name' />
              </label>
              <label className='contactLabel'>
                <input type="text" placeholder='Email' />
              </label>
              <label className='contactLabel'>
                <input style={{ height: "300px" }} type="text" placeholder='Whats up' />
              </label><br />
              <input type="submit" value="Submit" />
            </form>
          </Col>
        </Row>
      </Container >
    )
  }
}

export default Footer
