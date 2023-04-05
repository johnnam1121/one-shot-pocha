import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topbar.css';

function TopBar() {
  return (
    <Container fluid >
      <Row className='shadow-lg topbarBackground'>
        <Col>
          <Navbar.Brand as={Link} to="/">
            <img src={require('../assets/logoname.png')} alt="logo" width="150" height="55" className="d-inline-block align-top rounded topbarlogo" />
          </Navbar.Brand>
        </Col>
        <Col className='d-flex justify-content-end'>
          <nav id="header-nav" className="navbar navbar-expand-md justify-content-end">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="navbar-nav justify-content-end">
                <li><Nav.Link className='topbarLink' as={Link} to="/">Home</Nav.Link></li>
                <li><Nav.Link className='topbarLink' as={Link} to="/Menu">Menu</Nav.Link></li>
                <li><Nav.Link className='topbarLink' as={Link} to="/Gallery">Gallery</Nav.Link></li>
                <li><Nav.Link className='topbarLink' as={Link} to="/Reservation">Reservations</Nav.Link></li>
                <li><Nav.Link className='topbarLink' as={Link} to="/AboutUs">About Us</Nav.Link></li>
              </ul>
            </div>
          </nav>
        </Col>
      </Row>
    </Container >
  )
}

export default TopBar
