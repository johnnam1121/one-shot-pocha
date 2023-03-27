import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AboutUs.css'
import Img1 from '../assets/pexels1.jpg';
import Img2 from '../assets/pexels2.jpg';
import Img3 from '../assets/pexels3.jpg';
import Img4 from '../assets/pexels4.jpg';
import Img5 from '../assets/pexels1.jpg';
import Img6 from '../assets/pexels4.jpg';
import Img7 from '../assets/pexels1.jpg';

function AboutUs() {
  return (
    <Container fluid className='aboutBackground'>
      <Row className='mt-3 mb-5'>
        <h1 className='footerText text-center'>Our staff</h1>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <h1 className='footerText'>One Shot Pocha Staff</h1>
          <p className='footerText'>One Shot Pocha Staff information here filler textinformation here filler text
            information here filler textinformation here filler text</p>
          <p className='footerText'>Want to join our staff? click <button>here!</button></p>
        </Col>
        <Col md={{ span: 5 }}>
          <Row>
            <Col md={{ span: 4 }}>
              <p className='footerText'>Owner</p>
              <img className='img-fluid mb-3' src={Img1} />
              <p className='footerText'>Owner</p>
              <img className='img-fluid mb-3' src={Img1} />
            </Col>
            <Col md={{ span: 4 }}>
              <p className='footerText'>Owner</p>
              <img className='img-fluid mb-3' src={Img1} />
              <p className='footerText'>Owner</p>
              <img className='img-fluid mb-3' src={Img1} />
            </Col>
            <Col md={{ span: 4 }}>
              <p className='footerText'>Owner</p>
              <img className='img-fluid mb-3' src={Img1} />
              <p className='footerText'>Owner</p>
              <img className='img-fluid mb-3' src={Img1} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container >
  )
}

export default AboutUs