import React, { Component } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

import bottlewall from '../assets/bottlewalldark.jpeg';
import './LandingSection.css';
import TopBar from './Topbar';

class LandingPage extends Component {
  render() {
    return (
      <Container fluid >
        <Row className='align-items-center'
          style={{
            backgroundImage: `url(${bottlewall})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: 'auto',
          }}>
          <TopBar />
          <Row style={{ marginTop: '40vh', marginBottom: '10vh' }}>
            <Col md={{ span: 4, offset: 2 }}>
              <img
                className='img-fluid landingimage removeImage'
                src={require('../assets/chickenflag.jpg')}
                alt="chicken with korean flag" />
            </Col>
            <Col md={{ span: 4 }} className='opaicCol text-center'>
              <h1 className='welcome'>Welcome to <br />One-Shot!</h1>
              <h4 className='welcomeMessage'>
                Some info here fillerSome info here fillerSome info here fillerSome info here
              </h4>
              <button className='menuButton'><Nav.Link className='navlink' as={Link} to="/Menu">See Menu</Nav.Link></button>
            </Col>
          </Row>
        </Row>
      </Container >
    )
  }
}

export default LandingPage