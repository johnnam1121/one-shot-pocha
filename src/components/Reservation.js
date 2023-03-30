import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { InlineWidget } from "react-calendly";

function Reservation() {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: '#333333' }}>
        <Col>
          <InlineWidget
            styles={{
              height: '155vh'
            }}
            pageSettings={{
              backgroundColor: '2d2e30',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '006a4e',
              textColor: 'ffebcd'
            }}
            url="https://calendly.com/oneshot-htx" />
        </Col>
      </Row>
    </Container>
  )
}

export default Reservation