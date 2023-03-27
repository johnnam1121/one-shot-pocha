import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from '../Footer'
import LandingPage from '../LandingSection'
import TopBar from '../Topbar'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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