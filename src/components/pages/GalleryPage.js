import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from '../Footer'
import Gallery from '../Gallery'
import TopBar from '../Topbar'

function GalleryPage() {
  return (
    <Container fluid>
      <Row>
        <TopBar />
        <Gallery />
        <Footer />
      </Row>
    </Container>
  )
}

export default GalleryPage