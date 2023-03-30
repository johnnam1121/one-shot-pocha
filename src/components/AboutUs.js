import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Img1 from '../assets/pexels1.jpg';
import './AboutUs.css';

function AboutUs() {
  return (
    <Container fluid className='aboutBackground'>
      <Row className='mt-5 mb-5'>
        <Col md={{ span: 4, offset: 1 }}>
          <h1 className='aboutUsText'>One Shot Pocha Staff</h1>
          <p className='aboutUsText'>One Shot Pocha Staff information here filler textinformation here filler text
            information here filler textinformation here filler text</p>
          <p className='aboutUsText'>Want to join our staff? Send us an <a href="mailto: Johnnam93@gmail.com"><button className='aboutUsButton'>Email!</button></a></p>
          <img className='removeImage img-fluid' src={require('../assets/hostess.jpeg')} alt='hostess' width='75%' />
        </Col>
        <Col md={{ span: 5 }}>
          <Row>
            <Col md={{ span: 4 }}>
              <img className='img-fluid removeImage aboutUsImg' src={Img1} />
              <p className='aboutUsText removeImage text-center mb-3'>Owner</p>
              <img className='img-fluid removeImage aboutUsImg' src={Img1} />
              <p className='aboutUsText removeImage text-center mb-3'>John</p>
            </Col>
            <Col md={{ span: 4 }}>
              <img className='img-fluid removeImage aboutUsImg' src={Img1} />
              <p className='aboutUsText removeImage text-center mb-3'>Hyerimmie</p>
              <img className='img-fluid removeImage aboutUsImg' src={Img1} />
              <p className='aboutUsText removeImage text-center mb-3'>etc</p>
            </Col>
            <Col md={{ span: 4 }}>
              <img className='img-fluid removeImage aboutUsImg' src={Img1} />
              <p className='aboutUsText removeImage text-center mb-3'>JJ MOes</p>
              <img className='img-fluid removeImage aboutUsImg' src={Img1} />
              <p className='aboutUsText removeImage text-center mb-3'>Tiffany</p>
            </Col>
          </Row>
          <Row>
            <Col className='showStaffMobileView'>
              <img className='img-fluid aboutUsImg' src={Img1} />
              <p className='aboutUsText text-center mb-3'>JJ MOes</p>
              <img className='img-fluid aboutUsImg' src={Img1} />
              <p className='aboutUsText text-center mb-3'>Tiffany</p>
            </Col>
            <Col className='showStaffMobileView'>
              <img className='img-fluid aboutUsImg' src={Img1} />
              <p className='aboutUsText text-center mb-3'>Hyerimmie</p>
              <img className='img-fluid aboutUsImg' src={Img1} />
              <p className='aboutUsText text-center mb-3'>etc</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container >
  )
}

export default AboutUs