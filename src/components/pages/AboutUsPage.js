import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import TopBar from '../Topbar'


function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container fluid>
      <Row>
        <TopBar />
        <AboutUs />
        <Footer />
      </Row>
    </Container>
  )
}

export default AboutUsPage