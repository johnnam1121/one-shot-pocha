import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Img1 from '../assets/pexels1.jpg';
import './AboutUs.css';

function AboutUs() {
  return (
    <Container fluid className='aboutBackground'>
      <Row className='mt-3 mb-5'>
        <h1 className='footerText text-center'>Our staff</h1>
      </Row>
      <Row className='mb-5'>
        <Col md={{ span: 4, offset: 1 }}>
          <h1 className='footerText'>One Shot Pocha Staff</h1>
          <p className='footerText'>One Shot Pocha Staff information here filler textinformation here filler text
            information here filler textinformation here filler text</p>
          <p className='footerText'>Want to join our staff? Send us an <a href="mailto: Johnnam93@gmail.com"><button className='aboutUsButton'>Email!</button></a></p>
          <img className='removeImage img-fluid' src={require('../assets/sojulight.jpg')} alt='sojulight' />
        </Col>
        <Col md={{ span: 5 }}>
          <Row>
            <Col md={{ span: 4 }}>
              <img className='img-fluid' src={Img1} />
              <p className='footerText'>Owner</p>
              <img className='img-fluid' src={Img1} />
              <p className='footerText'>John</p>
            </Col>
            <Col md={{ span: 4 }}>
              <img className='img-fluid' src={Img1} />
              <p className='footerText'>Hyerimmie</p>
              <img className='img-fluid' src={Img1} />
              <p className='footerText'>etc</p>
            </Col>
            <Col md={{ span: 4 }}>
              <img className='img-fluid' src={Img1} />
              <p className='footerText'>JJ MOes</p>
              <img className='img-fluid' src={Img1} />
              <p className='footerText'>Tiffany</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container >
  )
}

export default AboutUs