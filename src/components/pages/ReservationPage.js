import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from '../Footer'
import Reservation from '../Reservation'
import TopBar from '../Topbar'

function ReservationPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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