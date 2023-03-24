import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../Footer'
import LandingPage from '../LandingSection'
import TopBar from '../Topbar'

function Home() {
  return (
    <Container fluid>
      <Row>
        <TopBar />
        <LandingPage />
        <Footer />
      </Row>
    </Container>
  )
}

export default Home