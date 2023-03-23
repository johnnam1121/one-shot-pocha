import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import './Topbar.css'

function TopBar() {
  return (
    <Container fluid >
      <Row className='shadow-lg align-items-center'>
        <Col>
          <Navbar.Brand href="/">
            <img src={require('../assets/logoname.jpg')} alt="logo" width="110" height="50" className="d-inline-block align-top rounded" />
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
                <li className='topbaritem'><a className='topbarlink' href='/Menu'>Menu</a></li>
                <li className='topbaritem'><a className='topbarlink' href='/Reservations'>Reservations</a></li>
                <li className='topbaritem'><a className='topbarlink' href='/Test'>Test</a></li>
              </ul>
            </div>
          </nav>
        </Col>
      </Row>
    </Container >
  )
}

export default TopBar
