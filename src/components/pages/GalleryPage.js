import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from '../Footer'
import ImageGallery from '../ImageGallery'
import TopBar from '../Topbar'

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container fluid>
      <Row>
        <TopBar />
        <ImageGallery />
        <Footer />
      </Row>
    </Container>
  )
}

export default GalleryPage