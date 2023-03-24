import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../Footer'
import TopBar from '../Topbar'
import Reservation from '../Reservation'

function ReservationPage() {
  return (
    <Container fluid>
      <Row>
        <TopBar />
        <Reservation />
        <Footer />
      </Row>
    </Container>
  )
}

export default ReservationPage