import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from '../Footer'
import Menu from '../Menu'
import TopBar from '../Topbar'

function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container fluid>
      <Row>
        <TopBar />
        <Menu />
        <Footer />
      </Row>
    </Container>
  )
}

export default MenuPage