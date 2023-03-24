import React from 'react';
import { Col, Container, Navbar, Row, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './Topbar.css'

function TopBar() {
  return (
    <Container fluid >
      <Row className='shadow-lg align-items-center'>
        <Col>
          <Navbar.Brand href="/">
            <img src={require('../assets/logoname.png')} alt="logo" width="150" height="55" className="d-inline-block align-top rounded topbarlogo" />
          </Navbar.Brand>
        </Col>
        <Col className='d-flex justify-content-end'>
          <nav id="header-nav" className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="navbar-nav">
                <li className='topbaritem'><Nav.Link className='topbarlink navlink' as={Link} to="/">Home</Nav.Link></li>
                <li className='topbaritem'><Nav.Link className='topbarlink navlink' as={Link} to="/Menu">Menu</Nav.Link></li>
                <li className='topbaritem'><Nav.Link className='topbarlink navlink' as={Link} to="/Reservations">Reservations</Nav.Link></li>
                <li className='topbaritem'><Nav.Link className='topbarlink navlink' as={Link} to="/ArmyCounterPage">Army Counters</Nav.Link></li>
              </ul>
            </div>
          </nav>
        </Col>
      </Row>
    </Container >
  )
}

export default TopBar
