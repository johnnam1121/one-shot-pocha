import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { InlineWidget } from "react-calendly";

function Reservation() {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: '#333333' }}>
        <div className="App">
          <InlineWidget
            styles={{
              height: '125vh'
            }}

            pageSettings={{
              backgroundColor: '2d2e30',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '006a4e',
              textColor: 'ffebcd'
            }}
            url="https://calendly.com/oneshot-htx" />
        </div>
      </Row>
    </Container>
  )
}

export default Reservation