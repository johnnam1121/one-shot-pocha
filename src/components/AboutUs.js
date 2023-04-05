import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Img1 from '../assets/pexels1.jpg';
import './AboutUs.css';

import { leftStaff } from './AboutUsPhotos'
import { centerStaff } from './AboutUsPhotos'
import { rightStaff } from './AboutUsPhotos'
import { mobileLeft } from './AboutUsPhotos'
import { mobileRight } from './AboutUsPhotos'


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
              {leftStaff.map((item) => {
                return (
                  <div>
                    <img className='img-fluid removeImage aboutUsImg' src={item.image} />
                    <p className='aboutUsText removeImage text-center mb-3'>{item.name}</p>
                  </div>
                )
              })}
            </Col>
            <Col md={{ span: 4 }}>
              {centerStaff.map((item) => {
                return (
                  <div>
                    <img className='img-fluid removeImage aboutUsImg' src={item.image} />
                    <p className='aboutUsText removeImage text-center mb-3'>{item.name}</p>
                  </div>
                )
              })}
            </Col>
            <Col md={{ span: 4 }}>
              {rightStaff.map((item) => {
                return (
                  <div>
                    <img className='img-fluid removeImage aboutUsImg' src={item.image} />
                    <p className='aboutUsText removeImage text-center mb-3'>{item.name}</p>
                  </div>
                )
              })}
            </Col>
          </Row>
          <Row>
            <Col className='showStaffMobileView'>
              {mobileLeft.map((item) => {
                return (
                  <div>
                    <img className='img-fluid aboutUsImg' src={item.image} />
                    <p className='aboutUsText text-center mb-3'>{item.name}</p>
                  </div>
                )
              })}
            </Col>
            <Col className='showStaffMobileView'>
              {mobileRight.map((item) => {
                return (
                  <div>
                    <img className='img-fluid aboutUsImg' src={item.image} />
                    <p className='aboutUsText text-center mb-3'>{item.name}</p>
                  </div>
                )
              })}
            </Col>
          </Row>
        </Col>
      </Row >
    </Container >
  )
}

export default AboutUs